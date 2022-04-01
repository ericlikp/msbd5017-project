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
exports.Json_rpc = void 0;
var axios_1 = __importDefault(require("axios"));
/**
* Getd supports all standard web3 JSON-RPC APIs
*  You can find documentation for these APIs on the  Ethereum Wiki JSON-RPC page
*
JSON-RPC is provided on multiple transports
*  Getd supports JSON-RPC over HTTP, WebSocket and Unix  Domain Sockets
*  Transports must be enabled through command-line flags
*
Ethereum JSON-RPC APIs use a name-space system
*  RPC methods are grouped into several categories  depending on their purpose
*  All method names are composed of the namespace, an underscore, and the  actual method name within the namespace
*  For example, the eth_call method resides in the etd  namespace
*
Access to RPC methods can be enabled on a per-namespace basis
*  Find documentation for individual  namespaces in the sidebar
*/
var Json_rpc = /** @class */ (function () {
    function Json_rpc(baseURL, port) {
        this.baseURL = baseURL;
        this.port = port;
        this.url = port ? baseURL + ":" + port : baseURL;
    }
    /**
  * To enable the HTTP server, use the --http flag
  *  &#39;Getd --http&#39;
  By default, Getd accepts connections from the loopback interface (127
  * 0
  * 0
  * 1)
  *  The default  listening port is 8545
  *  You can customize address and port using  the --http
  * port and --http
  * addr flags
  *  &#39;Getd --http --http
  * port 3334&#39;
  JSON-RPC method namespaces must be whitelisted in order to be available through the HTTP server
  *   An RPC error with error code -32602 is generated if you call a namespace that isn’t whitelisted
  *   The default whitelist allows access to the “etd” and “shh” namespaces
  *  To enable access to  other APIs like account management (“personal”) and debugging (“debug”), they must be  configured via the --http
  * api flag
  *  We do not recommend enabling such APIs over HTTP,  however, since access to these methods increases the attack surface
  *  &#39;Getd --http --http
  * api personal,etd,net,web3&#39;
  Since the HTTP server is reachable from any local application, additional protection is built  into the server to prevent misuse of the API from web pages
  *  If you want enable access to the  API from a web page, you must configure the server to accept Cross-Origin requests with  the --http
  * corsdomain flag
  *
  Example: if you want to use Remix with Getd, allow requests from the remix domain
  *  &#39;Getd --http --http
  * corsdomain https://remix
  * ethereum
  * org&#39; Use --http
  * corsdomain &#39;*&#39; to enable access from any origin
  */
    Json_rpc.prototype.HTTPServer = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default.post(this.url, {
                            method: "json_rpc_HTTP Server",
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
  * Configuration of the WebSocket endpoint is similar to the HTTP transport
  *  To enable WebSocket  access, use --ws flag
  *  The default WebSocket port is 8546
  *   The --ws
  * addr, --ws
  * port and --ws
  * api flags can be used to customize settings for the  WebSocket server
  *  &#39;Getd --ws --ws
  * port 3334 --ws
  * api etd,net,web3&#39;
  Cross-Origin request protection also applies to the WebSocket server
  *   Use the --ws
  * origins flag to allow access to the server from web pages: &#39;Getd --ws --ws
  * origins http://myapp
  * example
  * com&#39;
  As with --http
  * corsdomain, using --ws
  * origins &#39;*&#39; allows access from any origin
  */
    Json_rpc.prototype.WebSocketServer = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default.post(this.url, {
                            method: "json_rpc_WebSocket Server",
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
  * JSON-RPC APIs are also provided on a UNIX domain socket
  *  This server is enabled by default  and has access to all JSON-RPC namespaces
  *
  The listening socket is placed into the data directory by default
  *  On Linux and macOS, the  default location of the Getd socket is ~/
  * ethereum/Getd
  * ipc
  On Windows, IPC is provided via named pipes
  *  The default location of the Getd pipe is: //
  * /pipe/Getd
  * ipc
  You can configure the location of the socket using the --ipcpath flag
  *  IPC can be disabled  using the --ipcdisable flag
  */
    Json_rpc.prototype.IPCServer = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default.post(this.url, {
                            method: "json_rpc_IPC Server",
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
    return Json_rpc;
}());
exports.Json_rpc = Json_rpc;
//# sourceMappingURL=json_rpc.js.map