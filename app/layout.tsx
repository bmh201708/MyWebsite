import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Jin Yike - Personal Website',
  description: 'Personal website of Jin Yike',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Itim:wght@400&family=Inter:wght@400&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
