

/* import { SearchImd } from "@/components/SearchImd"; */
import { SearchTypeOperation } from "@/components/SearchTypeOperation";
import { fetchFilteredProperties } from "@/lib/fetch-properties";
import { z } from "zod";
/* import { useQueryState, SearchParams } from 'nuqs'; */
/* import { useEffect, useState } from "react";
import { SimpleInmueble } from '../../../inmuebles/interfaces/simple-inmueble';
import { fetchProperties } from "@/lib/fetch-properties"; */

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

const querySchema = z.object({
    operacion: z.string().optional(),
    ciudad: z.string().optional(),
    tipoPropiedad: z.string().optional(),
});

export default async function ListadoPage(props: { searchParams: SearchParams }) {

    const searchParamas = await props.searchParams;

    console.log("searchParams", searchParamas); // Imprimir los parámetros de búsqueda en la consola


    const query = querySchema.parse(searchParamas); // Validar los parámetros de búsqueda
    const propiedadesFiltradas = await fetchFilteredProperties(query); // Filtrar las propiedades según los parámetros de búsqueda


    return (
        <div>

            {/* <SearchImd /> */}


            <h1>Hello soy listado page y recibo parametros de url</h1>
            {/*  <h2>Operacion: {operacion}</h2>
            <h2>Operacion: {ciudad}</h2>
            <h2>Operacion: {tipoPropiedad}</h2> */}
            <br />
            <h1>Listado de propiedades</h1>
            <div className="grid grid-cols-2 gap-4">
                {propiedadesFiltradas.map((inmueble) => (
                    <div key={inmueble.id} className="border p-4 rounded-md shadow-md bg-white">
                        <h2>{inmueble.title}</h2>
                        <p>Precio: {inmueble.precio}</p>
                        <p>Ciudad: {inmueble.direccion}</p>
                        <p>Tipo de propiedad: {inmueble.plantas}</p>
                    </div>
                ))}
            </div>
            <SearchTypeOperation />
        </div >
    )
}