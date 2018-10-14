import { USER_DATA_REQUEST } from '../actions/user/user';

const initialState = {
  loggedIn: true,
  data: {
    name: '',
    categories: []
  }
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'USER_DATA_REQUEST': {
      return Object.assign({}, state, {
        data: action.data
      });
    }

    default:
      return state;
  }
}
