"use client";

import React, { useState } from 'react';
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

  const newData: number[] = [-3, -1, 2, 9, 10, 16, 20, 17, 13, 8, 3, -2];
  const newData2: number[] = [6, 7, 7, 13, 14, 17, 20, 20, 17, 11, 9, 5];
  //const newData3: number[] = [4, 6, 8, 9, 14, 20, 22, 21, 19, 15, 7, 6];

  const [dataInsert, setDataInsert] = useState<string>("")

  const [newData3, setNewData3] = useState<number[]>([]);


  const dataTruck: DataProps = {
    labels,
    datasets: [
      {
        label: 'T°C 2010',
        data: newData,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
      {
        label: 'T°C 2020',
        data: newData2,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'T°C 2024',
        data: newData3,
        borderColor: 'rgb(0,128,128)',
        backgroundColor: 'rgba(0,128,128, 0.5)',
      },
    ],
  };

  const handleChangeData = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setDataInsert(event?.target.value)
  };

  const handleClickData = (): void => {
    console.log(dataInsert, "dataInsert")
    const addElement = [...newData3, Number(dataInsert)];
    setNewData3(addElement);
    setDataInsert("");
  };
  
  console.log(newData, "newData");
  return (
      <main className='w-full h-screen bg-white'>
        
        <h1 className='text-3xl font-bold text-center py-10 text-slate-700 drop-shadow-lg'>
          ChartJS
        </h1>


        <div className='relative flex w-3/5 h-auto m-auto'>
          <Line ref={(reference) => reference} options={options} data={dataTruck} 
            className='absolute w-3/5 max-w-3/5 bg-slate-50/40 py-1 rounded-lg shadow-boxchart'/>
        </div>


        <div className="absolute top-[500px] xl:top-[700px] flex items-center justify-center w-full">

          <label htmlFor="data" className='text-sm text-slate-600'>
            Enter number of 2024:
          </label>

          <input type="text" id="data" name="data" value={dataInsert} onChange={(e) => handleChangeData(e)} 
            className='text-slate-700 bg-slate-200 
              border hover:border-blue-400 focus:border-blue-400 mx-4 px-2 py-1 rounded'
          />

          <button type="button" onClick={handleClickData}
            className='font-bold text-slate-100 bg-sky-600 hover:bg-sky-700 hover:scale-95 
            active:bg-sky-500 active:scale-105 px-6 py-1 rounded shadow-boxcustom hover:shadow-none'
          >
            Enter
          </button>
        </div>


        <div>
          <p className='text-slate-900'>
            {newData}
          </p>
        </div>

      </main>
    );
}
