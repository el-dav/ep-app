import { combineEpics } from 'redux-observable';
import { delay, scan, map, filter, mergeMap } from 'rxjs/operators';
import { isOfType } from 'typesafe-actions';

import { AppEpic } from 'store';
import { setNewOrderStatus, setLastUpdated } from 'store/newOrder/actions';
import { NewOrderStatus, Order } from 'types';

import { processOrder, createOrder } from './actions';
import { OrderConstants } from './constants';

export const ERROR_MESSAGE = 'Order time has elapsed';
export const SERVER_DELAY = 2000;
export const ERROR_FREQUENCY = 10;

export const onSubmitOrder: AppEpic = (action$, state$) =>
  action$.pipe(
    filter(isOfType(OrderConstants.SUBMIT_ORDER)),
    mergeMap(({ payload }) => [
      processOrder(payload),
      setNewOrderStatus({
        status: NewOrderStatus.SUBMITTING
      })
    ])
  );

type OrderWithCount = [Order, number];

export const onProcessOrder: AppEpic = (action$, state$) =>
  action$.pipe(
    filter(isOfType(OrderConstants.PROCESS_ORDER)),
    delay(SERVER_DELAY),
    map(({ payload }) => [payload, 1] as OrderWithCount),
    scan(([_, count], [order, increase]) => [order, count + increase]),
    mergeMap(([order, count]) => {
      if (count % ERROR_FREQUENCY === 0) {
        return [
          setNewOrderStatus({
            status: NewOrderStatus.ERROR,
            message: ERROR_MESSAGE
          })
        ];
      }
      return [
        createOrder(order),
        setNewOrderStatus({
          status: NewOrderStatus.DEFAULT
        }),
        setLastUpdated()
      ];
    })
  );

export default combineEpics(onSubmitOrder, onProcessOrder);
