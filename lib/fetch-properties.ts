import { InmueblesResponse } from "../inmuebles/interfaces/inmuebles-response";
import { SimpleInmueble } from "../inmuebles/interfaces/simple-inmueble";
import { extractImagesFromContent } from "./extract-images";
import { fetchTiposInmueblesMap } from "./fetch-tipo-inmuebles";
import { fetchTiposOperacionMap } from "./fetch-tipo-operacion";
import { fetchUbicacionesMap } from "./fetch-ubicaciones";

// Función para obtener todas las propiedades con datos completos
export const fetchProperties = async (): Promise<SimpleInmueble[]> => {
  try {
    // Obtener los mapas de ubicaciones y tipos de inmuebles
    const [ubicacionesMap, tiposInmueblesMap] = await Promise.all([
      fetchUbicacionesMap(),
      fetchTiposInmueblesMap(),
    ]);

    const res = await fetch(
      "https://bisque-giraffe-421578.hostingersite.com/wp-json/wp/v2/inmuebles"
    );
    if (!res.ok) {
      throw new Error("Error al obtener las propiedades");
    }

    const data: InmueblesResponse[] = await res.json();

    return data.map((inmueble) => ({
      id: inmueble.id,
      title: inmueble.title.rendered,
      images: extractImagesFromContent(inmueble.content.rendered),
      descripcion: inmueble.acf.descripcion,
      direccion: inmueble.acf.direccion,
      precio: inmueble.acf.precio,
      superficie_construida_total: inmueble.acf.superficie_construida_total,
      superficie_del_terreno: inmueble.acf.superficie_del_terreno,
      superficie_cubierta_total: inmueble.acf.superficie_cubierta_total,
      quincho: inmueble.acf.quincho,
      dormitorios: inmueble.acf.dormitorios,
      cochera: inmueble.acf.cochera,
      plantas: inmueble.acf.plantas,
      slug: inmueble.slug,
      tipo_inmueble: inmueble.tipo_inmueble?.[0]?.toString() || "Desconocido",
      tipo_inmueble_nombre:
        tiposInmueblesMap[inmueble.tipo_inmueble?.[0]?.toString()] ||
        "Desconocido",
      tipo_operacion: inmueble.tipo_operacion?.[0]?.toString(),
      ciudad: inmueble.ciudades?.[0]?.toString(),
      ciudad_nombre:
        ubicacionesMap[inmueble.ciudades?.[0]?.toString()] || "Desconocido",
      destacado: inmueble.acf.destacado || false,
      banios: inmueble.acf.banios || undefined,
      moneda: inmueble.acf.moneda || "ARG",
      maps: inmueble.acf.google_maps || {
        address: "",
        lat: 0,
        lng: 0,
        zoom: 0,
        place_id: "",
        street_number: "",
        street_name: "",
        street_name_short: "",
        city: "",
        post_code: "",
        country: "",
        state: "",
        country_short: "",
      },
    }));
  } catch (error) {
    console.error("Error en fetchProperties:", error);
    return []; // Devuelve un array vacío en caso de error
  }
};

