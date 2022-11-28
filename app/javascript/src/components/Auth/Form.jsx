import React from 'react';

import { useFormik } from 'formik';
import { Button, Link, TextField, Typography } from '@mui/material';

import {
  SIGNUP_INITIAL_VALUES,
  LOGIN_INITIAL_VALUES,
  LOGIN_VALIDATION_SCHEMA,
  SIGNUP_VALIDATION_SCHEMA
} from "./constants";

const Form = ({ isSignup = false, handleSubmit }) => {
  const formik = useFormik({
    initialValues: isSignup ? SIGNUP_INITIAL_VALUES : LOGIN_INITIAL_VALUES,
    validationSchema: isSignup ? SIGNUP_VALIDATION_SCHEMA : LOGIN_VALIDATION_SCHEMA,
    onSubmit: values => handleSubmit(values),
  });

  return (
    <div className="flex justify-center items-center w-1/2">
      <div className="p-20 w-full">
        <Typography className="pb-4" variant="h4" component="h4">
          {isSignup ? "Register" : "Sign in"}
        </Typography>
        <Box component="form"  onSubmit={formik.handleSubmit} className="space-y-4">
          {isSignup && <TextField
            fullWidth
            id="name"
            name="name"
            label="Name"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />}
          <TextField
            fullWidth
            id="email"
            name="email"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            fullWidth
            id="password"
            name="password"
            label="Password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          {isSignup && <TextField
            fullWidth
            id="confirmPassword"
            name="confirmPassword"
            label="Confirm password"
            type="password"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
            helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
          />}
          <div className="flex items-center flex-col">
            <Button color="primary" variant="contained" type="submit">
              {isSignup ? "Register" : "Sign in"}
            </Button>
            <Typography className="pt-4" variant="body1">
              {
                isSignup ? 
                <> Already have an account? <Link href="/login"> Login here</Link></>
                : <> Don't have an account? <Link href="/signup"> Register here</Link></>
              }
            </Typography>
          </div>
        </Box>
      </div>
    </div>
  );
};

export default Form;
