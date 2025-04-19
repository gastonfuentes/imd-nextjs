import { CategoriesResponse, SimpleCategory } from "@/posts";

// Función para obtener todas las categorias de los posts
export const fetchCategories = async (): Promise<SimpleCategory[]> => {
    try {

        const res = await fetch("https://bisque-giraffe-421578.hostingersite.com/wp-json/wp/v2/categories");
        if (!res.ok) {
            throw new Error("Error al obtener las categorias");
        }

        const data: CategoriesResponse[] = await res.json();

        return data.map((category) => ({
            id: category.id,
            count: category.count,
            name: category.name,
            slug: category.slug,
        }));

    } catch (error) {
        console.error("Error en fetch categories:", error);
        return []; // Devuelve un array vacío en caso de error
    }
};


