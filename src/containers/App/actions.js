import { toastr } from 'react-redux-toastr';
import {
    CALCULATION,
    CALCULATION_SUCCESS,
    CALCULATION_ERROR,
} from './constants';

/**
 * Calculation, this action starts the request saga
 *
 * @return {object} An action object with a type of CALCULATION
 */
export function calculation(leftValue, operator, rightValue) {
    return {
        type: CALCULATION,
        payload: {
            leftValue,
            operator,
            rightValue,
        },
    };
}

export function calculationSucceeded(result) {
    return {
        type: CALCULATION_SUCCESS,
        payload: { result },
    };
}

export function calculationFailed(error) {
    toastr.error(error.message);

    return {
        type: CALCULATION_ERROR,
        payload: { error },
    };
}
