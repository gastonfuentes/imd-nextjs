import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/api/", // Bloquear rutas de API si las hay
        "/_next/", // Bloquear archivos internos de Next.js
      ],
    },
    sitemap: "https://imdinmobiliaria.com.ar/sitemap.xml",
  };
}
