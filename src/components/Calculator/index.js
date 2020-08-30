import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { calculation } from 'containers/App/actions';
import { makeSelectCheckCalculation } from 'containers/App/selectors';
import CalculatorComponent from './Calculator';

const mapStateToProps = createStructuredSelector({
    calculation: makeSelectCheckCalculation(),
});
const mapDispatchToProps = (dispatch) => ({
    calculation: (leftValue) => dispatch(calculation(leftValue)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(CalculatorComponent);
