import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer, { rootSaga } from './reducer';
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

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));