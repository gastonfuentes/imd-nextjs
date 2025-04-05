


import PropertyCard from "@/components/PropertyCard";
import { SearchImdAdvanced } from "@/components/SearchImd/SearchImdAdvanced";
import { fetchFilteredProperties } from "@/lib/fetch-properties";
import { z } from "zod";


type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

const querySchema = z.object({
    tipo_operacion: z.string().optional(),
    ubicacion: z.preprocess(
        (value) => (typeof value === "string" ? value.split(",") : value),
        z.array(z.string()).optional()
    ),
    tipo_inmueble: z.preprocess(
        (value) => (typeof value === "string" ? value.split(",") : value),
        z.array(z.string()).optional()
    ),
});

export default async function ListadoPage(props: { searchParams: SearchParams }) {

    const searchParamas = await props.searchParams;

    console.log("searchParams", searchParamas); // Imprimir los parámetros de búsqueda en la consola


    const query = querySchema.parse(searchParamas); // Validar los parámetros de búsqueda
    const propiedadesFiltradas = await fetchFilteredProperties(query); // Filtrar las propiedades según los parámetros de búsqueda


    return (
        <div className="w-5/6 mx-auto mt-8 p-4 rounded-md shadow-md bg-white">
            <h1>Filtros</h1>
            <div>
                <SearchImdAdvanced />
            </div>
            <h1>Listado de propiedades</h1>
            <div className="grid grid-cols-3 gap-4">
                {propiedadesFiltradas.map((inmueble) => (
                    /* <div key={inmueble.id} className="border p-4 rounded-md shadow-md bg-white">
                        <h2>{inmueble.title}</h2>
                        <p>Precio: {inmueble.precio}</p>
                        <p>Ciudad: {inmueble.direccion}</p>
                        <p>Tipo de propiedad: {inmueble.tipo_inmueble_nombre}</p>
                        <p>Ciudad: {inmueble.ubicacion_nombre}</p>
                    </div> */
                    <PropertyCard key={inmueble.id} images={inmueble.images} slug={inmueble.slug} description={inmueble.descripcion} id={inmueble.id.toString()} title={inmueble.title} price={inmueble.precio} city={inmueble.ubicacion_nombre} location={inmueble.direccion} squareMeters={Number(inmueble.superficie_del_terreno)} bedrooms={Number(inmueble.dormitorios)} bathrooms={Number(inmueble.cochera)} />
                ))}
            </div>

        </div >
    )
}