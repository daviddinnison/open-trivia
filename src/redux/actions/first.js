import { DATA_FAILED, DATA_REQUEST, DATA_SUCCESS, TEST } from './constants';

export function dataFailed(msg) {
  return {
    type: DATA_FAILED,
    error: msg
  };
}

export function dataRequest(msg) {
  return {
    type: DATA_REQUEST,
    error: msg
  };
}

export function dataSuccess(data) {
  return {
    type: DATA_SUCCESS,
    data: data
  };
}

export function test() {
  return {
    type: TEST
  };
}
