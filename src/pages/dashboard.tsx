import Widget1 from '../components/dashboard/widget-1';
import { withAdminAuthSync } from '../util/auth';
import { FiActivity, FiClock, FiExternalLink, FiUsers } from 'react-icons/fi';
import { RechartsArea1 } from '../components/recharts';
import { Line1 } from '../components/dashboard/line-chart';
import VerticalComposedChart from '../components/charts/verticalComposedChart';
import React from 'react';
import Section from 'src/components/dashboard/section';


function Index() {
  return (
    <>
      <div className='flex flex-col lg:flex-row w-full lg:space-x-2 space-y-2 lg:space-y-0 mb-2 lg:mb-4'>
        <div className='w-full lg:w-1/4'>
          <Widget1
            title='Users'
            description={588}
            right={<FiUsers size={24} className='stroke-current text-gray-500' />}
          />
        </div>
        <div className='w-full lg:w-1/4'>
          <Widget1
            title='Sessions'
            description={(435)}
            right={<FiActivity size={24} className='stroke-current text-gray-500' />}
          />
        </div>
        <div className='w-full lg:w-1/4'>
          <Widget1
            title='Bounce rate'
            description='40.5%'
            right={<FiExternalLink size={24} className='stroke-current text-gray-500' />}
          />
        </div>
        <div className='w-full lg:w-1/4'>
          <Widget1
            title='Session duration'
            description='1m 24s'
            right={<FiClock size={24} className='stroke-current text-gray-500' />}
          />
        </div>
      </div>

      <div className='flex flex-col lg:flex-row w-full lg:space-x-2 space-y-2 lg:space-y-0 mb-2 lg:mb-4'>
        <Section title={undefined} description={undefined} >
          <div className='w-full mb-4'>
            <RechartsArea1 />
          </div>
        </Section>


        <Section title={undefined} description={undefined} >
          <div className='w-full mb-4'>
            <RechartsArea1 />
          </div>
        </Section>

        <Section title={'sajfdkkashdfldaskjdhlas'} description={undefined} >
          <div className='w-full mb-4'>
            <VerticalComposedChart />
          </div>
        </Section>
      </div>


    </>
  );
};

export default withAdminAuthSync(Index, true);
