'use client'
import './globals.css'
import localFont from 'next/font/local'
import UserProvider from '../context/UserContext'
import { Toaster } from 'react-hot-toast'

const iransansFont = localFont({ src: '../public/fonts/iransans/fonts.ttf' })
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className={iransansFont.className}>
      <body>
        <style jsx global>{`
          :root {
            /* ... */
            --iransans-font: ${iransansFont.style.fontFamily};
          }
        `}</style>

        <UserProvider>
          {children}
          <Toaster position='bottom-center' />
        </UserProvider>
      </body>
    </html>
  )
}
