import { registerConstants } from './constants';


export function userDataRequest(data) {
  return {
    type: registerConstants.USER_DATA_REQUEST,
    data
  };
}