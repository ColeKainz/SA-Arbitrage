import { BinanceApiClient } from "binance-api-client";
import {TickerInfoUpdate, Updater} from "./BinanceUpdaters";
import { ExchangeInfoUpdate } from "./BinanceUpdaters";
import {TIMEOUT} from "dns";

class BinanceObserver {
    private static _client: BinanceApiClient;
    private static exchangeObservers: [ExchangeInfoUpdate];
    private static tickerObservers: [TickerInfoUpdate];

    public static readonly TIMEOUT = 10;
    private constructor(){}

    public static set subject(client: BinanceApiClient) {
        this._client = client;
    }

    public static get subject() {
        return this._client;
    }

    public static observeExchangeInfo(observer: ExchangeInfoUpdate) {
        this.exchangeObservers.push(observer);
    }

    public static observeTickerUpdates(observer: TickerInfoUpdate) {
        this.tickerObservers.push(observer);
    }

    public static requestExchangeInfoUpdate() {
        this._client.getExchangeInfo()
            .then(this.success(this.exchangeObservers))
            .catch(this.caught);
    }

    public static startTickerUpdater() {
        this._client.monitorAllTickers(
            this.success(this.tickerObservers),
            this.TIMEOUT,
            this.lost("AllTickers")
        );
    }

    //Have things conform to an error callback yo
    public static caught(error: Error) {
        console.log(error.message)
    }

    private static success<Result>(observers: [Updater<Result>]): (result: Result) => void {
        return result => {
            observers.forEach(observer => {
                observer(result);
            });
        }
    }

    private static lost(eventName: string): any {
        console.log(eventName + ": Lost connection.");
        return null;
    }
}