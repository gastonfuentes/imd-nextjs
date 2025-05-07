import { SimplePost } from '../posts/interfaces/simple-post';
import { PostsResponse } from '../posts/interfaces/posts-response';
import { SimpleSlug } from '../posts/interfaces/simple-slug';
import { format } from 'date-fns';


// Función para formatear la fecha
const formatDate = (dateString: Date): string => {
    return format(new Date(dateString), 'dd/MM/yyyy')
}


// Función para obtener todos los posts con datos completos
export const fetchPosts = async (): Promise<{ posts: SimplePost[]; totalPages: number }> => {
    try {

        const res = await fetch("https://bisque-giraffe-421578.hostingersite.com/wp-json/wp/v2/entradas/?_embed", { next: { revalidate: 60 } });
        if (!res.ok) {
            throw new Error("Error al obtener los posts");
        }

        // Obtener el total de páginas desde los encabezados de la API
        const totalPages = parseInt(res.headers.get("X-WP-TotalPages") || "1", 10);

        const data: PostsResponse[] = await res.json();

        const posts = data.map((post) => ({
            id: post.id,
            title: post.title.rendered,
            excerpt: post.excerpt.rendered,
            content: post.content.rendered,
            slug: post.slug,
            author: post._embedded.author[0].name,
            categories: post._embedded['wp:term'][0].map((cat) => cat.name),
            tags: post._embedded['wp:term'][1].map((tag) => tag.name),
            image: post._embedded['wp:featuredmedia'][0].link,
            date: formatDate(post.date), // Formatear la fecha
        }));

        return { posts, totalPages }; // Devolver los posts y el total de páginas

    } catch (error) {
        console.error("Error en fetchposts:", error);
        return { posts: [], totalPages: 1 }; // Devuelve un array vacío en caso de error
    }
};



// Función para obtener todos los slugs de los posts
// Esta función se utiliza para generar los parámetros estáticos en la ruta dinámica de Next.js
export const fetchAllSlugsPosts = async (): Promise<SimpleSlug[]> => {
    try {

        const res = await fetch("https://bisque-giraffe-421578.hostingersite.com/wp-json/wp/v2/entradas?_fields=slug");
        if (!res.ok) {
            throw new Error("Error al obtener los posts");
        }

        const data: PostsResponse[] = await res.json();

        return data.map((slug) => ({
            slug: slug.slug,
        }));

    } catch (error) {
        console.error("Error en fetchAllSlugsPosts:", error);
        return []; // Devuelve un array vacío en caso de error
    }
};

// Función para obtener una post por su slug
export const fetchPostyBySlug = async (slug: string): Promise<SimplePost> => {
    try {
        const res = await fetch(`https://bisque-giraffe-421578.hostingersite.com/wp-json/wp/v2/entradas?slug=${slug}&_embed`);
        if (!res.ok) {
            throw new Error(`Error al obtener el post con slug: ${slug}`);
        }

        const data: PostsResponse[] = await res.json();
        if (data.length === 0) {
            console.warn(`No se encontró ningun post con el slug: ${slug}`);
            throw new Error(`Error al obtener el post con slug: ${slug}`);
        }

        const post = data[0];

        return {
            id: post.id,
            title: post.title.rendered,
            excerpt: post.excerpt.rendered,
            content: post.content.rendered,
            slug: post.slug,
            image: post._embedded['wp:featuredmedia'][0].link,
            author: post._embedded.author[0].name,
            categories: post._embedded['wp:term'][0].map((cat) => cat.name),
            tags: post._embedded['wp:term'][1].map((tag) => tag.name),
            date: formatDate(post.date), // Formatear la fecha
        };
    } catch (error) {
        console.error("Error en fetchPostyBySlug:", error);
        throw new Error(`Error al obtener el post con slug: ${slug}`);
    }
};


