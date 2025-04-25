import { InmueblesResponse } from '../inmuebles/interfaces/inmuebles-response';
import { SimpleInmueble } from '../inmuebles/interfaces/simple-inmueble';
import { extractImagesFromContent } from './extract-images';
import { fetchTiposInmueblesMap } from './fetch-tipo-inmuebles';
import { fetchUbicacionesMap } from './fetch-ubicaciones';

// Función para obtener todas las propiedades con datos completos
export const fetchProperties = async (): Promise<SimpleInmueble[]> => {
    try {
        // Obtener los mapas de ubicaciones y tipos de inmuebles
        const [ubicacionesMap, tiposInmueblesMap] = await Promise.all([
            fetchUbicacionesMap(),
            fetchTiposInmueblesMap(),
        ]);

        const res = await fetch("https://bisque-giraffe-421578.hostingersite.com/wp-json/wp/v2/inmuebles");
        if (!res.ok) {
            throw new Error("Error al obtener las propiedades");
        }

        const data: InmueblesResponse[] = await res.json();

        return data.map((inmueble) => ({
            id: inmueble.id,
            title: inmueble.title.rendered,
            images: extractImagesFromContent(inmueble.content.rendered),
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
            tipo_inmueble: inmueble.tipo_inmueble?.[0]?.toString() || "Desconocido",
            tipo_inmueble_nombre: tiposInmueblesMap[inmueble.tipo_inmueble?.[0]?.toString()] || "Desconocido",
            tipo_operacion: inmueble.tipo_operacion?.[0]?.toString(),
            ciudad: inmueble.ciudades?.[0]?.toString(),
            ciudad_nombre: ubicacionesMap[inmueble.ciudades?.[0]?.toString()] || "Desconocido",
        }));
    } catch (error) {
        console.error("Error en fetchProperties:", error);
        return []; // Devuelve un array vacío en caso de error
    }
};

// Función para filtrar propiedades según un query
export const fetchFilteredProperties = async (query: Record<string, string | string[]>): Promise<SimpleInmueble[]> => {
    try {
        const inmuebles = await fetchProperties();

        const filteredInmuebles = inmuebles.filter((inmueble) => {
            // Filtrar por operación
            if (query.tipo_operacion === "comprar" && inmueble.tipo_operacion !== "7") {
                return false;
            }
            if (query.tipo_operacion === "alquilar" && inmueble.tipo_operacion !== "8") {
                return false;
            }

            // Filtrar por ubicaciones
            if (query.ubicacion) {
                const ubicaciones = Array.isArray(query.ubicacion) ? query.ubicacion : [query.ubicacion];
                if (!ubicaciones.map((u) => u.toLowerCase()).includes(inmueble.ciudad_nombre.toLowerCase())) {
                    return false;
                }
            }

            // Filtrar por tipos de inmuebles
            if (query.tipo_inmueble) {
                const tiposInmuebles = Array.isArray(query.tipo_inmueble) ? query.tipo_inmueble : [query.tipo_inmueble];
                if (!tiposInmuebles.map((t) => t.toLowerCase()).includes(inmueble.tipo_inmueble_nombre.toLowerCase())) {
                    return false;
                }
            }

            return true;
        });

        return filteredInmuebles;
    } catch (error) {
        console.error("Error en fetchFilteredProperties:", error);
        return []; // Devuelve un array vacío en caso de error
    }
};

// Función para obtener una propiedad por su slug
export const fetchPropertyBySlug = async (slug: string): Promise<SimpleInmueble> => {
    try {
        const res = await fetch(`https://bisque-giraffe-421578.hostingersite.com/wp-json/wp/v2/inmuebles?slug=${slug}`);
        if (!res.ok) {
            throw new Error(`Error al obtener la propiedad con slug: ${slug}`);
        }

        const data: InmueblesResponse[] = await res.json();
        if (data.length === 0) {
            console.warn(`No se encontró ninguna propiedad con el slug: ${slug}`);
            throw new Error(`Error al obtener la propiedad con slug: ${slug}`);
        }

        const inmuebleData = data[0];

        return {
            id: inmuebleData.id,
            title: inmuebleData.title.rendered,
            images: extractImagesFromContent(inmuebleData.content.rendered),
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
            tipo_inmueble: inmuebleData.tipo_inmueble?.[0]?.toString() || "Desconocido",
            tipo_operacion: inmuebleData.tipo_operacion?.[0]?.toString() || "Desconocido",
            ciudad: inmuebleData.ciudades?.[0]?.toString() || "Desconocido",
            ciudad_nombre: "Desconocido",
            tipo_inmueble_nombre: "Desconocido",
        };
    } catch (error) {
        console.error("Error en fetchPropertyBySlug:", error);
        throw new Error(`Error al obtener la propiedad con slug: ${slug}`);
    }
};

// Función para obtener propiedades simples
export const fetchPropertiesSimple = async (): Promise<SimpleInmueble[]> => {
    try {
        const res = await fetch("https://bisque-giraffe-421578.hostingersite.com/wp-json/wp/v2/inmuebles");
        if (!res.ok) {
            throw new Error("Error al obtener las propiedades simples");
        }

        const data: InmueblesResponse[] = await res.json();

        return data.map((inmueble) => ({
            id: inmueble.id,
            title: inmueble.title.rendered,
            images: extractImagesFromContent(inmueble.content.rendered),
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
            tipo_inmueble: inmueble.tipo_inmueble?.[0]?.toString() || "Desconocido",
            tipo_inmueble_nombre: "Desconocido",
            tipo_operacion: inmueble.tipo_operacion?.[0]?.toString(),
            ciudad: inmueble.ciudades?.[0]?.toString(),
            ciudad_nombre: "Desconocido",
        }));
    } catch (error) {
        console.error("Error en fetchPropertiesSimple:", error);
        return []; // Devuelve un array vacío en caso de error
    }
};



