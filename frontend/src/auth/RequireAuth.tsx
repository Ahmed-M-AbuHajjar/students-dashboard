import React, { ComponentType } from 'react';
import { useSelector } from 'react-redux';
import Login from '../pages/Login/Login';
import { RootState } from '../redux/rootReducer';
// Define props for the HOC
type Props = {};
// Higher-order component (HOC) to handle authentication logic
export default function RequireAuth<T extends Props>(WrappedComponent: ComponentType<T>) {
    // Return a function component
    return function AuthComponent(props: T) {
        // Access the authentication state from Redux store
        const loggedIn = useSelector((state: RootState) => state.auth.loggedIn);
        // Render the wrapped component if user is logged in, otherwise render the Login page
        if (loggedIn) {
            return <WrappedComponent {...props} />;
        }
        return <Login />;
    };
}
