'use client'

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useQueryState } from "nuqs";



export function SearchLocation() {

    const [ciudad, setCiudad] = useQueryState('ciudad', { defaultValue: '', shallow: false }); // Valor predeterminado: "alquilar"

    return (
        <div className="w-1/2">
            <Select onValueChange={(value) => setCiudad(value)} defaultValue={ciudad.toString()}>
                <SelectTrigger className="w-[180px]" >
                    <SelectValue placeholder="Selecciona la ciudad" />
                </SelectTrigger>
                <SelectContent className=" p-2 bg-amber-100" >
                    <SelectItem value="catamarca">Catamarca</SelectItem>
                    <SelectItem value="neuquen">Neuquen</SelectItem>
                    <SelectItem value="la rioja">La Rioja</SelectItem>
                </SelectContent>
            </Select>
        </div>

    )
}