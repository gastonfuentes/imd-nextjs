export interface InmueblesResponse {
    id: number;
    date: Date;
    date_gmt: Date;
    guid: GUID;
    modified: Date;
    modified_gmt: Date;
    slug: string;
    status: Status;
    type: Type;
    link: string;
    title: GUID;
    content: Content;
    featured_media: number;
    template: string;
    tipo_inmueble: number[];
    tipo_operacion: number[];
    ubicacion: number[];
    class_list: string[];
    acf: Acf;
    _links: Links;
}

export interface Links {
    self: Self[];
    collection: About[];
    about: About[];
    "wp:attachment": About[];
    "wp:term": WpTerm[];
    curies: Cury[];
}

export interface About {
    href: string;
}

export interface Cury {
    name: Name;
    href: Href;
    templated: boolean;
}

export enum Href {
    HTTPSAPIWOrgRel = "https://api.w.org/{rel}",
}

export enum Name {
    Wp = "wp",
}

export interface Self {
    href: string;
    targetHints: TargetHints;
}

export interface TargetHints {
    allow: Allow[];
}

export enum Allow {
    Get = "GET",
}

export interface WpTerm {
    taxonomy: Taxonomy;
    embeddable: boolean;
    href: string;
}

export enum Taxonomy {
    TipoInmueble = "tipo_inmueble",
    TipoOperacion = "tipo_operacion",
    Ubicacion = "ubicacion",
}

export interface Acf {
    descripcion: string;
    direccion: string;
    precio: string;
    superficie_construida_total: string;
    superficie_cubierta_total: string;
    superficie_del_terreno: string;
    quincho: boolean;
    dormitorios: string;
    cochera: string;
    plantas: string;
}

export interface Content {
    rendered: string;
    protected: boolean;
}

export interface GUID {
    rendered: string;
}

export enum Status {
    Publish = "publish",
}

export enum Type {
    Inmuebles = "inmuebles",
}
