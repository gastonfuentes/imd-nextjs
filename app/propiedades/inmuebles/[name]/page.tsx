import { fetchPropertiesSimple, fetchPropertyBySlug } from '@/lib/fetch-properties';
import { SimpleInmueble } from '../../../../inmuebles/interfaces/simple-inmueble';
import Image from 'next/image';
import placeholder from '@/app/images/image.png';

/* interface Props {
    title: string
} */

//SOLOS SE EJECUTA EN BUILDTIME
export async function generateStaticParams() {

    try {

        const data: SimpleInmueble[] = await fetchPropertiesSimple();
        console.log('generando estatic', data);

        if (!data || data.length === 0) {
            console.warn('No se encontraron propiedades para generar los parámetros estáticos.');
            return [];
        }

        return data.map((inmueble) => ({
            name: inmueble.slug,
        }))

    } catch (error) {
        console.error("Error en generateStaticParams:", error);
        return []; // Retorna un array vacío en caso de error
    }

}



export async function generateMetadata({ params }: { params: Promise<{ name: string }>; }) {
    const { name } = await params;
    const inmueble: SimpleInmueble = await fetchPropertyBySlug(name);

    return {
        title: inmueble.title,
        description: inmueble.descripcion,
    }
}




const getProperty = async (slug: string) => {
    const data: SimpleInmueble = await fetchPropertyBySlug(slug);
    return data;
}


export default async function PropiedadPage({ params, }: { params: Promise<{ name: string }>; }) {

    const { name } = await params;



    try {

        const inmueble: SimpleInmueble = await getProperty(name);


        if (!inmueble) {
            return (
                <div className="min-h-screen bg-gray-100">
                    <h1>Propiedad no encontrada</h1>
                </div>
            );
        }

        const {
            title,
            images,
            descripcion,
            direccion,
            precio,
            superficie_construida_total,
            superficie_del_terreno,
            superficie_cubierta_total,
            quincho,
            dormitorios,
            cochera,
            plantas,
        } = inmueble;

        return (
            <div className="min-h-screen bg-gray-100 p-4">
                <h1 className="text-2xl font-bold">{title}</h1>
                <p>{descripcion}</p>
                <p>Dirección: {direccion}</p>
                <p>Precio: {precio}</p>
                <p>Superficie Construida: {superficie_construida_total} m²</p>
                <p>Superficie del Terreno: {superficie_del_terreno} m²</p>
                <p>Superficie Cubierta: {superficie_cubierta_total} m²</p>
                <p>Quincho: {quincho ? "Sí" : "No"}</p>
                <p>Dormitorios: {dormitorios}</p>
                <p>Cochera: {cochera}</p>
                <p>Plantas: {plantas}</p>
                <div className="grid grid-cols-2 gap-4 mt-4">
                    {images.map((image, index) => (
                        <Image
                            src={image || placeholder}
                            alt={`Imagen ${index + 1} de ${title}`}
                            width={150}
                            height={150}
                            key={index}
                        />
                    ))}
                </div>
            </div>
        );

    } catch (error) {
        console.error("Error en PropiedadPage:", error);
        return (
            <div className="min-h-screen bg-gray-100">
                <h1>Error al cargar la propiedad</h1>
            </div>
        );
    }
}


