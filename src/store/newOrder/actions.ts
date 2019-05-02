import { action } from 'typesafe-actions';

import { NewOrderStatusUpdate } from 'types';

import { NewOrderConstants } from './constants';

export const setNewOrderStatus = (statusUpdate: NewOrderStatusUpdate) =>
  action(NewOrderConstants.SET_NEW_ORDER_STATUS, statusUpdate);

export const setLastUpdated = () => action(NewOrderConstants.SET_LAST_UPDATED);
