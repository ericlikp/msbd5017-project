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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Debug = void 0;
var axios_1 = __importDefault(require("axios"));
/**
 * The debug API gives you access to several non-standard RPC methods, which will allow you to inspect, debug and set certain debugging flags during runtime
 */
var Debug = /** @class */ (function () {
    function Debug(baseURL, port) {
        this.baseURL = baseURL;
        this.port = port;
        this.url = port ? baseURL + ":" + port : baseURL;
    }
    /**
     * Sets the logging backtrace location
     *  When a backtrace location is set and a log message is emitted at that location, the stack of the goroutine executing the log statement will be printed to stderr
     *  The location is specified as &lt;filename&gt;:&lt;line&gt;
     * @param locationJavascript_based The logging backtrace location, which is specified as &lt;filename&gt;:&lt;line&gt;.
     */
    Debug.prototype.backtraceAt = function (locationJavascript_based) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default.post(this.url, {
                            method: "debug_backtraceAt",
                            params: [locationJavascript_based],
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
     * Turns on block profiling for the given duration and writes profile data to disk
     *  It uses a profile rate of 1 for most accurate information
     *  If a different rate is desired, set the rate and write the profile manually using debug_writeBlockProfile
     */
    Debug.prototype.blockProfile = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default.post(this.url, {
                            method: "debug_blockProfile",
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
     * Turns on CPU profiling for the given duration and writes profile data to disk
     */
    Debug.prototype.cpuProfile = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default.post(this.url, {
                            method: "debug_cpuProfile",
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
     * Retrieves the state that corresponds to the block number and returns a list of accounts (including storage and code)
     * @param blockNum The block number
     * @return blockDetails The block number and list of accounts
     */
    Debug.prototype.dumpBlock = function (blockNum) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default.post(this.url, {
                            method: "debug_dumpBlock",
                            params: [blockNum],
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
     * Returns GC statistics
     *  See https://golang
     * org/pkg/runtime/debug/#GCStats for information about the fields of the returned object
     */
    Debug.prototype.gcStats = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default.post(this.url, {
                            method: "debug_gcStats",
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
     * Retrieves and returns the RLP encoded block by number
     *  References -&gt; RLP
     */
    Debug.prototype.getBlockRlp = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default.post(this.url, {
                            method: "debug_getBlockRlp",
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
     * Turns on Go runtime tracing for the given duration and writes trace data to disk
     */
    Debug.prototype.goTrace = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default.post(this.url, {
                            method: "debug_goTrace",
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
     * Returns detailed runtime memory statistics
     *  See https://golang
     * org/pkg/runtime/#MemStats for information about the fields of the returned object
     */
    Debug.prototype.memStats = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default.post(this.url, {
                            method: "debug_memStats",
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
     * Fetches and retrieves the seed hash of the block by number
     */
    Debug.prototype.seedHash = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default.post(this.url, {
                            method: "dubug_seedHash",
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
     * Sets the current head of the local chain by block number
     *  Note, this is a destructive action and may severely damage your chain
     *  Use with extreme caution
     *  References -&gt; Ethash
     */
    Debug.prototype.setHead = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default.post(this.url, {
                            method: "debug_setHead",
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
     * Sets the rate (in samples/sec) of goroutine block profile data collection
     *  A non-zero rate enables block profiling, setting it to zero stops the profile
     *  Collected profile data can be written using debug_writeBlockProfile
     * @param rate The rate (in samplessec) of goroutine block profile data collection
     */
    Debug.prototype.setBlockProfileRate = function (rate) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default.post(this.url, {
                            method: "debug_setBlockProfileRate",
                            params: [rate],
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
     * Returns a printed representation of the stacks of all goroutines
     *  Note that the web3 wrapper for this method takes care of the printing and does not return the string
     * @return printedStacks A printed representation of the stacks of all goroutines
     */
    Debug.prototype.stacks = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default.post(this.url, {
                            method: "debug_stacks",
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
     * Turns on CPU profiling indefinitely, writing to the given file
     */
    Debug.prototype.startCPUProfile = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default.post(this.url, {
                            method: "debug_startCPUProfile",
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
     * Starts writing a Go runtime trace to the given file
     */
    Debug.prototype.startGoTrace = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default.post(this.url, {
                            method: "debug_startGoTrace",
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
     * Stops an ongoing CPU profile
     */
    Debug.prototype.stopCPUProfile = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default.post(this.url, {
                            method: "debug_stopCPUProfile",
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
     * Stops writing the Go runtime trace
     */
    Debug.prototype.stopGoTrace = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default.post(this.url, {
                            method: "debug_stopGoTrace",
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
     * The traceBlock method will return a full stack trace of all invoked opcodes of all transaction that were included in this block
     *  Note, the parent of this block must be present or it will fail
     *  References -&gt; RLP
     * @param blockName The name of the traced block
     * @return blcok The stack trace of transcation of the block
     */
    Debug.prototype.traceBlock = function (blockName) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default.post(this.url, {
                            method: "debug_traceBlock",
                            params: [blockName],
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
     * Similar to debug_traceBlock,traceBlockByNumber accepts a block number and will replay the block that is already present in the database
     *  References -&gt; RLP
     * @param blockNum A block number of a traced block
     * @return block Replaying the block that is already present in the database
     */
    Debug.prototype.traceBlockByNumber = function (blockNum) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default.post(this.url, {
                            method: "debug_traceBlockByNumber",
                            params: [blockNum],
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
     * Similar to debug_traceBlock,traceBlockByHash accepts a block hash and will replay the block that is already present in the database
     *  References -&gt; RLP
     * @param blockHash A block hash of a traced block
     * @return block Replaying the block that is already present in the database
     */
    Debug.prototype.traceBlockByHash = function (blockHash) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default.post(this.url, {
                            method: "debug_traceBlockByHash",
                            params: [blockHash],
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
     * Similar to debug_traceBlock,traceBlockFromFile accepts a file containing the RLP of the block
     *  References -&gt; RLP
     * @param file A file containing the RLP of the block
     * @return block Replaying the block that is already present in the database
     */
    Debug.prototype.traceBlockFromFile = function (file) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default.post(this.url, {
                            method: "debug_traceBlockByHash",
                            params: [file],
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
  * When JS-based tracing (see below) was first implemented, the intended usecase was to enable long-running tracers that could stream results back via a subscription channel
  *  This method works a bit differently
  *  (For full details, see PR)
  -It streams output to disk during the execution, to not blow up the memory usage on the node -It uses jsonl as output format (to allow streaming) -Uses a cross-client standardized output, so called ‘standard json&#39; ~Uses op for string-representation of opcode, instead of op/opName for numeric/string, and other simlar small differences
  *  ~has refund ~Represents memory as a contiguous chunk of data, as opposed to a list of 32 byte segments like debug_traceTransaction
  This means that this method is only ‘useful’ for callers who control the node – at least sufficiently to be able to read the artefacts from the filesystem after the fact
  * @param block The block
  * @param txHash txHash
  * @param disableMemory disableMemory
  * @return output output
  &#39;The method can be used to dump a certain transaction out of a given block &gt; debug.standardTraceBlockToFile(&quot;0x0bbe9f1484668a2bf159c63f0cf556ed8c8282f99e3ffdb03ad2175a863bca63&quot;, {txHash:&quot;0x4049f61ffbb0747bb88dc1c85dd6686ebf225a3c10c282c45a8e0c644739f7e9&quot;, disableMemory:true}) [&quot;tmp/block_0x0bbe9f14-14-0x4049f61f-099048234&quot;]
  Or all txs from a block &gt; debug.standardTraceBlockToFile(&quot;0x0bbe9f1484668a2bf159c63f0cf556ed8c8282f99e3ffdb03ad2175a863bca63&quot;, {disableMemory:true}) [&quot;/tmp/block_0x0bbe9f14-0-0xb4502ea7-409046657&quot;, &quot;/tmp/block_0x0bbe9f14-1-0xe839be8f-954614764&quot;,...]
  Files are created in a temp-location, with the naming standard block_&lt;blockhash:4&gt;-&lt;txindex&gt;-&lt;txhash:4&gt;-&lt;random suffix&gt;. Each opcode immediately streams to file, with no in-Getd buffering aside from whatever buffering the os normally does.
  On the server side, it also adds some more info when regenerating historical state, namely, the reexec-number if required historical state is not avaiable is encountered, so a user can experiment with increasing that setting. It also prints out the remaining block until it reaches target
  The options is as follows type StdTraceConfig struct { *vm.LogConfig Reexec *uint64 TxHash *common.Hash } &#39;
  */
    Debug.prototype.standardTraceBlockToFile = function (block, txHash, disableMemory) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default.post(this.url, {
                            method: "debug_standardTraceBlockToFile",
                            params: [block, txHash, disableMemory],
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
     * This method is similar to debug_standardTraceBlockToFile, but can be used to obtain info about a block which has been rejected as invalid (for some reason)
     */
    Debug.prototype.standardTraceBadBlockToFile = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default.post(this.url, {
                            method: "debug_standardTraceBadBlockToFile",
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
  * OBS In most scenarios, debug
  * standardTraceBlockToFile is better suited for tracing! The traceTransaction debugging method will attempt to run the transaction in the exact same manner as it was executed on the network
  *  It will replay any transaction that may have been executed prior to this one before it will finally attempt to execute the transaction that corresponds to the given hash
  *
  In addition to the hash of the transaction you may give it a secondary optional argument, which specifies the options for this specific call
  *  The possible options are
  disableStorage: BOOL
  *    Setting this to true will disable storage capture (default = false)
  *  disableMemory:  BOOL
  *    Setting this to true will disable memory capture (default = false)
  *  disableStack:   BOOL
  *    Setting this to true will disable stack capture (default = false)
  *  tracer:         STRING
  *  Setting this will enable JavaScript-based transaction tracing, described below
  *  If set, the previous four arguments will be ignored
  *  timeout:        STRING
  *  Overrides the default timeout of 5 seconds for JavaScript-based tracing calls
  *  Valid values are described here
  * @param hash The hash of the transaction
  * @param disableStorage Setting this to true will disable storage capture (default = false).
  * @param disableMemory Setting this to true will disable memory capture (default = false).
  * @param disableStack Setting this to true will disable stack capture (default = false).
  * @param tracer Setting this will enable JavaScript-based transaction tracing, described below. If set, the previous four arguments will be ignored.
  * @param timeout Overrides the default timeout of 5 seconds for JavaScript-based tracing calls. Valid values are described here.
  * @return transaction The stack trace of transcation of the block
  */
    Debug.prototype.traceTransaction = function (hash, disableStorage, disableMemory, disableStack, tracer, timeout) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default.post(this.url, {
                            method: "debug_traceTransaction",
                            params: [
                                hash,
                                disableStorage,
                                disableMemory,
                                disableStack,
                                tracer,
                                timeout,
                            ],
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
     * Javascript
     */
    Debug.prototype.JavaScriptBasedTracing = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default.post(this.url, {
                            method: "JavaScript-based tracing",
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
  * The debug_traceCall method lets you run an eth_call on top of a given block
  *  The block can be specified either by hash or by number
  *  It takes the same input object as a eth_call
  *  It returns the same output as debug_traceTransaction
  *  A tracer can be specified as a third argument, similar to debug_traceTransaction
  *
  Object - The transaction call object
  from:     DATA, 20 Bytes - (optional) The address the transaction is sent from
  *  to:       DATA, 20 Bytes -            The address the transaction is directed to
  *  gas:      QUANTITY       - (optional) Integer of the gas provided for the transaction execution
  *  eth_call consumes zero gas, but this parameter may be needed by some executions
  *  gasPrice: QUANTITY       - (optional) Integer of the gasPrice used for each paid gas value:    QUANTITY       - (optional) Integer of the value sent with this transaction data:     DATA           - (optional) Hash of the method signature and encoded parameters
  *  For details see Ethereum Contract ABI in the Solidity documentation
  * @param to The address the transaction is directed to.
  * @param from The address the transaction is sent from.
  * @param gas Integer of the gasPrice used for each paid gas
  * @param gasPrice Integer of the gasPrice used for each paid gas
  * @param value Integer of the value sent with this transaction
  * @param data Hash of the method signature and encoded parameters. For details see Ethereum Contract ABI in the Solidity documentation
  * @return transaction Same output as debug_traceTransaction
  */
    Debug.prototype.traceCall = function (to, from, gas, gasPrice, value, data) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default.post(this.url, {
                            method: "debug_traceCall",
                            params: [to, from, gas, gasPrice, value, data],
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
     * Sets the logging verbosity ceiling
     *  Log messages with level up to and including the given level will be printed
     *  The verbosity of individual packages and source files can be raised using debug_vmodule
     * @return message Log messages with level up to and including the given level will be printed.
     */
    Debug.prototype.verbosity = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default.post(this.url, {
                            method: "debug_verbosity",
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
     * Sets the logging verbosity pattern
     * @param messageRestrictions If you want to see messages from a particular Go package (directory) and all subdirectories, use:    &quot;etd*=6&quot; If you want to restrict messages to a particular package (e.g. p2p) but exclude subdirectories, use: &quot;p2p=6&quot; If you want to see log messages from a particular source file, use:                                  &quot;server.go=6&quot; You can compose these basic patterns. If you want to see all output from peer.go in a package below etd (etd/peer.go, etd/downloader/peer.go) as well as output from package p2p at level &lt; = 5, use:    &quot;etd peer.go=6,p2p=5&quot;
     * @return message
     */
    Debug.prototype.vmodule = function (messageRestrictions) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default.post(this.url, {
                            method: "debug_vmodule",
                            params: [messageRestrictions],
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
     * Writes a goroutine blocking profile to the given file
     */
    Debug.prototype.writeBlockProfile = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default.post(this.url, {
                            method: "debug_writeBlockProfile",
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
     * Writes an allocation profile to the given file
     *  Note that the profiling rate cannot be set through the API, it must be set on the command line using the --pprof
     * memprofilerate flag
     */
    Debug.prototype.writeMemProfile = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default.post(this.url, {
                            method: "debug_writeMenProfile",
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
    return Debug;
}());
exports.Debug = Debug;
//# sourceMappingURL=debug.js.map