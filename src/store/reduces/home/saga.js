import { COUNT_ADD, count_add } from './reducer';
import { fork, call, put, takeEvery, takeLatest, select, throttle, take } from 'redux-saga/effects';
import { fetchGetCates } from '@/utils/api.js';

export function* countSaga(){
  yield takeLatest(COUNT_ADD, countAdd);
}

export function* countAdd(){
  const res = yield call(fetchGetCates, {});
  console.log(res, 'res');
  const state = yield select();
  console.log(state, 'state');
  yield put(count_add.success.action({count: res.data}));
}