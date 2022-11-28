import * as yup from 'yup';

export const LOGIN_VALIDATION_SCHEMA = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

export const SIGNUP_VALIDATION_SCHEMA = LOGIN_VALIDATION_SCHEMA.concat(yup.object({
  name: yup
    .string('Enter your name')
    .required('Name is required'),
  confirmPassword: yup
    .string('Confirm your password')
    .required('Confirm password is required')
    // .oneOf([yup.ref('password')], 'Your passwords do not match.'),
}));

export const LOGIN_INITIAL_VALUES = {
  email: '',
  password: '',
};

export const SIGNUP_INITIAL_VALUES = {
  ...LOGIN_INITIAL_VALUES,
  name: '',
  confirmPassword: '',
};
