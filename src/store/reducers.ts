import { combineReducers, Store, Dispatch } from 'redux';
import { Epic } from 'redux-observable';

import orders, { Action as CountAction } from './orders/reducers';
import newOrder, { Action as NewOrderAction } from './newOrder/reducers';

export type AppAction = CountAction | NewOrderAction;

export const reducers = combineReducers({
  orders,
  newOrder
});

export type AppState = ReturnType<typeof reducers>;

export const initialAppState = reducers(undefined, { type: '' });

export type AppStore = Store<AppState>;

export type AppEpic = Epic<AppAction, AppAction, AppState>;

export type AppDispatch = Dispatch<AppAction>;
