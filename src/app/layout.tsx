import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "BoraBus - Transporte Executivo e Turismo",
  description:
    "Soluções completas em transporte executivo, fretamento corporativo e turismo. Conforto, segurança e pontualidade.",
  keywords: "transporte executivo, fretamento, turismo, ônibus, van",
  openGraph: {
    title: "BoraBus - Transporte Executivo e Turismo",
    description: "Transporte executivo, fretamento e turismo com conforto e segurança.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
