
import { fetchFilteredProperties } from "@/lib/fetch-properties";
import { z } from "zod";
import { PropertyGrid } from '../../../components/PropertyGrid';
import { Option } from "@/components/SearchTypeProperty/SearchTypePropertySelect";
import { fetchTipoInmuebles } from "@/lib/fetch-tipo-inmuebles";
import { SimpleTipoInmueble } from "@/inmuebles/interfaces/simple-tipo-inmuebles";
import { fetchUbicaciones } from "@/lib/fetch-ubicaciones";
import { SimpleUbicacion } from "@/inmuebles/interfaces/simple-ubicacion";


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
    // Hook para manejar transiciones de estado

    const searchParamas = await props.searchParams;

    console.log("searchParams", searchParamas); // Imprimir los parámetros de búsqueda en la consola


    const query = querySchema.parse(searchParamas); // Validar los parámetros de búsqueda
    const propiedadesFiltradas = await fetchFilteredProperties(query); // Filtrar las propiedades según los parámetros de búsqueda


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

            <PropertyGrid propiedades={propiedadesFiltradas} tipos={tipos} ubicaciones={ubicaciones} />

        </div >
    )
}