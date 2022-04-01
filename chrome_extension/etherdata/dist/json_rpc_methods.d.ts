export interface SyncingResponseSyncObject {
    startingBlock: number;
    currentBlock: number;
    highestBlock: number;
}
export interface SyncingResponse {
    syncObject: SyncingResponseSyncObject;
    syncStatus: boolean;
}
export interface Obj {
    from: string;
    to: string | undefined;
    gas: string | undefined;
    gasPrice: string | undefined;
    value: string | undefined;
    data: string;
    nonce: string | undefined;
}
export interface GetBlockByHashResponseObj {
    number: string;
    hash: string;
    parnetHash: string;
    nonce: string;
    sha3Uncles: string;
    logsBloom: string;
    transactionsRoot: string;
    miner: string;
    difficulty: string;
    totalDifficulty: string;
    extradata: string;
    size: string;
    gasLimit: string;
    gasUsed: string;
    timestamp: string;
    transaction: string[];
    uncles: string[];
}
export interface GetBlockByNumberResponseObj {
    number: string;
    hash: string;
    parnetHash: string;
    nonce: string;
    sha3Uncles: string;
    logsBloom: string;
    transactionsRoot: string;
    miner: string;
    difficulty: string;
    totalDifficulty: string;
    extradata: string;
    size: string;
    gasLimit: string;
    gasUsed: string;
    timestamp: string;
    transaction: string[];
    uncles: string[];
}
export interface GetTransactionByHashResponseObj {
    blockHash: string;
    blockNumber: string;
    from: string;
    gas: string;
    gasParice: string;
    hash: string;
    input: string;
    nonce: string;
    to: string;
    transactionIndex: string;
    value: string;
    v: string;
    r: string;
    s: string;
}
export interface GetTransactionByHashAndIndexResponseObj {
    data: any;
}
export interface GetTransactionByBlockNumberAndIndexResponseObj {
    data: any;
}
export interface GetTransactionReceiptResponseObj {
    transactionHash: string;
    transactionIndex: string;
    blockHash: string;
    blockNumber: string;
    from: string;
    to: string;
    cumulativeGasUsed: string;
    gasUsed: string;
    contractAddress: string;
    logs: string[];
    logsBloom: string;
    root: string;
    status: string;
}
export interface GetUncleByBlockHashAndIndexResponseObj {
    data: any;
}
export interface GetUncleByBlockNumberAndIndexResponseObj {
    data: any;
}
export interface Array {
    removed: boolean;
    logIndex: string;
    transactionIndex: string;
    transactionHash: string;
    blockHash: string;
    blockNumber: string;
    address: string;
    data: string;
    topics: string[];
}
/**
 * different methods to perform etd control
 */
