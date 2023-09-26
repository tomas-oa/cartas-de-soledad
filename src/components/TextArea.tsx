'use client'

import { useEffect, useRef } from 'react'
import { experimental_useFormStatus as useFormStatus } from 'react-dom'
import Send from './Icons'
import { toast } from 'react-hot-toast'

export default function TextArea () {
  const { pending } = useFormStatus()
  const textAreaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    if (textAreaRef.current === null) return
    textAreaRef.current.focus()
  }, [])

  useEffect(() => {
    if (textAreaRef.current === null) return
    if (textAreaRef.current.value === '') return

    if (pending) {
      toast.promise(
        new Promise((resolve) => {
          setTimeout(() => {
            resolve('¡Gracias por tu respuesta!')
          }, 1000)
        }),
        {
          loading: 'Enviando...',
          success: '¡Gracias por tu respuesta!',
          error: 'Hubo un error al enviar tu respuesta :( Por favor intenta de nuevo.'
        }
      )
    }

    textAreaRef.current.value = ''
  }, [pending])

  return (
    <>
      <textarea
        ref={textAreaRef}
        name='answer'
        className="bg-slate-100 text-[#333] w-full h-52 sm:h-72 p-2 px-3 sm:p-4 resize-none rounded-md border border-slate-200 shadow-sm focus:outline focus:outline-offset-0 focus:outline-2 focus:outline-slate-300"
        placeholder="Escribe aquí..."
      >
      </textarea>
      <button type='submit' disabled={pending} className="w-9 grid place-content-center absolute bottom-4 right-2 sm:right-5 aspect-square rounded-full border bg-[#375eb8] hover:scale-110 hover:transition-all disabled:opacity-25 focus:scale-110 focus:transition-all">
        <Send />
      </button>
    </>
  )
}
