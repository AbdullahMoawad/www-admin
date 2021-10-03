import Validation from '../forms/validation';
import Alert from '../alerts';
import { axiosInstance, getConfig } from '../../util/axios';
import router from 'next/router';
import { useState } from 'react';
import React from 'react';

// Class component example
export const AccountSettings = (props) => {
  const [errorMsg, setErrMsg] = useState({});
  const data = props.user;
  const items = [
    {
      label: 'User name',
      name: 'userName',
      type: 'text',
      defaultValue: data.user.userName,
    },
    {
      label: 'Bio',
      name: 'bio',
      type: 'text',
      defaultValue: data.user.bio,
    },
    {
      label: 'First name',
      name: 'firstName',
      type: 'text',
      defaultValue: data.user.firstName,
    },
    {
      label: 'Last name',
      name: 'lastName',
      type: 'text',
      defaultValue: data.user.lastName,
    },
    {
      label: 'Address',
      name: 'address',
      type: 'text',
      defaultValue: data.user.address,
    },
    {
      label: 'City',
      name: 'city',
      type: 'text',
      defaultValue: data.user.city,
    },
    {
      label: 'Country',
      name: 'country',
      type: 'text',
      defaultValue: data.user.country,
    },
    {
      label: 'Education',
      name: 'education',
      type: 'text',
      defaultValue: data.user.education,
    },
    {
      label: 'Work',
      name: 'work',
      type: 'text',
      defaultValue: data.user.work,
    },
    {
      label: 'Email',
      name: 'email',
      type: 'text',
      defaultValue: data.user.email,
    },
    {
      label: 'About',
      name: 'about',
      type: 'text',
      defaultValue: data.user.about,
    },
  ];

  const handleAccountSettings = (values) => {
    const axiosConfig = getConfig(router);
    axiosInstance
      .put(`/system/user`, values, axiosConfig)
      .then(() => {
        router.push(`/profile/`);
      })
      .catch((err) => {
        console.log(err);
        setErrMsg({ error: 'Wrong email or password..!' });
      });
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
            {setErrMsg['error']}
          </Alert>
        </div>
      )}
      <Validation
        items={items}
        onSubmit={handleAccountSettings}
        alerts={errorMsg['error']}
      />
    </div>
  );
};
