import React from 'react';
import './App.css';
import LineGraph from './Components/lineGraph';
import Chart from './Components/Chart';

function App() {

  return (
    <>
    <div className='ml-4'> 
      <h1 className='h1 bg-white text-violet-800 text-xl'>Dashboard</h1>
      <div className='flex'>
        <LineGraph></LineGraph>
        <Chart></Chart>
      </div>
    </div>
    </>
  )
}

export default App
