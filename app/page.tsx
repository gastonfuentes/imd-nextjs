import { Banner } from "@/components/Banner";
import {
  BlogGrid,
  CallToAction,
  PorQueElegirnos,
  TestimoniosGrid,
} from "@/components/Home";
import { Metadata } from "next";

/* import { fetchProperties } from '../lib/fetch-properties'; */
/* import { InmueblesGrid } from "../inmuebles"; */

export const metadata: Metadata = {
  title:
    "IMD Inmobiliaria - Las Mejores Propiedades de la Provincia de Neuquén",
  description:
    "Descubre las mejores propiedades en la provincia de Neuquén con IMD Inmobiliaria. Servicio cálido y confiable en venta y alquiler. Tu hogar ideal te está esperando en Neuquén, Allen, Cipolletti y región.",
  keywords: [
    "inmobiliaria neuquen provincia",
    "mejores propiedades neuquen",
    "venta casas neuquen provincia",
    "alquiler propiedades neuquen",
    "inmobiliaria neuquen capital",
    "propiedades destacadas neuquen",
    "IMD inmobiliaria neuquen",
    "hogar ideal neuquen",
  ],
  openGraph: {
    title: "IMD Inmobiliaria - Las Mejores Propiedades de Neuquén",
    description:
      "Descubre las mejores propiedades en la provincia de Neuquén. Tu hogar ideal te está esperando.",
    url: "https://imdinmobiliaria.com.ar",
    images: [
      {
        url: "https://imdinmobiliaria.com.ar/secundario-fondo-claro.png",
        width: 1200,
        height: 630,
        alt: "IMD Inmobiliaria - Las Mejores Propiedades de Neuquén",
      },
    ],
  },
};

export default async function Home() {
  /*   const inmuebles = await fetchProperties(); */

  return (
    <div className="">
      <main className="">
        <Banner />
        {/* <InmueblesGrid inmuebles={inmuebles} /> */}

        <PorQueElegirnos />

        {/* Blog Section */}
        <BlogGrid />

        {/* Testimonials Section */}
        <TestimoniosGrid />

        {/* CTA Section */}
        <CallToAction />
      </main>
    </div>
  );
}
