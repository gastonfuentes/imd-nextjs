import { SimpleUbicacion } from '@/inmuebles/interfaces/simple-ubicacion';
import { UbicacionesResponse } from '@/inmuebles/interfaces/ubicaciones-response';


export const fetchUbicaciones = async (): Promise<SimpleUbicacion[]> => {
    const res: UbicacionesResponse[] = await fetch("https://bisque-giraffe-421578.hostingersite.com/wp-json/wp/v2/ciudades")
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
export const fetchUbicacionesMap = async (): Promise<Record<string, string>> => {
    const res = await fetch("https://bisque-giraffe-421578.hostingersite.com/wp-json/wp/v2/ciudades")
        .then((res) => res.json());

    const ubicacionesMap: Record<string, string> = {};
    res.forEach((ubicacion: { id: number; slug: string }) => {
        ubicacionesMap[ubicacion.id.toString()] = ubicacion.slug;
    });

    return ubicacionesMap;
};