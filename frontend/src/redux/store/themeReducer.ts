export interface ThemeState {
    sidebar: boolean;
}
// Define the initial state for the theme
const initialState: ThemeState = {
    sidebar: false
};
// Define action types
const SET_SIDEBAR = 'SET_SIDEBAR';
// Define action interfaces
interface SetSidebarAction {
    type: typeof SET_SIDEBAR;
    payload: boolean;
}
// Define the action type
type ThemeActionTypes = SetSidebarAction;
// Define the theme reducer function
export const themeReducer = (state = initialState, action: ThemeActionTypes): ThemeState => {
    switch (action.type) {
        case SET_SIDEBAR:
            return {
                ...state,
                sidebar: action.payload,
            };
        default:
            return state;
    }
};

// Define action creator to set the sidebar state
export const setSidebar = (currentState: boolean): SetSidebarAction => ({
    type: SET_SIDEBAR,
    payload: currentState
});
