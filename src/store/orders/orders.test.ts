import { Subject } from 'rxjs';
import { TestScheduler } from 'rxjs/testing';
import { ActionsObservable, StateObservable } from 'redux-observable';
import { action } from 'typesafe-actions';

import { initialAppState, AppState } from 'store';
import { setNewOrderStatus, setLastUpdated } from 'store/newOrder/actions';
import { Order, TradeType, OrderType, TIF, NewOrderStatus } from 'types';

import * as actions from './actions';
import * as selectors from './selectors';
import * as epics from './epics';
import ordersReducer, { State } from './reducers';

const existingOrder = {
  tradeType: TradeType.SELL,
  symbol: 'MMM',
  qty: 90,
  price: 60.25,
  orderType: OrderType.LIMIT,
  tif: TIF.GTC,
  stopPrice: 80.25,
  comment: 'Really bad trade'
};

const state: State = {
  '1': existingOrder
};
const appState: AppState = { ...initialAppState, orders: state };

const newOrder: Order = {
  tradeType: TradeType.BUY,
  symbol: 'MSFT',
  qty: 100,
  price: 99.25,
  orderType: OrderType.MARKET,
  tif: TIF.IOC,
  stopPrice: 100.25,
  comment: 'Really good trade'
};

describe('orders reducer', () => {
  describe('actions', () => {
    describe('other actions', () => {
      it('should not respond', () => {
        expect(ordersReducer(state, actions.submitOrder(newOrder))).toEqual(
          state
        );
        expect(ordersReducer(state, actions.processOrder(newOrder))).toEqual(
          state
        );
      });
    });

    describe('createOrder', () => {
      it('should have one more entry after createOrder', () => {
        const newState = ordersReducer(state, actions.createOrder(newOrder));
        const oldEntriesLength = Object.values(state).length;
        const entriesLength = Object.values(newState).length;
        expect(entriesLength).toBe(oldEntriesLength + 1);
      });

      it('should create a new entry with the data from the new order', () => {
        const newState = ordersReducer(state, actions.createOrder(newOrder));
        const newEntry = Object.values(
          ordersReducer(state, actions.createOrder(newOrder))
        ).find(order => order.symbol === newOrder.symbol);
        expect(newEntry).toEqual(newOrder);
      });
    });
  });

  describe('selectors', () => {
    it('should selectState', () => {
      expect(selectors.selectState(appState)).toBe(state);
    });

    it('should selectOrders', () => {
      const entries = Object.values(state).length;
      expect(selectors.selectOrders(appState).length).toBe(entries);
      expect(selectors.selectOrders(appState)[0]).toEqual(state['1']);
    });
  });

  describe('epics', () => {
    let store$: Subject<AppState>;
    let state$: StateObservable<AppState>;
    let scheduler: TestScheduler;

    beforeEach(() => {
      store$ = new Subject<AppState>();
      state$ = new StateObservable<AppState>(store$, initialAppState);
      scheduler = new TestScheduler((actual, expected) => {
        expect(actual).toEqual(expected);
      });
    });

    describe('onSubmitOrder', () => {
      it('should not respond to random actions', () => {
        const marbles1 = '-a--a--';
        const marbles2 = '-------';
        const values = {
          a: action('Action')
        };

        scheduler.run(({ cold, expectObservable, expectSubscriptions }) => {
          const e1 = cold(marbles1, values);
          const expected = marbles2;
          const action$ = ActionsObservable.from(e1) as any;
          expectObservable(epics.onSubmitOrder(action$, state$, {})).toBe(
            expected
          );
        });
      });

      it('should trigger processOrder and setNewOrderStatus SUBMITTING', () => {
        const marbles1 = '-  a   -';
        const marbles2 = '- (bc) -';
        const values1 = {
          a: actions.submitOrder(newOrder)
        };
        const values2 = {
          b: actions.processOrder(newOrder),
          c: setNewOrderStatus({ status: NewOrderStatus.SUBMITTING })
        };

        scheduler.run(({ cold, expectObservable, expectSubscriptions }) => {
          const e1 = cold(marbles1, values1);
          const expected = marbles2;
          const action$ = ActionsObservable.from(e1) as any;
          expectObservable(epics.onSubmitOrder(action$, state$, {})).toBe(
            expected,
            values2
          );
        });
      });

      describe('onProcessOrder', () => {
        it('should not respond to random actions', () => {
          const marbles1 = '-a--a--';
          const marbles2 = '-------';
          const values = {
            a: action('Action')
          };

          scheduler.run(({ cold, expectObservable }) => {
            const e1 = cold(marbles1, values);
            const expected = marbles2;
            const action$ = ActionsObservable.from(e1) as any;
            expectObservable(epics.onProcessOrder(action$, state$, {})).toBe(
              expected
            );
          });
        });

        it('should trigger processOrder and setNewOrderStatus SUBMITTING', () => {
          const marbles1 = '-          a                    -';
          const marbles2 = `- ${epics.SERVER_DELAY}ms (bcd) -`;
          const values1 = {
            a: actions.processOrder(newOrder)
          };
          const values2 = {
            b: actions.createOrder(newOrder),
            c: setNewOrderStatus({ status: NewOrderStatus.DEFAULT }),
            d: setLastUpdated()
          };

          scheduler.run(({ cold, expectObservable }) => {
            const e1 = cold(marbles1, values1);
            const expected = marbles2;
            const action$ = ActionsObservable.from(e1) as any;
            expectObservable(epics.onProcessOrder(action$, state$, {})).toBe(
              expected,
              values2
            );
          });
        });

        it('should trigger an error on the 10th submit', () => {
          // const marbles1 = '-          a                    -'.repeat(10);
          // const marbles2 = `${`- ${epics.SERVER_DELAY}ms (bcd) -`.repeat(9)}- ${
          //   epics.SERVER_DELAY
          // }ms e -`;

          const marbles1 = `-a ${epics.SERVER_DELAY}ms  ----`.repeat(10);
          const marbles2 =
            `-  ${epics.SERVER_DELAY}ms (bcd)`.repeat(9) +
            `-  ${epics.SERVER_DELAY}ms e`;

          const values1 = {
            a: actions.processOrder(newOrder)
          };
          const values2 = {
            b: actions.createOrder(newOrder),
            c: setNewOrderStatus({ status: NewOrderStatus.DEFAULT }),
            d: setLastUpdated(),
            e: setNewOrderStatus({
              status: NewOrderStatus.ERROR,
              message: epics.ERROR_MESSAGE
            })
          };

          scheduler.run(({ cold, expectObservable }) => {
            const e1 = cold(marbles1, values1);
            const expected = marbles2;
            const action$ = ActionsObservable.from(e1) as any;
            expectObservable(epics.onProcessOrder(action$, state$, {})).toBe(
              expected,
              values2
            );
          });
        });
      });
    });
  });
});
