import './globals.css'

import { Inter } from 'next/font/google'
import NavBar from '../components/NavBar'
import { Footer } from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'TrueValue Global',
  description: 'Your trusted partner in agricultural export solutions, connecting farmers to global markets since 2005.',
  keywords: 'agriculture, export, import, global trade, agricultural products, grains, cereals, pulses, nuts, seeds, spices',
  authors: [{ name: 'TrueValue Global' }],
  openGraph: {
    title: 'TrueValue Global',
    description: 'Your trusted partner in agricultural export solutions, connecting farmers to global markets since 2005.',
    url: 'https://truevalueglobal.com',
    siteName: 'TrueValue Global',

  },
}

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <head>
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

        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-XZTE1MJJ4M`}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-XZTE1MJJ4M');
              `,
          }}
        />


        <link href="https://cdn.jsdelivr.net/npm/flowbite@3.1.2/dist/flowbite.min.css" rel="stylesheet" />
        <script src="https://cdn.jsdelivr.net/npm/flowbite@3.1.2/dist/flowbite.min.js"></script>

        {/* <script src="../path/to/flowbite/dist/flowbite.min.js"></script> */}

      </head>
      <body className={inter.className}>
        <NavBar />
        <main className='overflow-hidden'>{children}</main>
        <Footer />
      </body>
    </html>
  )
}