export declare class Json_rpc_methods {
    baseURL: string;
    port?: number;
    url: string;
    constructor(baseURL: string, port?: number);
    /**
     * Returns the current etherdata protocol version
     * @return version The current etherdata protocol version
     */
    protocalVersion(): Promise<string>;
    /**
     * Returns the current block number
     * @return blockNumber The current blockNumber
     */
    blockNumber(): Promise<string>;
    /**
     * Returns an object with data about the sync status or false
     * @return syncObject return this ONLY when syncing
     * @return syncStatus return this ONLY when not syncing
     */
    syncing(): Promise<SyncingResponse>;
    /**
     * Returns the client coinbase address
     * @return coinbase The client coinbase address
     */
    coinbase(): Promise<any>;
    /**
     * Returns true if client is actively mining new blocks
     * @return isMining True if client is actively mining new blocks.
     */
    mining(): Promise<boolean>;
    /**
     * Returns the number of hashes per second that the node is mining with
     * @return hashrate The number of hashes per second that the node is mining with
     */
    hashrate(): Promise<any>;
    /**
     * Returns the current price per gas in wei
     * @return gasPrice The current price per gas in wei (8049999872 Wei in the example)
     */
    gasPrice(): Promise<any>;
    /**
     * Returns a list of addresses owned by client
     * @return addressAccount The array of accouts
     */
    accounts(): Promise<any[]>;
    /**
     * Returns the balance of the account of given address
     * @param address data, 20 Bytes - address to check for balance
     * @param tag quantity_tag - integer block number, or the string &quot;latest&quot;, &quot;earliest&quot; or &quot;pending&quot;, see the default block parameter
     * @return balance quantity - integer of the current balance in wei.
     */
    getBalance(address: string, tag: string): Promise<number>;
    /**
     * Returns the value from a storage position at a given address
     * @param address data, 20 Bytes - address of the storage.
     * @param position The integer of the position in the storage.
     * @param tag quantity_tag - integer block number, or the string &quot;latest&quot;, &quot;earliest&quot; or &quot;pending&quot;, see the default block parameter
     * @return valur The value at this storage position.
     */
    getStorageAt(address: any, position: any, tag: string): Promise<any>;
    /**
     * Returns the number of transactions sent from an address
     * @param address The address.
     * @param state quantity_tag - integer block number, or the string &quot;latest&quot;, &quot;earliest&quot; or &quot;pending&quot;, see the default block parameter
     * @return number The number of transactions send from this address.
     */
    getTransactionCount(address: any, state: string): Promise<number>;
    /**
     * Returns the number of transactions in a block from a block matching the given block hash
     * @param data 20 Bytes - The address
     * @param quantity_tag integer block number, or the string &quot;latest&quot;, &quot;earliest&quot; or &quot;pending&quot;, see the default block parameter
     * @return quantity The integer of the number of transactions send from this address.
     */
    getTransactionCountByHash(data: string, quantity_tag: string): Promise<string>;
    /**
     * Returns the number of transactions in a block from a block matching the given block hash
     * @param data 32 Bytes - The hash of a block
     * @return quantity The integer of the number of transactions in this block.
     */
    getBlockTransactionCountByHash(data: string): Promise<string>;
    /**
     * Returns the number of transactions in a block matching the given block number
     * @param quantity_tag The integer of a block number, or the string &quot;earliest&quot;, &quot;latest&quot; or &quot;pending&quot;, see the default block parameter
     * @return quantity The integer of the number of transactions in this block.
     */
    getBlockTransactionCountByNumber(quantity_tag: string): Promise<string>;
    /**
     * Returns the number of uncles in a block from a block matching the given block hash
     * @param data 32 Bytes - The hash of a block
     * @return quantity_tag The integer of the number of uncles in this block.
     */
    getUncleCountByBlockHash(data: string): Promise<string>;
    /**
     * Returns the number of uncles in a block from a block matching the given block number
     * @param quantity_tag The integer of a block number, or the string “latest”, “earliest” or “pending”, see the default block parameter
     * @return quantity The integer of the number of uncles in this block.
     */
    getUncleCountByBlockNumber(quantity_tag: string): Promise<string>;
    /**
     * Returns code at a given address
     * @param data 20 Byter - The address
     * @param quantity_tag The integer block number, or the string &quot;latest&quot;, &quot;earliest&quot; or &quot;pending&quot;, see the default block parameter
     * @return data The code from the given address.
     */
    getCode(data: string, quantity_tag: string): Promise<string>;
    /**
  * The sign method calculates an etherdata specific signature with sign(keccak256(&quot;\x19etherdata Signed Message:\n&quot; + len(message) + message)))
  *
  By adding a prefix to the message makes the calculated signature recognisable as an etherdata specific signature
  *  This prevents misuse where a malicious DApp can sign arbitrary data (e
  * g
  *  transaction) and use the signature to impersonate the victim
  *
  Note the address to sign with must be unlocked
  * @param a 20 Bytes - The address
  * @param b N Bytes - The message to sign
  * @return value The signature
  */
    sign(a: string, b: string): Promise<string>;
    /**
     * Signs a transaction that can be submitted to the network at a later time using with eth_sendRawTransaction
     * @param obj The transaction object
     * @return data The signed transaction object.
     */
    signTransaction(obj: Obj): Promise<string>;
    /**
     * Creates new message call transaction or a contract creation, if the data field contains code
     * @param obj The transaction object
     * @return data 32 Bytes - the transaction hash, or the zero hash if the transaction is not yet available. Use eth_getTransactionReceipt to get the contract address, after the transaction was mined, when you created a contract.
     */
    sendTranscation(obj: Obj): Promise<string>;
    /**
     * Creates new message call transaction or a contract creation for signed transactions
     * @param data The signed transaction data.
     * @return data 32 Bytes - the transaction hash, or the zero hash if the transaction is not yet available. Use eth_getTransactionReceipt to get the contract address, after the transaction was mined, when you created a contract.
     */
    sendRawTransaction(data: string): Promise<string>;
    /**
     * Executes a new message call immediately without creating a transaction on the block chain
     * @param obj The transaction object
     * @param quantity_tag The integer block number, or the string &quot;latest&quot;, &quot;earliest&quot; or &quot;pending&quot;, see the default block parameter.
     * @return data The return value of executed contract.
     */
    call(obj: Obj, quantity_tag: string): Promise<string>;
    /**
     * Generates and returns an estimate of how much gas is necessary to allow the transaction to complete
     *  The transaction will not be added to the blockchain
     *  Note that the estimate may be significantly more than the amount of gas actually used by the transaction, for a variety of reasons including EVM mechanics and node performance
     * @param obj The transaction object
     * @param quantity_tag The integer block number, or the string &quot;latest&quot;, &quot;earliest&quot; or &quot;pending&quot;, see the default block parameter.
     * @return quantity The amount of gas used.
     */
    estimateGas(obj: Obj, quantity_tag: string): Promise<string>;
    /**
     * Returns information about a block by hash
     * @param data 32 Bytes - Hash of a block.
     * @param bool If true it returns the full transaction objects, if false only the hashes of the transactions.
     * @return obj A block object, or null when no block was found
     */
    getBlockByHash(data: string, bool: boolean): Promise<GetBlockByHashResponseObj>;
    /**
     * Returns information about a block by block number
     * @param quantity_tag The integer of a block number, or the string &quot;earliest&quot;, &quot;latest&quot; or &quot;pending&quot;, as in the default block parameter.
     * @param bool If true it returns the full transaction objects, if false only the hashes of the transactions.
     * @return obj A block object, or null when no block was found
     */
    getBlockByNumber(quantity_tag: string, bool: boolean): Promise<GetBlockByNumberResponseObj>;
    /**
     * Returns the information about a transaction requested by transaction hash
     * @param data 32 Bytes - hash of a transaction
     * @return obj A transaction object, or null when no transaction was found
     */
    getTransactionByHash(data: string): Promise<GetTransactionByHashResponseObj>;
    /**
     * Returns information about a transaction by block hash and transaction index position
     * @param data 32 Bytes - hash of a block.
     * @param quantity The integer of the transaction index position.
     * @return obj See eth_getTransactionByHash
     */
    getTransactionByHashAndIndex(data: string, quantity: string): Promise<GetTransactionByHashAndIndexResponseObj>;
    /**
     * Returns information about a transaction by block number and transaction index position
     * @param quantity_tag a block number, or the string &quot;earliest&quot;, &quot;latest&quot; or &quot;pending&quot;, as in the default block parameter.
     * @param quantity The transaction index position.
     * @return obj See eth_getTransactionByHash
     */
    getTransactionByBlockNumberAndIndex(quantity_tag: string, quantity: string): Promise<GetTransactionByBlockNumberAndIndexResponseObj>;
    /**
     * Returns the receipt of a transaction by transaction hash
     *  Note That the receipt is not available for pending transactions
     * @param data 32 Bytes - hash of a transaction
     * @return obj A transaction receipt object, or null when no receipt was found
     */
    getTransactionReceipt(data: string): Promise<GetTransactionReceiptResponseObj>;
    /**
     * eturns information about a uncle of a block by hash and uncle index position
     * @param data 32 Bytes - The hash of a block.
     * @param quantity The uncle’s index position.
     * @return obj See eth_getTransactionByHash Note - An uncle doesn’t contain individual transactions.
     */
    getUncleByBlockHashAndIndex(data: string, quantity: string): Promise<GetUncleByBlockHashAndIndexResponseObj>;
    /**
     * Returns information about a uncle of a block by number and uncle index position
     * @param quantity_tag a block number, or the string &quot;earliest&quot;, &quot;latest&quot; or &quot;pending&quot;, as in the default block parameter.
     * @param quantity the uncle’s index position.
     * @return obj See eth_getTransactionByHash Note - An uncle doesn’t contain individual transactions.
     */
    getUncleByBlockNumberAndIndex(quantity_tag: string, quantity: string): Promise<GetUncleByBlockNumberAndIndexResponseObj>;
    /**
     * Returns a list of available compilers in the client
     * @return array Array of available compilers.
     */
    getCompliers(): Promise<string[]>;
    /**
     * Returns compiled solidity code
     * @param string The source code.
     * @return data The compiled source code.
     */
    compileSolidity(string: string): Promise<string>;
    /**
     * Returns compiled LLL code
     * @param string The source code.
     * @return data The compiled source code.
     */
    complpieLLL(string: string): Promise<string>;
    /**
     * Returns compiled serpent code
     * @param string The source code.
     * @return data The compiled source code.
     */
    complieSerpent(string: string): Promise<string>;
    /**
  * Creates a filter object, based on filter options, to notify when the state changes (logs)
  *  To check if the state has changed, call eth_getFilterChanges
  *
  A note on specifying topic filters Topics are order-dependent
  *  A transaction with a log with topics [A, B] will be matched by the following topic filters
  -[] “anything” -[A] “A in first position (and anything after)” -[null, B] “anything in first position AND B in second position (and anything after)” -[A, B] “A in first position AND B in second position (and anything after)” -[[A, B], [A, B]] “(A OR B) in first position AND (A OR B) in second position (and anything after)”
  * @param obj The filter options
  * @return quantity A filter id.
  */
    newFilter(obj: Obj): Promise<string>;
    /**
     * Creates a filter in the node, to notify when a new block arrives
     *  To check if the state has changed, call eth_getFilterChanges
     * @return quantity A filter id.
     */
    newBlockFilter(): Promise<string>;
    /**
     * Creates a filter in the node, to notify when new pending transactions arrive
     *  To check if the state has changed, call eth_getFilterChanges
     * @return quantity A filter id.
     */
    newPendingTransactionFilter(): Promise<string>;
    /**
     * Uninstalls a filter with given id
     *  Should always be called when watch is no longer needed
     *  Additonally Filters timeout when they aren’t requested with eth_getFilterChanges
     *  for a period of time
     * @param quantity The filter id.
     * @return bool true if the filter was successfully uninstalled, otherwise false.
     */
    uninstallFilter(quantity: string): Promise<boolean>;
    /**
     * Polling method for a filter, which returns an array of logs which occurred since last poll
     * @param quantity The filter id.
     * @return array Array of log objects, or an empty array if nothing has changed since last poll. For filters created with eth_newBlockFilter the return are block hashes (data, 32 Bytes), e.g. [&quot;0x3454645634534...&quot;]. For filters created with eth_newPendingTransactionFilter the return are transaction hashes (data, 32 Bytes), e.g. [&quot;0x6345343454645...&quot;].
     */
    getFilterChanges(quantity: string): Promise<Array[]>;
    /**
     * Returns an array of all logs matching filter with given id
     * @param quantity The filter id.
     * @return array See eth_getFilterChanges.
     */
    getFilterLogs(quantity: string): Promise<any[]>;
    /**
     * Returns an array of all logs matching a given filter object
     * @param obj The filter options
     * @return array See eth_getFilterChanges.
     */
    getLogs(obj: Obj): Promise<any[]>;
    /**
     * Returns the hash of the current block, the seedHash, and the boundary condition to be met (“target”)
     * @return array Array with the following properties -data, 32 Bytes - current block header pow-hash -data, 32 Bytes - the seed hash used for the DAG. -data, 32 Bytes - the boundary condition (“target”), 2^256  difficulty.
     */
    getWork(): Promise<string[]>;
    /**
     * Used for submitting a proof-of-work solution
     * @param a 8 Bytes - The nonce found (64 bits)
     * @param b 32 Bytes - The header’s pow-hash (256 bits)
     * @param c 32 Bytes - The mix digest (256 bits)
     * @return bool returns true if the provided solution is valid, otherwise false.
     */
    submitWork(a: string, b: string, c: string): Promise<boolean>;
    /**
     * Used for submitting mining hashrate
     * @param hashrate A hexadecimal string representation (32 bytes) of the hash rate
     * @param id String - A random hexadecimal(32 bytes) ID identifying the client
     * @return bool Returns `true` if submitting went through succesfully and `false` otherwise.
     */
    submitHashrate(hashrate: string, id: string): Promise<boolean>;
}
//# sourceMappingURL=json_rpc_methods.d.ts.map