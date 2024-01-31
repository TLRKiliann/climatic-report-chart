"use client";

import { DataProps } from '@/app/lib/definitions';
import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { options, labels } from '@/app/lib/graph-config';
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

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export default function LineChartComp({dataLine}: {dataLine: DataProps}) {

    const [boolLine, setBoolLine] = useState<boolean>(false);

    const dataMonth: DataProps = {
        labels,
        datasets: [
            {
                label: 'T°C 2010',
                data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
            {
                label: 'T°C 2020',
                data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'T°C 2024',
                data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                borderColor: 'rgb(0,128,128)',
                backgroundColor: 'rgba(0,128,128, 0.5)',
            },
        ],
    };

    const handleBoolClick = () => {
        setBoolLine(!boolLine)
    };

    return (
        <div>

            {!boolLine ? (
                <div className='relative flex w-3/5 h-auto m-auto'>
                    <button type="button" onClick={handleBoolClick}
                        className="absolute mt-1 right-1 text-xs font-bold text-slate-500 bg-slate-200 px-3 py-2 rounded z-20">
                        By Year
                    </button>
                    <Line options={options} data={dataLine} 
                        className='absolute w-3/5 max-w-3/5 h-auto bg-slate-50/40 py-1 rounded-lg shadow-boxchart'/>
                </div>
            ) : (
                <div className='relative flex w-3/5 h-auto m-auto'>
                    <button type="button" onClick={handleBoolClick}
                        className="absolute mt-1 right-1 text-xs font-bold text-slate-500 bg-slate-200 px-3 py-2 rounded z-20">
                        By Month
                    </button>
                    <Line options={options} data={dataMonth} 
                        className='absolute w-3/5 max-w-3/5 h-auto bg-slate-50/40 py-1 rounded-lg shadow-boxchart'/>
                </div>
            )}

        </div>
    )
}
