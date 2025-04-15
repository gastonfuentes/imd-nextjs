export interface PostsResponse {
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
    excerpt: Content;
    author: number;
    featured_media: number;
    comment_status: string;
    ping_status: string;
    sticky: boolean;
    template: string;
    format: string;
    meta: Meta;
    categories: number[];
    tags: number[];
    class_list: string[];
    acf: [];
    _links: Links;
}

export interface Links {
    self: Self[];
    collection: About[];
    about: About[];
    author: Author[];
    replies: Author[];
    "version-history": VersionHistory[];
    "predecessor-version": PredecessorVersion[];
    "wp:attachment": About[];
    "wp:term": WpTerm[];
    curies: Cury[];
}

export interface About {
    href: string;
}

export interface Author {
    embeddable: boolean;
    href: string;
}

export interface Cury {
    name: string;
    href: string;
    templated: boolean;
}

export interface PredecessorVersion {
    id: number;
    href: string;
}

export interface Self {
    href: string;
    targetHints: TargetHints;
}

export interface TargetHints {
    allow: string[];
}

export interface VersionHistory {
    count: number;
    href: string;
}

export interface WpTerm {
    taxonomy: string;
    embeddable: boolean;
    href: string;
}

export interface Content {
    rendered: string;
    protected: boolean;
}

export interface GUID {
    rendered: string;
}

export interface Meta {
    _acf_changed: boolean;
    footnotes: string;
}
