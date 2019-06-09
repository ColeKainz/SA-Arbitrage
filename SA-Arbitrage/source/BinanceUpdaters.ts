import { ExchangeInfo } from "binance-api-client"
import { TickerUpdate } from "binance-api-client"

export interface Updater<T> { (update: T) }
export interface ExchangeInfoUpdate extends Updater<ExchangeInfo> { (update: ExchangeInfo) }
export interface TickerInfoUpdate extends Updater<TickerUpdate>{ (update: TickerUpdate) }