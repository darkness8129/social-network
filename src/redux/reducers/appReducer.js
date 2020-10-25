import * as ActionTypes from '../actionTypes';
import { initializeSuccess } from '../actionCreators';
import { getAuth } from './authReducer';

const initialState = {
    initialized: false
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.INITIALIZE_SUCCESS:
            return { ...state, initialized: true };
        default:
            return state;
    }
}
export const initialize = () => async (dispatch) => {
    await dispatch(getAuth());
    dispatch(initializeSuccess());
}

export default appReducer;