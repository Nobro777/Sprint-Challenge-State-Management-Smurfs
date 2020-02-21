import {
    FETCHING_SMURF_START,
    FETCHING_SMURF_SUCCESS,
    FETCHING_SMURF_FAILURE,
    POST_SMURF_START,
    POST_SMURF_SUCCESS,
    POST_SMURF_FAILURE
} from "../actions/index";

const initialState = {
    smurfs: [],
    isLoading: false
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_SMURF_START:
            return {
                ...state,
                isLoading: true
            }
        case FETCHING_SMURF_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                isLoading: false
            }
        case FETCHING_SMURF_FAILURE:
            return {
                ...state,
                isLoading: false
            }
        case POST_SMURF_START:
            return {
                ...state,
                isLoading: true
            }
        case POST_SMURF_SUCCESS:
            return {
                ...state,
                isLoading: false,
                smurfs: [...state.smurfs, action.payload]
            }
        case POST_SMURF_FAILURE:
            return {
                ...state,
                isLoading: false
            }
        default:
        return state
    }
}