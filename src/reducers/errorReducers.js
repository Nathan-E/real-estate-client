import { SET_ERRORS } from '../pages/login-signup/constants/types';
const initialState = {};
export default function(state = initialState, action) {
  switch (action.type) {
    case SET_ERRORS:
      return action.payload;
    default:
      return state;
  }
}