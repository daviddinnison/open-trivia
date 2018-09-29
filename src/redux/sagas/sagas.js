import { call, put, takeLatest } from 'redux-saga/effects';

// worker Saga
function* fetchData() {
  try {
    const response = yield call(fetch, 'https://jsonplaceholder.typicode.com/users');
    const json = yield call([response, 'json']);
    yield put({ type: 'DATA_SUCCESS', data: json });
  } catch (e) {
    console.log('DATA FAILED----', e);
    yield put({ type: 'DATA_FAILED', message: e.message });
  }
}

// watcher saga
function* rootSaga() {
  yield takeLatest('DATA_REQUEST', fetchData);
}

export default rootSaga;
