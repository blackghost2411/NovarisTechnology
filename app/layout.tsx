import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Novaris Technology | AI, Cloud & Enterprise Software',
  description: 'Novaris Technology builds premium AI, cloud infrastructure, automation and enterprise software platforms for ambitious companies.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
