import { registerConstants } from './constants';


export function userDataRequest(data) {
  console.log('user data request', data);
  return {
    type: registerConstants.USER_DATA_REQUEST,
    data
  };
}