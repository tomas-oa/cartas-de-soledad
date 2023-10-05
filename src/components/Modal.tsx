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
      <button onClick={() => { setIsOpen(true) }} className='z-10 pb-2'>
        <Info className='stroke-[#375eb8] w-14 h-14 lg:w-auto lg:h-auto' />
      </button>
      <InfoModal isOpen={isOpen} closeModal={() => { setIsOpen(false) }} />
    </div>
  )
}
