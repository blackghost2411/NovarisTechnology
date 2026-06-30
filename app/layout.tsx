import './globals.css';import type {Metadata} from 'next';import Header from '@/components/Header';import Footer from '@/components/Footer';
export const metadata:Metadata={title:'Novaris Technology | Enterprise Software, Cloud & AI Solutions',description:'Novaris Technology builds enterprise software, cloud infrastructure, AI automation, cybersecurity and IT solutions for modern organizations.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><Header/>{children}<Footer/></body></html>}
