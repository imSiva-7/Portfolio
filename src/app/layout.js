import { Providers } from './providers';
// import { headers } from 'next/headers';
import Header from '../components/Header';
import './globals.css';

export const metadata = {
  title: 'ImSiva',
  description: 'My developer portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body>
        <Providers>
          {/* Header is here, above every page */}
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}