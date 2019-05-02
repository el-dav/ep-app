import { ActionType } from 'typesafe-actions';
import { v4 as uuid } from 'uuid';

import { Order } from 'types';

import * as actions from './actions';
import { OrderConstants } from './constants';

export type State = Readonly<{
  [orderId: string]: Order;
}>;

export type Action = ActionType<typeof actions>;

const initialState: State = {};

const orders = (state = initialState, action: Action): State => {
  switch (action.type) {
    case OrderConstants.CREATE_ORDER:
      return { ...state, [uuid()]: action.payload };
    default:
      return state;
  }
};

export default orders;
