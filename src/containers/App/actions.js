import { toastr } from 'react-redux-toastr';
import {
    CHECK_CONVERSION,
    CHECK_CONVERSION_SUCCESS,
    CHECK_CONVERSION_ERROR,
    CALCULATION,
    CALCULATION_SUCCESS,
    CALCULATION_ERROR,
} from './constants';

/**
 * Check conversion, this action starts the request saga
 *
 * @return {object} An action object with a type of CHECK_CONVERSION
 */
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

/**
 * Calculation, this action starts the request saga
 *
 * @return {object} An action object with a type of CHECK_CONVERSION
 */
export function calculation(leftValue) {
    return {
        type: CALCULATION,
        payload: {
            leftValue,
            rightValue: 5,
        },
    };
}

/**
 * Dispatched when the conversion is checked by the request saga
 *
 * @param  {object} data conversion data
 *
 * @return {object} An action object with a type of CHECK_CONVERSION_SUCCESS passing the conversion result
 */
export function checkConversionSucceeded(result) {
    return {
        type: CHECK_CONVERSION_SUCCESS,
        payload: { result },
    };
}

export function calculationSucceeded(result) {
    return {
        type: CALCULATION_SUCCESS,
        payload: { result },
    };
}

/**
 * Dispatched when checking conversion fails
 *
 * @param  {object} error The error
 *
 * @return {object} An action object with a type of CHECK_CONVERSION_ERROR passing the error
 */
export function checkConversionFailed(error) {
    toastr.error(error.message);

    return {
        type: CHECK_CONVERSION_ERROR,
        payload: { error },
    };
}

export function calculationFailed(error) {
    toastr.error(error.message);

    return {
        type: CALCULATION_ERROR,
        payload: { error },
    };
}
