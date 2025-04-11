import Link from "next/link"
import { ArrowRight, Search, Calendar, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"

import placeholder from "@/app/images/image.png"

// Datos de ejemplo para las entradas del blog
const blogPosts = [
    {
        id: 1,
        title: "Cómo elegir la mejor ubicación para tu hogar",
        excerpt:
            "Descubre los factores clave que debes considerar al elegir la ubicación de tu próxima vivienda. Desde la proximidad a servicios esenciales hasta la proyección de valorización del barrio.",
        image: placeholder,
        date: "15 Abr 2023",
        author: "María García",
        slug: "como-elegir-mejor-ubicacion",
        category: "Consejos",
        tags: ["Ubicación", "Compra", "Inversión"],
    },
    {
        id: 2,
        title: "Guía para invertir en bienes raíces en 2023",
        excerpt:
            "Aprende las estrategias más efectivas para invertir en el mercado inmobiliario actual. Analizamos tendencias, oportunidades y riesgos para maximizar tu retorno de inversión.",
        image: placeholder,
        date: "28 Mar 2023",
        author: "Carlos Rodríguez",
        slug: "guia-invertir-bienes-raices-2023",
        category: "Inversión",
        tags: ["Inversión", "Mercado", "Finanzas"],
    },
    {
        id: 3,
        title: "Tendencias de diseño interior para este año",
        excerpt:
            "Conoce las tendencias más populares en diseño interior que están definiendo los espacios modernos. Desde colores y materiales hasta distribuciones y estilos arquitectónicos.",
        image: placeholder,
        date: "10 Feb 2023",
        author: "Laura Mendoza",
        slug: "tendencias-diseno-interior",
        category: "Diseño",
        tags: ["Diseño", "Decoración", "Tendencias"],
    },
    {
        id: 4,
        title: "Cómo preparar tu casa para una venta rápida",
        excerpt:
            "Consejos prácticos para preparar tu propiedad y lograr una venta rápida al mejor precio posible. Desde reparaciones menores hasta técnicas de home staging.",
        image: placeholder,
        date: "5 Feb 2023",
        author: "Roberto Sánchez",
        slug: "preparar-casa-venta-rapida",
        category: "Venta",
        tags: ["Venta", "Home Staging", "Consejos"],
    },
    {
        id: 5,
        title: "Los mejores barrios para familias jóvenes",
        excerpt:
            "Descubre cuáles son los barrios más recomendados para familias con niños pequeños. Analizamos seguridad, escuelas, áreas verdes y servicios comunitarios.",
        image: placeholder,
        date: "20 Ene 2023",
        author: "Ana Martínez",
        slug: "mejores-barrios-familias-jovenes",
        category: "Consejos",
        tags: ["Familias", "Barrios", "Calidad de Vida"],
    },
    {
        id: 6,
        title: "Claves para negociar el precio de una propiedad",
        excerpt:
            "Aprende técnicas efectivas para negociar el precio de compra o venta de una propiedad. Estrategias para conseguir el mejor acuerdo para ambas partes.",
        image: placeholder,
        date: "5 Ene 2023",
        author: "Diego López",
        slug: "claves-negociar-precio-propiedad",
        category: "Negociación",
        tags: ["Negociación", "Compra", "Venta"],
    },
]

// Categorías populares
const popularCategories = [
    { name: "Consejos", count: 15 },
    { name: "Inversión", count: 12 },
    { name: "Diseño", count: 9 },
    { name: "Venta", count: 8 },
    { name: "Mercado", count: 7 },
    { name: "Negociación", count: 5 },
]

// Artículos destacados
const featuredPosts = [
    {
        id: 7,
        title: "5 errores comunes al comprar tu primera vivienda",
        date: "2 Mar 2023",
        slug: "errores-comunes-primera-vivienda",
    },
    {
        id: 8,
        title: "Cómo financiar la compra de tu casa en 2023",
        date: "18 Feb 2023",
        slug: "financiar-compra-casa-2023",
    },
    {
        id: 9,
        title: "Propiedades sustentables: el futuro del mercado inmobiliario",
        date: "10 Ene 2023",
        slug: "propiedades-sustentables-futuro",
    },
]

export default function BlogPage() {
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
                    <Tabs defaultValue="all" className="mb-8">
                        <TabsList className="w-full max-w-md mx-auto grid grid-cols-3 h-auto">
                            <TabsTrigger value="all">Todos</TabsTrigger>
                            <TabsTrigger value="consejos">Consejos</TabsTrigger>
                            <TabsTrigger value="inversion">Inversión</TabsTrigger>
                        </TabsList>
                        <TabsContent value="all">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                                {blogPosts.map((post) => (
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
                    </Tabs>

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
                    <Card>
                        <CardContent className="p-4">
                            <div className="relative">
                                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                <Input type="search" placeholder="Buscar en el blog..." className="pl-8" />
                            </div>
                        </CardContent>
                    </Card>

                    {/* Categories */}
                    <Card>
                        <CardHeader className="pb-2">
                            <h3 className="text-lg font-semibold">Categorías</h3>
                        </CardHeader>
                        <CardContent className="p-4 pt-0">
                            <ul className="space-y-2">
                                {popularCategories.map((category) => (
                                    <li key={category.name} className="flex justify-between items-center">
                                        <Link
                                            href={`/blog/categoria/${category.name.toLowerCase()}`}
                                            className="text-muted-foreground hover:text-foreground"
                                        >
                                            {category.name}
                                        </Link>
                                        <Badge variant="secondary">{category.count}</Badge>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>

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
                        <CardFooter className="p-4 pt-0">
                            <Button variant="outline" className="w-full" asChild>
                                <Link href="/blog/destacados">
                                    Ver todos los destacados
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </CardFooter>
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
}


