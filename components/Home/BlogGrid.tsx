import { ArrowRight, ChevronRight } from "lucide-react"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card"
import Image from "next/image"
import parse from 'html-react-parser'
import { fetchLatestPosts } from "@/lib/fetch-posts";


export const BlogGrid = async () => {

    // Aquí puedes realizar una llamada a la API o cargar los datos de tu blog
    const posts = await fetchLatestPosts();

    return (
        <section className="py-16 bg-gray-50">
            <div className="container px-4 mx-auto">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
                    <div>
                        <h2 className="text-3xl font-bold mb-2 text-primary">Últimas del Blog</h2>
                        <p className="text-muted-foreground">Consejos, tendencias y noticias del sector inmobiliario</p>
                    </div>
                    <Link href="/blog" className="inline-flex items-center mt-4 md:mt-0 text-primary hover:underline">
                        Ver todas las entradas
                        <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post) => (
                        <Card key={post.id} className="overflow-hidden pt-0 pb-0 justify-between">
                            <div className="relative aspect-[4-3] w-full">
                                <Image src={post.image || "/placeholder.svg"} alt={post.title} className="object-cover w-full h-full" width={400}
                                    height={400} />
                            </div>
                            <CardHeader>
                                <div className="flex items-center text-sm text-muted-foreground mb-2">
                                    <span>{post.date}</span>
                                    <span className="mx-2">•</span>
                                    <span>{post.author}</span>
                                </div>
                                <CardTitle className="line-clamp-2 text-lg">{post.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="prose text-sm text-muted-foreground">
                                {parse(post.excerpt)}
                            </CardContent>
                            <CardFooter className="bg-primary p-4">
                                <Link href={`/blog/${post.slug}`} className="text-primary-foreground hover:underline inline-flex items-center">
                                    Leer más
                                    <ArrowRight className="ml-1 h-4 w-4 text-accent" />
                                </Link>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
