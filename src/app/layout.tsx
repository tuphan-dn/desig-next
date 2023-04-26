import { Metadata } from 'next'
import Script from 'next/script'
import { ReactNode } from 'react'

import Header from './header'
import Footer from './footer'
import CsrProvider from 'providers/csr.provider'
import UiProvider from 'providers/ui.provider'

export const metadata: Metadata = {
  title: 'Desig: The Blockchain-Agnostic Multisig Solution',
  description: 'The Blockchain-Agnostic Multisig Solution',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@300,400,500,700,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <CsrProvider>
          <UiProvider>
            <Header />
            {children}
            <Footer />
          </UiProvider>
        </CsrProvider>
        <Script
          type="module"
          src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
          async
        />
        <Script
          type="module"
          src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.0.1/model-viewer.min.js"
          async
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-R91HV8NWFY"
          strategy="afterInteractive"
        />
        <Script id="ga">
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-R91HV8NWFY');`}
        </Script>
      </body>
    </html>
  )
}
