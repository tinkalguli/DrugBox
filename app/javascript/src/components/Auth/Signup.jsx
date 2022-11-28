import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Box from '@mui/material/Box';
import MedicineSvg from "images/medicine.svg"
import Form from "./Form";
import authApi from "apis/auth";
import { setToLocalStorage } from "utils/storage";
import { setAuthHeaders } from "apis/axios";
import Toastr from "components/Common/Toastr";

const Signup = () => {
  const handleSubmit = async values => {
    try {
      const { data: { user } } = await authApi.signup({ user: {
        ...values,
        password_confirmation: values.comfirmPassword,
      }});
      setToLocalStorage("authToken", user.token);
      setAuthHeaders(user.token);
      window.location.href = "/";
    } catch (error) {
      Toastr.error(error);
    }
  };

  return (
    <div className='flex items-conter h-screen'>
      <Box className='bg-gray-100 w-1/2 p-8 flex justify-center items-center'>
        <img
          alt="Signup page svg"
          loading="lazy"
          src={MedicineSvg}
          className='w-full mx-auto'
        />
      </Box>
      <Form isSignup handleSubmit={handleSubmit} />
    </div>
  );
};

export default Signup;