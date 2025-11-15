import type { Metadata } from "next";
import "./globals.css";
import { Manrope, Playfair_Display } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "Calmint Scents – Belleza Natural que Nutre tu Piel y tu Energía",
  description:
    "Calmint Scents es una marca panameña de cosmética natural y aromaterapia. Productos artesanales con ingredientes botánicos, aceites esenciales puros y fragancias sin ftalatos ni parabenos, pensados para cuidar tu piel, tu energía y tu bienestar.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body
        className={`${manrope.variable} ${playfair.variable} font-sans bg-calmint-cream text-calmint-dark antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
