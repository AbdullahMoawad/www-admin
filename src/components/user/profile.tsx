import { FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi';
import React from 'react';
import SecuritySettings from '../sample-forms/security-settings';
import Widget from '../widget';
import Breadcrumb from '../breadcrumbs';
import SectionTitle from '../section-title';
import { UnderlinedTabs } from '../tabs';
import { AccountSettings } from './account-settings';
import EmailPreferences from '../sample-forms/email-preferences';
import { withAdminAuthSync } from '../../util/auth';
import { fullName } from 'src/util/string';

const Profile = (props: { user: any; }) => {
  let { user } = props;
  const fName = fullName(user)

  const breadCrumb = [
    { title: 'Home', url: '/', last: false },
    { title: 'Second level', url: '/', last: true },
  ];

  const tabs = [
    {
      index: 0,
      title: 'Account settings',
      content: (
        <div className='py-4 w-full lg:w-1/2'>
          <AccountSettings user={user} />
        </div>
      ),
    },
    {
      index: 1,
      title: 'Email preferences',
      content: (
        <div className='py-4 w-full lg:w-1/2'>
          <EmailPreferences user={user} />
        </div>
      ),
    },
    {
      index: 2,
      title: 'Security settings',
      content: (
        <div className='py-4 w-full lg:w-1/2'>
          <SecuritySettings />
        </div>
      ),
    },
  ];

  return (
    <>
      <Widget>
        <SectionTitle subtitle='User profile' />
        <Breadcrumb items={breadCrumb} /></Widget>
      <Widget>
        <div className='flex flex-row items-center justify-start p-4'>
          <div className='flex-shrink-0 w-24'>
            <img
              src='/images/faces/m1.png'
              alt='media'
              className='shadow rounded-full h-20 w-20 ring mb-2'
            />
          </div>
          <div className='py-2 px-2'>
            <p className='text-base font-bold whitespace-nowrap'>{fName}</p>
            <p className='text-sm text-gray-500 whitespace-nowrap'>
              {user.user.bio}
            </p>
            <div className='flex flex-row items-center justify-start w-full py-1 space-x-2'>
              <FiTwitter className='stroke-current text-xl text-twitter' />
              <FiFacebook className='stroke-current text-xl text-facebook' />
              <FiInstagram className='stroke-current text-xl text-instagram' />
            </div>
          </div>
        </div>

        <div className='flex flex-wrap'>
          <div className='w-full p-4'>
            <UnderlinedTabs tabs={tabs} />
          </div>
        </div>
      </Widget>
    </>
  );
};

export default withAdminAuthSync(Profile);


