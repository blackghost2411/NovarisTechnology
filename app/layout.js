import './globals.css'

export const metadata = {
  title: 'Novaris Technology | AI, Cloud & Enterprise Software',
  description: 'Novaris Technology builds enterprise software, AI automation, cloud infrastructure, DevOps systems and professional training programs.'
}

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>
}
