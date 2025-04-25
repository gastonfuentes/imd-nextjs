
/* interface Props {
    title: string
} */

//SOLOS SE EJECUTA EN BUILDTIME
export async function generateStaticParams() {

    return [
        { id: '1' },
        { id: '2' },
        { id: '3' },
        { id: '4' },
        { id: '5' },
        { id: '6' },
    ]
}


export default async function PropiedadPage({ params, }: { params: Promise<{ id: string }>; }) {

    const { id } = await params;

    return (
        <div>
            <h1>Propiedad {id}</h1>

        </div>
    );
}