import { getAuth } from './authReducer';

// Initial state
const initialState = {
    initialized: false
};

// Action Types
const INITIALIZE_SUCCESS = 'social-network/app/INITIALIZE_SUCCESS';

// Reducer 
const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZE_SUCCESS:
            return { ...state, initialized: true };
        default:
            return state;
    }
}

// Action Creators 
export const initializeSuccess = () => ({
    type: INITIALIZE_SUCCESS
});

// Thunk Creators
export const initialize = () => async (dispatch) => {
    await dispatch(getAuth());
    dispatch(initializeSuccess());
}

export default appReducer;