// Función para filtrar propiedades según un query
export const fetchFilteredProperties = async (
  query: Record<string, string | string[]>, // Filtros
  page: number = 1, // Página actual
  perPage: number = 6 // Propiedades por página
): Promise<{ properties: SimpleInmueble[]; totalPages: number }> => {
  try {
    // Obtener los mapas de ubicaciones y tipos de inmuebles
    const [ubicacionesMap, tiposInmueblesMap, tiposOperacionMap] =
      await Promise.all([
        //fetchUbicacionesIdToNameMap(), // Mapa de ubicaciones (ID -> nombre)
        fetchUbicacionesMap(), // Mapa de ciudades (nombre -> ID)
        fetchTiposInmueblesMap(), // Mapa de tipos de inmuebles (nombre -> ID)
        fetchTiposOperacionMap(), // Mapa de tipos de operación (nombre -> ID)
      ]);

    // Construir la URL con los filtros y la paginación
    const params = new URLSearchParams();

    // Agregar filtros dinámicamente
    if (query.tipo_operacion) {
      const tipoOperacion = Array.isArray(query.tipo_operacion)
        ? query.tipo_operacion
            .map((op) => tiposOperacionMap[op] || op)
            .join(",") // Convertir nombres a IDs
        : tiposOperacionMap[query.tipo_operacion] || query.tipo_operacion;

      params.append("tipo_operacion", tipoOperacion); // Agregar los IDs a los parámetros
    }

    if (query.ciudades) {
      const ciudades = Array.isArray(query.ciudades)
        ? query.ciudades
            .map((loc) => {
              const id = ubicacionesMap[loc]; // Buscar el ID en el mapa de ubicaciones

              console.log(`Mapeando "${loc}" a ID:`, id); // Depuración: Verifica cada mapeo
              return id || loc; // Si no encuentra el ID, usa el valor original
            })
            .join(",") // Combina los IDs en una cadena separada por comas
        : ubicacionesMap[query.ciudades] || query.ubicacion;

      console.log("Ubicación final para params:", ciudades); // Depuración: Verifica el valor final
      params.append("ciudades", ciudades.toString()); // Agregar los IDs a los parámetros
    }

    if (query.tipo_inmueble) {
      const tipoInmueble = Array.isArray(query.tipo_inmueble)
        ? query.tipo_inmueble
            .map((tipo) => tiposInmueblesMap[tipo] || tipo)
            .join(",") // Convertir nombres a IDs
        : tiposInmueblesMap[query.tipo_inmueble] || query.tipo_inmueble;

      params.append("tipo_inmueble", tipoInmueble); // Agregar los IDs a los parámetros
    }

    if (query.page) {
      const pageFromQuery = Array.isArray(query.page)
        ? query.page[0]
        : query.page; // Manejar si viene como array
      params.append("page", pageFromQuery.toString()); // Agregar el número de página al objeto params
    } else {
      params.append("page", page.toString()); // Usar el valor predeterminado si no viene en query
    }

    params.append("per_page", perPage.toString());

    /*  console.log("params", params.toString()); // Imprimir los parámetros de búsqueda en la consola */

    // Llamar a la API de WordPress con los filtros y la paginación
    const res = await fetch(
      `https://bisque-giraffe-421578.hostingersite.com/wp-json/wp/v2/inmuebles?${params.toString()}`
    );

    if (!res.ok) {
      throw new Error("Error al obtener las propiedades filtradas");
    }

    // Obtener el total de páginas desde los encabezados de la API
    const totalPages = parseInt(res.headers.get("X-WP-TotalPages") || "1", 10);

    // Procesar los datos de la respuesta
    const data: InmueblesResponse[] = await res.json();

    // Mapear los datos a SimpleInmueble
    const properties = data.map((inmueble) => ({
      id: inmueble.id,
      title: inmueble.title.rendered,
      images: extractImagesFromContent(inmueble.content.rendered),
      descripcion: inmueble.acf.descripcion,
      direccion: inmueble.acf.direccion,
      precio: inmueble.acf.precio,
      superficie_construida_total: inmueble.acf.superficie_construida_total,
      superficie_del_terreno: inmueble.acf.superficie_del_terreno,
      superficie_cubierta_total: inmueble.acf.superficie_cubierta_total,
      quincho: inmueble.acf.quincho,
      dormitorios: inmueble.acf.dormitorios,
      cochera: inmueble.acf.cochera,
      plantas: inmueble.acf.plantas,
      slug: inmueble.slug,
      tipo_inmueble: inmueble.tipo_inmueble?.[0]?.toString() || "Desconocido",
      tipo_operacion: inmueble.tipo_operacion?.[0]?.toString(),
      ciudad: inmueble.ciudades?.[0]?.toString(),
      //
      ciudad_nombre: inmueble.acf.google_maps?.city || "Desconocido",
      tipo_inmueble_nombre: "Desconocido", // Puedes mapearlo si tienes un mapa de tipos
      destacado: inmueble.acf.destacado || false,
      banios: inmueble.acf.banios || undefined,
      moneda: inmueble.acf.moneda || "ARG",
      maps: inmueble.acf.google_maps || {
        address: "",
        lat: 0,
        lng: 0,
        zoom: 0,
        place_id: "",
        street_number: "",
        street_name: "",
        street_name_short: "",
        city: "",
        post_code: "",
        country: "",
        state: "",
        country_short: "",
      },
    }));

    console.log("Propiedades filtradas:", properties); // Depuración: Verifica las propiedades obtenidas

    return { properties, totalPages }; // Devuelve las propiedades y el total de páginas
  } catch (error) {
    console.error("Error en fetchFilteredProperties:", error);
    return { properties: [], totalPages: 1 }; // Devuelve un array vacío en caso de error
  }
};

