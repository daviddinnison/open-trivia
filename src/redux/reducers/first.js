import { TEST } from '../actions/first';

const initialState = {
  test: 'the test has not run'
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'TEST': {
      return Object.assign({}, state, {
        test: 'the test has finished'
      });
    }
    default:
      return state;
  }
}
