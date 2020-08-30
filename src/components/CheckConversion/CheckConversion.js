import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Spinner from 'components/Spinner';
import { UNITS, FORM_STYLES, INITIAL_VALUES } from './constants';
import { CONVERSION_SCHEMA } from './schema';
import Alert from '../Alert';

const generateResultMessage = result => {
  let alertType = 'info';
  let message = '';
  if (result) {
    if (result.isCorrect) {
      alertType = 'success';
      message = 'correct';
    } else if (result.isIncorrect) {
      alertType = 'info';
      message = 'incorrect';
    } else if (result.isInvalid) {
      alertType = 'error';
      message = 'invalid';
    }
  }

  return { alertType, message };
};

const CheckConversion = ({ submitConversion, checkConversion, classes }) => {
  const { submitting, result } = checkConversion;
  const resultMessage = generateResultMessage(result);

  return (
    <>
      <Typography align="center" variant="h2">
        Unit Conversion Checking
      </Typography>
      <Paper elevation={3} className={classes.root}>
        <Box p={4}>
          <Formik
            initialValues={INITIAL_VALUES}
            validationSchema={CONVERSION_SCHEMA}
            onSubmit={submitConversion}
            render={() => (
              <Form className={classes.form}>
                <Field
                  name="originalValue"
                  render={({ field }) => (
                    <FormControl margin="normal">
                      <TextField label="Original Value" {...field} />
                    </FormControl>
                  )}
                />
                <ErrorMessage name="originalValue" component="div" />
                <Field
                  name="originalUnit"
                  render={({ field }) => (
                    <FormControl margin="normal">
                      <InputLabel shrink htmlFor="original-unit-selector">
                        Original Unit
                      </InputLabel>
                      <Select
                        input={<Input id="original-unit-selector" />}
                        {...field}
                      >
                        {Object.values(UNITS).map(unit => (
                          <MenuItem key={unit} value={unit}>
                            {unit}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  )}
                />
                <ErrorMessage name="originalUnit" component="div" />
                <Field
                  name="convertedUnit"
                  render={({ field }) => (
                    <FormControl margin="normal">
                      <InputLabel shrink htmlFor="converted-unit-selector">
                        Converted Unit
                      </InputLabel>
                      <Select
                        input={<Input id="converted-unit-selector" />}
                        {...field}
                      >
                        {Object.values(UNITS).map(unit => (
                          <MenuItem key={unit} value={unit}>
                            {unit}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  )}
                />
                <ErrorMessage name="convertedUnit" component="div" />
                <Field
                  name="userInput"
                  render={({ field }) => (
                    <FormControl margin="normal">
                      <TextField label="User Input" {...field} />
                    </FormControl>
                  )}
                />
                <ErrorMessage name="userInput" component="div" />
                <Box display="flex" alignItems="center" justifyContent="space-between" mt={3}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={submitting}
                  >
                    {submitting && <Spinner />}
                    {!submitting && <span>Submit</span>}
                  </Button>
                  <Alert type={resultMessage.alertType} message={resultMessage.message} />
                </Box>
              </Form>
            )}
          />
        </Box>
      </Paper>
    </>
  );
};

CheckConversion.propTypes = {
  submitConversion: PropTypes.func.isRequired,
  checkConversion: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(FORM_STYLES)(CheckConversion);
