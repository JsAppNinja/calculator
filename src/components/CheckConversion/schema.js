import * as Yup from 'yup';

const conversionShape = {
  originalValue: Yup.number()
    .typeError('Number only')
    .required('Required'),
  originalUnit: Yup.string().required('Required'),
  convertedUnit: Yup.string().required('Required'),
  userInput: Yup.number()
    .typeError('Number only')
    .required('Required'),
};

export const CONVERSION_SCHEMA = Yup.object().shape(conversionShape);
