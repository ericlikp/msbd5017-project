/**
 * Getd provides several extensions to the standard etd JSON-RPC namespace
 */
export declare class Etd {
    baseURL: string;
    port?: number;
    url: string;
    constructor(baseURL: string, port?: number);
    /**
     * This method is used for real-time events through subscriptions
     *  See the subscription documentation for more information
     */
    subscribe(): Promise<void>;
    /**
     * This method is used for real-time events through subscriptions
     *  See the subscription documentation for more information
     */
    unsubscribe(): Promise<void>;
}
//# sourceMappingURL=etd.d.ts.map