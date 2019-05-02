import { action } from 'typesafe-actions';

import { Order } from 'types';

import { OrderConstants } from './constants';

export const submitOrder = (order: Order) =>
  action(OrderConstants.SUBMIT_ORDER, order);
export const createOrder = (order: Order) =>
  action(OrderConstants.CREATE_ORDER, order);
export const processOrder = (order: Order) =>
  action(OrderConstants.PROCESS_ORDER, order);
