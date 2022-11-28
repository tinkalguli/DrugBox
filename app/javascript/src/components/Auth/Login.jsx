import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Box from '@mui/material/Box';
import DoctorSvg from "images/doctor.svg"
import Form from "./Form";
import authApi from "apis/auth";
import { setToLocalStorage } from "utils/storage";
import { setAuthHeaders } from "apis/axios";

const Login = () => {
  const handleSubmit = async values => {
    try {
      const { data: { user } } = await authApi.login({ login: values });
      setToLocalStorage("authToken", user.token);
      setAuthHeaders(user.token);
      window.location.href = "/";
    } catch (error) {
      logger.error(error);
    }
  };

  return (
    <div className='flex items-conter h-screen'>
      <Box className='bg-gray-100 w-1/2 p-8 flex justify-center items-center'>
        <img
          alt="Login page svg"
          loading="lazy"
          src={DoctorSvg}
          className='w-full mx-auto'
        />
      </Box>
      <Form handleSubmit={handleSubmit} />
    </div>
  );
};

export default Login;