import { LOG_IN, LOG_OUT } from './authAuctionTypes';
// Define the interface for the authentication state
export interface AuthState {
  loggedIn: boolean;
}
// Define the action interface
interface AuthAction {
  type: string;
}
// Define the initial state for authentication
const initialState: AuthState = {
  loggedIn: false,
};
// Define the authentication reducer function
export const authReducer = (state: AuthState = initialState, action: AuthAction): AuthState => {
  switch (action.type) {
    case LOG_IN:
      return {
        loggedIn: true
      };
    case LOG_OUT:
      return {
        loggedIn: false
      };
    default:
      return state;
  }
};


