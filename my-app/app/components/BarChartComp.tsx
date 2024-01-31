"use client";

import { DataProps } from '@/app/lib/definitions';
import React, { useState } from 'react';
import { options, labels, dataBar } from '@/app/lib/graph-config';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend    
);

export default function BarChartComp() {
    
    const [boolBar, setBoolBar] = useState<boolean>(false);
    
    const dataMonth: DataProps = {
        labels,
        datasets: [
          {
            label: 'T°C 2010',
            data: [1,2,-3,4,5,6,7,8,9,10,-11,12],
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
          {
            label: 'T°C 2020',
            data: [1,2,-3,4,5,6,7,8,9,-10,11,12],
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
          {
            label: 'T°C 2024',
            data: [1,2,3,-4,5,6,-7,8,9,10,11,12],
            backgroundColor: 'rgba(0,128,128, 0.5)',
          },
        ],
    };

    const handleClickBar = () => {
        setBoolBar(!boolBar)
    }

    return (
        <div>
        {!boolBar ? (
            <div className='relative w-3/5 h-auto m-auto'>
            <button type="button" onClick={handleClickBar}
                className="absolute mt-1 right-1 text-xs font-bold text-slate-500/60 bg-slate-200 transition ease-in-out
                hover:text-slate-500 hover:bg-slate-300/70 active:text-slate-500 active:bg-slate-100
                px-3 py-2 rounded z-20">
                By Month
            </button>
            <Bar options={options} data={dataBar}
                className='absolute w-3/5 max-w-3/5 h-auto bg-slate-50/40 px-2 py-1 rounded-lg shadow-boxchart' />
            </div>
        ) : (
            <div className='relative flex w-3/5 h-auto m-auto'>
            <button type="button" onClick={handleClickBar}
                className="absolute mt-1 right-1 text-xs font-bold text-slate-500/60 bg-slate-200 transition ease-in-out
                hover:text-slate-500 hover:bg-slate-300/70 active:text-slate-500 active:bg-slate-100
                px-3 py-2 rounded z-20">
                By Year
            </button>
            <Bar options={options} data={dataMonth}
                className='absolute w-3/5 max-w-3/5 h-auto bg-slate-50/40 px-2 py-1 rounded-lg shadow-boxchart' />
            </div>
        )}
        </div>
    )
}
