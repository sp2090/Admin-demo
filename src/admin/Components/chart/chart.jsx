import React from 'react';
import './chart.css'

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { name: "January", Total: 1290 },
    { name: "February", Total: 1500 },
    { name: "March", Total: 2000 },
    { name: "April", Total: 2500 },
    { name: "May", Total: 1700 },
    { name: "June", Total: 600},
    { name: "July", Total: 800},
    { name: "August", Total: 1490 },
    { name: "September", Total: 1900 },
    { name: "October", Total: 2405 },
    { name: "November", Total: 2014 },
    { name: "December", Total: 2050 },
]
  
const chart = ({aspect, title}) => {
    return (
        <div className='chart'>
            <div className="ctitle"> {title} </div>
            <ResponsiveContainer width="100%" aspect={aspect}>
            
            <AreaChart width={730} height={250} data={data}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
  </defs>
  <XAxis dataKey="name" stroke='gray' />
  <YAxis stroke='gray' />
  <CartesianGrid className='ChartGrid' strokeDasharray="3 3" />
  <Tooltip />
  <Area type="monotone" dataKey="Total" stroke="#8884d8" fillOpacity={1} fill="url(#total)" />
  </AreaChart>

      </ResponsiveContainer>
        </div>
    );
};

export default chart;