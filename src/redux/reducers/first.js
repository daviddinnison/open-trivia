import { DATA_FAILED, DATA_SUCCESS, TEST } from '../actions/first';

const initialState = {
  data: [],
  error: false,
  test: 'the test has not run'
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'DATA_FAILED': {
      return Object.assign({}, state, {
        error: action.message
      });
    }
    case 'DATA_SUCCESS': {
      return Object.assign({}, state, {
        data: action.data
      });
    }

    case 'TEST': {
      return Object.assign({}, state, {
        test: 'the test has finished'
      });
    }
    default:
      return state;
  }
}
