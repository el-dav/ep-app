import { Order, TradeType, TIF, OrderType } from 'types';

export const testOrderData: Order[] = [
  {
    tradeType: TradeType.BUY,
    symbol: 'MSFT',
    qty: 100,
    price: 99.25,
    orderType: OrderType.MARKET,
    tif: TIF.IOC,
    stopPrice: 100.25,
    comment: 'Really good trade'
  },
  {
    tradeType: TradeType.SELL,
    symbol: 'AAPL',
    qty: 50,
    price: 80.99,
    orderType: OrderType.LIMIT,
    tif: TIF.GTC,
    stopPrice: 80.25
  },
  {
    tradeType: TradeType.BUY,
    symbol: 'MSFT',
    qty: 100,
    price: 99.25,
    orderType: OrderType.MARKET,
    tif: TIF.IOC,
    stopPrice: 100.25,
    comment: 'Really good trade'
  },
  {
    tradeType: TradeType.SELL,
    symbol: 'AAPL',
    qty: 50,
    price: 80.99,
    orderType: OrderType.LIMIT,
    tif: TIF.GTC,
    stopPrice: 80.25
  },
  {
    tradeType: TradeType.BUY,
    symbol: 'MSFT',
    qty: 100,
    price: 99.25,
    orderType: OrderType.MARKET,
    tif: TIF.IOC,
    stopPrice: 100.25,
    comment: 'Really good trade'
  },
  {
    tradeType: TradeType.SELL,
    symbol: 'AAPL',
    qty: 50,
    price: 80.99,
    orderType: OrderType.LIMIT,
    tif: TIF.GTC,
    stopPrice: 80.25
  },
  {
    tradeType: TradeType.BUY,
    symbol: 'MSFT',
    qty: 100,
    price: 99.25,
    orderType: OrderType.MARKET,
    tif: TIF.IOC,
    stopPrice: 100.25,
    comment: 'Really good trade'
  },
  {
    tradeType: TradeType.SELL,
    symbol: 'AAPL',
    qty: 50,
    price: 80.99,
    orderType: OrderType.LIMIT,
    tif: TIF.GTC,
    stopPrice: 80.25
  },
  {
    tradeType: TradeType.BUY,
    symbol: 'MSFT',
    qty: 100,
    price: 99.25,
    orderType: OrderType.MARKET,
    tif: TIF.IOC,
    stopPrice: 100.25,
    comment: 'Really good trade'
  },
  {
    tradeType: TradeType.SELL,
    symbol: 'AAPL',
    qty: 50,
    price: 80.99,
    orderType: OrderType.LIMIT,
    tif: TIF.GTC,
    stopPrice: 80.25
  },
  {
    tradeType: TradeType.BUY,
    symbol: 'MSFT',
    qty: 100,
    price: 99.25,
    orderType: OrderType.MARKET,
    tif: TIF.IOC,
    stopPrice: 100.25,
    comment: 'Really good trade'
  },
  {
    tradeType: TradeType.SELL,
    symbol: 'AAPL',
    qty: 50,
    price: 80.99,
    orderType: OrderType.LIMIT,
    tif: TIF.GTC,
    stopPrice: 80.25
  },
  {
    tradeType: TradeType.BUY,
    symbol: 'MSFT',
    qty: 100,
    price: 99.25,
    orderType: OrderType.MARKET,
    tif: TIF.IOC,
    stopPrice: 100.25,
    comment: 'Really good trade'
  },
  {
    tradeType: TradeType.SELL,
    symbol: 'AAPL',
    qty: 50,
    price: 80.99,
    orderType: OrderType.LIMIT,
    tif: TIF.GTC,
    stopPrice: 80.25
  },
  {
    tradeType: TradeType.BUY,
    symbol: 'MSFT',
    qty: 100,
    price: 99.25,
    orderType: OrderType.MARKET,
    tif: TIF.IOC,
    stopPrice: 100.25,
    comment: 'Really good trade'
  },
  {
    tradeType: TradeType.SELL,
    symbol: 'AAPL',
    qty: 50,
    price: 80.99,
    orderType: OrderType.LIMIT,
    tif: TIF.GTC,
    stopPrice: 80.25
  },
  {
    tradeType: TradeType.BUY,
    symbol: 'MSFT',
    qty: 100,
    price: 99.25,
    orderType: OrderType.MARKET,
    tif: TIF.IOC,
    stopPrice: 100.25,
    comment: 'Really good trade'
  },
  {
    tradeType: TradeType.SELL,
    symbol: 'AAPL',
    qty: 50,
    price: 80.99,
    orderType: OrderType.LIMIT,
    tif: TIF.GTC,
    stopPrice: 80.25
  },
  {
    tradeType: TradeType.SELL,
    symbol: 'AAPL',
    qty: 50,
    price: 80.99,
    orderType: OrderType.LIMIT,
    tif: TIF.GTC,
    stopPrice: 80.25,
    comment:
      'Really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really long comment'
  }
];
