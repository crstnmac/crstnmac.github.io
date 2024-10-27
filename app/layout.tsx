'use client'
import Background from 'components/background'
// import {t} from 'lib'
// import dynamic from 'next/dynamic'
import {Inter, Fira_Code} from 'next/font/google'
import React from 'react'
import './globals.css'
// const Providers = dynamic(() => import('components/providers'), { ssr: false })

import {useTheme} from 'next-themes'
import {Providers} from 'components'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const firaCode = Fira_Code({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-fira-code',
})

export default function RootLayout({children}: {children: React.ReactNode}) {
  const {resolvedTheme} = useTheme()

  return (
    <html lang="en" className={`${inter.variable} ${firaCode.variable}`}>
      <meta
        name="google-site-verification"
        content="RIIKLI5xvbcXCzC98lcgLO4kWttNZoJhcSdVcSFvdEE"
      />
      <Script
        defer
        src="https://umami.criston.uk/script.js"
        data-website-id="a6d91fe7-f7f9-4998-af0b-6a79859d1e63"
      />
      <head />
      <body
        className={
          'group antialiased min-h-screen dark:bg-black-900 bg-neutral-200 transition-colors duration-1000 ease-in-out'
        }
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
