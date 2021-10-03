import React, { useState } from 'react';
import { axiosInstance, getConfig } from '../../util/axios';
import Validation from './validation';
import { loginAdmin } from '../../util/auth';
import Alert from '../alerts';
import { useRouter } from 'next/router';

const Login = () => {
  const [errorMsg, setErrMsg] = useState({});
  const router = useRouter();
  const axiosConfig = getConfig(router);

  const items = [
    {
      label: 'Email',
      error: { required: 'Please enter a valid email' },
      name: 'email',
      type: 'email',
      placeholder: 'Enter you email',
    },
    {
      label: 'Password',
      error: {
        required: 'Password is required',
        minLength: {
          value: 4,
          message: 'Your password should have at least 4 characters',
        },
        maxLength: {
          value: 50,
          message: 'Your password should have no more than 8 characters',
        },
      },
      name: 'password',
      type: 'password',
      placeholder: 'Enter your password',
    },
  ];

  const onSubmit = async (values) => {
    await axiosInstance
      .post(`/system/user/login`, values, axiosConfig)
      .then((response) => {
        loginAdmin(response.data.token);
        router.push(`/dashboard`);
      })
      .catch(() => setErrMsg({ error: 'Wrong email or password..!' }));
  };

  return (
    <div className="flex flex-col">
      {errorMsg['error'] && (
        <div className="w-full mb-4">
          <Alert
            color="bg-transparent border-red-500 text-red-500"
            borderLeft
            raised
          >
            {errorMsg['error']}
          </Alert>
        </div>
      )}
      <Validation
        items={items}
        onSubmit={onSubmit}
        alerts={setErrMsg['error']}
      />
    </div>
  );
};

export default Login;
