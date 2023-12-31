import Form from '@/components/Form'
import Header from '@/components/Header'
import StampDesktop from '@/components/StampDesktop'

export default function App () {
  return (
    <div className="grid-cols-1 w-5/6 mx-auto min-h-[100svh] grid place-content-center gap-2 md:grid-cols-[70%,1fr]">
      <section className='grid gap-6 md:gap-8 py-2 pt-10 md:pb-0'>
        <Header />
        <Form />
      </section>
      <StampDesktop />
    </div>
  )
}
