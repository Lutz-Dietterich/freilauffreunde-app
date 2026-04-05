import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Hero from '../components/layout/Hero';

export const metadata: Metadata = {
  title: 'FreilaufFreunde',
  description: 'Fahrradwohnwagen-Touren, Bauanleitungen und Outdoor-Inspiration mit Hund',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={inter.className}>
        <Header />
        <Hero />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
