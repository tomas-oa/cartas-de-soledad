import { Calistoga } from 'next/font/google'
import Modal from './Modal'
import { Instagram } from './Icons'
import Link from 'next/link'

const calistoga = Calistoga({
  weight: ['400'],
  subsets: ['latin']
})

export default function Header () {
  return (
    <>
      <div className='flex items-center gap-2'>
        <Modal className='md:hidden' />
        <div className='md:hidden mb-2'>
          <Link href={'https://instagram.com/cartasdesoledad'} target='_blank'>
            <Instagram className='w-14 h-14 stroke-[#375eb8]' />
          </Link>
        </div>
      </div>
      <header className='flex flex-col'>
        <h1 className={`${calistoga.className} text-5xl md:text-7xl lg:text-8xl mb-2`}>
          Cuéntame<br />de tu soledad
        </h1>
        <p className="[text-wrap:balance] leading-snug mt-[2px] text-[0.93rem] md:mb-0 md:[font-size:1.125rem]">
          Todos hemos experimentado la soledad en algún momento. Pero, ¿qué hay
          detrás de esa sensación? ¿Cómo definirías y describirías la soledad en
          tu propia experiencia? ¿En qué situaciones la experimentas?
          Comparte tus pensamientos y sentimientos de manera anónima en una carta.
        </p>
      </header>
    </>
  )
}
