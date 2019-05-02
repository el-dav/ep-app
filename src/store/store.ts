import { applyMiddleware, compose, createStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import { reducers, AppAction, AppState } from './reducers';
import { epics } from './epics';

const epicMiddleware = createEpicMiddleware<AppAction, AppAction, AppState>();

export const store = createStore(
  reducers,
  compose(applyMiddleware(epicMiddleware))
);

epicMiddleware.run(epics);
