"use client";

import { SimpleInmueble } from "../inmuebles/interfaces/simple-inmueble";
import { SearchImdAdvanced } from "@/components/SearchImd/SearchImdAdvanced";
import PropertyCard from "./PropertyCard";
import { Option } from "./SearchTypeProperty/SearchTypePropertySelect";
import { useTransition } from "react";
import PropertyCardSkeleton from "./PropertyCardSkeleton";
import { PaginationFront } from "./Pagination";

export const PropertyGrid = ({
  propiedades,
  tipos,
  ubicaciones,
  totalPages,
}: {
  propiedades: SimpleInmueble[];
  tipos: Option[];
  ubicaciones: Option[];
  totalPages: number;
}) => {
  const [isPending, startTransition] = useTransition();

  return (
    <>
      <header className="my-4">
        <SearchImdAdvanced
          tipos={tipos}
          ubicaciones={ubicaciones}
          startTransition={startTransition}
        />
      </header>
      <div className="">
        {isPending ? (
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Skeletons de carga */}
            {Array.from({ length: 8 }).map((_, index) => (
              <li key={index} className="relative">
                <PropertyCardSkeleton />
              </li>
            ))}
          </ul>
        ) : (
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {propiedades.map((inmueble) => (
              <li key={inmueble.id}>
                <PropertyCard
                  key={inmueble.id}
                  images={inmueble.images}
                  slug={inmueble.slug}
                  description={inmueble.descripcion}
                  id={inmueble.id.toString()}
                  title={inmueble.title}
                  price={inmueble.precio}
                  city={inmueble.ciudad_nombre}
                  location={inmueble.direccion}
                  squareMeters={Number(inmueble.superficie_del_terreno)}
                  bedrooms={Number(inmueble.dormitorios)}
                  bathrooms={Number(inmueble.banios)}
                  operation={inmueble.tipo_operacion}
                  moneda={inmueble.moneda}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
      <footer>
        <PaginationFront
          totalPages={totalPages}
          startTransition={startTransition}
        />
      </footer>
    </>
  );
};
