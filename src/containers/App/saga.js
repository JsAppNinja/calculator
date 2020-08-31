import { put, call, fork, takeLatest } from 'redux-saga/effects';
import { CALCULATION } from 'containers/App/constants';
import {
    calculationSucceeded,
    calculationFailed,
} from 'containers/App/actions';
import request, { makeJsonRequestOptions } from 'utils/request';

/**
 * Base saga
 */
export function* appApiSaga(options, successHandlers, errorHandler) {
    try {
        options.headers = {
            ...options.headers,
        };
        const response = yield call(request, options);
        for (let i = 0; i < successHandlers.length; i++) {
            yield put(successHandlers[i](response.data));
        }
    } catch (err) {
        const { response: errResponse } = err;
        yield put(errorHandler(errResponse.data));
    }
}

/**
 * CHECK_CALCULATION saga
 */
export function* checkCalculation(action) {
    const options = makeJsonRequestOptions({
        method: 'POST',
        requestUrlPath: 'operation/calculate',
        data: action.payload,
    });
    yield call(appApiSaga, options, [calculationSucceeded], calculationFailed);
}
export function* checkCalculationWatcher() {
    yield takeLatest(CALCULATION, checkCalculation);
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* appMainSaga() {
    yield fork(checkCalculationWatcher);
}
