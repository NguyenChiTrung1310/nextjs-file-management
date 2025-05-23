import './globals.css'

import type {Metadata} from 'next'
import {Poppins} from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'Nextjs File Management',
  description: 'The only solution storage you will ever need',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${poppins.variable} font-poppins antialiased`}>{children}</body>
    </html>
  )
}
