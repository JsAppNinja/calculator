import { toastr } from 'react-redux-toastr';
import {
    CHECK_CONVERSION,
    CHECK_CONVERSION_SUCCESS,
    CHECK_CONVERSION_ERROR,
    CALCULATION,
    CALCULATION_SUCCESS,
    CALCULATION_ERROR,
} from './constants';

export function checkConversion({
    originalValue,
    originalUnit,
    convertedUnit,
    userInput,
}) {
    return {
        type: CHECK_CONVERSION,
        payload: {
            originalValue: parseFloat(originalValue),
            originalUnit,
            convertedUnit,
            userInput: parseFloat(userInput),
        },
    };
}

export function checkConversionSucceeded(result) {
    return {
        type: CHECK_CONVERSION_SUCCESS,
        payload: { result },
    };
}

export function checkConversionFailed(error) {
    toastr.error(error.message);

    return {
        type: CHECK_CONVERSION_ERROR,
        payload: { error },
    };
}

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
