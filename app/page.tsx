import { Banner } from "@/components/Banner";
import { fetchProperties } from '../lib/fetch-properties';
import Image from "next/image";


export default async function Home() {

  const inmuebles = await fetchProperties();

  return (
    <div className="">
      <main className="">
        <Banner />
        {inmuebles.map((inmueble) => (
          <div key={inmueble.id} className=" flex flex-col items-center justify-center gap-4 border-2 border-black p-4 ">
            <h2>{inmueble.title}</h2>
            <div className="flex gap-2">
              {inmueble.images.map((image, index) => (
                /* <img
                  key={index}
                  src={image}
                  alt={`Imagen ${index + 1} de ${inmueble.title}`}
                  className="w-32 h-32 object-cover"
                /> */
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
          </div>
        ))}
      </main>
    </div>
  );
}
