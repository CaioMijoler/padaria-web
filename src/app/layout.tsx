import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pães São Sebastião | Tradição, sabor e qualidade desde 1950",
  description:
    "Website oficial e catálogo de produtos da Pães São Sebastião, unindo tradição, sabor e qualidade desde 1950.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${montserrat.variable} ${inter.variable}`}>
      <body className="relative min-h-screen bg-surface-cream text-gray-900 selection:bg-primary/10 selection:text-primary overflow-x-hidden">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
