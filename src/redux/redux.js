import React from 'react';

import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer, { rootSaga } from '../reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

const sageMiddleWare = createSagaMiddleware(); // 사가 미들웨어 생성

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(sageMiddleWare, logger) // logger가 마지막
  )
);
sageMiddleWare.run(rootSaga);

export default function ReduxProvider({ children }) {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
};