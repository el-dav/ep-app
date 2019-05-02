import { createSelector } from 'reselect';

import { AppState } from 'store';
import { NewOrderStatus } from 'types';

export const selectState = (state: AppState) => state.newOrder;

export const selectLastUpdated = createSelector(
  [selectState],
  ({ lastUpdated }) => lastUpdated
);

export const selectMessage = createSelector(
  [selectState],
  ({ message }) => message
);

export const selectStatus = createSelector(
  [selectState],
  ({ status }) => status
);

export const selectStatusIsSubmitting = createSelector(
  [selectStatus],
  status => status === NewOrderStatus.SUBMITTING
);

export const selectStatusError = createSelector(
  [selectMessage, selectStatus],
  (message, status) => (status === NewOrderStatus.ERROR ? message : '')
);
