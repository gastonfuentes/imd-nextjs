import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
/* import { Header } from "@/components/Header"; */

import { NuqsAdapter } from "nuqs/adapters/next/app";
import { Suspense } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | IMD Inmobiliaria - Propiedades en Neuquén",
    default: "IMD Inmobiliaria - Venta y Alquiler de Propiedades en Neuquén",
  },
  description:
    "IMD Inmobiliaria ofrece un servicio cálido y confiable en venta y alquiler de propiedades en Neuquén, Allen, Cipolletti y región. Experiencia y compromiso genuino en cada paso.",
  keywords: [
    "inmobiliaria neuquen",
    "propiedades neuquen",
    "venta casas neuquen",
    "alquiler neuquen",
    "inmobiliaria allen",
    "propiedades cipolletti",
    "casas general roca",
    "departamentos centenario",
    "IMD inmobiliaria",
    "inmobiliaria confiable neuquen",
  ],
  authors: [{ name: "IMD Inmobiliaria" }],
  creator: "IMD Inmobiliaria",
  verification: {
    google: "zP4qBW71IYL2cH8jIl9WbladAPm1k27C-OpR-HZsknE",
  },
  openGraph: {
    title: "IMD Inmobiliaria - Propiedades en Neuquén y Región",
    description:
      "Servicio cálido y confiable en venta y alquiler de propiedades. Experiencia y compromiso genuino en Neuquén, Allen, Cipolletti y región.",
    url: "https://imdinmobiliaria.com.ar",
    siteName: "IMD Inmobiliaria",
    images: [
      {
        url: "https://imdinmobiliaria.com.ar/secundario-fondo-claro.png",
        width: 1200,
        height: 630,
        alt: "IMD Inmobiliaria - Propiedades en Neuquén",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IMD Inmobiliaria - Propiedades en Neuquén",
    description:
      "Servicio cálido y confiable en venta y alquiler de propiedades en Neuquén y región.",
    images: ["https://imdinmobiliaria.com.ar/secundario-fondo-claro.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Suspense>
          <NuqsAdapter>
            <Navbar />

            {children}
            <Footer />
          </NuqsAdapter>
        </Suspense>
      </body>
    </html>
  );
}
