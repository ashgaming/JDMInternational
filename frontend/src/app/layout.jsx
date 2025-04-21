 import './globals.css'

import { Inter } from 'next/font/google'
import NavBar from '../components/NavBar'
import { Footer } from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'AgroExport - Global Agricultural Export Solutions',
  description: 'Premium agricultural export services connecting farmers to global markets.',
}

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}