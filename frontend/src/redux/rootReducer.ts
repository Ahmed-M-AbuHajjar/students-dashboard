import { combineReducers, Reducer } from "redux";
import { ThemeState, themeReducer } from "./store/themeReducer";
import { AnnouncementsState, announcementsReducer } from "./store/announcementsReducer";
import { QuizState, quizReducer } from "./store/quizReducer";
import { AuthState, authReducer } from "./store/authReducer";

// Define the root state of the application
export interface RootState {
    auth: AuthState;
    theme: ThemeState;
    announceData: AnnouncementsState;
    quizData: QuizState;
}
// Combine individual reducers into a single rootReducer
const rootReducer: Reducer<RootState> = combineReducers<RootState>({
    auth: authReducer,
    theme: themeReducer,
    announceData: announcementsReducer,
    quizData: quizReducer,
});

export default rootReducer;
