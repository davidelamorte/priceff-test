import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';

import { reducers } from './reducers';
import { rootSaga } from './sagas';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();
export const configureStore = ({
  history,
  middlewares = []
}) => {
  const store = createStore(
    reducers(history),
    composeEnhancers(applyMiddleware(
      routerMiddleware(history),
      sagaMiddleware,
      ...middlewares
    ))
  );
  sagaMiddleware.run(rootSaga);
  return store;
};