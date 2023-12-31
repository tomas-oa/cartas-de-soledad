import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { Calistoga } from 'next/font/google'
import CopyToClipboard from '@/components/CopyToClipboard'

const calistoga = Calistoga({
  weight: ['400'],
  subsets: ['latin']
})

export default async function Answers () {
  const supabase = createServerComponentClient({ cookies })
  const { data } = await supabase.from('answers').select('id, response, created_at').order('created_at', { ascending: true })

  return (
    <main className='flex flex-col items-center gap-12'>
      <h1 className={`${calistoga.className} text-3xl md:text-7xl text-center`}>Cartas recibidas: <span className='mx-1'>{data?.length}</span></h1>
      <ul className='grid auto-rows-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12'>
        {data?.map(({ id, created_at: createdAt, response }, index) => (
          <li key={id} className='border rounded-lg p-8 shadow-md bg-slate-100 relative h-fit row-span-1'>
            <header className='flex w-full justify-between'>
              <small className='font-bold'>{index + 1}</small>
              <small>Fecha: {new Date(createdAt).toLocaleString('es-CL')}</small>
            </header>
            <main>
              <p className='mt-4'>
                {response}
              </p>
            </main>
            <CopyToClipboard response={response} />
          </li>
        ))}
      </ul>
    </main>
  )
}
