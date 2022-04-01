export interface Tx {
    from: string;
    to: string;
    value: any;
}
/**
 * The personal API manages private keys in the key store
 */
export declare class Personal {
    baseURL: string;
    port?: number;
    url: string;
    constructor(baseURL: string, port?: number);
    /**
     * Imports the given unencrypted private key (hex string) into the key store, encrypting it with the passphrase
     *  Returns the address of the new account
     * @param priveteKey An unencrypted private key (hex string)
     * @return accountAddress The address of the new account.
     */
    importRawKey(priveteKey: string): Promise<string>;
    /**
     * Returns all the Ethereum account addresses of all keys in the key store
     * @return accountAddress The list of ethereum account addresses
     */
    listAccounts(): Promise<string[]>;
    /**
     * Removes the private key with given address from memory
     *  The account can no longer be used to send transactions
     */
    lockAccount(): Promise<void>;
    /**
  * Generates a new private key and stores it in the key store directory
  *  The key file is encrypted with the given passphrase
  *  Returns the address of the new account
  *
  At the Getd console, newAccount will prompt for a passphrase when it is not supplied as the argument
  * @param passphrase The passphrase used to generate a new private key
  * @return priveteKey The generated priveteKey
  */
    newAccount(passphrase: string | undefined): Promise<string>;
    /**
  * Decrypts the key with the given address from the key store
  *
  Both passphrase and unlock duration are optional when using the JavaScript console
  *  If the passphrase is not supplied as an argument, the console will prompt for the passphrase interactively
  *
  The unencrypted key will be held in memory until the unlock duration expires
  *  If the unlock duration defaults to 300 seconds
  *  An explicit duration of zero seconds unlocks the key until Getd exits
  *
  The account can be used with etd_sign and etd_sendTransaction while it is unlocked
  * @param accountAddress The account address
  * @param passphrase The passphrase If you want to type in the passphrase and stil override the default unlock duration, pass null as the passphrase.
  * @param unlockDuration The unlock duration
  * @return unlockState Indicating whether is the account unlocked successfully
  */
    unlockAccount(accountAddress: string, passphrase: string | undefined, unlockDuration: number | undefined): Promise<boolean>;
    /**
  * Validate the given passphrase and submit transaction
  *
  The transaction is the same argument as for etd_sendTransaction and contains the from address
  *  If the passphrase can be used to decrypt the private key belogging to tx
  * from the transaction is verified, signed and send onto the network
  *  The account is not unlocked globally in the node and cannot be used in other RPC calls
  *
  Note, prior to Getd 1
  * 5, please use personal_signAndSendTransaction as that was the original introductory name and only later renamed to the current final version
  *
  Example &#39;&gt; var tx = {from&#39;:&#39; &quot;0x391694e7e0b0cce554cb130d723a9d27458f9298&quot;, to&#39;:&#39; &quot;0xafa3f8684e54059998bc3a7b0d2b0da075154d66&quot;, value&#39;:&#39; web3
  * toWei(1
  * 23, &quot;ether&quot;)} undefined &quot;&gt; personal
  * sendTransaction(tx, &quot;passphrase&quot;)&quot; 0x8474441674cdd47b35b875fd1a530b800b51a5264b9975fb21129eeb8c18582f&#39;
  * @param tx The transaction
  * @return address The address
  */
    sendTransaction(tx: Tx): Promise<string>;
    /**
  * The sign method calculates an Ethereum specific signature with &#39; sign(keccack256(&quot;\x19Ethereum Signed Message:\n&quot; + len(message) + message)))
  *  &#39;
  By adding a prefix to the message makes the calculated signature recognisable as an Ethereum specific signature
  *  This prevents misuse where a malicious DApp can sign arbitrary data (e
  * g
  *  transaction) and use the signature to impersonate the victim
  *
  See ecRecover to verify the signature
  * @param a abcde
  * @param b abcde
  * @param c abcde
  * @return value abcde
  */
    sign(a: string, b: string, c: string): Promise<string>;
    /**
     * ecRecover returns the address associated with the private key that was used to calculate the signature in personal_sign
     * @param a abcde
     * @param b abcde
     * @return address The address associated with the private key
     */
    ecRecover(a: string, b: string): Promise<string>;
}
//# sourceMappingURL=personal.d.ts.map