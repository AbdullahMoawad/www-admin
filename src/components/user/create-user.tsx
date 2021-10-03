import React, { useState } from 'react';
import Validation from '../forms/validation';
import { axiosInstance, getConfig } from '../../util/axios';
import { useRouter } from 'next/router';
import Section from '../dashboard/section';
import Link from 'next/link';
import Datatable from '../datatable';
import Alert from '../alerts';

const CreateUser = (props: any) => {  
  const [error, setError] = useState(null);
  const router = useRouter();
  const axiosConfig = getConfig(router);

  const onSubmit = async (values:any) => {
    await axiosInstance
      .post(`/system/user`, values, axiosConfig)
      .then(() => router.push(`/user/create`))
      .catch((error) => {
        setError(error.response.data.message);
      });
  };

  let items = [
    {
      label: 'User Name',
      error: {
        required: 'Please enter a valid username',
        minLength: {
          value: 3,
          message: 'Your username should have at least 4 characters',
        },
        maxLength: {
          value: 25,
          message: 'Your username should have no more than 8 characters',
        },
      },
      name: 'userName',
      type: 'text',
      placeholder: 'Enter you username',
    },
    {
      label: 'First Name',
      error: {
        required: 'Please enter a valid first name',
        minLength: {
          value: 3,
          message: 'Your first name should have at least 4 characters',
        },
        maxLength: {
          value: 20,
          message: 'Your first name should have no more than 8 characters',
        },
      },
      name: 'firstName',
      type: 'text',
      placeholder: 'Enter you first name',
    },
    {
      label: 'Last Name',
      error: {
        required: 'Please enter a valid last name',
        minLength: {
          value: 3,
          message: 'Your last name should have at least 4 characters',
        },
        maxLength: {
          value: 20,
          message: 'Your last name should have no more than 8 characters',
        },
      },
      name: 'lastName',
      type: 'text',
      placeholder: 'Enter you last name',
    },
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
          value: 8,
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
  return (
    <>
      <div className="flex flex-col lg:flex-row w-full lg:space-x-2 space-y-2 lg:space-y-0 mb-2 lg:mb-4">
        <div className=" lg:space-x-2 space-y-2 lg:space-y-0 mb-2 lg:mb-4 lg:w-1/2">
          <Section title={''} description={<span>Create User</span>}>
            <div className="flex flex-col">
              {error && (
                <div className="w-full mb-4">
                  <Alert
                    color="bg-transparent border-red-500 text-red-500"
                    borderLeft
                    raised
                  >
                    {error}
                  </Alert>
                </div>
              )}
              <Validation items={items} onSubmit={onSubmit} alerts={onSubmit} />
            </div>
          </Section>
        </div>
      </div>
    </>
  );
};

export default CreateUser;
