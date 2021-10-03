import { getColor } from '../../util/colors'
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  Legend
} from 'recharts'
import { random } from '../../util/numbers'

const CustomTooltip = ({ active, payload, label }) => {
  if (active) {
    //@ts-ignore
    let { name, profit, income } = { ...payload[0].payload }
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
    )
  }
  return null
}

export const RechartsArea1 = () => {
  let colors = [
    { dataKey: 'income', stroke: getColor('whiteGreen'), fill: getColor('whiteGreen') },
    { dataKey: 'profit', stroke: getColor('darkGreen'), fill: getColor('darkGreen') },
  ]
  const labels = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ]
  const data = Array.from(Array(12).keys()).map(i => {
    return {
      name: labels[i],
      profit: random(100, 200),
      income: random(150, 250)
    }
  })

  return (
    <div style={{ width: '100%', height: 400 }}>
      <div className='w-full flex flex-col w-full text-left '>
        <div className='flex'>
        <span className='mr-1 font-bold text-2xl'>User Acquisition</span>
        <span className='mr-1 text-right  text-xl'>7,664</span>
        </div>
        <span className='mr-1'><span className='mr-1  text-xl'>7,664</span> New Downloads</span>
        <span className='mr-1'><span className='mr-1  text-xl'>4,222</span> New regesitrations</span>
      </div>

      <ResponsiveContainer>

        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 10,
            left: 10,
            bottom: 10
          }}>
          <XAxis dataKey="name" axisLine={false} tickLine={false} />
          <Tooltip content={<CustomTooltip active={undefined} payload={undefined} label={undefined} />} />
          {colors.map((color, i) => (
            <Area
              key={i}
              type="monotone"
              dataKey={color.dataKey}
              stroke={color.stroke}
              fill={color.fill}
              strokeWidth={1}
              activeDot={{ r: 5 }}
            />
          ))}
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
