import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'
import 'src/styles/globals.css'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})
import { cn } from '@/lib/utils'
import LayoutMain from 'src/layouts/main'
import { AppConfig } from 'src/config/app.cofig'

export const metadata: Metadata = {
  title: AppConfig.name,
  description: AppConfig.description,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <link rel="icon" href="/logo.svg" type="image/svg" sizes="32x32" />
      </head>
      <body className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable)}>
        <LayoutMain>{children}</LayoutMain>
      </body>
    </html>
  )
}
