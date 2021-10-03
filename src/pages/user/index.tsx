import React from 'react';
import Profile from '../../components/user/profile';
import { withAdminAuthSync } from '../../util/auth';
import { axiosInstance, getConfig } from '../../util/axios';

function Index(props: any) {
  return (
    <div className={'col-12'}>
      <Profile user={props} />
    </div>
  );
};

Index.getInitialProps = async (router: any) => {
  let response = await axiosInstance.get(`/system/user/profile`, getConfig(router));
  let user = response.data;

  if (!user) {
    return {
      notFound: true,
    };
  }
  return { user }; // will be passed to the page component as props

};
export default withAdminAuthSync(Index);


