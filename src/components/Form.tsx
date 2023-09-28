import { createServerActionClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

import TextArea from './TextArea'

export default async function Form () {
  const submitAnswer = async (form: FormData) => {
    'use server'
    const answer = form.get('answer')
    const doesConsent = form.get('does_consent') ?? false

    if (answer === '') return

    const supabase = createServerActionClient({ cookies })
    await supabase
      .from('answers')
      .insert({ response: answer, does_consent: doesConsent })
  }

  return (
    <form action={submitAnswer}>
      <TextArea />
      <div className="flex gap-4 mt-4 text-left items-center">
        <input
          className="bg-[#375eb8] w-4 h-4 rounded-md"
          id="does_consent"
          name="does_consent"
          type="checkbox"
        />
        <label className="text-sm font-bold" htmlFor="does_consent">
          Acepto que un extracto de mi carta pueda publicarse en redes sociales de manera anónima.
        </label>
      </div>
    </form>
  )
}
