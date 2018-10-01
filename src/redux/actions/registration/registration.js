import { registerConstants } from './constants';

export function registerRequest(message) {
  console.log('register request', message);
  return {
    type: registerConstants.REGISTER_REQUEST,
    message
  };
}

export function registerSuccess(message) {
  return {
    type: registerConstants.REGISTER_SUCCESS,
    message
  };
}
