"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BinanceObserver = /** @class */ (function () {
    function BinanceObserver() {
    }
    Object.defineProperty(BinanceObserver, "subject", {
        get: function () {
            return this._client;
        },
        set: function (client) {
            this._client = client;
        },
        enumerable: true,
        configurable: true
    });
    BinanceObserver.observeExchangeInfo = function (observer) {
        this.exchangeObservers.push(observer);
    };
    BinanceObserver.observeTickerUpdates = function (observer) {
        this.tickerObservers.push(observer);
    };
    BinanceObserver.startExchangeInfoUpdater = function () {
        this._client.getExchangeInfo()
            .then(self.success())
            .catch(this.caught);
    };
    BinanceObserver.caught = function (error) {
        console.log(error.message);
    };
    BinanceObserver.success = function (observers) {
        observers.forEach(function (observer) {
            observer(value);
        });
    };
    return BinanceObserver;
}());
//# sourceMappingURL=binance-singleton.js.map