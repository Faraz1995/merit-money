'use client'
import './globals.css'
import localFont from 'next/font/local'
import UserProvider from '../context/UserContext'

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

        <UserProvider>{children}</UserProvider>
      </body>
    </html>
  )
}
