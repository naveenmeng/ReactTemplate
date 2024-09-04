import React, { PureComponent } from 'react';
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';
import {CiCircleAlert} from "react-icons/ci"
import "./Chart.css"

const data = [
  { name: 'Orders', value: 420 },
  { name: 'Sales', value: 580 },
];
const color = ["#FB923C","#0891B"]

const Chart = () => {
  return (
    <div className='bg-white border-2 w-full mt-5 rounded-xl'>
        <div className='h-14 text-2xl flex justify-items-start pt-2 pr-1'>Portion of Sales<CiCircleAlert /></div>
        <div><PieChart width={400} height={300}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={120}
            fill="#0891B2"
            label
          />
          <Tooltip />
          </PieChart></div>
          <div className="pl-4 place-item-center mt-10">
          <span><span class="dot dot1"></span>WooCommerce Store</span>
          <span><span class="dot dot2"></span>Shopify Store</span>
          </div>
    </div>
  )
}

export default Chart
