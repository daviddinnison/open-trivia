import { DATA_FAILED, DATA_SUCCESS, TEST } from '../actions/first';

const initialState = {
  loggedIn: false
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'DATA_FAILED': {
      return Object.assign({}, state, {
        error: action.message
      });
    }
   
    default:
      return state;
  }
}
