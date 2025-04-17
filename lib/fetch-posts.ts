import { SimplePost } from '../posts/interfaces/simple-post';
import { PostsResponse } from '../posts/interfaces/posts-response';
import { SimpleSlug } from '../posts/interfaces/simple-slug';


// Función para obtener todas las propiedades con datos completos
export const fetchPosts = async (): Promise<SimplePost[]> => {
    try {

        const res = await fetch("https://bisque-giraffe-421578.hostingersite.com/wp-json/wp/v2/posts/?_embed");
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
            author: post.author,
            categories: post.categories,
            tags: post.tags,
            image: post._embedded['wp:featuredmedia'][0].link
        }));

    } catch (error) {
        console.error("Error en fetchposts:", error);
        return []; // Devuelve un array vacío en caso de error
    }
};



// Función para obtener todos los slugs de los posts
// Esta función se utiliza para generar los parámetros estáticos en la ruta dinámica de Next.js
export const fetchAllSlugsPosts = async (): Promise<SimpleSlug[]> => {
    try {

        const res = await fetch("https://bisque-giraffe-421578.hostingersite.com/wp-json/wp/v2/posts?_fields=slug");
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
        const res = await fetch(`https://bisque-giraffe-421578.hostingersite.com/wp-json/wp/v2/posts?slug=${slug}&_embed`);
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
            author: post.author,
            categories: post.categories,
            tags: post.tags,

        };
    } catch (error) {
        console.error("Error en fetchPostyBySlug:", error);
        throw new Error(`Error al obtener el post con slug: ${slug}`);
    }
};