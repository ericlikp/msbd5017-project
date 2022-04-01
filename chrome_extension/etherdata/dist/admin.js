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
exports.Admin = void 0;
var axios_1 = __importDefault(require("axios"));
/**
 * The admin API gives you access to several non-standard RPC methods,  which will allow you to have a fine grained control over your Getd instance,  including but not limited to network peer and RPC endpoint management
 */
var Admin = /** @class */ (function () {
    function Admin(baseURL, port) {
        this.baseURL = baseURL;
        this.port = port;
        this.url = port ? baseURL + ":" + port : baseURL;
    }
    /**
     * The addPeer administrative method requests adding a new remote node to the list of tracked static nodes
     *  The node will try to maintain connectivity to these nodes at all times, reconnecting every once in a while if the remote connection goes down
     *  The method accepts a single argument, the enode URL of the remote peer to start tracking and returns a BOOL indicating whether the peer was accepted for tracking or some error occurred
     * @param enode The enode URL of the remote peer to start tracking
     * @return accepted Indicating whether the peer was accepted for tracking or some error occurred.
     */
    Admin.prototype.addPeer = function (enode) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default.post(this.url, {
                            method: "admin_addPeer",
                            params: [enode],
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
     * The datadir administrative property can be queried for the absolute path the running Getd node currently uses to store all its databases
     * @return absPath The absolute path that the running Getd node is currently using to store all its databases
     */
    Admin.prototype.datadir = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default.post(this.url, {
                            method: "admin_datadir",
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
     * The nodeInfo administrative property can be queried for all the information known about the running Getd node at the networking granularity
     *  These include general information about the node itself as a participant of the ÐΞVp2p P2P overlay protocol, as well as specialized information added by each of the running application protocols (e
     * g
     *  etd, les, shh, bzz)
     * @return nodeInfo Get all the information known about the running Getd node at the networking granularity
     */
    Admin.prototype.nodeInfo = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default.post(this.url, {
                            method: "admin_nodeInfo",
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
     * The peers administrative property can be queried for all the information known about the connected remote nodes at the networking granularity
     *  These include general information about the nodes themselves as participants of the ÐΞVp2p P2P overlay protocol, as well as specialized information added by each of the running application protocols (e
     * g
     *  etd, les, shh, bzz)
     * @return peersArray All the information known about the connected remote nodes
     */
    Admin.prototype.peers = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default.post(this.url, {
                            method: "admin_peers",
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
     * The startRPC administrative method starts an HTTP based JSON RPC API webserver to handle client requests
     *  All the parameters are optional
     * @param host Network interface to open the listener socket on (defaults to &quot;localhost&quot;)
     * @param port Network port to open the listener socket on (defaults to 8545)
     * @param cors cross-origin resource sharing header to use (defaults to &quot;&quot;)
     * @param apis API modules to offer over this interface (defaults to &quot;etd,net,web3&quot;)
     * @return hTTPlistenerOpen A boolean flag specifying whether the HTTP RPC listener was opened or not. Please note, only one HTTP endpoint is allowed to be active at any time.
     */
    Admin.prototype.startRPC = function (host, port, cors, apis) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default.post(this.url, {
                            method: "admin_startRPC",
                            params: [host, port, cors, apis],
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
     * The startWS administrative method starts an WebSocket based JSON RPC API webserver to handle client requests
     *  All the parameters are optional
     * @param host Network interface to open the listener socket on (defaults to &quot;localhost&quot;)
     * @param port Network port to open the listener socket on (defaults to 8546)
     * @param cors cross-origin resource sharing header to use (defaults to &quot;&quot;)
     * @param apis API modules to offer over this interface (defaults to &quot;etd,net,web3&quot;)
     * @return wEBlistenerOpen A boolean flag specifying whether the WebSocket RPC listener was opened or not. Please note, only one WebSocket endpoint is allowed to be active at any time.
     */
    Admin.prototype.startWS = function (host, port, cors, apis) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default.post(this.url, {
                            method: "admin_startRPC",
                            params: [host, port, cors, apis],
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
     * The stopRPC administrative method closes the currently open HTTP RPC endpoint
     *  As the node can only have a single HTTP endpoint running, this method takes no parameters, returning a boolean whether the endpoint was closed or not
     * @return hTTPendpointClosed A boolean indicating whether the endpoint was closed or not.
     */
    Admin.prototype.stopRPC = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default.post(this.url, {
                            method: "admin_stopRPC",
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
     * The stopWS administrative method closes the currently open WebSocket RPC endpoint
     *  As the node can only have a single WebSocket endpoint running, this method takes no parameters, returning a boolean whether the endpoint was closed or not
     * @return wEBendpointClosed A boolean indicating whether the endpoint was closed or not.
     */
    Admin.prototype.stopWS = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default.post(this.url, {
                            method: "admin_stopWS",
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
    return Admin;
}());
exports.Admin = Admin;
//# sourceMappingURL=admin.js.map