import { SimpleUbicacion } from '@/inmuebles/interfaces/simple-ubicacion';
import { UbicacionesResponse } from '@/inmuebles/interfaces/ubicaciones-response';


export const fetchUbicaciones = async (): Promise<SimpleUbicacion[]> => {
    const res: UbicacionesResponse[] = await fetch("https://bisque-giraffe-421578.hostingersite.com/wp-json/wp/v2/ciudades", { next: { revalidate: 60 } })
        .then((res) => res.json());

    const ubicaciones = res.map((tipo) => ({
        id: tipo.id,
        name: tipo.name,
        count: tipo.count,
        slug: tipo.slug,
    }))

    return ubicaciones;
}



// Obtener el mapa de ubicaciones (ID -> Slug)
/* export const fetchUbicacionesMap = async (): Promise<Record<string, string>> => {
    const res = await fetch("https://bisque-giraffe-421578.hostingersite.com/wp-json/wp/v2/ciudades")
        .then((res) => res.json());

    const ubicacionesMap: Record<string, string> = {};
    res.forEach((ubicacion: { id: number; slug: string }) => {
        ubicacionesMap[ubicacion.id.toString()] = ubicacion.slug;
    });

    console.log("Ubicaciones Map:", ubicacionesMap); // Debugging line to check the map


    return ubicacionesMap;
}; */

interface Ubicacion {
    id: number;
    name: string;
    slug: string;
}

export const fetchUbicacionesMap = async (): Promise<Record<string, string>> => {
    const res = await fetch("https://bisque-giraffe-421578.hostingersite.com/wp-json/wp/v2/ciudades");
    const data: Ubicacion[] = await res.json();

    // Construir el mapa con el nombre como clave y el ID como valor
    const ubicacionesMap = data.reduce((acc, ubicacion) => {
        acc[ubicacion.slug] = ubicacion.id.toString(); // Usar el slug como clave y el ID como valor
        return acc;
    }, {} as Record<string, string>);

    return ubicacionesMap;
};