import Form from '@/components/Form'
import { Calistoga } from 'next/font/google'

const calistoga = Calistoga({
  weight: ['400'],
  subsets: ['latin']
})

export default function App () {
  return (
    <div className='md:max-w-[1080px] grid-cols-1 w-5/6 mx-auto min-h-screen grid place-content-center md:grid-cols-[70%,1fr] gap-8 bg-[#fffef5]'>
      <aside className="relative md:hidden">
        <img
          width={'120px'}
          src="/estampilla_mobile.webp"
          alt="estampilla mobile"
          className="absolute -rotate-12 aspect-auto -top-28 -right-12 -z-10"
          srcSet="
          /estampilla_mobile.webp 140w,
          /estampilla_desktop.webp 240w
          "
        />
      </aside>
      <main className="text-[#333] grid gap-2">
        <h1
          className={`${calistoga.className} text-5xl sm:text-5xl md:text-7xl lg:text-8xl`}
        >
          Cuéntame
          <br />
          de tu soledad
        </h1>
        <p className="mb-6 md:mb-10 md:[font-size:1.125rem] [text-wrap:balance] leading-snug mt-[2px]">
          Todos hemos experimentado la soledad en algún momento. Pero, ¿qué hay
          detrás de esa sensación? ¿Cómo definirías y describirías la soledad en
          tu propia experiencia? Comparte tus pensamientos y
          sentimientos de manera anónima en una carta.
        </p>
        <Form />
      </main>
      <aside className="relative hidden md:block">
        <img
          width={'240px'}
          src="/estampilla_desktop.webp"
          alt="estampilla desktop"
          className="absolute -rotate-[8deg] aspect-auto top-0 md:-right-4 lg:-right-10"
        />
      </aside>
    </div>
  )
}
