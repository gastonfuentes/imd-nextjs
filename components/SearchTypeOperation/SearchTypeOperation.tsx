'use client'

import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import { parseAsString, useQueryState } from 'nuqs';

interface MultiOparationProps {
    noServer: boolean; // Propiedad para evitar la carga del servidor
    startTransition?: (callback: () => void) => void; // Propiedad opcional para manejar transiciones
}
export function SearchTypeOperation({ noServer, startTransition }: MultiOparationProps) {

    const [operacion, setOperacion] = useQueryState('tipo_operacion', { defaultValue: '', shallow: noServer, startTransition }); // Valor predeterminado: "alquilar" 


    const [, setPage] = useQueryState(
        "page",
        parseAsString.withDefault("1").withOptions({
            shallow: true,
            startTransition,
        })
    ); // Manejar el estado de `page` con nuqs


    return (
        <Tabs defaultValue={operacion.toString()} className="w-full" onValueChange={(value) => { setOperacion(value); setPage("1") }}>
            <TabsList className="grid w-full grid-cols-2 gap-2">
                <TabsTrigger value='alquiler' className="bg-white cursor-pointer hover:bg-secondary ">Alquilar</TabsTrigger>
                <TabsTrigger value="venta" className="bg-white cursor-pointer hover:bg-secondary ">Comprar</TabsTrigger>
            </TabsList>
        </Tabs>
    )
}