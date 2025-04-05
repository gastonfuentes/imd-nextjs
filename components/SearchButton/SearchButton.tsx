'use client'

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation";

export function SearchButton() {

    const router = useRouter();

    const handleSearch = () => {
        // Obtener los parámetros actuales de la URL
        const currentSearchParams = window.location.search;
        // Redirigir a la página de listado con los filtros actuales en la URL
        router.push(`/propiedades/listado${currentSearchParams}`);
    };

    return (<Button variant='destructive' className=" bg-amber-300 text-amber-50" onClick={handleSearch}>Buscar</Button>)
}