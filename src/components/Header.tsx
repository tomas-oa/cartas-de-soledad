import { Calistoga } from 'next/font/google'

const calistoga = Calistoga({
  weight: ['400'],
  subsets: ['latin']
})

export default function Header () {
  return (
    <header className='flex flex-col gap-2'>
      <h1 className={`${calistoga.className} text-5xl md:text-7xl lg:text-8xl`}>
        Cuéntame<br />de tu soledad
      </h1>
      <p className="[text-wrap:balance] leading-snug mt-[2px] text-sm md:mb-0 md:[font-size:1.125rem]">
        Todos hemos experimentado la soledad en algún momento. Pero, ¿qué hay
        detrás de esa sensación? ¿Cómo definirías y describirías la soledad en
        tu propia experiencia? ¿En qué situaciones la experimentas? Comparte
        tus pensamientos y sentimientos de manera anónima en una carta.
      </p>
    </header>
  )
}
