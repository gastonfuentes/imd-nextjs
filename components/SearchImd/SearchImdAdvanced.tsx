'use client'

/* import { fetchTipoInmuebles } from "@/lib/fetch-tipo-inmuebles"; */
import { SearchTypeOperation } from "../SearchTypeOperation";
/* import { SimpleTipoInmueble } from "@/inmuebles/interfaces/simple-tipo-inmuebles"; */
import { Option, SearchTypePropertySelect } from "../SearchTypeProperty/SearchTypePropertySelect";
/* import { fetchUbicaciones } from "@/lib/fetch-ubicaciones";
import { SimpleUbicacion } from "@/inmuebles/interfaces/simple-ubicacion"; */



export function SearchImdAdvanced({ ubicaciones, tipos, startTransition }: { ubicaciones: Option[], tipos: Option[], startTransition: (callback: () => void) => void }) {




    return (
        <div className="grid grid-cols-3 gap-2">
            <SearchTypeOperation noServer={false} startTransition={startTransition} />
            <SearchTypePropertySelect options={ubicaciones} placeholder="Ciudad" queryKey="ubicacion" noServer={false} startTransition={startTransition} />
            <SearchTypePropertySelect options={tipos} queryKey="tipo_inmueble" noServer={false} startTransition={startTransition} />

        </div>
    )
}