// Función para obtener una propiedad por su slug
export const fetchPropertyBySlug = async (
  slug: string
): Promise<SimpleInmueble> => {
  try {
    const res = await fetch(
      `https://bisque-giraffe-421578.hostingersite.com/wp-json/wp/v2/inmuebles?slug=${slug}`
    );
    if (!res.ok) {
      throw new Error(`Error al obtener la propiedad con slug: ${slug}`);
    }

    const data: InmueblesResponse[] = await res.json();
    if (data.length === 0) {
      console.warn(`No se encontró ninguna propiedad con el slug: ${slug}`);
      throw new Error(`Error al obtener la propiedad con slug: ${slug}`);
    }

    const inmuebleData = data[0];

    return {
      id: inmuebleData.id,
      title: inmuebleData.title.rendered,
      images: extractImagesFromContent(inmuebleData.content.rendered),
      descripcion: inmuebleData.acf.descripcion,
      direccion: inmuebleData.acf.direccion,
      precio: inmuebleData.acf.precio,
      superficie_construida_total: inmuebleData.acf.superficie_construida_total,
      superficie_del_terreno: inmuebleData.acf.superficie_del_terreno,
      superficie_cubierta_total: inmuebleData.acf.superficie_cubierta_total,
      quincho: inmuebleData.acf.quincho,
      dormitorios: inmuebleData.acf.dormitorios,
      cochera: inmuebleData.acf.cochera,
      plantas: inmuebleData.acf.plantas,
      slug: inmuebleData.slug,
      tipo_inmueble:
        inmuebleData.tipo_inmueble?.[0]?.toString() || "Desconocido",
      tipo_operacion:
        inmuebleData.tipo_operacion?.[0]?.toString() || "Desconocido",
      ciudad: inmuebleData.ciudades?.[0]?.toString() || "Desconocido",
      ciudad_nombre: "Desconocido",
      tipo_inmueble_nombre: "Desconocido",
      destacado: inmuebleData.acf.destacado || false,
      banios: inmuebleData.acf.banios || undefined,
      moneda: inmuebleData.acf.moneda || "ARG",
      maps: inmuebleData.acf.google_maps || {
        address: "",
        lat: 0,
        lng: 0,
        zoom: 0,
        place_id: "",
        street_number: "",
        street_name: "",
        street_name_short: "",
        city: "",
        post_code: "",
        country: "",
        state: "",
        country_short: "",
      },
    };
  } catch (error) {
    console.error("Error en fetchPropertyBySlug:", error);
    throw new Error(`Error al obtener la propiedad con slug: ${slug}`);
  }
};

// Función para obtener propiedades simples
export const fetchPropertiesSimple = async (): Promise<SimpleInmueble[]> => {
  try {
    const res = await fetch(
      "https://bisque-giraffe-421578.hostingersite.com/wp-json/wp/v2/inmuebles"
    );
    if (!res.ok) {
      throw new Error("Error al obtener las propiedades simples");
    }

    const data: InmueblesResponse[] = await res.json();

    return data.map((inmueble) => ({
      id: inmueble.id,
      title: inmueble.title.rendered,
      images: extractImagesFromContent(inmueble.content.rendered),
      descripcion: inmueble.acf.descripcion,
      direccion: inmueble.acf.direccion,
      precio: inmueble.acf.precio,
      superficie_construida_total: inmueble.acf.superficie_construida_total,
      superficie_del_terreno: inmueble.acf.superficie_del_terreno,
      superficie_cubierta_total: inmueble.acf.superficie_cubierta_total,
      quincho: inmueble.acf.quincho,
      dormitorios: inmueble.acf.dormitorios,
      cochera: inmueble.acf.cochera,
      plantas: inmueble.acf.plantas,
      slug: inmueble.slug,
      tipo_inmueble: inmueble.tipo_inmueble?.[0]?.toString() || "Desconocido",
      tipo_inmueble_nombre: "Desconocido",
      tipo_operacion: inmueble.tipo_operacion?.[0]?.toString(),
      ciudad: inmueble.ciudades?.[0]?.toString(),
      ciudad_nombre: "Desconocido",
      destacado: inmueble.acf.destacado || false,
      banios: inmueble.acf.banios || undefined,
      moneda: inmueble.acf.moneda || "ARG",
      maps: inmueble.acf.google_maps || {
        address: "",
        lat: 0,
        lng: 0,
        zoom: 0,
        place_id: "",
        street_number: "",
        street_name: "",
        street_name_short: "",
        city: "",
        post_code: "",
        country: "",
        state: "",
        country_short: "",
      },
    }));
  } catch (error) {
    console.error("Error en fetchPropertiesSimple:", error);
    return []; // Devuelve un array vacío en caso de error
  }
};
