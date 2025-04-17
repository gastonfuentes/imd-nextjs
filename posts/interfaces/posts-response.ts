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
    tags: [];
    class_list: string[];
    acf: [];
    _links: PostsResponseLinks;
    _embedded: Embedded;
}

export interface Embedded {
    author: EmbeddedAuthor[];
    "wp:featuredmedia": WpFeaturedmedia[];
    "wp:term": Array<EmbeddedWpTerm[]>;
}

export interface EmbeddedAuthor {
    id: number;
    name: string;
    url: string;
    description: string;
    link: string;
    slug: string;
    avatar_urls: { [key: string]: string };
    acf: [];
    _links: AuthorLinks;
}

export interface AuthorLinks {
    self: Self[];
    collection: About[];
}

export interface About {
    href: string;
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

export interface WpFeaturedmedia {
    id: number;
    date: Date;
    slug: string;
    type: string;
    link: string;
    title: GUID;
    author: number;
    featured_media: number;
    acf: [];
    caption: GUID;
    alt_text: string;
    media_type: string;
    mime_type: MIMEType;
    media_details: MediaDetails;
    source_url: string;
    _links: WpFeaturedmediaLinks;
}

export interface WpFeaturedmediaLinks {
    self: Self[];
    collection: About[];
    about: About[];
    author: ReplyElement[];
    replies: ReplyElement[];
}

export interface ReplyElement {
    embeddable: boolean;
    href: string;
}

export interface GUID {
    rendered: string;
}

export interface MediaDetails {
    width: number;
    height: number;
    file: string;
    filesize: number;
    sizes: Sizes;
    image_meta: ImageMeta;
}

export interface ImageMeta {
    aperture: string;
    credit: string;
    camera: string;
    caption: string;
    created_timestamp: string;
    copyright: string;
    focal_length: string;
    iso: string;
    shutter_speed: string;
    title: string;
    orientation: string;
    keywords: [];
}

export interface Sizes {
    medium: Full;
    thumbnail: Full;
    medium_large: Full;
    full: Full;
}

export interface Full {
    file: string;
    width: number;
    height: number;
    mime_type: MIMEType;
    source_url: string;
    filesize?: number;
}

export enum MIMEType {
    ImageWebp = "image/webp",
}

export interface EmbeddedWpTerm {
    id: number;
    link: string;
    name: string;
    slug: string;
    taxonomy: string;
    acf: [];
    _links: WpTermLinks;
}

export interface WpTermLinks {
    self: Self[];
    collection: About[];
    about: About[];
    "wp:post_type": About[];
    curies: Cury[];
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

export interface PostsResponseLinks {
    self: Self[];
    collection: About[];
    about: About[];
    author: ReplyElement[];
    replies: ReplyElement[];
    "version-history": VersionHistory[];
    "predecessor-version": PredecessorVersion[];
    "wp:featuredmedia": ReplyElement[];
    "wp:attachment": About[];
    "wp:term": LinksWpTerm[];
    curies: Cury[];
}

export interface PredecessorVersion {
    id: number;
    href: string;
}

export interface VersionHistory {
    count: number;
    href: string;
}

export interface LinksWpTerm {
    taxonomy: string;
    embeddable: boolean;
    href: string;
}

export interface Content {
    rendered: string;
    protected: boolean;
}

export interface Meta {
    _acf_changed: boolean;
    footnotes: string;
}

