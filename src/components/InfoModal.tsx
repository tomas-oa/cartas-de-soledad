import { Calistoga } from 'next/font/google'

const calistoga = Calistoga({
  weight: ['400'],
  subsets: ['latin']
})

interface Props {
  isOpen: boolean
  closeModal: () => void
}

export default function InfoModal ({ isOpen, closeModal }: Props) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-opacity-25 backdrop-blur-sm flex items-center justify-center z-50 transition-all">
      <article className="bg-stone-100 w-11/12 mx-auto p-6 rounded-md shadow-2xl gap-2 flex flex-col items-center ring-1 ring-stone-200 md:gap-7 md:w-7/12 md:p-12 lg:w-1/2 lg:gap-8">
        <header>
          <h2 className={`${calistoga.className} text-3xl md:text-4xl lg:text-6xl`}>
            Sobre el proyecto &laquo;Cartas de Soledad&raquo;
          </h2>
        </header>
        <main>
          <p className="[text-wrap:balance] text-left text-sm md:text-lg">
            Mi nombre es Isidora Moreno y soy estudiante de diseño en la Pontifica
            Universidad Católica de Chile. Creé el proyecto &laquo;Cartas de
            Soledad&raquo; para recopilar vivencias anónimas sobre la soledad, que
            me permitan levantar información para mi proyecto de título. En caso
            de cualquier duda, puedes contactarme en{' '}
            <a
              className="text-blue-700 underline"
              href="mailto:isidora.moreno@uc.cl"
            >
              isidora.moreno@uc.cl
            </a>
          </p>
          <p className='mt-3 text-sm md:text-lg'>
            Agradeceré mucho tu participación en este proyecto {':)'}
          </p>
        </main>
        <button className='w-fit bg-[#375eb8] text-[#fffef5] px-4 py-2 mt-4 rounded-md text-sm hover:bg-[#2e4f8c] transition-colors md:text-lg' onClick={closeModal}>Entiendo</button>
      </article>
    </div>
  )
}
