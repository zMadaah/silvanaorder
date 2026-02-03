import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google"; // Importando as fontes corretas
import "./globals.css";

// Fonte para textos de leitura (Sans-serif)
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// Fonte para os títulos luxuosos (Serif)
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["italic", "normal"], // O Italic é o segredo para o visual da print
});

export const metadata: Metadata = {
  title: " Proposta Julia",
  description: "Proposta exclusiva para o aniversário de 15 anos da Julia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}