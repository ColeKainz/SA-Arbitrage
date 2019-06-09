"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var binance_api_client_1 = require("binance-api-client");
var BinanceSingleton = /** @class */ (function () {
    function BinanceSingleton() {
    }
    Object.defineProperty(BinanceSingleton, "client", {
        get: function () {
            return this._client || (this._client = new binance_api_client_1.BinanceApiClient());
        },
        enumerable: true,
        configurable: true
    });
    return BinanceSingleton;
}());
//# sourceMappingURL=BinanceSingleton.js.map