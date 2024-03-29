import Navbar from '@/app/components/Navbar'
import type { Metadata } from 'next'
import './globals.css'


export const metadata: Metadata = {
  title: 'Next tweet',
  description: 'this is tweet app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className='flex min-h-screen flex-col p-5'>
          {children}
        </main>
      </body>
    </html >
  )
}
