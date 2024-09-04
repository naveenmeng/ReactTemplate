

// const Chart = () => {
//   return (
//     <div className='bg-white border-2 w-full mt-5 rounded-xl'>
//         <div className='h-14 text-2xl flex justify-items-start pt-2 pr-1'>Portion of Sales<CiCircleAlert /></div>
//         <div><PieChart width={400} height={300}>
//           <Pie
//             dataKey="value"
//             isAnimationActive={false}
//             data={data}
//             cx="50%"
//             cy="50%"
//             outerRadius={120}
//             fill="#0891B2"
//             label
//           />
//           <Tooltip />
//           </PieChart></div>
//           <div className="pl-4 place-item-center mt-10">
//           <span><span class="dot dot1"></span>WooCommerce Store</span>
//           <span><span class="dot dot2"></span>Shopify Store</span>
//           </div>
//     </div>
//   )
// }

// export default Chart
import React from 'react'
import {Chart as ChartJS, ArcElement , Legend , Tooltip} from "chart.js"
import {Pie } from "react-chartjs-2"
import {CiCircleAlert} from "react-icons/ci"
import "./Chart.css"

export const data={
  labels:['Orders','Sales'],
  datasets :[
    {
      label :"Order vs Sales",
      data:[46,54],
      backgroundColor:[
        "#FB923C","#0891B2",
      ],
      borderColor:[
        '#ffffff',
        '#ffffff',
      ],
      borderWidth:1
    },
  ],
}

ChartJS.register(ArcElement,Legend,Tooltip)

const Chart = () => {
  return (
    <div className='bg-white w-96 border-2 mt-5 rounded-xl place-item-center'>
      <div className='h-14 text-2xl flex justify-items-start pt-2 pr-1'>Portion of Sales<CiCircleAlert /></div>
      <div>
        <Pie data={data} />
      </div>
      <div className="pl-4 place-item-center mt-10">
      <span><span class="dot dot1"></span>WooCommerce Store</span>
      <span><span class="dot dot2"></span>Shopify Store</span>
      </div>
    </div>
  )
}

export default Chart
