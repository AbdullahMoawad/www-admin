import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LabelList,
} from 'recharts';

const data = [
  {
    name: 'Downloaded',
    pv: 2400,
  },
  {
    name: 'Step 1',
    pv: 1398,
  },
  {
    name: 'Page C',
    pv: 9800,
  },
  {
    name: 'Page D',
    pv: 3908,
  },
  {
    name: 'Page E',
    pv: 4800,
  },
  {
    name: 'Page F',
    pv: 3800,
  },
  {
    name: 'PagesGs',
    pv: 4300,
  },
];

export default function VerticalComposedChart() {
  const renderCustomizedLabel = (props) => {
    const { x, y, width, value } = props;
    const radius = 10;

    return (
      <g>
        <text
          x={x + width}
          y={y + radius * 2}
          fill="#black"
          fontSize="15"
          dominantBaseline="middle"
        >
          {value}
        </text>
      </g>
    );
  };

  return (
    <>
      <div className="w-full flex flex-col w-full text-left ">
        <div className="flex">
          <span className="mr-1 font-bold text-2xl">User Acquisition</span>
          <span className="mr-1 text-right  text-xl">7,664</span>
        </div>
        <span className="mr-1">
          <span className="mr-1  text-xl">7,664</span> New Downloads
        </span>
        <span className="mr-1">
          <span className="mr-1  text-xl">4,222</span> New regesitrations
        </span>
      </div>
      <BarChart
        width={600}
        height={350}
        data={data}
        layout="vertical"
        margin={{ top: 5, right: 70, left: 5, bottom: 5 }}
      >
        <XAxis type="number" hide="true" />
        <YAxis type="category" dataKey="name" hide="true" />
        <Bar dataKey="pv" fill="#8884d8">
          <LabelList dataKey="name" content={renderCustomizedLabel} />
        </Bar>
      </BarChart>
    </>
  );
}
