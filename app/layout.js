import './globals.css';

export const metadata = {
  title: 'Novaris Technology | AI, Cloud & Enterprise Software',
  description: 'Novaris Technology builds enterprise software, cloud platforms, AI automation, training programs, and digital transformation solutions.',
};

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}
