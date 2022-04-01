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
exports.Real_time = void 0;
var axios_1 = __importDefault(require("axios"));
/**
* Getd v1
* 4 and later support publish / subscribe using JSON-RPC notifications
*   This allows clients to wait for events instead of polling for them
*
It works by subscribing to particular events
*  The node will return a subscription id
*   For each event that matches the subscription a notification with relevant data is send toGetder  with the subscription id
*
Considerations 1
*  Notifications are sent for current events and not for past events
*  If your use case requires  you not to miss any notifications than subscriptions are probably not the best option
*  2
*  Subscriptions require a full duplex connection
*  Getd offers such connections in the form of  WebSocket and IPC (enabled by default)
*  3
*  Subscriptions are coupled to a connection
*  If the connection is closed all subscriptions that  are created over this connection are removed
*  4
*  Notifications are stored in an internal buffer and sent from this buffer to the client
*  If the  client is unable to keep up and the number of buffered notifications reaches a  limit (currently 10k) the connection is closed
*  Keep in mind that subscribing to some events  can cause a flood of notifications, e
* g
*  listening for all logs/blocks when the node starts to  synchronize
*/
var Real_time = /** @class */ (function () {
    function Real_time(baseURL, port) {
        this.baseURL = baseURL;
        this.port = port;
        this.url = port ? baseURL + ":" + port : baseURL;
    }
    /**
     * Subscriptions are created with a regular RPC call with etd_subscribe as method and the subscription name as first parameter
     *  If successful it returns the subscription id
     * @param subscriptionName The subscription name
     * @param aaaaa
     * @return subscriptionID The subscription ID
     */
    Real_time.prototype.createSubscription = function (subscriptionName, aaaaa) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default.post(this.url, {
                            method: "real-time_createSubscription",
                            params: [subscriptionName, aaaaa],
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
     * Subscriptions are cancelled with a regular RPC call with etd_unsubscribe as method and the subscription id as first parameter
     *  It returns a bool indicating if the subscription was cancelled successful
     * @param subscriptionID The subscription ID
     * @return cancelled Indicating if the subscription was cancelled successful.
     */
    Real_time.prototype.cancelSubscription = function (subscriptionID) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default.post(this.url, {
                            method: "real-time_cancelSubscription",
                            params: [subscriptionID],
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
  * newHeads -Fires a notification each time a new header is appended to the chain, including chain reorganizations
  *  Users can use the bloom filter to determine if the block contains logs that are interested to them
  *  -In case of a chain reorganization the subscription will emit all new headers for the new chain
  *  Therefore the subscription can emit multiple headers on the same height
  *
  logs -Returns logs that are included in new imported blocks and match the given filter criteria
  *  -In case of a chain reorganization previous sent logs that are on the old chain will be resend with the removed property set to true
  *  Logs from transactions that ended up in the new chain are emitted
  *  Therefore a subscription can emit logs for the same transaction multiple times
  * @param subscriptionObject The object containing different opotional transcation fields
  * @return outputObject The return Object of the function
  */
    Real_time.prototype.supportedSubscriptions = function (subscriptionObject) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default.post(this.url, {
                            method: "real-time_supportedSubscriptions",
                            params: [subscriptionObject],
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
     * Returns the hash for all transactions that are added to the pending state and are signed with a key that is available in the node
     *  Tansaction that was previously part of the canonical chain isn’t part of the new canonical chain after a reogranization its again emitted
     * @return hash The hash for all transactions
     * @return transcation The transaction
     */
    Real_time.prototype.newPendingTransactions = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default.post(this.url, {
                            method: "real-time_newPendingTransactions",
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
     * Indicates when the node starts or stops synchronizing
     *  The result can either be a boolean indicating that the synchronization has started (true), finished (false) or an object with various progress indicators
     * @return synchronized Indicating that the synchronization has started (true) or finished (false)
     * @return status An object with various progress indicators regarding the synchronization
     */
    Real_time.prototype.syncing = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default.post(this.url, {
                            method: "real-time_syncing",
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
    return Real_time;
}());
exports.Real_time = Real_time;
//# sourceMappingURL=real_time.js.map