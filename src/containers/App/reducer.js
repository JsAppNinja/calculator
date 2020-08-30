import {
    CHECK_CONVERSION,
    CHECK_CONVERSION_SUCCESS,
    CHECK_CONVERSION_ERROR,
    CALCULATION,
    CALCULATION_SUCCESS,
    CALCULATION_ERROR,
} from './constants';

const initialState = {
    checkConversion: {
        submitting: null,
        error: null,
        result: null,
    },
    calculation: {
        submitting: null,
        error: null,
        result: 1,
        leftValue: 0,
        rightValue: 0,
    },
};

function appReducer(state = initialState, action) {
    const { error, result } = action.payload || {};

    switch (action.type) {
        case CHECK_CONVERSION:
            return {
                ...state,
                checkConversion: {
                    submitting: true,
                    error: false,
                    result: null,
                },
            };
        case CHECK_CONVERSION_SUCCESS:
            return {
                ...state,
                checkConversion: {
                    submitting: false,
                    error: false,
                    result,
                },
            };
        case CHECK_CONVERSION_ERROR:
            return {
                ...state,
                checkConversion: {
                    submitting: false,
                    error,
                    result: null,
                },
            };
        case CALCULATION:
            return {
                ...state,
                calculation: {
                    submitting: true,
                    error: false,
                    result: 2,
                },
            };
        case CALCULATION_SUCCESS:
            return {
                ...state,
                calculation: {
                    submitting: false,
                    error: false,
                    result,
                    leftValue: 1,
                    rightValue: 2,
                },
            };
        case CALCULATION_ERROR:
            return {
                ...state,
                calculation: {
                    submitting: false,
                    error,
                    result: 3,
                },
            };
        default:
            return state;
    }
}

export default appReducer;
