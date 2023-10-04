'use client'

import { useState } from 'react'
import InfoModal from './InfoModal'
import { Info } from './Icons'

export default function Modal () {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button onClick={() => { setIsOpen(true) }} className='absolute top-12 w-12 h-12 md:w-16 md:h-16 left-8 md:bottom-72 right-24 lg:bottom-[6.4rem] lg:right-28 md:top-auto md:left-auto z-10'>
        <Info />
      </button>
      <InfoModal isOpen={isOpen} closeModal={() => { setIsOpen(false) }} />
    </>
  )
}
