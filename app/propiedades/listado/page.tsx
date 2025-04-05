


import { SearchTypeOperation } from "@/components/SearchTypeOperation";
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
        <div>

            {/* <SearchImd /> */}


            <h1>Hello soy listado page y recibo parametros de url</h1>
            {/*  <h2>Operacion: {operacion}</h2>
            <h2>Operacion: {ciudad}</h2>
            <h2>Operacion: {tipoPropiedad}</h2> */}
            <br />
            <h1>Listado de propiedades</h1>
            <div className="grid grid-cols-2 gap-4">
                {propiedadesFiltradas.map((inmueble) => (
                    <div key={inmueble.id} className="border p-4 rounded-md shadow-md bg-white">
                        <h2>{inmueble.title}</h2>
                        <p>Precio: {inmueble.precio}</p>
                        <p>Ciudad: {inmueble.direccion}</p>
                        <p>Tipo de propiedad: {inmueble.tipo_inmueble_nombre}</p>
                        <p>Ciudad: {inmueble.ubicacion_nombre}</p>
                    </div>
                ))}
            </div>
            <SearchTypeOperation noServer={false} />
        </div >
    )
}