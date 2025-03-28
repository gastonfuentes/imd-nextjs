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



