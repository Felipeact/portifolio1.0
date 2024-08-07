import { Roboto } from 'next/font/google';
import './styles/global.css'
import { Analytics } from '@vercel/analytics/react';

export const metadata = {
  title: 'Felipe Viana',
  description: 'Generated by Felipe Viana',
}

const roboto = Roboto({
  subsets: ['latin'],
  display: 'swap',
  weight: '400'
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${roboto.className}`}>{children}</body>
      <Analytics />
    </html>
  )
}
