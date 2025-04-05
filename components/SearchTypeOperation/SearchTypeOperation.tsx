'use client'

import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import { useQueryState } from 'nuqs';

interface MultiOparationProps {
    noServer: boolean; // Propiedad para evitar la carga del servidor
}
export function SearchTypeOperation({ noServer }: MultiOparationProps) {

    const [operacion, setOperacion] = useQueryState('tipo_operacion', { defaultValue: '', shallow: noServer }); // Valor predeterminado: "alquilar"

    return (
        <Tabs defaultValue={operacion.toString()} className="w-[400px]" onValueChange={(value) => setOperacion(value)}>
            <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value='alquilar'>Alquilar</TabsTrigger>
                <TabsTrigger value="comprar">Comprar</TabsTrigger>
            </TabsList>
        </Tabs>
    )
}