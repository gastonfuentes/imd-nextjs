
import { fetchFilteredProperties } from "@/lib/fetch-properties";
import { z } from "zod";
import { PropertyGrid } from '../../../components/PropertyGrid';
import { Option } from "@/components/SearchTypeProperty/SearchTypePropertySelect";
import { fetchTipoInmuebles } from "@/lib/fetch-tipo-inmuebles";
import { SimpleTipoInmueble } from "@/inmuebles/interfaces/simple-tipo-inmuebles";
import { fetchUbicaciones } from "@/lib/fetch-ubicaciones";
import { SimpleUbicacion } from "@/inmuebles/interfaces/simple-ubicacion";


// **Definición de los parámetros de búsqueda**
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

// **Definición del esquema de validación de los parámetros de búsqueda**
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


// **Definición de la función `ListadoPage` que se encarga de renderizar la página de listado de propiedades**
export default async function ListadoPage(props: { searchParams: SearchParams }) {

    const searchParamas = await props.searchParams; // Obtener los parámetros de búsqueda de la URL     

    const query = querySchema.parse(searchParamas); // Validar los parámetros de búsqueda
    const { properties, totalPages } = await fetchFilteredProperties(query); // Filtrar las propiedades según los parámetros de búsqueda



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

            {/* //**Renderizar el componente `PropertyGrid` con las propiedades, tipos y ubicaciones obtenidas**
            // **También se pasa el número total de páginas para la paginación** */}
            <PropertyGrid propiedades={properties} tipos={tipos} ubicaciones={ubicaciones} totalPages={totalPages} />

        </div >
    )
}