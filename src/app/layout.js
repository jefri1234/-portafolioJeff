import "./globals.css";
import Navegacion from '@/components/navbar'
import { Providers } from "./providers";

export const metadata = {
  title: 'Jeff',
  description: 'Portfolio Jeff development projects',
  image: '/favicon.png',
  url: 'https://jeffportfolio.vercel.app',
  type: 'website',
  generator: 'Next.js',
  applicationName: 'Next.js',
  referrer: 'origin-when-cross-origin',
  keywords: ['Next.js', 'React', 'JavaScript'],
  authors: [{ name: 'Seb' }, { name: 'jeff', url: 'https://nextjs.org' }],
  creator: 'Jefferson Max',
  publisher: 'jefferson max',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='dark'>

      <body>
        <Navegacion />
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
