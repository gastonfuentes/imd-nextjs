import { SimpleTipoInmueble } from "../inmuebles/interfaces/simple-tipo-inmuebles";
import { TipoInmueblesResponse } from "../inmuebles/interfaces/tipos-inmuebles-response";

export const fetchTipoInmuebles = async (): Promise<SimpleTipoInmueble[]> => {
  const res: TipoInmueblesResponse[] = await fetch(
    "https://bisque-giraffe-421578.hostingersite.com/wp-json/wp/v2/tipo_inmueble"
  ).then((res) => res.json());

  const tipoInmueble = res.map((tipo) => ({
    id: tipo.id,
    name: tipo.name,
    count: tipo.count,
    slug: tipo.slug,
  }));

  return tipoInmueble;
};

// Obtener el mapa de tipos de inmuebles (ID -> Slug)
/* export const fetchTiposInmueblesMap = async (): Promise<Record<string, string>> => {
    const res = await fetch("https://bisque-giraffe-421578.hostingersite.com/wp-json/wp/v2/tipo_inmueble")
        .then((res) => res.json());

    const tiposInmueblesMap: Record<string, string> = {};
    res.forEach((tipo: { id: number; slug: string }) => {
        tiposInmueblesMap[tipo.id.toString()] = tipo.slug;
    });

    return tiposInmueblesMap;
}; */

// Obtener el mapa de tipos de inmuebles (Slug -> ID)
export const fetchTiposInmueblesMap = async (): Promise<
  Record<string, string>
> => {
  const res = await fetch(
    "https://bisque-giraffe-421578.hostingersite.com/wp-json/wp/v2/tipo_inmueble"
  );
  const data: { id: number; slug: string }[] = await res.json();

  // Construir el mapa con el slug como clave y el ID como valor
  const tiposInmueblesMap = data.reduce((acc, tipo) => {
    acc[tipo.slug] = tipo.id.toString(); // Usar el slug como clave y el ID como valor
    return acc;
  }, {} as Record<string, string>);

  return tiposInmueblesMap;
};

// Obtener el mapa de tipos de inmuebles (ID -> Nombre real desde API)
export const fetchTiposInmueblesNombres = async (): Promise<
  Record<string, string>
> => {
  const res = await fetch(
    "https://bisque-giraffe-421578.hostingersite.com/wp-json/wp/v2/tipo_inmueble"
  );
  const data: { id: number; name: string }[] = await res.json();

  // Construir el mapa con el ID como clave y el nombre como valor
  const tiposNombresMap = data.reduce((acc, tipo) => {
    acc[tipo.id.toString()] = tipo.name; // ID -> Nombre real
    return acc;
  }, {} as Record<string, string>);

  return tiposNombresMap;
};
