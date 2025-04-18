export interface SimplePost {
    id: number;
    title: string;
    excerpt: string;
    content: string;
    slug: string;
    image: string;
    date?: string;
    author: string;
    categories: string[];
    tags: string[];
}