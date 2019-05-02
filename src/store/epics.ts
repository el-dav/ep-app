import { combineEpics } from 'redux-observable';

import orders from './orders/epics';

export const epics = combineEpics(orders);
