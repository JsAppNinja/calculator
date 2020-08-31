import {
    CALCULATION,
    CALCULATION_SUCCESS,
    CALCULATION_ERROR,
} from './constants';

const initialState = {
    calculation: {
        submitting: null,
        error: null,
        result: null,
        leftValue: 0,
        rightValue: 0,
    },
};

function appReducer(state = initialState, action) {
    const { error, result } = action.payload || {};

    switch (action.type) {
        case CALCULATION:
            return {
                ...state,
                calculation: {
                    submitting: true,
                    error: false,
                },
            };
        case CALCULATION_SUCCESS:
            return {
                ...state,
                calculation: {
                    submitting: false,
                    error: false,
                    result,
                },
            };
        case CALCULATION_ERROR:
            return {
                ...state,
                calculation: {
                    submitting: false,
                    error,
                },
            };
        default:
            return state;
    }
}

export default appReducer;
