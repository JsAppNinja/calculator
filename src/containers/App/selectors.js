import { createSelector } from 'reselect';

const selectRouter = (state) => state.router;
const makeSelectLocation = () =>
    createSelector(selectRouter, (routerState) => routerState.location);

const selectGlobal = (state) => state.global;
// const makeSelectCheckConversion = () =>
//     createSelector(selectGlobal, (globalState) => globalState.checkConversion);

const makeSelectCheckCalculation = () =>
    createSelector(selectGlobal, (globalState) => globalState.calculation);

export {
    makeSelectLocation,
    selectGlobal,
    // makeSelectCheckConversion,
    makeSelectCheckCalculation,
};
