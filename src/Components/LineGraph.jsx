import React from 'react'
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { CiCircleAlert } from "react-icons/ci";

const data = [
  { name: "6/30/2024", Orders: 1.5, Sales: 1.0 },
  { name: "7/7/2024-7/13/2024", Orders: 0.7, Sales: 0.7 },
  { name: "7/21/2024-7/27/2024", Orders: 1.3, Sales: 1.5},
];

const lineGraph = () => {
  return (
    <div className='border-2 w-auto bg-white mt-5 rounded-xl m-3'>
      <div className='border-2 h-14 text-2xl flex justify-items-start pt-2'>Sales vs Orders<CiCircleAlert /></div>
      <div className='p-3 h-max'>
      <LineChart width={900} height={600} data={data}>
      <Line type="monotone" dataKey="Orders" stroke="#FB923C" strokeWidth={3} />
      <Line type="monotone" dataKey="Sales" stroke="#0891B2" strokeWidth={3}/>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
    </LineChart>
      </div>
    </div>
  )
}

export default lineGraph
