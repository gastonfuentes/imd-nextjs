import { InmueblesResponse } from '../inmuebles/interfaces/inmuebles-response';
import { SimpleInmueble } from '../inmuebles/interfaces/simple-inmueble';
import { extractImagesFromContent } from './extract-images';

export const fetchProperties = async (): Promise<SimpleInmueble[]> => {
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
    }))

    return inmuebles;
}


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
    };

    return inmueble;
};


