import type { Metadata } from 'next';
import './globals.css';
import { Manrope, Playfair_Display } from 'next/font/google';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-sans'
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif'
});

export const metadata: Metadata = {
  title: 'Calmint Scents 2024 – Velas, Aceites y Jabones',
  description:
    'Calmint: velas, aceites y jabones artesanales que abrazan tu calma y transforman tus espacios en rituales de bienestar.'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${manrope.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}
