import React from 'react';
import Link from 'next/link';
import BarChartComp from '@/app/components/BarChartComp';

export default async function BarChart() {

  return (
    <main className='w-full h-screen bg-white'>
            
      <Link href="/graph/linechart" className='text-slate-600'>
        LineChart
      </Link>
      
      <h1 className='text-3xl font-bold text-center py-10 text-slate-700 drop-shadow-lg'>
        BarChart
      </h1>

      <BarChartComp />

    </main>
  );
}
