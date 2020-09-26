import { combineReducers } from 'redux';
import counter, { counterSaga } from './counter';
import { all } from 'redux-saga/effects';

const rootReducer = combineReducers({
  counter,
});

export function* rootSaga() {
  yield all([ // 배열 : 여러개의 사가
    counterSaga(),
  ]); 
}

export default rootReducer;