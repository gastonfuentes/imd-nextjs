export interface UbicacionesResponse {
    id: number;
    count: number;
    description: string;
    link: string;
    name: string;
    slug: string;
    taxonomy: string;
    meta: [];
    acf: [];
    _links: Links;
}

export interface Links {
    self: Self[];
    collection: About[];
    about: About[];
    "wp:post_type": About[];
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
