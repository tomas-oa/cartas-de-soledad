import Modal from './Modal'

export default function StampDesktop () {
  return (
    <section className='relative hidden md:block'>
      <img className='absolute -rotate-[8deg] aspect-auto top-0 md:right-0 lg:right-10' src="/estampilla_desktop.webp" alt="estampilla desktop" width={240} />
      <Modal className='hidden md:absolute md:block md:bottom-0 md:right-0 lg:right-8' />
    </section>
  )
}
