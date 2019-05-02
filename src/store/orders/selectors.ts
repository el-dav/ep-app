import { createSelector } from 'reselect';

import { AppState } from 'store';

export const selectState = (state: AppState) => state.orders;
export const selectOrders = createSelector(
  [selectState],
  state => Object.values(state)
);
