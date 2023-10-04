'use client'

import { useState } from 'react'
import InfoModal from './InfoModal'
import { Info } from './Icons'

interface Props {
  className?: string
}

export default function Modal ({ className }: Props) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={className}>
      <button onClick={() => { setIsOpen(true) }} className='w-12 h-12 md:w-16 md:h-16 z-10'>
        <Info />
      </button>
      <InfoModal isOpen={isOpen} closeModal={() => { setIsOpen(false) }} />
    </div>
  )
}
