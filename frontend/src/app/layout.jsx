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
      <head>
        {/* Google Analytics */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-KEWM2XDBSE`}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-KEWM2XDBSE');
              `,
          }}
        />
      </head>
      <body className={inter.className}>
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}