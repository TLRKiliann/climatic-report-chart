import Link from 'next/link';

export default function App() {
  return (
    <main className='flex flex-col'>
      
      <Link href="/graph/linechart">LineChart</Link>

      <Link href="/graph/barchart">BarChart</Link>
    
    </main>
  )
}