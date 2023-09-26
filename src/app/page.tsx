import Form from '@/components/Form'
import { Calistoga } from 'next/font/google'

const calistoga = Calistoga({
  weight: ['400'],
  subsets: ['latin']
})

export default function App () {
  return (
    <>
      <main className="text-[#333] grid gap-2">
        <h1 className={`${calistoga.className} text-5xl sm:text-5xl md:text-7xl lg:text-8xl`}>
          Cuéntame
          <br />
          de tu soledad
        </h1>
        <p className="mb-6 md:mb-10 md:[font-size:1.125rem] [text-wrap:balance] leading-snug mt-[2px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi iste
          dolorum, sunt optio fugiat similique fugit minus, esse molestiae
          doloribus, aut aspernatur voluptatum voluptatem amet. Excepturi sit
          ipsum autem ullam.
        </p>
        <Form />
      </main>
      <aside className="relative hidden md:block">
        <img
          srcSet=''
          width={'240px'}
          src="/estampilla_desktop.png"
          alt="estampilla"
          className="absolute -rotate-[8deg] aspect-auto top-0 md:-right-4 lg:-right-10"
        />
      </aside>
    </>
  )
}
