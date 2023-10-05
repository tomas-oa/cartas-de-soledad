import Link from 'next/link'
import { Instagram } from './Icons'
import Modal from './Modal'

export default function StampDesktop () {
  return (
    <section className='relative hidden md:block'>
      <img className='absolute -rotate-[8deg] aspect-auto top-0 md:right-0 lg:right-10' src="/estampilla_desktop.webp" alt="estampilla desktop" width={240} />
      <Link href={'https://instagram.com/cartasdesoledad'} target='_blank'>
        <Instagram className='stroke-[#375eb8] hidden md:absolute md:block md:bottom-24 md:right-6 md:w-20 md:h-20' />
      </Link>
      <Modal className='hidden md:absolute md:block md:bottom-0 md:right-0 lg:right-6' />
    </section>
  )
}
