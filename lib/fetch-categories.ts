import { CategoriesResponse, SimpleCategory } from "@/posts";


// Función para obtener todas las categorias de los posts menos la categoria destacada
// Esta función se utiliza para mostrar las categorias en el sidebar de la pagina de blog
export const fetchCategories = async (): Promise<SimpleCategory[]> => {
    try {

        const res = await fetch("https://bisque-giraffe-421578.hostingersite.com/wp-json/wp/v2/categories", { next: { revalidate: 60 } });
        if (!res.ok) {
            throw new Error("Error al obtener las categorias");
        }

        const data: CategoriesResponse[] = await res.json();

        // Filtrar las categorías para excluir las que tienen el slug "_destacada"
        const filteredCategories = data.filter((category) => category.slug !== "destacado");

        return filteredCategories.map((category) => ({
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


