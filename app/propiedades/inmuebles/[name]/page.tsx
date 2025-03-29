import { fetchProperties, fetchPropertyBySlug } from '@/lib/fetch-properties';
import { SimpleInmueble } from '../../../../inmuebles/interfaces/simple-inmueble';
import Image from 'next/image';
import placeholder from '@/app/images/image.png';

/* interface Props {
    title: string
} */

//SOLOS SE EJECUTA EN BUILDTIME
export async function generateStaticParams() {

    const data: SimpleInmueble[] = await fetchProperties();
    /* console.log(data); */

    return data.map((inmueble) => ({
        name: inmueble.slug,
    }))
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
    /*  console.log(name); */


    const inmueble: SimpleInmueble = await getProperty(name);
    /* console.log(inmueble); */

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
}