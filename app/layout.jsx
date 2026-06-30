import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
export const metadata={title:'Novaris Technology | AI, Cloud & Enterprise Software',description:'Novaris Technology builds premium enterprise software, AI automation and cloud platforms.'};
export default function RootLayout({children}){return <html lang="en"><body><div className="mouse-glow"/><Header/>{children}<Footer/></body></html>}
