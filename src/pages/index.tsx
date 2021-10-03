import Widget1 from '../components/dashboard/widget-1';
import { withAdminAuthSync } from '../util/auth';
import { FiActivity, FiClock, FiExternalLink, FiUsers } from 'react-icons/fi';
import { RechartsArea1 } from '../components/recharts';
import { Line1 } from '../components/dashboard/line-chart';
import Section from '../components/dashboard/section';
import React from 'react';
import { UnderlinedTabs } from 'src/components/tabs';


function Home() {
  const tabs = [
    {
      index: 0,
      title: (<span className='text-xl'>Overview</span>),
      content: (
        <>
          <div className='flex flex-col lg:flex-row w-full lg:space-x-2 space-y-2 lg:space-y-0 mb-2  lg:mb-4'  >
            <Section title={undefined} description={undefined}>
              <div className='w-full mb-4'>
                <RechartsArea1 />
              </div>
            </Section>


            <Section title={undefined} description={undefined}>
              <div className='w-full mb-4'>
                <RechartsArea1 />
              </div>
            </Section>

            <Section title={undefined} description={undefined}>
              <div className='w-full mb-4'>
                <RechartsArea1 />
              </div>
            </Section>
          </div>
        </>
      ),
    },
    {
      index: 1,
      title: (<span className='text-xl'>Usage</span>),
      content: (
        <div className='py-4 w-full lg:w-1/2'>
          'ssss'
        </div>
      ),
    },
    {
      index: 2,
      title: (<span className='text-xl'>Trade Activity</span>),
      content: (
        <div className='py-4 w-full lg:w-1/2'>
          'sssssss'
        </div>
      ),
    },
    {
      index: 2,
      title: (<span className='text-xl'>AUM Deposits</span>),
      content: (
        <div className='py-4 w-full lg:w-1/2'>
          'sssssss'
        </div>
      ),
    },
    {
      index: 2,
      title: (<span className='text-xl'>KPI Targets</span>),
      content: (
        <div className='py-4 w-full lg:w-1/2'>
          'sssssss'
        </div>
      ),
    },
  ];

  return (
    <div className='flex flex-wrap'>
      <div className='w-full p-4'>
        <UnderlinedTabs tabs={tabs} />
      </div>
    </div>
  );
};

export default withAdminAuthSync(Home, true);
