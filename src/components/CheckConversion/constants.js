export const UNITS = {
  KELVIN: 'Kelvin',
  CELSIUS: 'Celsius',
  FAHRENHEIT: 'Fahrenheit',
  RANKINE: 'Rankine',
  LITERS: 'liters',
  TABLESPOONS: 'tablespoons',
  CUBIC_INCHES: 'cubic-inches',
  CUPS: 'cups',
  CUBIC_FEET: 'cubic-feet',
  GALLONS: 'gallons',
};

export const INITIAL_VALUES = {
  originalValue: 0,
  originalUnit: UNITS.FAHRENHEIT,
  convertedUnit: UNITS.KELVIN,
  userInput: 0
};

export const FORM_STYLES = theme => ({
  root: {
    marginTop: 30
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: 80,
    paddingRight: 80,
  }
});
