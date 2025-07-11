# 🚀 Guía SEO Fundamentos - Next.js App Router

## ✅ IMPLEMENTADO - Fundamentos SEO Técnico

### 1. **Metadata Base Optimizado** (`app/layout.tsx`)

```typescript
export const metadata: Metadata = {
  title: {
    template: "%s | [TU MARCA] - [SERVICIO] en [UBICACIÓN]",
    default: "[TU MARCA] - [SERVICIO PRINCIPAL] en [CIUDAD]",
  },
  description:
    "[DESCRIPCIÓN 155 CHARS CON PROPUESTA DE VALOR + UBICACIÓN + SERVICIOS]",
  keywords: [
    "[servicio principal] [ciudad]",
    "[tipo contenido] [ciudad]",
    "[marca] [ubicación]",
    // ... más keywords locales
  ],
  authors: [{ name: "[TU MARCA]" }],
  creator: "[TU MARCA]",
  openGraph: {
    title: "[TU MARCA] - [PROPUESTA DE VALOR]",
    description: "[DESCRIPCIÓN PARA REDES SOCIALES]",
    url: "https://[TU-DOMINIO].com",
    siteName: "[TU MARCA]",
    images: [
      {
        url: "https://[TU-DOMINIO].com/[LOGO-1200x630].png",
        width: 1200,
        height: 630,
        alt: "[TU MARCA] - [DESCRIPCIÓN IMAGEN]",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "[TU MARCA] - [TÍTULO TWITTER]",
    description: "[DESCRIPCIÓN TWITTER]",
    images: ["https://[TU-DOMINIO].com/[LOGO].png"],
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
```

### 2. **Sitemap Dinámico** (`app/sitemap.ts`)

```typescript
import { MetadataRoute } from 'next'
import { [TUS_FUNCIONES_FETCH] } from '@/lib/[archivo]'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // 1. Páginas estáticas
  const staticPages = [
    {
      url: 'https://[TU-DOMINIO].com',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
    {
      url: 'https://[TU-DOMINIO].com/[pagina-importante]',
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    // ... más páginas estáticas
  ]

  try {
    // 2. Contenido dinámico (productos, posts, etc.)
    const [contenidoDinamico] = await [tuFuncionFetch]()
    const contenidoSitemap = [contenidoDinamico].map((item) => ({
      url: `https://[TU-DOMINIO].com/[ruta]/${item.slug}`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    }))

    // 3. Combinar todo
    return [
      ...staticPages,
      ...contenidoSitemap,
    ]

  } catch (error) {
    console.error('Error generando sitemap:', error)
    return staticPages
  }
}
```

### 3. **Robots.txt** (`app/robots.ts`)

```typescript
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/api/",
        "/_next/",
        "/admin/", // Si tienes admin
      ],
    },
    sitemap: "https://[TU-DOMINIO].com/sitemap.xml",
  };
}
```

## 🎯 CHECKLIST IMPLEMENTACIÓN

- [ ] ✅ Cambiar todas las variables `[TU-MARCA]`, `[TU-DOMINIO]`, etc.
- [ ] ✅ Adaptar keywords a tu industria/ubicación
- [ ] ✅ Crear imagen OpenGraph 1200x630px
- [ ] ✅ Configurar funciones fetch para contenido dinámico
- [ ] ✅ Ajustar prioridades según tu negocio
- [ ] ✅ Testear URLs cuando deploys: `/sitemap.xml` y `/robots.txt`

## 📊 BENEFICIOS INMEDIATOS

1. **Indexación automática** de todo el contenido
2. **Títulos optimizados** para búsquedas locales
3. **Compartido social** con imágenes correctas
4. **Crawling eficiente** de motores de búsqueda
5. **Base sólida** para optimizaciones avanzadas

---

## 🔄 PRÓXIMOS PASOS (Opcional)

- [ ] Metadata específico por página
- [ ] Schema markup (LocalBusiness, Product, etc.)
- [ ] Optimización de imágenes
- [ ] Core Web Vitals
- [ ] Google Search Console

---

_Guía creada para proyectos Next.js App Router - Personalizar según necesidades_
