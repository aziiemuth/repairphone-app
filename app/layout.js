import { Outfit } from 'next/font/google';
import StyledComponentsRegistry from './lib/StyledComponentsRegistry';
import './globals.css';

const outfit = Outfit({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
});

export const metadata = {
  title: 'Software Fix - Perbaikan Software HP & Laptop 24 Jam',
  description: 'Layanan perbaikan software handphone dan laptop terpercaya. Install ulang, unlock, flash, optimasi, dan troubleshooting. Software only!',
  keywords: 'perbaikan software, servis hp, servis laptop, install ulang, unlock, flash, troubleshooting',
  openGraph: {
    title: 'Software Fix - Perbaikan Software HP & Laptop 24 Jam',
    description: 'Layanan perbaikan software handphone dan laptop terpercaya.',
    type: 'website',
  },
  icons: {
    icon: '/repair.svg',
    shortcut: '/repair.svg',
    apple: '/repair.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={outfit.variable} suppressHydrationWarning={true}>
      <body className={outfit.className}>
        <StyledComponentsRegistry>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
