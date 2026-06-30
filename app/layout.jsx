import './globals.css';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export const metadata = {
  title: 'Novaris Technology | Enterprise Software, AI & Cloud Solutions',
  description: 'Novaris Technology designs, develops and deploys enterprise software, AI automation and secure cloud platforms for modern organizations.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="site-shell">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