// Función para obtener los posts destacados
export const fetchFeaturedPosts = async (): Promise<SimplePost[]> => {
    try {

        const res = await fetch("https://bisque-giraffe-421578.hostingersite.com/wp-json/wp/v2/entradas?categories=1&_embed", { next: { revalidate: 60 } });
        if (!res.ok) {
            throw new Error("Error al obtener los posts");
        }

        const data: PostsResponse[] = await res.json();

        return data.map((post) => ({
            id: post.id,
            title: post.title.rendered,
            excerpt: post.excerpt.rendered,
            content: post.content.rendered,
            slug: post.slug,
            author: post._embedded.author[0].name,
            categories: post._embedded['wp:term'][0].map((cat) => cat.name),
            tags: post._embedded['wp:term'][1].map((tag) => tag.name),
            image: post._embedded['wp:featuredmedia'][0].link,
            date: formatDate(post.date), // Formatear la fecha
        }));

    } catch (error) {
        console.error("Error en fetchposts:", error);
        return []; // Devuelve un array vacío en caso de error
    }
};



// Función para obtener todos los posts de una categoria determinada
export const fetchPostsByCategory = async (slug: string): Promise<SimplePost[]> => {
    try {
        // Obtener el ID de la categoría basada en el slug
        const categoryRes = await fetch(`https://bisque-giraffe-421578.hostingersite.com/wp-json/wp/v2/categories?slug=${slug}`);
        if (!categoryRes.ok) {
            throw new Error(`Error al obtener la categoría con slug: ${slug}`);
        }

        const categoryData = await categoryRes.json();
        if (categoryData.length === 0) {
            console.warn(`No se encontró ninguna categoría con el slug: ${slug}`);
            return []; // Devuelve un array vacío si no se encuentra la categoría
        }

        const categoryId = categoryData[0].id; // Obtener el ID de la categoría

        // Obtener los posts de la categoría específica
        const res = await fetch(`https://bisque-giraffe-421578.hostingersite.com/wp-json/wp/v2/entradas?categories=${categoryId}&_embed`, { next: { revalidate: 60 } });
        if (!res.ok) {
            throw new Error(`Error al obtener los posts de la categoría con ID: ${categoryId}`);
        }

        const data: PostsResponse[] = await res.json();

        return data.map((post) => ({
            id: post.id,
            title: post.title.rendered,
            excerpt: post.excerpt.rendered,
            content: post.content.rendered,
            slug: post.slug,
            author: post._embedded.author[0].name,
            categories: post._embedded['wp:term'][0].map((cat) => cat.name),
            tags: post._embedded['wp:term'][1].map((tag) => tag.name),
            image: post._embedded['wp:featuredmedia'][0]?.link || "",
            date: formatDate(post.date), // Formatear la fecha
        }));
    } catch (error) {
        console.error("Error en fetchPostsByCategory:", error);
        return []; // Devuelve un array vacío en caso de error
    }
};


// Función para obtener los últimos posts (3 posts)
// Esta función se utiliza para mostrar los últimos posts en la página de inicio o en otras secciones
export const fetchLatestPosts = async (): Promise<SimplePost[]> => {
    try {

        const res = await fetch("https://bisque-giraffe-421578.hostingersite.com/wp-json/wp/v2/entradas/?per_page=3&_embed");
        if (!res.ok) {
            throw new Error("Error al obtener los posts");
        }

        const data: PostsResponse[] = await res.json();

        return data.map((post) => ({
            id: post.id,
            title: post.title.rendered,
            excerpt: post.excerpt.rendered,
            content: post.content.rendered,
            slug: post.slug,
            author: post._embedded.author[0].name,
            categories: post._embedded['wp:term'][0].map((cat) => cat.name),
            tags: post._embedded['wp:term'][1].map((tag) => tag.name),
            image: post._embedded['wp:featuredmedia'][0].link,
            date: formatDate(post.date), // Formatear la fecha
        }));

    } catch (error) {
        console.error("Error en fetchposts:", error);
        return []; // Devuelve un array vacío en caso de error
    }
};