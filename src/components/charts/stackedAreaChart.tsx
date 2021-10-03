import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import Section from '../dashboard/section';
import React from 'react';

const data = [
  {
    one: 'Page 1',
    two: 7000,
    three: 2400,
  },
  {
    one: 'Page 2',
    two: 1398,
    three: 2210,
  },
  {
    one: 'Page 3',
    two: 7000,
    three: 2400,
  },
  {
    one: 'Page 4',
    two: 7000,
    three: 2400,
  },
  {
    one: 'Page 5',
    two: 7000,
    three: 2400,
  },
  {
    one: 'Page 6',
    two: 7000,
    three: 2400,
  },
  {
    one: 'Page 7',
    two: 20000,
    three: 2400,
  },
  {
    one: 'Page A',
    two: 7000,
    three: 2400,
  },
  {
    one: 'Page A',
    two: 7000,
    three: 2400,
  },
  {
    one: 'Page A',
    two: 20000,
    three: 2400,
  },
  {
    one: 'Page A',
    two: 7000,
    three: 2400,
  },
  {
    one: 'Page A',
    two: 20000,
    three: 2400,
  },
  {
    one: 'Page A',
    two: 7000,
    three: 2400,
  },
  {
    one: 'Page A',
    two: 20000,
    three: 2400,
  },
];

export const StackedAreaChart = () => {
  return (
    <>
      <Section title={''} description={<span>Products</span>}>
        <ResponsiveContainer height='90%'>
          <AreaChart width={200} height={200} data={data}>
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='one' />
            <YAxis />
            <Tooltip />
            <Area type='monotone' dataKey='two' stackId='1' stroke='#82ca9d' fill='#82ca9d' />
            <Area type='monotone' dataKey='three' stackId='1' stroke='#8884d8' fill='#8884d8' />
          </AreaChart>
        </ResponsiveContainer>
      </Section>
    </>
  );
};
