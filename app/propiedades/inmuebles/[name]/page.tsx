import { fetchProperties } from '@/lib/fetch-properties';
import { SimpleInmueble } from '../../../../inmuebles/interfaces/simple-inmueble';

/* interface Props {
    title: string
} */

//SOLOS SE EJECUTA EN BUILDTIME
export async function generateStaticParams() {

    const data: SimpleInmueble[] = await fetchProperties();
    console.log(data);

    return data.map((inmueble) => ({
        name: inmueble.slug,
    }))
}


export default async function PropiedadPage({ params, }: { params: Promise<{ name: string }>; }) {

    const { name } = await params;

    return (
        <div className='min-h-screen bg-gray-100'>
            <h1>Propiedad {name}</h1>

        </div>
    );
}