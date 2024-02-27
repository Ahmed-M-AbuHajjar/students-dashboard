import axios, { AxiosResponse } from 'axios';
import { Dispatch } from 'redux';

// Define types for state
interface Announcement {
    teacherName: string;
    courseCode: string;
    id: string;
    title: string;
    content: string;
}

export interface AnnouncementsState {
    loading: boolean;
    announcements: Announcement[];
    error: string;
}

// Initial State
const initialState: AnnouncementsState = {
    loading: false,
    announcements: [],
    error: ''
};

// Action Types
const FETCH_ANNOUNCEMENTS_REQUEST = 'FETCH_ANNOUNCEMENTS_REQUEST' as const;
const FETCH_ANNOUNCEMENTS_SUCCESS = 'FETCH_ANNOUNCEMENTS_SUCCESS' as const;
const FETCH_ANNOUNCEMENTS_FAILURE = 'FETCH_ANNOUNCEMENTS_FAILURE' as const;

// Define Action types
interface FetchAnnouncementsRequestAction {
    type: typeof FETCH_ANNOUNCEMENTS_REQUEST;
}

interface FetchAnnouncementsSuccessAction {
    type: typeof FETCH_ANNOUNCEMENTS_SUCCESS;
    payload: Announcement[];
}

interface FetchAnnouncementsFailureAction {
    type: typeof FETCH_ANNOUNCEMENTS_FAILURE;
    payload: string;
}

export type AnnouncementsActionTypes =
    | FetchAnnouncementsRequestAction
    | FetchAnnouncementsSuccessAction
    | FetchAnnouncementsFailureAction;

// Reducer
export const announcementsReducer = (
    state = initialState,
    action: AnnouncementsActionTypes
): AnnouncementsState => {
    switch (action.type) {
        case FETCH_ANNOUNCEMENTS_REQUEST:
            return {
                ...state,
                loading: true
            };
        case FETCH_ANNOUNCEMENTS_SUCCESS:
            return {
                loading: false,
                announcements: action.payload,
                error: ''
            };
        case FETCH_ANNOUNCEMENTS_FAILURE:
            return {
                loading: false,
                announcements: [],
                error: action.payload
            };
        default:
            return state;
    }
};

// Action Creators
const fetchAnnouncementsRequest = (): FetchAnnouncementsRequestAction => {
    return {
        type: FETCH_ANNOUNCEMENTS_REQUEST
    };
};

const fetchAnnouncementsSuccess = (announcements: Announcement[]): FetchAnnouncementsSuccessAction => {
    return {
        type: FETCH_ANNOUNCEMENTS_SUCCESS,
        payload: announcements
    };
};

const fetchAnnouncementsFailure = (error: string): FetchAnnouncementsFailureAction => {
    return {
        type: FETCH_ANNOUNCEMENTS_FAILURE,
        payload: error
    };
};

// Thunk action creator with async
export const fetchAnnouncements = () => {
    return async (dispatch: Dispatch<AnnouncementsActionTypes>) => {
        dispatch(fetchAnnouncementsRequest());
        try {
            const response: AxiosResponse<{ announcements: Announcement[] }> = await axios.get(
                'https://anywarebackend.onrender.com/api/v1/announcement/'
            );
            dispatch(fetchAnnouncementsSuccess(response.data.announcements));
        } catch (error:any) {
            dispatch(fetchAnnouncementsFailure(error.message));
        }
    };
};

