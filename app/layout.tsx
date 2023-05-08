'use client'
import Background from 'components/background'
import { t } from 'lib'
import dynamic from 'next/dynamic'
import { Inter } from 'next/font/google'
import React from 'react'
import './globals.css'
const Providers = dynamic(() => import('components/providers'), { ssr: false })

import { useTheme } from 'next-themes'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { resolvedTheme } = useTheme()

  return (
    <html lang="en">
      <head />
      <body
        className={t(
          'group antialiased min-h-screen dark:bg-black-900 bg-brand-50 transition-colors duration-1000 ease-in-out',
          inter.className
        )}
      >
        <Providers>
          <Background
            className="top-0 -z-50 opacity-5 fill fixed"
            gap={20}
            color={resolvedTheme === 'dark' ? '#c9d5ce' : '#224d36'}
          />
          {children}
        </Providers>
      </body>
    </html>
  )
}
