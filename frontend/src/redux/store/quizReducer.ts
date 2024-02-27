import axios from 'axios';

// Define the shape of the state
export interface QuizState {
    quiz:any;
    loading: boolean;
    quizzes: any[]; // Update the type as per your data structure
    error: string;
    title:string;
    topic:string;
    dueTo:Date | null;
}

// Define action types
const FETCH_QUIZ_REQUEST = 'FETCH_QUIZ_REQUEST';
const FETCH_QUIZ_SUCCESS = 'FETCH_QUIZ_SUCCESS';
const FETCH_QUIZ_FAILURE = 'FETCH_QUIZ_FAILURE';

// Define action interfaces
interface FetchQuizRequestAction {
    type: typeof FETCH_QUIZ_REQUEST;
}

interface FetchQuizSuccessAction {
    type: typeof FETCH_QUIZ_SUCCESS;
    payload: any[]; // Update the type as per your data structure
}

interface FetchQuizFailureAction {
    type: typeof FETCH_QUIZ_FAILURE;
    payload: string;
}

// Define the action type
type QuizActionTypes = FetchQuizRequestAction | FetchQuizSuccessAction | FetchQuizFailureAction;

// Define the initial state
const initialState: QuizState = {
    loading: false,
    quizzes: [],
    error: '',
    quiz: '',
    title: '',
    topic: '',
    dueTo:null,
};

// Define the reducer function
export const quizReducer = (state = initialState, action: QuizActionTypes): QuizState => {
    switch (action.type) {
        case FETCH_QUIZ_REQUEST:
            return {
                ...state,
                loading: true
            };
        case FETCH_QUIZ_SUCCESS:
            return {
                ...state,
                loading: false,
                quizzes: action.payload,
                error: ''
            };
        case FETCH_QUIZ_FAILURE:
            return {
                ...state,
                loading: false,
                quizzes: [],
                error: action.payload
            };
        default:
            return state;
    }
};

// Define action creators
export const fetchQuizRequest = (): FetchQuizRequestAction => ({
    type: FETCH_QUIZ_REQUEST
});

export const fetchQuizSuccess = (quiz: any[]): FetchQuizSuccessAction => ({
    type: FETCH_QUIZ_SUCCESS,
    payload: quiz
});

export const fetchQuizFailure = (error: string): FetchQuizFailureAction => ({
    type: FETCH_QUIZ_FAILURE,
    payload: error
});

// Define asynchronous action creator
export const fetchQuizzes = () => {
    return async (dispatch: any) => {
        dispatch(fetchQuizRequest());
        try {
            const response = await axios.get('https://anywarebackend.onrender.com/api/v1/quiz/');
            dispatch(fetchQuizSuccess(response.data.quizzes));
        } catch (error:any) {
            dispatch(fetchQuizFailure(error.message));
        }
    };
};

