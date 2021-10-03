import React from 'react';
import Datatable from '../../components/dashboard/datatable';
import { axiosInstance, getConfig } from '../../util/axios';
import Section from '../../components/dashboard/section';
import { FiActivity, FiClock, FiExternalLink, FiUsers } from 'react-icons/fi';
import Bar from '../../components/charts/bar';
import Widget from '../../components/social-feed/widget';
import Widget1 from '../../components/dashboard/widget-1';
import { RechartsArea1 } from 'src/components/recharts';
import Link from 'next/link';
import { withAdminAuthSync } from 'src/util/auth';

const  Dashboard = (props: any) =>{
  let result = props.user.data;

  const columns = React.useMemo(
    () => [
      { Header: 'ID', accessor: 'id' },
      { Header: 'Username', accessor: 'userName' },
      { Header: 'First Name', accessor: 'firstName' },
      { Header: 'Last Name', accessor: 'lastName' },
      { Header: 'Email', accessor: 'email' },
    ],
    [],
  );
  const data = React.useMemo(() => result, [result]);

  return (
    <>
      <div className="flex flex-col lg:flex-row w-full lg:space-x-2 space-y-2 lg:space-y-0 mb-2 lg:mb-4">
        <div className="w-full lg:w-1/4">
          <Widget1
            title="Users"
            description={588}
            right={
              <FiUsers size={24} className="stroke-current text-gray-500" />
            }
          />
        </div>
        <div className="w-full lg:w-1/4">
          <Widget1
            title="Sessions"
            description={435}
            right={
              <FiActivity size={24} className="stroke-current text-gray-500" />
            }
          />
        </div>
        <div className="w-full lg:w-1/4">
          <Widget1
            title="Bounce rate"
            description="40.5%"
            right={
              <FiExternalLink
                size={24}
                className="stroke-current text-gray-500"
              />
            }
          />
        </div>
        <div className="w-full lg:w-1/4">
          <Widget1
            title="Session duration"
            description="1m 24s"
            right={
              <FiClock size={24} className="stroke-current text-gray-500" />
            }
          />
        </div>
      </div>

      <div className="flex  flex-col lg:flex-row w-full lg:space-x-2 space-y-2 lg:space-y-0 mb-2 lg:mb-4 ">
        <Section title={'Title'} description={'Discription'} >
          <RechartsArea1 />
        </Section>
        <Section title={'Title'} description={'Discription'} >
          <RechartsArea1 />
        </Section>
      </div>

      <Section title={null} description={'Users'} button={'Create User'} buttonURL={'create'}>
        <Datatable columns={columns} data={data} />
      </Section>
    </>
  );
}

Dashboard.getInitialProps = async (ctx: any) => {
  let response = await axiosInstance.get(`/system/user`, getConfig(ctx));
  let user = response.data;

  if (!user) {
    return {
      notFound: true,
    };
  }

  return { user }; // will be passed to the page component as props
};

export default withAdminAuthSync(Dashboard);