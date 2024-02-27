import { createStore, applyMiddleware, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk, { ThunkMiddleware } from "redux-thunk";
import rootReducer, { RootState }  from "./rootReducer";

// Define middleware types
type ThunkAction = ThunkMiddleware<RootState, any>;

// Load state from local storage
function loadFromLocalStorage(): RootState | undefined {
    try {
        const serializedState = localStorage.getItem("persistentState");
        if (serializedState === null) return undefined;
        return JSON.parse(serializedState);
    } catch (err) {
        console.warn(err);
        return undefined;
    }
}

// Save state to local storage
function saveToLocalStorage(state: RootState): void {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem("persistentState", serializedState);
    } catch (err) {
        console.warn(err);
    }
}

// Create store with rootReducer, initial state, and middleware
const store: Store<RootState> = createStore(
    rootReducer,
    loadFromLocalStorage(),
    composeWithDevTools(applyMiddleware(thunk as ThunkAction))
);

// Subscribe to store changes and save to local storage
store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
