import { GoogleMaps } from "./inmuebles-response";

export interface SimpleInmueble {
    id: number;
    title: string;
    images: string[];
    descripcion: string | undefined;
    direccion: string;
    precio: string;
    superficie_construida_total: string;
    superficie_del_terreno: string;
    superficie_cubierta_total: string;
    quincho: boolean;
    dormitorios: string;
    cochera: string;
    plantas: string;
    slug: string;
    tipo_inmueble: string;
    tipo_operacion: string;
    ciudad: string;
    ciudad_nombre: string;
    tipo_inmueble_nombre: string;
    destacado: boolean;
    maps: GoogleMaps;
    banios: string | undefined;
    moneda: string
}