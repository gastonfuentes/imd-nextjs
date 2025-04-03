'use client'

import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import { useQueryState } from 'nuqs';

export function SearchTypeOperation() {

    const [operacion, setOperacion] = useQueryState('operacion', { defaultValue: '', shallow: false }); // Valor predeterminado: "alquilar"

    return (
        <Tabs defaultValue={operacion.toString()} className="w-[400px]" onValueChange={(value) => setOperacion(value)}>
            <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value='alquilar'>Alquilar</TabsTrigger>
                <TabsTrigger value="comprar">Comprar</TabsTrigger>
            </TabsList>
        </Tabs>
    )
}