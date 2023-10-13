'use client'

import toast from 'react-hot-toast'
import { Copy } from './Icons'

export default function CopyToClipboard ({ response }: { response: string }) {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(response)
    toast.success('Copiado al portapapeles')
  }

  return (
    <button onClick={copyToClipboard} className='absolute bottom-2 right-2 rounded-full aspect-square bg-[#375eb8] p-1'>
      <Copy />
    </button>
  )
}
