/* import Image from 'next/image' */
import React from 'react'
import { SimpleInmueble } from '../interfaces/simple-inmueble'
import { InmuebleCard } from './InmuebleCard'


interface Props {
    inmuebles: SimpleInmueble[]
}


export const InmueblesGrid = ({ inmuebles }: Props) => {
    return (

        <div className='p-8 flex flex-wrap gap-4'>
            {inmuebles.map((inmueble) => (

                <InmuebleCard key={inmueble.id} inmueble={inmueble} />

                /* <div key={inmueble.id} className=" flex flex-col items-center justify-center gap-4 border-2 border-black p-4 w-1/4">
                    <h2>{inmueble.title}</h2>
                    <div className="flex gap-2">
                        {inmueble.images.map((image, index) => (

                            <Image
                                src={image}
                                alt={`Imagen ${index + 1} de ${inmueble.title}`}
                                width={150}
                                height={150}
                                key={index}
                            />
                        ))}
                    </div>
                    <div>
                        <p>{inmueble.descripcion}</p>
                        <p>{inmueble.direccion}</p>
                        <p>{inmueble.precio}</p>
                        <p>{inmueble.superficie_construida_total}</p>
                        <p>{inmueble.superficie_del_terreno}</p>
                        <p>{inmueble.superficie_cubierta_total}</p>
                        <p>{inmueble.quincho}</p>
                        <p>{inmueble.dormitorios}</p>
                        <p>{inmueble.cochera}</p>
                        <p>{inmueble.plantas}</p>
                    </div>
                </div> */
            ))}
        </div>

    )
}
