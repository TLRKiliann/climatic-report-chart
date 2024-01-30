"use client";

import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

type DataProps = {
  labels: string[];
  datasets: {
      label: string;
      data: number[];
      borderColor: string;
      backgroundColor: string;
  }[]
};

export default function App() {

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
          size: 18,
        },
        color: "dimgrey",
      },
    },
    elements: {
      point: {
        radius: 5,
        hitRadius: 10,
      }
    },
  };

  const labels: string[] = ["janvier", "février", "mars", "avril", "mai", "juin", 
    "juillet", "aout", "septembre", "octobre", "novembre", "decembre"];

  const data: DataProps = {
    labels,
    datasets: [
      {
        label: 'T°C 2010',
        data: [-3, -1, 2, 9, 10, 16, 20, 17, 13, 8, 3, -2],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
      {
        label: 'T°C 2020',
        data: [6, 7, 7, 13, 14, 17, 20, 20, 17, 11, 9, 5],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'T°C 2023',
        data: [4, 6, 8, 9, 14, 20, 22, 21, 19, 15, 7, 6],
        borderColor: 'rgb(0,128,128)',
        backgroundColor: 'rgba(0,128,128, 0.5)',
      },
    ],
  };
  return (
      <main className='w-full h-screen bg-slate-50'>
        
        <h1 className='text-3xl font-bold text-center pt-10 pb-14 text-slate-600'>
          ChartJS
        </h1>

        <div className='flex items-center justify-center'>
          
          <div className='relative flex w-3/5 h-auto m-auto'>
            <Line options={options} data={data} 
              className='absolute w-3/5 max-w-3/5 bg-slate-100/50 py-1 rounded-lg shadow-md'/>
          </div>

        </div>

      </main>
    );
}
