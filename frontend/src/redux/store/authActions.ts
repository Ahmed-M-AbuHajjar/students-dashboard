import { Dispatch } from 'redux';
import { LOG_IN, LOG_OUT } from './authAuctionTypes';

// Define action types
interface LogInAction {
    type: typeof LOG_IN;
}

interface LogOutAction {
    type: typeof LOG_OUT;
}

type AuthActionTypes = LogInAction | LogOutAction;

// Action creators
export const logIn = (): LogInAction => {
    return {
        type: LOG_IN
    };
};

export const logOut = (): LogOutAction => {
    localStorage.removeItem('persistentState');
    return {
        type: LOG_OUT
    };
};

// Thunk action creator (if needed)
export const asyncLogOut = () => {
    return (dispatch: Dispatch<AuthActionTypes>) => {
        // You can perform async operations here, like fetching data
        localStorage.removeItem('persistentState');
        dispatch(logOut());
    };
};
