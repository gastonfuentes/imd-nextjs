import { fetchTipoInmuebles } from "@/lib/fetch-tipo-inmuebles";
import { SearchTypeOperation } from "../SearchTypeOperation";
import { SimpleTipoInmueble } from "@/inmuebles/interfaces/simple-tipo-inmuebles";
import { Option, SearchTypePropertySelect } from "../SearchTypeProperty/SearchTypePropertySelect";
import { fetchUbicaciones } from "@/lib/fetch-ubicaciones";
import { SimpleUbicacion } from "@/inmuebles/interfaces/simple-ubicacion";



export async function SearchImdAdvanced() {


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
        <div className="grid grid-cols-3 gap-2">
            <SearchTypeOperation noServer={false} />
            <SearchTypePropertySelect options={ubicaciones} placeholder="Ciudad" queryKey="ubicacion" noServer={false} />
            <SearchTypePropertySelect options={tipos} queryKey="tipo_inmueble" noServer={false} />

        </div>
    )
}