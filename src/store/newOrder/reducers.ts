import { ActionType } from 'typesafe-actions';

import { NewOrderStatus } from 'types';

import * as actions from './actions';
import { NewOrderConstants } from './constants';

export type State = Readonly<{
  status: NewOrderStatus;
  message: string;
  lastUpdated: string;
}>;

export type Action = ActionType<typeof actions>;

const initialState: State = {
  status: NewOrderStatus.DEFAULT,
  message: '',
  lastUpdated: ''
};

const orders = (state = initialState, action: Action): State => {
  switch (action.type) {
    case NewOrderConstants.SET_NEW_ORDER_STATUS: {
      return {
        ...state,
        status: action.payload.status,
        message:
          action.payload.status === NewOrderStatus.ERROR
            ? action.payload.message
            : ''
      };
    }
    case NewOrderConstants.SET_LAST_UPDATED: {
      return {
        ...state,
        lastUpdated: new Date().toTimeString()
      };
    }
    default:
      return state;
  }
};

export default orders;
