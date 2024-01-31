"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import LineChartComp from '@/app/components/LineChartComp';
import { labels } from '@/app/lib/graph-config';
import { DataProps } from '@/app/lib/definitions';

export default function LineChart() {

    const [dataInsert, setDataInsert] = useState<string>("")

    const newDataLine1: number[] = [-3, -1, 2, 9, 10, 16, 20, 17, 13, 8, 3, -2];
    const newDataLine2: number[] = [6, 7, 7, 13, 14, 17, 20, 20, 17, 11, 9, 5];
    const newDataBase3: number[] = [4, 6, 8, 9, 14,];
    
    const [changeData, setChangeData] = useState<number[]>(newDataBase3);

    const dataLine: DataProps = {
        labels,
        datasets: [
            {
                label: 'T°C 2010',
                data: newDataLine1,
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
            {
                label: 'T°C 2020',
                data: newDataLine2,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'T°C 2024',
                data: changeData,
                borderColor: 'rgb(0,128,128)',
                backgroundColor: 'rgba(0,128,128, 0.5)',
            },
        ],
    };

    const handleChangeData = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setDataInsert(event?.target.value)
    };

    const handleClickData = (): void => {
        const addElement = [...changeData, Number(dataInsert)];
        setChangeData(addElement);
        setDataInsert("");
    };
    
    const handleDelete = (): void => {
        const copy = [...changeData]
        copy.pop();
        setChangeData(copy);
    };

    return (
        <main className='w-full h-screen bg-white'>
            <Link href="/graph/barchart" className='text-slate-600'>
                BarChart
            </Link>
            <h1 className='text-3xl font-bold text-center py-10 text-slate-700 drop-shadow-lg'>
                LineChart
            </h1>

            <LineChartComp dataLine={dataLine} />


            <form className="absolute top-[500px] xl:top-[700px] flex items-center justify-center w-full">

                <label htmlFor="data" className='text-sm text-slate-600'>
                    Enter number of 2024:
                </label>

                <input type="text" id="data" name="data"
                    value={dataInsert} onChange={(e) => handleChangeData(e)} 
                    className='text-slate-700 bg-slate-100 
                        border hover:border-blue-400 focus:border-blue-400 mx-4 px-2 py-1 rounded'
                />

                <button type="button" onClick={handleClickData}
                    className='font-bold text-slate-100 bg-sky-600 hover:bg-sky-700 hover:scale-95 
                    active:bg-sky-500 active:scale-105 px-6 py-1 rounded shadow-boxcustom hover:shadow-none'
                >
                    Enter
                </button>

                <button type="button" onClick={handleDelete}
                    className='font-bold text-slate-100 bg-red-600 hover:bg-red-700 hover:scale-95 
                        active:bg-sky-500 active:scale-105 px-6 py-1 rounded shadow-boxcustom 
                        hover:shadow-none mx-2'
                >
                    Delete
                </button>

                <legend className='text-sm text-slate-600'>
                    (Last one)
                </legend>

            </form>

        </main>
    );
}
