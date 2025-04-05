import { InmueblesResponse } from '../inmuebles/interfaces/inmuebles-response';
import { SimpleInmueble } from '../inmuebles/interfaces/simple-inmueble';
import { extractImagesFromContent } from './extract-images';
import { fetchTiposInmueblesMap } from './fetch-tipo-inmuebles';
import { fetchUbicacionesMap } from './fetch-ubicaciones';

export const fetchProperties = async (): Promise<SimpleInmueble[]> => {

    // Obtener los mapas de ubicaciones, tipos de inmuebles y tipos de operaciones
    const [ubicacionesMap, tiposInmueblesMap] = await Promise.all([
        fetchUbicacionesMap(),
        fetchTiposInmueblesMap(),
    ]);

    console.log('ubicacionesMap', ubicacionesMap); // Imprimir el mapa de ubicaciones en la consola



    const res: InmueblesResponse[] = await fetch("https://bisque-giraffe-421578.hostingersite.com/wp-json/wp/v2/inmuebles")
        .then((res) => res.json());

    const inmuebles = res.map((inmueble) => ({
        id: inmueble.id,
        title: inmueble.title.rendered,
        images: extractImagesFromContent(inmueble.content.rendered), // Extrae las imágenes del contenido
        descripcion: inmueble.acf.descripcion,
        direccion: inmueble.acf.direccion,
        precio: inmueble.acf.precio,
        superficie_construida_total: inmueble.acf.superficie_construida_total,
        superficie_del_terreno: inmueble.acf.superficie_del_terreno,
        superficie_cubierta_total: inmueble.acf.superficie_cubierta_total,
        quincho: inmueble.acf.quincho,
        dormitorios: inmueble.acf.dormitorios,
        cochera: inmueble.acf.cochera,
        plantas: inmueble.acf.plantas,
        slug: inmueble.slug,
        tipo_inmueble: inmueble.tipo_inmueble?.[0]?.toString() || "Desconocido", // ID del tipo de inmueble
        tipo_inmueble_nombre: tiposInmueblesMap[inmueble.tipo_inmueble?.[0]?.toString()] || "Desconocido", // Nombre del tipo de inmueble
        tipo_operacion: inmueble.tipo_operacion?.[0]?.toString(),
        ubicacion: inmueble.ubicacion?.[0]?.toString(),
        ubicacion_nombre: ubicacionesMap[inmueble.ubicacion?.[0]?.toString()] || "Desconocido", // Nombre de la ubicación
    }))

    return inmuebles;
}



// Nueva función para filtrar inmuebles
export const fetchFilteredProperties = async (query: Record<string, string | string[]>): Promise<SimpleInmueble[]> => {

    console.log('query', query);


    const inmuebles = await fetchProperties();

    // Filtrar inmuebles según la operación y la ciudad
    const filteredInmuebles = inmuebles.filter((inmueble) => {
        // Filtrar por operación
        if (query.tipo_operacion === "comprar" && inmueble.tipo_operacion !== "7") {
            return false; // Excluir inmuebles que no tengan tipo_operacion = 7 para "comprar"
        }

        if (query.tipo_operacion === "alquilar" && inmueble.tipo_operacion !== "8") {
            return false; // Excluir inmuebles que no tengan tipo_operacion = 8 para "alquilar"
        }

        // Filtrar por ubicaciones (puede ser un string o un array)
        if (query.ubicacion) {
            const ubicaciones = Array.isArray(query.ubicacion) ? query.ubicacion : [query.ubicacion];
            if (!ubicaciones.map((u) => u.toLowerCase()).includes(inmueble.ubicacion_nombre.toLocaleLowerCase())) {
                return false; // Excluir inmuebles cuya ubicación no coincida con ninguna de las ubicaciones
            }
        }

        // Filtrar por tipos de inmuebles (puede ser un string o un array)
        if (query.tipo_inmueble) {
            const tiposInmuebles = Array.isArray(query.tipo_inmueble) ? query.tipo_inmueble : [query.tipo_inmueble];
            if (!tiposInmuebles.map((t) => t.toLowerCase()).includes(inmueble.tipo_inmueble_nombre.toLowerCase())) {
                return false; // Excluir inmuebles que no coincidan con ninguno de los tipos de inmuebles
            }
        }

        return true; // Incluir el inmueble si pasa todos los filtros
    });

    return filteredInmuebles;
};


export const fetchPropertyBySlug = async (slug: string): Promise<SimpleInmueble> => {
    const res: InmueblesResponse[] = await fetch(`https://bisque-giraffe-421578.hostingersite.com/wp-json/wp/v2/inmuebles?slug=${slug}`)
        .then((res) => res.json());

    // Verificar si la respuesta contiene al menos un elemento
    if (res.length === 0) {
        throw new Error(`No se encontró ninguna propiedad con el slug: ${slug}`);
    }

    const inmuebleData = res[0]; // Tomar el primer elemento del array

    const inmueble: SimpleInmueble = {
        id: inmuebleData.id,
        title: inmuebleData.title.rendered,
        images: extractImagesFromContent(inmuebleData.content.rendered), // Extrae las imágenes del contenido
        descripcion: inmuebleData.acf.descripcion,
        direccion: inmuebleData.acf.direccion,
        precio: inmuebleData.acf.precio,
        superficie_construida_total: inmuebleData.acf.superficie_construida_total,
        superficie_del_terreno: inmuebleData.acf.superficie_del_terreno,
        superficie_cubierta_total: inmuebleData.acf.superficie_cubierta_total,
        quincho: inmuebleData.acf.quincho,
        dormitorios: inmuebleData.acf.dormitorios,
        cochera: inmuebleData.acf.cochera,
        plantas: inmuebleData.acf.plantas,
        slug: inmuebleData.slug,
        tipo_inmueble: inmuebleData.tipo_inmueble[0].toString(),
        tipo_operacion: inmuebleData.tipo_operacion[0].toString(),
        ubicacion: inmuebleData.ubicacion[0].toString(),
        ubicacion_nombre: inmuebleData.ubicacion[0].toString(), // Obtener el nombre de la ubicación
        tipo_inmueble_nombre: inmuebleData.tipo_inmueble[0].toString(), // Obtener el nombre del tipo de inmueble
    };

    return inmueble;
};




