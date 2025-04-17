export interface SimplePost {
    id: number;
    title: string;
    excerpt: string;
    content: string;
    slug: string;
    image: string;
    date?: string;
    author: number;
    categories: number[];
    tags: number[];
}