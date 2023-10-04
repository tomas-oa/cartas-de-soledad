import { createServerActionClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

import TextArea from './TextArea'

export default async function Form () {
  const submitAnswer = async (form: FormData) => {
    'use server'
    const answer = form.get('answer')

    if (answer === '') return

    const supabase = createServerActionClient({ cookies })
    await supabase
      .from('answers')
      .insert({ response: answer })
  }

  return (
    <form action={submitAnswer}>
      <TextArea />
    </form>
  )
}
