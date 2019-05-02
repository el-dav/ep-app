import { initialAppState, AppState } from 'store';
import { NewOrderStatus, NewOrderStatusUpdate } from 'types';

import * as actions from './actions';
import * as selectors from './selectors';
import ordersReducer, { State } from './reducers';

const state: State = {
  status: NewOrderStatus.DEFAULT,
  message: '',
  lastUpdated: ''
};
const appState: AppState = { ...initialAppState, newOrder: state };

const defaultOrderStatusUpdate: NewOrderStatusUpdate = {
  status: NewOrderStatus.DEFAULT
};

const submittingOrderStatusUpdate: NewOrderStatusUpdate = {
  status: NewOrderStatus.SUBMITTING
};

const errorOrderStatusUpdate: NewOrderStatusUpdate = {
  status: NewOrderStatus.ERROR,
  message: 'A message'
};

describe('orders reducer', () => {
  describe('actions', () => {
    describe('setLastUpdate', () => {
      it('should handle setLastUpdated', () => {
        const newState = ordersReducer(state, actions.setLastUpdated());
        expect(newState.lastUpdated.length).toBeGreaterThan(0);
        expect(typeof newState.lastUpdated).toBe('string');
      });
    });

    describe('setNewOrderStatus', () => {
      it('should handle SUBMITTING', () => {
        const newState = ordersReducer(
          state,
          actions.setNewOrderStatus(submittingOrderStatusUpdate)
        );
        expect(newState.message).toBe('');
        expect(newState.status).toBe(NewOrderStatus.SUBMITTING);
      });

      it('should handle ERROR', () => {
        const newState = ordersReducer(
          state,
          actions.setNewOrderStatus(errorOrderStatusUpdate)
        );
        expect(newState.message).toBe(errorOrderStatusUpdate.message);
        expect(newState.status).toBe(NewOrderStatus.ERROR);
      });

      it('should handle Default', () => {
        const testState: State = {
          ...state,
          status: NewOrderStatus.ERROR,
          message: 'Hello there'
        };

        const newState = ordersReducer(
          testState,
          actions.setNewOrderStatus(defaultOrderStatusUpdate)
        );
        expect(newState.message).toBe('');
        expect(newState.status).toBe(NewOrderStatus.DEFAULT);
      });
    });
  });

  describe('selectors', () => {
    it('should selectState', () => {
      expect(selectors.selectState(appState)).toBe(state);
    });

    it('should selectTotal', () => {
      const lastUpdated = new Date().toTimeString();

      const testAppState: AppState = {
        ...appState,
        newOrder: {
          ...state,
          lastUpdated
        }
      };

      expect(selectors.selectLastUpdated(testAppState)).toBe(lastUpdated);
    });

    it('should selectMessage', () => {
      const message = 'This is a test message';

      const testAppState: AppState = {
        ...appState,
        newOrder: {
          ...state,
          message
        }
      };

      expect(selectors.selectMessage(testAppState)).toBe(message);
    });

    it('should selectStatus', () => {
      const status = NewOrderStatus.ERROR;

      const testAppState: AppState = {
        ...appState,
        newOrder: {
          ...state,
          status: NewOrderStatus.ERROR
        }
      };

      expect(selectors.selectStatus(testAppState)).toBe(status);
    });

    it('should selectStatusIsSubmitting', () => {
      const testAppStateSubmitting: AppState = {
        ...appState,
        newOrder: {
          ...state,
          status: NewOrderStatus.SUBMITTING
        }
      };
      const testAppStateNotSubmitting: AppState = {
        ...appState,
        newOrder: {
          ...state,
          status: NewOrderStatus.ERROR
        }
      };

      expect(selectors.selectStatusIsSubmitting(testAppStateSubmitting)).toBe(
        true
      );
      expect(
        selectors.selectStatusIsSubmitting(testAppStateNotSubmitting)
      ).toBe(false);
    });

    it('should selectStatusError', () => {
      const message = 'This is a message';

      const testAppStateWithError: AppState = {
        ...appState,
        newOrder: {
          ...state,
          message,
          status: NewOrderStatus.ERROR
        }
      };
      const testAppStateWithoutError: AppState = {
        ...appState,
        newOrder: {
          ...state,
          message,
          status: NewOrderStatus.SUBMITTING
        }
      };

      expect(selectors.selectStatusError(testAppStateWithError)).toBe(message);
      expect(selectors.selectStatusError(testAppStateWithoutError)).toBe('');
    });
  });
});
