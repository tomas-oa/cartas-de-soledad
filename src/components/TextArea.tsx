'use client'

import { useEffect, useRef } from 'react'
import { experimental_useFormStatus as useFormStatus } from 'react-dom'
import Spinner from './Spinner'
import Send from './Icons'
import { toast } from 'react-hot-toast'

export default function TextArea () {
  const { pending } = useFormStatus()
  const alreadySent = useRef(false)
  const textAreaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    if (textAreaRef.current === null) return
    if (textAreaRef.current.value === '') {
      toast.error('¡No puedes enviar una respuesta vacía!')
      return
    }

    if (!pending && alreadySent.current) {
      alreadySent.current = false
      textAreaRef.current.value = ''
      toast.success('¡Gracias por tu respuesta!')
      return
    }

    alreadySent.current = pending
  }, [pending])

  return (
    <>
      <textarea
        ref={textAreaRef}
        name='answer'
        className="bg-slate-100 text-[#333] w-full h-52 sm:h-72 p-2 px-3 sm:p-4 resize-none rounded-md border border-slate-200 shadow-sm focus:outline focus:outline-offset-0 focus:outline-2 focus:outline-slate-300"
        placeholder="Escribe aquí..."
      >
        {pending ? <Spinner /> : ''}
      </textarea>
      <button type='submit' disabled={pending} className="w-9 grid place-content-center absolute bottom-4 right-2 sm:right-5 aspect-square rounded-full border bg-[#375eb8] hover:scale-110 hover:transition-all disabled:opacity-25 focus:scale-110 focus:transition-all">
        <Send />
      </button>
    </>
  )
}
