
import { fetchFilteredProperties } from "@/lib/fetch-properties";
import { z } from "zod";
import { PropertyGrid } from '../../../components/PropertyGrid';
import { Option } from "@/components/SearchTypeProperty/SearchTypePropertySelect";
import { fetchTipoInmuebles } from "@/lib/fetch-tipo-inmuebles";
import { SimpleTipoInmueble } from "@/inmuebles/interfaces/simple-tipo-inmuebles";
import { fetchUbicaciones } from "@/lib/fetch-ubicaciones";
import { SimpleUbicacion } from "@/inmuebles/interfaces/simple-ubicacion";
import { redirect } from "next/navigation";


type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

const querySchema = z.object({
    tipo_operacion: z.string().optional(),
    ciudades: z.preprocess(
        (value) => (typeof value === "string" ? value.split(",") : value),
        z.array(z.string()).optional()
    ),
    tipo_inmueble: z.preprocess(
        (value) => (typeof value === "string" ? value.split(",") : value),
        z.array(z.string()).optional()
    ),
    page: z.string().optional(),
});

export default async function ListadoPage(props: { searchParams: SearchParams }) {
    // Hook para manejar transiciones de estado

    const searchParamas = await props.searchParams;

    console.log("searchParams", searchParamas); // Imprimir los parámetros de búsqueda en la consola

    // Obtener el valor actual de `page` o establecerlo en 1 si no está definido
    const pageFromQuery = parseInt(searchParamas.page as string, 10) || 1;

    const query = querySchema.parse(searchParamas); // Validar los parámetros de búsqueda
    const { properties, totalPages } = await fetchFilteredProperties(query); // Filtrar las propiedades según los parámetros de búsqueda

    console.log("totalPages", totalPages); // Imprimir el número total de páginas en la consola

    if (pageFromQuery > totalPages) {
        const params = new URLSearchParams(query as Record<string, string>); // Convertir los searchParams a URLSearchParams
        params.set('page', '1'); // Establecer page=1

        // Redirigir con los parámetros actualizados
        redirect(`/propiedades/listado?${params.toString()}`);
    }


    // Obtener los tipos de inmuebles y formatearlos al tipo Option
    const tipos: Option[] = (await fetchTipoInmuebles()).map((tipo: SimpleTipoInmueble) => ({
        value: tipo.slug, // Asigna el ID como value
        label: tipo.name, // Asigna el nombre como label
    }));

    // Obtener las ubicaciones formatearlos al tipo Option
    const ubicaciones: Option[] = (await fetchUbicaciones()).map((ubi: SimpleUbicacion) => ({
        value: ubi.slug, // Asigna el ID como value
        label: ubi.name, // Asigna el nombre como label
    }));



    return (
        <div className="w-5/6 mx-auto mt-8 p-4 rounded-md shadow-md bg-white">

            <PropertyGrid propiedades={properties} tipos={tipos} ubicaciones={ubicaciones} totalPages={totalPages} />

        </div >
    )
}