import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Toaster } from 'react-hot-toast'
import StampMobile from '@/components/StampMobile'

const inter = Inter({
  subsets: ['latin'],
  weight: '400'
})

export const metadata: Metadata = {
  title: 'Cartas de soledad',
  description: 'Todos hemos experimentado la soledad en algún momento. Comparte tus pensamientos y sentimientos de manera anónima en una carta.'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-[#e5e5e5] text-[#333] relative`}>
        <StampMobile />
        {children}
        <Toaster />
      </body>
    </html>
  )
}
