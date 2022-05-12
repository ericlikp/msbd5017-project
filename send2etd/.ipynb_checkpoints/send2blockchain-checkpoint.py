from etherdata_sdk.json_rpc import JsonRpcMethods
from etherdata_sdk.account import Account
from etherdata_sdk import Transaction
import os, re
import glob
import json
import hashlib
from Crypto.Cipher import DES
from datetime import datetime
import random


# # Load Account
account = Account()
print('Loading ETD account ...')
if os.path.isfile('keys/account_private.key') is True:
    print('Account loaded')
    account.read_private_key_from_file('keys/account_private.key')
else:
    print('Account not found, creating an account ...')
    mnemonic = input('Please input a mnemonic: ')
    account.create_private_key_from_mnemonic(mnemonic)
    account.save('keys/account_private.key')
print('Account address:', account.address)


# Prepare Document
history_files = [file for file in glob.glob('history*.txt') if re.search(r'history(\s\([0-9]\))?.txt', file)]
history = []
finisn_files = []

print('Aggregating all the history.txt files ...')
occupation = None
gender = None
birth = None
for file in history_files:
    with open(file, 'r') as f:
        temp_occupation = f.readline().rstrip('\n\r')
        temp_gender = f.readline().rstrip('\n\r')
        temp_birth = f.readline().rstrip('\n\r')
        if occupation is None or gender is None or birth is None:
            occupation = temp_occupation
            gender = temp_gender
            birth = temp_birth
        elif temp_occupation != occupation or temp_gender != gender or temp_birth != birth:
            break
        hist_string = f.readline().rstrip('\n\r')
        hist_list = json.loads(hist_string)
        history += hist_list
    finisn_files.append(file)
        
history.sort(key=lambda x: x['timestamp'])


print('Aggregated into a document.')
document = [occupation, gender, birth, json.dumps(history)]
document = '\n'.join(document)
doc_hash = hashlib.sha256(document.encode("utf-8")).hexdigest()
print('Hashed the document.')
print('Document Hash:', doc_hash)


# Send Transaction
transaction = Transaction(to=None, 
                          value=0, 
                          data=doc_hash, 
                          gas=0x200b20, 
                          gas_price=0x3b9aca00, 
                          nonce=random.randint(0, 1000),
                          chain_id=8348)

print('Sending a ETD transaction ...')
signed_transaction = account.sign_transaction(transaction)

client = JsonRpcMethods("https://rpc.debugchain.net/")
return_message = client.send_raw_transaction(signed_transaction.raw_transaction)
print('Transaction sent, id:', return_message)


# Upload Document
user_input = True
# Get document keys
print('Loading document password ...')
if os.path.isfile('keys/document_password') is True:
    print('Password loaded')
    with open('keys/document_password', 'r') as pw_file:
        document_password = pw_file.read()
else:
    print('Password not found, creating new document password ...')
    if user_input:
        document_password = input('Document Password (exactly 8 characters): ')
        while len(document_password) != 8:
            document_password = input('Document Password must be 8 characters, input again: ')
    else:
        document_password = 'password'
    with open('keys/document_password', 'w') as pw_file:
        pw_file.write(document_password)
    print('Password saved.')

def pad(text):
    n = len(text) % 8
    return text + (b'\n' * n)

print('Encryting the document ...')
document_password = str.encode(document_password)
document_bytes = str.encode(document)
document_padded = pad(document_bytes)

des = DES.new(document_password, DES.MODE_ECB)
encrypted_text = des.encrypt(document_padded)

encrypted_document = str.encode(occupation+'\n') + str.encode(gender+'\n') + str.encode(birth+'\n') + str.encode(account.address+'\n') + encrypted_text
print('Document encrypted')

filename = 'documents/historty_{}.bin'.format(str(datetime.date(datetime.now())))
with open(filename, 'wb') as f:
    f.write(encrypted_document)

from etherdata_sdk.file import File, FileObject
file = File(url="http://39.98.50.209:5145/")
file_object = FileObject(file_path=filename, days=2)
print('Uploading the encrypted document to ETD file storage ...')
try:
    file_id = file.upload_file(file_object, error_on_exists=False)
    print('Uploaded, File id:', file_id)
except:
    file_id = file.upload_file(file_object, error_on_exists=False)
    print('Uploaded, File id:', file_id)
    pass
