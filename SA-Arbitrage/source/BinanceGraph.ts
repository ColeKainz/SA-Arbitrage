import {Edge, Graph} from "graphlib"

interface provideCoinData { (data: StringTuple): CoinExchangeData; }
interface provideExchangeCount { (): Number }

class BinanceGraph extends Graph {
    public datasource: BinanceGraphDatasource;

    public refreshData() {
        if (this.datasource != null) {
            this.edges().forEach( function(edge: Edge) {
                this.datasource([edge.v, edge.w]);
            });
        }
    }
}