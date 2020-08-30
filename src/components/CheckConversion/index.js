import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { checkConversion } from 'containers/App/actions';
import { makeSelectCheckConversion } from 'containers/App/selectors';
import CheckConversionComponent from './CheckConversion';

const mapStateToProps = createStructuredSelector({
    checkConversion: makeSelectCheckConversion()
});
const mapDispatchToProps = dispatch => ({
    submitConversion: payload => dispatch(checkConversion(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckConversionComponent);
