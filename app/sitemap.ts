import { MetadataRoute } from "next";
import { fetchPropertiesSimple } from "@/lib/fetch-properties";
import { fetchAllSlugsPosts } from "@/lib/fetch-posts";
import { fetchCategories } from "@/lib/fetch-categories";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // 1. Páginas estáticas principales
  const staticPages = [
    {
      url: "https://imdinmobiliaria.com.ar",
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 1,
    },
    {
      url: "https://imdinmobiliaria.com.ar/nosotros",
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    },
    {
      url: "https://imdinmobiliaria.com.ar/contacto",
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.7,
    },
    {
      url: "https://imdinmobiliaria.com.ar/blog",
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: "https://imdinmobiliaria.com.ar/propiedades/listado",
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
  ];

  try {
    // 2. Obtener todas las propiedades
    const propiedades = await fetchPropertiesSimple();
    const propiedadesSitemap = propiedades.map((propiedad) => ({
      url: `https://imdinmobiliaria.com.ar/propiedades/inmuebles/${propiedad.slug}`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.9,
    }));

    // 3. Obtener todos los posts
    const posts = await fetchAllSlugsPosts();
    const postsSitemap = posts.map((post) => ({
      url: `https://imdinmobiliaria.com.ar/blog/${post.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    }));

    // 4. Obtener todas las categorías
    const categorias = await fetchCategories();
    const categoriasSitemap = categorias.map((categoria) => ({
      url: `https://imdinmobiliaria.com.ar/blog/categoria/${categoria.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.5,
    }));

    // 5. Combinar todos los elementos
    return [
      ...staticPages,
      ...propiedadesSitemap,
      ...postsSitemap,
      ...categoriasSitemap,
    ];
  } catch (error) {
    console.error("Error generando sitemap:", error);
    // En caso de error, devolver solo las páginas estáticas
    return staticPages;
  }
}
