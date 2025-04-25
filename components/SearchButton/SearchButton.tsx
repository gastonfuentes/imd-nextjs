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

    return (<Button variant='outline' className=" cursor-pointer bg-secondary hover:bg-secondary/80" onClick={handleSearch}>Buscar</Button>)
}