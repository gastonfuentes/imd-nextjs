import Link from "next/link"


import { Button } from "@/components/ui/button"
import { Card, CardContent, /* CardFooter */ CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import { Separator } from "@/components/ui/separator"


import { fetchFeaturedPosts, fetchPostsByCategory } from "@/lib/fetch-posts"
import { PostsGrid } from "@/posts/components/PostsGrid"
import { fetchCategories } from "@/lib/fetch-categories"
import { CategoriesCard } from "@/posts/components/CategoriesCard"
import { SimpleCategory } from '../../../../posts/interfaces/simple-category';


// Artículos destacados
const featuredPosts = await fetchFeaturedPosts()
/* const posts = await fetchPosts() */
const categorias = await fetchCategories()
console.log("categorias", categorias);


//SOLOS SE EJECUTA EN BUILDTIME
export async function generateStaticParams() {

    try {

        const data: SimpleCategory[] = await fetchCategories();

        if (!data || data.length === 0) {
            console.warn('No se encontraron los slugs para generar los parámetros estáticos.');
            return [];
        }


        return data.map((slug) => ({
            slug: slug.slug,
        }))

    } catch (error) {
        console.error("Error en generateStaticParams:", error);
        return []; // Retorna un array vacío en caso de error
    }

}


/* export async function generateMetadata({ params }: { params: Promise<{ slug: string }>; }) {
    const { slug } = await params;
    const post: SimplePost = await fetchPostyBySlug(slug);

    return {
        title: post.title,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            images: [`/${post.image}`]
        },
    }
} */




export default async function CategoryPage({ params, }: { params: Promise<{ slug: string }>; }) {

    const { slug } = await params;

    console.log("slug", slug);


    try {

        const posts = await fetchPostsByCategory(slug);

        if (!posts) {
            return <div>No se encontró el post.</div>;
        }

        return (
            <div className="container mx-auto px-4 py-8">
                {/* Hero Section */}
                <section className="mb-12 text-center">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Blog Inmobiliario</h1>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Descubre las últimas tendencias, consejos y noticias del sector inmobiliario para tomar las mejores decisiones
                        en la compra, venta o alquiler de propiedades.
                    </p>
                </section>

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Blog Posts */}
                    <div className="lg:col-span-2">
                        {/* Category Tabs */}
                        {/*  <Tabs defaultValue="all" className="mb-8">
                        <TabsList className="w-full max-w-md mx-auto grid grid-cols-3 h-auto">
                            <TabsTrigger value="all">Todos</TabsTrigger>
                            <TabsTrigger value="consejos">Consejos</TabsTrigger>
                            <TabsTrigger value="inversion">Inversión</TabsTrigger>
                        </TabsList>
                        <TabsContent value="all">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                                {posts.map((post) => (
                                    <Card key={post.id} className="overflow-hidden">
                                        <div className="aspect-video relative">
                                            <Image
                                                src={post.image || placeholder}
                                                alt={post.title}
                                                className="object-cover w-full h-full"
                                                width={500}
                                                height={300}
                                            />
                                            <Badge className="absolute top-3 left-3 bg-primary/90">{post.categories}</Badge>
                                        </div>
                                        <CardHeader className="p-4 pb-0">
                                            <div className="flex items-center text-sm text-muted-foreground mb-2">
                                                <Calendar className="h-3 w-3 mr-1" />
                                                <span>{post.date}</span>
                                                <span className="mx-2">•</span>
                                                <User className="h-3 w-3 mr-1" />
                                                <span>{post.author}</span>
                                            </div>
                                            <Link href={`/blog/${post.slug}`} className="hover:underline">
                                                <h2 className="text-xl font-semibold line-clamp-2">{post.title}</h2>
                                            </Link>
                                        </CardHeader>
                                        <CardContent className="p-4 pt-2">
                                            <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
                                        </CardContent>
                                        <CardFooter className="p-4 pt-0 flex flex-wrap gap-2">
                                            {post.tags.map((tag) => (
                                                <Badge key={tag} variant="outline">
                                                    {tag}
                                                </Badge>
                                            ))}
                                        </CardFooter>
                                    </Card>
                                ))}
                            </div>
                        </TabsContent>
                        <TabsContent value="consejos">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                                {blogPosts
                                    .filter((post) => post.category === "Consejos")
                                    .map((post) => (
                                        <Card key={post.id} className="overflow-hidden">
                                            <div className="aspect-video relative">
                                                <Image
                                                    src={post.image || placeholder}
                                                    alt={post.title}
                                                    className="object-cover w-full h-full"
                                                    width={500}
                                                    height={300}
                                                />
                                                <Badge className="absolute top-3 left-3 bg-primary/90">{post.category}</Badge>
                                            </div>
                                            <CardHeader className="p-4 pb-0">
                                                <div className="flex items-center text-sm text-muted-foreground mb-2">
                                                    <Calendar className="h-3 w-3 mr-1" />
                                                    <span>{post.date}</span>
                                                    <span className="mx-2">•</span>
                                                    <User className="h-3 w-3 mr-1" />
                                                    <span>{post.author}</span>
                                                </div>
                                                <Link href={`/blog/${post.slug}`} className="hover:underline">
                                                    <h2 className="text-xl font-semibold line-clamp-2">{post.title}</h2>
                                                </Link>
                                            </CardHeader>
                                            <CardContent className="p-4 pt-2">
                                                <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
                                            </CardContent>
                                            <CardFooter className="p-4 pt-0 flex flex-wrap gap-2">
                                                {post.tags.map((tag) => (
                                                    <Badge key={tag} variant="outline">
                                                        {tag}
                                                    </Badge>
                                                ))}
                                            </CardFooter>
                                        </Card>
                                    ))}
                            </div>
                        </TabsContent>
                        <TabsContent value="inversion">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                                {blogPosts
                                    .filter((post) => post.category === "Inversión")
                                    .map((post) => (
                                        <Card key={post.id} className="overflow-hidden">
                                            <div className="aspect-video relative">
                                                <Image
                                                    src={post.image || placeholder}
                                                    alt={post.title}
                                                    className="object-cover w-full h-full"
                                                    width={500}
                                                    height={300}
                                                />

                                                <Badge className="absolute top-3 left-3 bg-primary/90">{post.category}</Badge>
                                            </div>
                                            <CardHeader className="p-4 pb-0">
                                                <div className="flex items-center text-sm text-muted-foreground mb-2">
                                                    <Calendar className="h-3 w-3 mr-1" />
                                                    <span>{post.date}</span>
                                                    <span className="mx-2">•</span>
                                                    <User className="h-3 w-3 mr-1" />
                                                    <span>{post.author}</span>
                                                </div>
                                                <Link href={`/blog/${post.slug}`} className="hover:underline">
                                                    <h2 className="text-xl font-semibold line-clamp-2">{post.title}</h2>
                                                </Link>
                                            </CardHeader>
                                            <CardContent className="p-4 pt-2">
                                                <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
                                            </CardContent>
                                            <CardFooter className="p-4 pt-0 flex flex-wrap gap-2">
                                                {post.tags.map((tag) => (
                                                    <Badge key={tag} variant="outline">
                                                        {tag}
                                                    </Badge>
                                                ))}
                                            </CardFooter>
                                        </Card>
                                    ))}
                            </div>
                        </TabsContent>
                    </Tabs> */}

                        <PostsGrid posts={posts} />

                        {/* Pagination */}
                        <Pagination className="mt-8">
                            <PaginationContent>
                                <PaginationItem>
                                    <PaginationPrevious href="#" />
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink href="#" isActive>
                                        1
                                    </PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink href="#">2</PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink href="#">3</PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationNext href="#" />
                                </PaginationItem>
                            </PaginationContent>
                        </Pagination>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1 space-y-8">
                        {/* Search */}
                        {/* <Card>
                        <CardContent className="p-4">
                            <div className="relative">
                                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                <Input type="search" placeholder="Buscar en el blog..." className="pl-8" />
                            </div>
                        </CardContent>
                    </Card> */}

                        {/* Categories */}
                        <CategoriesCard categorias={categorias} />

                        {/* Featured Posts */}
                        <Card>
                            <CardHeader className="pb-2">
                                <h3 className="text-lg font-semibold">Artículos Destacados</h3>
                            </CardHeader>
                            <CardContent className="p-4 pt-0">
                                <ul className="space-y-4">
                                    {featuredPosts.map((post) => (
                                        <li key={post.id}>
                                            <Link href={`/blog/${post.slug}`} className="block group">
                                                <h4 className="font-medium group-hover:text-primary transition-colors">{post.title}</h4>
                                                <p className="text-sm text-muted-foreground">{post.date}</p>
                                            </Link>
                                            {post.id !== featuredPosts[featuredPosts.length - 1].id && <Separator className="mt-4" />}
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                            {/*  <CardFooter className="p-4 pt-0">
                            <Button variant="outline" className="w-full" asChild>
                                <Link href="/blog/destacados">
                                    Ver todos los destacados
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </CardFooter> */}
                        </Card>

                        {/* Newsletter */}
                        <Card className="bg-primary text-primary-foreground">
                            <CardHeader className="pb-2">
                                <h3 className="text-lg font-semibold">Suscríbete a nuestro newsletter</h3>
                            </CardHeader>
                            <CardContent className="p-4 pt-0">
                                <p className="text-primary-foreground/90 mb-4">
                                    Recibe las últimas noticias y artículos directamente en tu correo.
                                </p>
                                <Input
                                    type="email"
                                    placeholder="Tu email"
                                    className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 mb-2"
                                />
                                <Button variant="secondary" className="w-full">
                                    Suscribirse
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        )

    } catch (error) {
        console.error("Error en PostPage:", error);
        return (
            <div className="min-h-screen bg-gray-100">
                <h1>Error al cargar el post</h1>
            </div>
        );
    }
}