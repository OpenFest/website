import { Inter } from 'next/font/google';
import { i18n } from '../../../i18n-config';

import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

import '@/styles/globals.css';

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'OpenFest 2024',
  description: 'Да се видим на OpenFest 2024!',
};

export default function RootLayout({ children, params }) {
  return (
    <html lang={params.lang}>
      <body
        className={`${inter.className} flex min-h-screen flex-col text-white md:text-lg lg:text-xl`}
      >
        <header>
          <NavBar lang={params.lang} />
        </header>
        {children}
        <Footer lang={params.lang} />
      </body>
    </html>
  );
}
