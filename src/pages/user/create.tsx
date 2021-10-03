import { axiosInstance, getConfig } from '../../util/axios';
import Section from '../../components/dashboard/section';
import { withAdminAuthSync } from '../../util/auth';
import React from 'react';
import CreateUser from 'src/components/user/create-user';
import Datatable from 'src/components/dashboard/datatable';
import CreateAccount from 'src/components/forms/create-account';
import Link from 'next/link';
import CreateDetailedUser from 'src/components/user/create-detailed-user';

function Create(props: any) {
  return (
    <>
          <CreateDetailedUser />
    </>
  );
}

export default withAdminAuthSync(Create);