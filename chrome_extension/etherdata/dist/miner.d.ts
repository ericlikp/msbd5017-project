/**
 * The miner API allows you to remote control the node’s mining operation and set various mining specific settings
 */
export declare class Miner {
    baseURL: string;
    port?: number;
    url: string;
    constructor(baseURL: string, port?: number);
    /**
     * Get your hashrate in H/s (Hash operations per second)
     * @return dashRate The hashrate in Hs (Hash operations per second)
     */
    Getdashrate(): Promise<string>;
    /**
     * Sets the extra data a miner can include when miner blocks
     *  This is capped at 32 bytes
     */
    setExtra(): Promise<void>;
    /**
     * Sets the minimal accepted gas price when mining transactions
     *  Any transactions that are below this limit are excluded from the mining process
     * @param price The new minimal accepted gas price when mining transactions.
     */
    setGasPrice(price: number): Promise<void>;
    /**
     * Start the CPU mining process with the given number of threads and generate a new DAG if need be
     */
    start(): Promise<void>;
    /**
     * Stop the CPU mining operation
     */
    stop(): Promise<void>;
    /**
     * Sets the etherbase, where mining rewards will go
     * @param etherbase The new etherbase.
     */
    setEtherbase(etherbase: string): Promise<void>;
}
//# sourceMappingURL=miner.d.ts.map