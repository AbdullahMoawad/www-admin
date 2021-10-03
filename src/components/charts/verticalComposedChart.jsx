import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  ResponsiveContainer,
  YAxis,
  Tooltip,
  LabelList,
} from 'recharts';
import Section from '../dashboard/section';

const data = [
  { name: 'Downloaded', pv: 2400 },
  { name: 'Step 1', pv: 1398 },
  { name: 'Page C', pv: 9800 },
  { name: 'Page D', pv: 3908 },
  { name: 'Page E', pv: 4800 },
  { name: 'Page F', pv: 3800 },
  { name: 'PagesGs', pv: 4300 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active) {
    //@ts-ignore
    let { name, profit, income } = { ...payload[0].payload };
    return (
      <div className="bg-white text-gray-900 dark:bg-gray-800 dark:text-white shadow-lg rounded-lg p-2 text-xs">
        <div className="font-bold">{name}</div>
        <div>
          <span className="font-bold">Sales:</span>{' '}
          <span className="font-normal">{profit}</span>
        </div>
        <div>
          <span className="font-bold">Conversions:</span>{' '}
          <span className="font-normal">{income}</span>
        </div>
      </div>
    );
  }
  return null;
};

const renderCustomizedLabel = (props) => {
  const { x, y, width, value } = props;
  const radius = 10;

  return (
    <g>
      <text
        x={x + width + 5}
        y={y + radius * 2.5}
        fill="#black"
        fontSize="15"
        dominantBaseline="middle"
      >
        {value}
      </text>

      <text
        x={ width/2 }
        y={y + radius * 1}
        fill="#black"
        fontSize="15"
        dominantBaseline="middle"
      >
        {value}
      </text>
    </g>
  );
};

export default function VerticalComposedChart() {
  return (
    <>
      <div className="w-full flex flex-col w-full text-left mb-20">
        <div className="flex">
          <span className="mr-1 font-bold text-2xl">User Acquisition</span>
        </div>
      </div>
      <ResponsiveContainer width="95%" height={350}>
        <BarChart
          height={350}
          data={data}
          layout="vertical"
          margin={{ top: 5, right: 70, left: 5, bottom: 8 }}
        >
          <XAxis type="number" hide="true" />
          <YAxis type="category" dataKey="name" hide="true" />
          <Tooltip
            cursor={{ fill: 'white' }}
            content={
              <CustomTooltip
                active={undefined}
                payload={undefined}
                label={undefined}
              />
            }
          />

          <Bar dataKey="pv" fill="#92f5b1">
          <LabelList dataKey="name" content={renderCustomizedLabel} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </>
  );
}
