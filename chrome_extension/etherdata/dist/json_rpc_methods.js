"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var exports = {};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Json_rpc_methods = void 0;
//var axios_1 = __importDefault(require("axios"));
var axios_1 = axios;
/**
 * different methods to perform etd control
 */
var Json_rpc_methods = /** @class */ (function () {
    function Json_rpc_methods(baseURL, port) {
        this.baseURL = baseURL;
        this.port = port;
        this.url = port ? baseURL + ":" + port : baseURL;
    }
    /**
     * Returns the current etherdata protocol version
     * @return version The current etherdata protocol version
     */
    Json_rpc_methods.prototype.protocalVersion = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default.post(this.url, {
                            method: "eth_protocalVersion",
                            params: undefined,
                            jsonrpc: "2.0",
                            id: 1,
                        })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data.result];
                }
            });
        });
    };
    /**
     * Returns the current block number
     * @return blockNumber The current blockNumber
     */
    Json_rpc_methods.prototype.blockNumber = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default.post(this.url, {
                            method: "eth_blockNumber",
                            params: undefined,
                            jsonrpc: "2.0",
                            id: 1,
                        })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data.result];
                }
            });
        });
    };
    /**
     * Returns an object with data about the sync status or false
     * @return syncObject return this ONLY when syncing
     * @return syncStatus return this ONLY when not syncing
     */
    Json_rpc_methods.prototype.syncing = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default.post(this.url, {
                            method: "eth_syncing",
                            params: undefined,
                            jsonrpc: "2.0",
                            id: 1,
                        })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data.result];
                }
            });
        });
    };
    /**
     * Returns the client coinbase address
     * @return coinbase The client coinbase address
     */
    Json_rpc_methods.prototype.coinbase = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default.post(this.url, {
                            method: "eth_coinbase",
                            params: undefined,
                            jsonrpc: "2.0",
                            id: 1,
                        })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data.result];
                }
            });
        });
    };
    /**
     * Returns true if client is actively mining new blocks
     * @return isMining True if client is actively mining new blocks.
     */
    Json_rpc_methods.prototype.mining = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default.post(this.url, {
                            method: "eth_mining",
                            params: undefined,
                            jsonrpc: "2.0",
                            id: 1,
                        })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data.result];
                }
            });
        });
    };
    /**
     * Returns the number of hashes per second that the node is mining with
     * @return hashrate The number of hashes per second that the node is mining with
     */
    Json_rpc_methods.prototype.hashrate = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default.post(this.url, {
                            method: "eth_hashrate",
                            params: undefined,
                            jsonrpc: "2.0",
                            id: 1,
                        })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data.result];
                }
            });
        });
    };
    /**
     * Returns the current price per gas in wei
     * @return gasPrice The current price per gas in wei (8049999872 Wei in the example)
     */
    Json_rpc_methods.prototype.gasPrice = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default.post(this.url, {
                            method: "eth_gasPrice",
                            params: undefined,
                            jsonrpc: "2.0",
                            id: 1,
                        })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data.result];
                }
            });
        });
    };
    /**
     * Returns a list of addresses owned by client
     * @return addressAccount The array of accouts
     */
    Json_rpc_methods.prototype.accounts = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default.post(this.url, {
                            method: "eth_accounts",
                            params: undefined,
                            jsonrpc: "2.0",
                            id: 1,
                        })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data.result];
                }
            });
        });
    };
    /**
     * Returns the balance of the account of given address
     * @param address data, 20 Bytes - address to check for balance
     * @param tag quantity_tag - integer block number, or the string &quot;latest&quot;, &quot;earliest&quot; or &quot;pending&quot;, see the default block parameter
     * @return balance quantity - integer of the current balance in wei.
     */
    Json_rpc_methods.prototype.getBalance = function (address, tag) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default.post(this.url, {
                            method: "eth_getBalance",
                            params: [address, tag],
                            jsonrpc: "2.0",
                            id: 1,
                        })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data.result];
                }
            });
        });
    };
    /**
     * Returns the value from a storage position at a given address
     * @param address data, 20 Bytes - address of the storage.
     * @param position The integer of the position in the storage.
     * @param tag quantity_tag - integer block number, or the string &quot;latest&quot;, &quot;earliest&quot; or &quot;pending&quot;, see the default block parameter
     * @return valur The value at this storage position.
     */
    Json_rpc_methods.prototype.getStorageAt = function (address, position, tag) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default.post(this.url, {
                            method: "eth_getStorageAt",
                            params: [address, position, tag],
                            jsonrpc: "2.0",
                            id: 1,
                        })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data.result];
                }
            });
        });
    };
    /**
     * Returns the number of transactions sent from an address
     * @param address The address.
     * @param state quantity_tag - integer block number, or the string &quot;latest&quot;, &quot;earliest&quot; or &quot;pending&quot;, see the default block parameter
     * @return number The number of transactions send from this address.
     */
    Json_rpc_methods.prototype.getTransactionCount = function (address, state) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default.post(this.url, {
                            method: "eth_getTransactionCount",
                            params: [address, state],
                            jsonrpc: "2.0",
                            id: 1,
                        })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data.result];
                }
            });
        });
    };
    /**
     * Returns the number of transactions in a block from a block matching the given block hash
     * @param data 20 Bytes - The address
     * @param quantity_tag integer block number, or the string &quot;latest&quot;, &quot;earliest&quot; or &quot;pending&quot;, see the default block parameter
     * @return quantity The integer of the number of transactions send from this address.
     */
    Json_rpc_methods.prototype.getTransactionCountByHash = function (data, quantity_tag) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default.post(this.url, {
                            method: "eth_getTransactionCountByHash",
                            params: [data, quantity_tag],
                            jsonrpc: "2.0",
                            id: 1,
                        })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data.result];
                }
            });
        });
    };
    /**
     * Returns the number of transactions in a block from a block matching the given block hash
     * @param data 32 Bytes - The hash of a block
     * @return quantity The integer of the number of transactions in this block.
     */
    Json_rpc_methods.prototype.getBlockTransactionCountByHash = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default.post(this.url, {
                            method: "eth_getBlockTransactionCountByHash",
                            params: [data],
                            jsonrpc: "2.0",
                            id: 1,
                        })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data.result];
                }
            });
        });
    };
    /**
     * Returns the number of transactions in a block matching the given block number
     * @param quantity_tag The integer of a block number, or the string &quot;earliest&quot;, &quot;latest&quot; or &quot;pending&quot;, see the default block parameter
     * @return quantity The integer of the number of transactions in this block.
     */
    Json_rpc_methods.prototype.getBlockTransactionCountByNumber = function (quantity_tag) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default.post(this.url, {
                            method: "eth_getBlockTransactionCountByNumber",
                            params: [quantity_tag],
                            jsonrpc: "2.0",
                            id: 1,
                        })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data.result];
                }
            });
        });
    };
    /**
     * Returns the number of uncles in a block from a block matching the given block hash
     * @param data 32 Bytes - The hash of a block
     * @return quantity_tag The integer of the number of uncles in this block.
     */
    Json_rpc_methods.prototype.getUncleCountByBlockHash = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default.post(this.url, {
                            method: "eth_getUncleCountByBlockHash",
                            params: [data],
                            jsonrpc: "2.0",
                            id: 1,
                        })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data.result];
                }
            });
        });
    };
    /**
     * Returns the number of uncles in a block from a block matching the given block number
     * @param quantity_tag The integer of a block number, or the string “latest”, “earliest” or “pending”, see the default block parameter
     * @return quantity The integer of the number of uncles in this block.
     */
    Json_rpc_methods.prototype.getUncleCountByBlockNumber = function (quantity_tag) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default.post(this.url, {
                            method: "eth_getUncleCountByBlockNumber",
                            params: [quantity_tag],
                            jsonrpc: "2.0",
                            id: 1,
                        })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data.result];
                }
            });
        });
    };
    /**
     * Returns code at a given address
     * @param data 20 Byter - The address
     * @param quantity_tag The integer block number, or the string &quot;latest&quot;, &quot;earliest&quot; or &quot;pending&quot;, see the default block parameter
     * @return data The code from the given address.
     */
    Json_rpc_methods.prototype.getCode = function (data, quantity_tag) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default.post(this.url, {
                            method: "eth_code",
                            params: [data, quantity_tag],
                            jsonrpc: "2.0",
                            id: 1,
                        })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data.result];
                }
            });
        });
    };
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
    Json_rpc_methods.prototype.sign = function (a, b) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default.post(this.url, {
                            method: "eth_sign",
                            params: [a, b],
                            jsonrpc: "2.0",
                            id: 1,
                        })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data.result];
                }
            });
        });
    };
    /**
     * Signs a transaction that can be submitted to the network at a later time using with eth_sendRawTransaction
     * @param obj The transaction object
     * @return data The signed transaction object.
     */
    Json_rpc_methods.prototype.signTransaction = function (obj) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default.post(this.url, {
                            method: "eth_signTransaction",
                            params: [obj],
                            jsonrpc: "2.0",
                            id: 1,
                        })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data.result];
                }
            });
        });
    };
    /**
     * Creates new message call transaction or a contract creation, if the data field contains code
     * @param obj The transaction object
     * @return data 32 Bytes - the transaction hash, or the zero hash if the transaction is not yet available. Use eth_getTransactionReceipt to get the contract address, after the transaction was mined, when you created a contract.
     */
    Json_rpc_methods.prototype.sendTranscation = function (obj) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default.post(this.url, {
                            method: "eth_sendTranscation",
                            params: [obj],
                            jsonrpc: "2.0",
                            id: 1,
                        })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data.result];
                }
            });
        });
    };
    /**
     * Creates new message call transaction or a contract creation for signed transactions
     * @param data The signed transaction data.
     * @return data 32 Bytes - the transaction hash, or the zero hash if the transaction is not yet available. Use eth_getTransactionReceipt to get the contract address, after the transaction was mined, when you created a contract.
     */
    Json_rpc_methods.prototype.sendRawTransaction = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default.post(this.url, {
                            method: "eth_sendRawTransaction",
                            params: [data],
                            jsonrpc: "2.0",
                            id: 1,
                        })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data.result];
                }
            });
        });
    };
    /**
     * Executes a new message call immediately without creating a transaction on the block chain
     * @param obj The transaction object
     * @param quantity_tag The integer block number, or the string &quot;latest&quot;, &quot;earliest&quot; or &quot;pending&quot;, see the default block parameter.
     * @return data The return value of executed contract.
     */
    Json_rpc_methods.prototype.call = function (obj, quantity_tag) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default.post(this.url, {
                            method: "eth_call",
                            params: [obj, quantity_tag],
                            jsonrpc: "2.0",
                            id: 1,
                        })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data.result];
                }
            });
        });
    };
    /**
     * Generates and returns an estimate of how much gas is necessary to allow the transaction to complete
     *  The transaction will not be added to the blockchain
     *  Note that the estimate may be significantly more than the amount of gas actually used by the transaction, for a variety of reasons including EVM mechanics and node performance
     * @param obj The transaction object
     * @param quantity_tag The integer block number, or the string &quot;latest&quot;, &quot;earliest&quot; or &quot;pending&quot;, see the default block parameter.
     * @return quantity The amount of gas used.
     */
    Json_rpc_methods.prototype.estimateGas = function (obj, quantity_tag) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default.post(this.url, {
                            method: "eth_estimateGas",
                            params: [obj, quantity_tag],
                            jsonrpc: "2.0",
                            id: 1,
                        })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data.result];
                }
            });
        });
    };
    /**
     * Returns information about a block by hash
     * @param data 32 Bytes - Hash of a block.
     * @param bool If true it returns the full transaction objects, if false only the hashes of the transactions.
     * @return obj A block object, or null when no block was found
     */
    Json_rpc_methods.prototype.getBlockByHash = function (data, bool) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default.post(this.url, {
                            method: "eth_getBlockByHash",
                            params: [data, bool],
                            jsonrpc: "2.0",
                            id: 1,
                        })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data.result];
                }
            });
        });
    };
    /**
     * Returns information about a block by block number
     * @param quantity_tag The integer of a block number, or the string &quot;earliest&quot;, &quot;latest&quot; or &quot;pending&quot;, as in the default block parameter.
     * @param bool If true it returns the full transaction objects, if false only the hashes of the transactions.
     * @return obj A block object, or null when no block was found
     */
    Json_rpc_methods.prototype.getBlockByNumber = function (quantity_tag, bool) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default.post(this.url, {
                            method: "eth_getBlockByNumber",
                            params: [quantity_tag, bool],
                            jsonrpc: "2.0",
                            id: 1,
                        })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data.result];
                }
            });
        });
    };
    /**
     * Returns the information about a transaction requested by transaction hash
     * @param data 32 Bytes - hash of a transaction
     * @return obj A transaction object, or null when no transaction was found
     */
    Json_rpc_methods.prototype.getTransactionByHash = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default.post(this.url, {
                            method: "eth_getTransactionByHash",
                            params: [data],
                            jsonrpc: "2.0",
                            id: 1,
                        })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data.result];
                }
            });
        });
    };
    /**
     * Returns information about a transaction by block hash and transaction index position
     * @param data 32 Bytes - hash of a block.
     * @param quantity The integer of the transaction index position.
     * @return obj See eth_getTransactionByHash
     */
    Json_rpc_methods.prototype.getTransactionByHashAndIndex = function (data, quantity) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default.post(this.url, {
                            method: "eth_getTransactionByHashAndIndex",
                            params: [data, quantity],
                            jsonrpc: "2.0",
                            id: 1,
                        })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data.result];
                }
            });
        });
    };
    /**
     * Returns information about a transaction by block number and transaction index position
     * @param quantity_tag a block number, or the string &quot;earliest&quot;, &quot;latest&quot; or &quot;pending&quot;, as in the default block parameter.
     * @param quantity The transaction index position.
     * @return obj See eth_getTransactionByHash
     */
    Json_rpc_methods.prototype.getTransactionByBlockNumberAndIndex = function (quantity_tag, quantity) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default.post(this.url, {
                            method: "eth_getTransactionByBlockNumberAndIndex",
                            params: [quantity_tag, quantity],
                            jsonrpc: "2.0",
                            id: 1,
                        })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data.result];
                }
            });
        });
    };
    /**
     * Returns the receipt of a transaction by transaction hash
     *  Note That the receipt is not available for pending transactions
     * @param data 32 Bytes - hash of a transaction
     * @return obj A transaction receipt object, or null when no receipt was found
     */
    Json_rpc_methods.prototype.getTransactionReceipt = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default.post(this.url, {
                            method: "eth_getTransactionReceipt",
                            params: [data],
                            jsonrpc: "2.0",
                            id: 1,
                        })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data.result];
                }
            });
        });
    };
    /**
     * eturns information about a uncle of a block by hash and uncle index position
     * @param data 32 Bytes - The hash of a block.
     * @param quantity The uncle’s index position.
     * @return obj See eth_getTransactionByHash Note - An uncle doesn’t contain individual transactions.
     */
    Json_rpc_methods.prototype.getUncleByBlockHashAndIndex = function (data, quantity) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default.post(this.url, {
                            method: "eth_getUncleByBlockHashAndIndex",
                            params: [data, quantity],
                            jsonrpc: "2.0",
                            id: 1,
                        })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data.result];
                }
            });
        });
    };
    /**
     * Returns information about a uncle of a block by number and uncle index position
     * @param quantity_tag a block number, or the string &quot;earliest&quot;, &quot;latest&quot; or &quot;pending&quot;, as in the default block parameter.
     * @param quantity the uncle’s index position.
     * @return obj See eth_getTransactionByHash Note - An uncle doesn’t contain individual transactions.
     */
    Json_rpc_methods.prototype.getUncleByBlockNumberAndIndex = function (quantity_tag, quantity) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default.post(this.url, {
                            method: "eth_getUncleByBlockNumberAndIndex",
                            params: [quantity_tag, quantity],
                            jsonrpc: "2.0",
                            id: 1,
                        })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data.result];
                }
            });
        });
    };
    /**
     * Returns a list of available compilers in the client
     * @return array Array of available compilers.
     */
    Json_rpc_methods.prototype.getCompliers = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default.post(this.url, {
                            method: "eth_getCompliers",
                            params: undefined,
                            jsonrpc: "2.0",
                            id: 1,
                        })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data.result];
                }
            });
        });
    };
    /**
     * Returns compiled solidity code
     * @param string The source code.
     * @return data The compiled source code.
     */
    Json_rpc_methods.prototype.compileSolidity = function (string) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default.post(this.url, {
                            method: "eth_compileSolidity",
                            params: [string],
                            jsonrpc: "2.0",
                            id: 1,
                        })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data.result];
                }
            });
        });
    };
    /**
     * Returns compiled LLL code
     * @param string The source code.
     * @return data The compiled source code.
     */
    Json_rpc_methods.prototype.complpieLLL = function (string) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default.post(this.url, {
                            method: "eth_complpieLLL",
                            params: [string],
                            jsonrpc: "2.0",
                            id: 1,
                        })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data.result];
                }
            });
        });
    };
    /**
     * Returns compiled serpent code
     * @param string The source code.
     * @return data The compiled source code.
     */
    Json_rpc_methods.prototype.complieSerpent = function (string) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default.post(this.url, {
                            method: "eth_complieSerpent",
                            params: [string],
                            jsonrpc: "2.0",
                            id: 1,
                        })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data.result];
                }
            });
        });
    };
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
    Json_rpc_methods.prototype.newFilter = function (obj) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default.post(this.url, {
                            method: "eth_newFilter",
                            params: [obj],
                            jsonrpc: "2.0",
                            id: 1,
                        })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data.result];
                }
            });
        });
    };
    /**
     * Creates a filter in the node, to notify when a new block arrives
     *  To check if the state has changed, call eth_getFilterChanges
     * @return quantity A filter id.
     */
    Json_rpc_methods.prototype.newBlockFilter = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default.post(this.url, {
                            method: "eth_newBlockFilter",
                            params: undefined,
                            jsonrpc: "2.0",
                            id: 1,
                        })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data.result];
                }
            });
        });
    };
    /**
     * Creates a filter in the node, to notify when new pending transactions arrive
     *  To check if the state has changed, call eth_getFilterChanges
     * @return quantity A filter id.
     */
    Json_rpc_methods.prototype.newPendingTransactionFilter = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default.post(this.url, {
                            method: "eth_newPendingTransactionFilter",
                            params: undefined,
                            jsonrpc: "2.0",
                            id: 1,
                        })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data.result];
                }
            });
        });
    };
    /**
     * Uninstalls a filter with given id
     *  Should always be called when watch is no longer needed
     *  Additonally Filters timeout when they aren’t requested with eth_getFilterChanges
     *  for a period of time
     * @param quantity The filter id.
     * @return bool true if the filter was successfully uninstalled, otherwise false.
     */
    Json_rpc_methods.prototype.uninstallFilter = function (quantity) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default.post(this.url, {
                            method: "eth_uninstallFilter",
                            params: [quantity],
                            jsonrpc: "2.0",
                            id: 1,
                        })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data.result];
                }
            });
        });
    };
    /**
     * Polling method for a filter, which returns an array of logs which occurred since last poll
     * @param quantity The filter id.
     * @return array Array of log objects, or an empty array if nothing has changed since last poll. For filters created with eth_newBlockFilter the return are block hashes (data, 32 Bytes), e.g. [&quot;0x3454645634534...&quot;]. For filters created with eth_newPendingTransactionFilter the return are transaction hashes (data, 32 Bytes), e.g. [&quot;0x6345343454645...&quot;].
     */
    Json_rpc_methods.prototype.getFilterChanges = function (quantity) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default.post(this.url, {
                            method: "eth_getFilterChanges",
                            params: [quantity],
                            jsonrpc: "2.0",
                            id: 1,
                        })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data.result];
                }
            });
        });
    };
    /**
     * Returns an array of all logs matching filter with given id
     * @param quantity The filter id.
     * @return array See eth_getFilterChanges.
     */
    Json_rpc_methods.prototype.getFilterLogs = function (quantity) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default.post(this.url, {
                            method: "eth_getFilterLogs",
                            params: [quantity],
                            jsonrpc: "2.0",
                            id: 1,
                        })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data.result];
                }
            });
        });
    };
    /**
     * Returns an array of all logs matching a given filter object
     * @param obj The filter options
     * @return array See eth_getFilterChanges.
     */
    Json_rpc_methods.prototype.getLogs = function (obj) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default.post(this.url, {
                            method: "eth_getLogs",
                            params: [obj],
                            jsonrpc: "2.0",
                            id: 1,
                        })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data.result];
                }
            });
        });
    };
    /**
     * Returns the hash of the current block, the seedHash, and the boundary condition to be met (“target”)
     * @return array Array with the following properties -data, 32 Bytes - current block header pow-hash -data, 32 Bytes - the seed hash used for the DAG. -data, 32 Bytes - the boundary condition (“target”), 2^256  difficulty.
     */
    Json_rpc_methods.prototype.getWork = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default.post(this.url, {
                            method: "eth_getWork",
                            params: undefined,
                            jsonrpc: "2.0",
                            id: 1,
                        })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data.result];
                }
            });
        });
    };
    /**
     * Used for submitting a proof-of-work solution
     * @param a 8 Bytes - The nonce found (64 bits)
     * @param b 32 Bytes - The header’s pow-hash (256 bits)
     * @param c 32 Bytes - The mix digest (256 bits)
     * @return bool returns true if the provided solution is valid, otherwise false.
     */
    Json_rpc_methods.prototype.submitWork = function (a, b, c) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default.post(this.url, {
                            method: "eth_submitWork",
                            params: [a, b, c],
                            jsonrpc: "2.0",
                            id: 1,
                        })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data.result];
                }
            });
        });
    };
    /**
     * Used for submitting mining hashrate
     * @param hashrate A hexadecimal string representation (32 bytes) of the hash rate
     * @param id String - A random hexadecimal(32 bytes) ID identifying the client
     * @return bool Returns `true` if submitting went through succesfully and `false` otherwise.
     */
    Json_rpc_methods.prototype.submitHashrate = function (hashrate, id) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default.post(this.url, {
                            method: "eth_submitHashrate",
                            params: [hashrate, id],
                            jsonrpc: "2.0",
                            id: 1,
                        })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data.result];
                }
            });
        });
    };
    return Json_rpc_methods;
}());
exports.Json_rpc_methods = Json_rpc_methods;
//# sourceMappingURL=json_rpc_methods.js.map
