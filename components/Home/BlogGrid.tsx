import { ArrowRight, ChevronRight } from "lucide-react"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card"
import Image from "next/image"

import imagenEjemplo from "@/app/images/image.png";


// Datos de ejemplo para las entradas del blog
const blogPosts = [
    {
        id: 1,
        title: "Cómo elegir la mejor ubicación para tu hogar",
        excerpt: "Descubre los factores clave que debes considerar al elegir la ubicación de tu próxima vivienda.",
        image: imagenEjemplo,
        date: "15 Abr 2023",
        author: "María García",
        slug: "como-elegir-mejor-ubicacion",
    },
    {
        id: 2,
        title: "Guía para invertir en bienes raíces en 2023",
        excerpt: "Aprende las estrategias más efectivas para invertir en el mercado inmobiliario actual.",
        image: imagenEjemplo,
        date: "28 Mar 2023",
        author: "Carlos Rodríguez",
        slug: "guia-invertir-bienes-raices-2023",
    },
    {
        id: 3,
        title: "Tendencias de diseño interior para este año",
        excerpt: "Conoce las tendencias más populares en diseño interior que están definiendo los espacios modernos.",
        image: imagenEjemplo,
        date: "10 Feb 2023",
        author: "Laura Mendoza",
        slug: "tendencias-diseno-interior",
    },
]




export const BlogGrid = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container px-4 mx-auto">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
                    <div>
                        <h2 className="text-3xl font-bold mb-2">Últimas del Blog</h2>
                        <p className="text-muted-foreground">Consejos, tendencias y noticias del sector inmobiliario</p>
                    </div>
                    <Link href="/blog" className="inline-flex items-center mt-4 md:mt-0 text-primary hover:underline">
                        Ver todas las entradas
                        <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post) => (
                        <Card key={post.id} className="overflow-hidden">
                            <div className="aspect-video relative">
                                <Image src={post.image || "/placeholder.svg"} alt={post.title} className="object-cover w-full h-full" />
                            </div>
                            <CardHeader>
                                <div className="flex items-center text-sm text-muted-foreground mb-2">
                                    <span>{post.date}</span>
                                    <span className="mx-2">•</span>
                                    <span>{post.author}</span>
                                </div>
                                <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
                            </CardContent>
                            <CardFooter>
                                <Link href={`/blog/${post.slug}`} className="text-primary hover:underline inline-flex items-center">
                                    Leer más
                                    <ArrowRight className="ml-1 h-4 w-4" />
                                </Link>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
