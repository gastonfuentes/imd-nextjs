import { SimpleTipoInmueble } from '../inmuebles/interfaces/simple-tipo-inmuebles';
import { TipoInmueblesResponse } from '../inmuebles/interfaces/tipos-inmuebles-response';


export const fetchTipoInmuebles = async (): Promise<SimpleTipoInmueble[]> => {
    const res: TipoInmueblesResponse[] = await fetch("https://bisque-giraffe-421578.hostingersite.com/wp-json/wp/v2/tipo_inmueble")
        .then((res) => res.json());

    const tipoInmueble = res.map((tipo) => ({
        id: tipo.id,
        name: tipo.name,
        count: tipo.count,
        slug: tipo.slug,
    }))

    return tipoInmueble;
}



// Obtener el mapa de tipos de inmuebles (ID -> Slug)
export const fetchTiposInmueblesMap = async (): Promise<Record<string, string>> => {
    const res = await fetch("https://bisque-giraffe-421578.hostingersite.com/wp-json/wp/v2/tipo_inmueble")
        .then((res) => res.json());

    const tiposInmueblesMap: Record<string, string> = {};
    res.forEach((tipo: { id: number; slug: string }) => {
        tiposInmueblesMap[tipo.id.toString()] = tipo.slug;
    });

    return tiposInmueblesMap;
};