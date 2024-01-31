"use client";

import { DataProps } from '@/app/lib/definitions';
import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { options, dataMonth } from '@/app/lib/graph-config';
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
