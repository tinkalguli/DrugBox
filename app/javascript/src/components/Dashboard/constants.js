import * as yup from 'yup';

export const INITIAL_VALUES = { email: '' };

export const VALIDATION_SCHEMA = yup.object({
  email: yup
    .string('Enter email')
    .email('Enter a valid email')
    .required('Email is required'),
});