'use client'

import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import { useQueryState } from 'nuqs';

interface MultiOparationProps {
    noServer: boolean; // Propiedad para evitar la carga del servidor
    startTransition?: (callback: () => void) => void; // Propiedad opcional para manejar transiciones
}
export function SearchTypeOperation({ noServer, startTransition }: MultiOparationProps) {

    const [operacion, setOperacion] = useQueryState('tipo_operacion', { defaultValue: '', shallow: noServer, startTransition }); // Valor predeterminado: "alquilar" 



    return (
        <Tabs defaultValue={operacion.toString()} className="w-full" onValueChange={(value) => setOperacion(value)}>
            <TabsList className="grid w-full grid-cols-2 gap-2">
                <TabsTrigger value='alquilar' className="bg-white cursor-pointer hover:bg-secondary ">Alquilar</TabsTrigger>
                <TabsTrigger value="comprar" className="bg-white cursor-pointer hover:bg-secondary ">Comprar</TabsTrigger>
            </TabsList>
        </Tabs>
    )
}