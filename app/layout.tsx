import type { Metadata } from 'next';
import './globals.css';
import { Header, Footer } from '@/components/site';

export const metadata: Metadata = {
  title: 'Novaris Technology | Enterprise Software, AI & Cloud Solutions',
  description: 'Novaris Technology builds enterprise software, cloud infrastructure, AI automation, cybersecurity, DevOps, and premium digital platforms.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body><Header />{children}<Footer /></body></html>;
}
