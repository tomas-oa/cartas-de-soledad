import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

export default async function Answers () {
  const supabase = createServerComponentClient({ cookies })
  const { data } = await supabase.from('answers').select('*')

  return (
    <main className='flex flex-col items-center gap-12'>
      <ul className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-12'>
        {data?.map(({ id, created_at: createdAt, response, does_consent: doesConsent }) => (
          <li key={id} className='border rounded-lg p-8 shadow-md bg-slate-100'>
            <header className='flex justify-between'>
              <small>Consentimiento: {doesConsent as boolean ? 'Sí' : 'No'}</small>
              <small>{new Date(createdAt).toLocaleDateString()}</small>
            </header>
            <main>
              <p className='mt-4 [text-wrap:balance]'>{response}</p>
            </main>
          </li>
        ))}
      </ul>
    </main>
  )
}
