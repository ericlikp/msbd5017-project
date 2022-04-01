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
exports.Personal = void 0;
var axios_1 = __importDefault(require("axios"));
/**
 * The personal API manages private keys in the key store
 */
var Personal = /** @class */ (function () {
    function Personal(baseURL, port) {
        this.baseURL = baseURL;
        this.port = port;
        this.url = port ? baseURL + ":" + port : baseURL;
    }
    /**
     * Imports the given unencrypted private key (hex string) into the key store, encrypting it with the passphrase
     *  Returns the address of the new account
     * @param priveteKey An unencrypted private key (hex string)
     * @return accountAddress The address of the new account.
     */
    Personal.prototype.importRawKey = function (priveteKey) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default.post(this.url, {
                            method: "personal_importRawKey",
                            params: [priveteKey],
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
     * Returns all the Ethereum account addresses of all keys in the key store
     * @return accountAddress The list of ethereum account addresses
     */
    Personal.prototype.listAccounts = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default.post(this.url, {
                            method: "personal_listAccounts",
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
     * Removes the private key with given address from memory
     *  The account can no longer be used to send transactions
     */
    Personal.prototype.lockAccount = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default.post(this.url, {
                            method: "personal_lockAccount",
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
  * Generates a new private key and stores it in the key store directory
  *  The key file is encrypted with the given passphrase
  *  Returns the address of the new account
  *
  At the Getd console, newAccount will prompt for a passphrase when it is not supplied as the argument
  * @param passphrase The passphrase used to generate a new private key
  * @return priveteKey The generated priveteKey
  */
    Personal.prototype.newAccount = function (passphrase) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default.post(this.url, {
                            method: "personal_newAccount",
                            params: [passphrase],
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
    Personal.prototype.unlockAccount = function (accountAddress, passphrase, unlockDuration) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default.post(this.url, {
                            method: "personal_unlockAccount",
                            params: [accountAddress, passphrase, unlockDuration],
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
    Personal.prototype.sendTransaction = function (tx) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default.post(this.url, {
                            method: "personal_sendTransaction",
                            params: [tx],
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
    Personal.prototype.sign = function (a, b, c) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default.post(this.url, {
                            method: "personal_sign",
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
     * ecRecover returns the address associated with the private key that was used to calculate the signature in personal_sign
     * @param a abcde
     * @param b abcde
     * @return address The address associated with the private key
     */
    Personal.prototype.ecRecover = function (a, b) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default.post(this.url, {
                            method: "personal_ecRecover",
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
    return Personal;
}());
exports.Personal = Personal;
//# sourceMappingURL=personal.js.map