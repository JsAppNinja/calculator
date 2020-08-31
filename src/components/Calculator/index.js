import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { calculation } from 'containers/App/actions';
import { makeSelectCheckCalculation } from 'containers/App/selectors';
import CalculatorComponent from './Calculator';

const mapStateToProps = createStructuredSelector({
    calculation: makeSelectCheckCalculation(),
});
const mapDispatchToProps = (dispatch) => ({
    calculate: (leftValue, operator, rightValue) =>
        dispatch(calculation(leftValue, operator, rightValue)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(CalculatorComponent);
