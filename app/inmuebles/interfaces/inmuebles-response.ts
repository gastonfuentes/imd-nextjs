export interface InmueblesResponse {
    id: number;
    date: Date;
    date_gmt: Date;
    guid: GUID;
    modified: Date;
    modified_gmt: Date;
    slug: string;
    status: string;
    type: string;
    link: string;
    title: GUID;
    content: Content;
    featured_media: number;
    template: string;
    tipo_inmueble: number[];
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
    name: string;
    href: string;
    templated: boolean;
}

export interface Self {
    href: string;
    targetHints: TargetHints;
}

export interface TargetHints {
    allow: string[];
}

export interface WpTerm {
    taxonomy: string;
    embeddable: boolean;
    href: string;
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
