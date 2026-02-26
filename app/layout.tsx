import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter, DM_Serif_Display } from 'next/font/google'

import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const dmSerif = DM_Serif_Display({ subsets: ['latin'], weight: '400', variable: '--font-dm-serif' })

export const metadata: Metadata = {
  title: 'Ethos 360 | An ERP Platform for Communities',
  description: 'Ethos 360 is a comprehensive ERP platform built for communities. Manage your community with ease and build meaningful connections.',
}

export const viewport: Viewport = {
  themeColor: '#d4a843',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${dmSerif.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
