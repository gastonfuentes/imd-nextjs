import { fetchTipoInmuebles } from "@/lib/fetch-tipo-inmuebles";
import { SearchButton } from "../SearchButton/SearchButton";
import { SearchTypeOperation } from "../SearchTypeOperation";
import { SimpleTipoInmueble } from "@/inmuebles/interfaces/simple-tipo-inmuebles";
import { Option, SearchTypePropertySelect } from "../SearchTypeProperty/SearchTypePropertySelect";
import { fetchUbicaciones } from "@/lib/fetch-ubicaciones";
import { SimpleUbicacion } from "@/inmuebles/interfaces/simple-ubicacion";



export async function SearchImd() {


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
        <div className="flex-col justify-between gap-4 p-8 rounded-md flex backdrop-blur-lg shadow-accent mt-8 md:w-1/2 mx-auto">
            <div>
                <SearchTypeOperation noServer={true} />
            </div>
            <div className="flex flex-col gap-4 justify-between">
                <SearchTypePropertySelect options={ubicaciones} placeholder="Ciudad" queryKey="ubicacion" noServer={true} />
                <SearchTypePropertySelect options={tipos} queryKey="tipo_inmueble" noServer={true} />
            </div>
            <SearchButton />
        </div>
    )
}