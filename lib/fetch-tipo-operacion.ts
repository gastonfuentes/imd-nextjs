


// Obtener el mapa de tipos de operaciones  (ID -> Slug)
/* export const fetchTiposOperacionMap = async (): Promise<Record<string, string>> => {
    const res = await fetch("https://bisque-giraffe-421578.hostingersite.com/wp-json/wp/v2/tipo_operacion")
        .then((res) => res.json());

    const tiposOperacionMap: Record<string, string> = {};
    res.forEach((tipo: { id: number; slug: string }) => {
        tiposOperacionMap[tipo.id.toString()] = tipo.slug;
    });

    return tiposOperacionMap;
}; */

// Obtener el mapa de tipos de operaciones (Slug -> ID)
export const fetchTiposOperacionMap = async (): Promise<Record<string, string>> => {
    const res = await fetch("https://bisque-giraffe-421578.hostingersite.com/wp-json/wp/v2/tipo_operacion");
    const data: { id: number; slug: string }[] = await res.json();

    // Construir el mapa con el slug como clave y el ID como valor
    const tiposOperacionMap = data.reduce((acc, tipo) => {
        acc[tipo.slug] = tipo.id.toString(); // Usar el slug como clave y el ID como valor
        return acc;
    }, {} as Record<string, string>);

    return tiposOperacionMap;
};