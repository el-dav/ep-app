import { TradeType } from './TradeType';
import { OrderType } from './OrderType';
import { TIF } from './TIF';

export type Order = {
  tradeType: TradeType;
  symbol: string;
  qty: number;
  price: number;
  orderType: OrderType;
  tif: TIF;
  stopPrice: number;
  comment?: string;
};
