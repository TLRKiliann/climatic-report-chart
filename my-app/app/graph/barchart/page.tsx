"use client";

import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import Link from 'next/link';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

type DataProps = {
  labels: string[];
  datasets: {
      label: string;
      data: number[];
      backgroundColor: string;
  }[]
};


export default function BarChart() {

  const newData: number[] = [-3, -1, 2, 9, 10, 16, 20, 17, 13, 8, 3, -2];
  const newData2: number[] = [6, 7, 7, 13, 14, 17, 20, 20, 17, 11, 9, 5];
  const newData3: number[] = [4, 6, 8, 9, 14, 20, 22, 21, 19, 15, 7, 6];
  //const newDataBase3: number[] = [4, 6, 8, 9];

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom' as const,
      },
      title: {
        display: true,
        text: 'Temperatures (celsius) in Lausanne 2010-2020',
        font: {
          size: 14,
        },
        color: "dimgrey",
      },
    },
  };
  
  const labels: string[] = ["janvier", "février", "mars", "avril", "mai", "juin", 
    "juillet", "aout", "septembre", "octobre", "novembre", "decembre"];

  const data: DataProps = {
    labels,
    datasets: [
      {
        label: 'T°C 2010',
        data: newData,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'T°C 2020',
        data: newData2,
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
      {
        label: 'T°C 2024',
        data: newData3,
        backgroundColor: 'rgba(0,128,128, 0.5)',
      },
    ],
  };

  return (
    <main className='w-full h-screen bg-white'>
            
      <Link href="/graph/linechart" className='text-slate-600'>
        LineChart
      </Link>
      
      <h1 className='text-3xl font-bold text-center py-10 text-slate-700 drop-shadow-lg'>
        BarChart
      </h1>
      
      <div className='relative flex w-3/5 h-auto m-auto'>
        <Bar options={options} data={data}
          className='absolute w-3/5 max-w-3/5 bg-slate-50/40 px-2 py-1 rounded-lg shadow-boxchart' />
      </div>
    
    </main>
  );
}
