import Link from "next/link"
import { ArrowLeft, Calendar, User, Facebook, Twitter, Linkedin, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { fetchAllSlugsPosts, fetchPostyBySlug } from "@/lib/fetch-posts"
import { SimpleSlug } from '../../../posts/interfaces/simple-slug';
import { SimplePost } from "@/posts"
import Image from "next/image"

import parse from 'html-react-parser'



//SOLOS SE EJECUTA EN BUILDTIME
export async function generateStaticParams() {

    try {

        const data: SimpleSlug[] = await fetchAllSlugsPosts();

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


export async function generateMetadata({ params }: { params: Promise<{ slug: string }>; }) {
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
}

/* const getPost = async (slug: string) => {
    const data: SimplePost = await fetchPostyBySlug(slug);
    return data;
}
 */

export default async function PostPage({ params, }: { params: Promise<{ slug: string }>; }) {

    const { slug } = await params;

    try {

        const post: SimplePost = await fetchPostyBySlug(slug);

        if (!post) {
            return <div>No se encontró el post.</div>;
        }

        // Aquí puedes manejar el caso en que no se encuentra el post
        // Por ejemplo, redirigir a una página de error o mostrar un mensaje

        const { author, categories, content, image, tags, title, date } = post; // Desestructuración para evitar advertencias de variables no utilizadas

        return (
            <div className="container mx-auto px-4 py-8">
                <Link href="/blog" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Volver al blog
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        <article>
                            {/* Featured Image */}
                            <div className="rounded-lg overflow-hidden mb-6">
                                <Image src={image || "/placeholder.svg"} alt={post.title} className="w-full h-auto" width={400} height={400} />
                            </div>

                            {/* Post Header */}
                            <div className="mb-8">
                                <Badge className="mb-4">{categories}</Badge>
                                <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>
                                <div className="flex items-center text-sm text-muted-foreground">
                                    <Calendar className="h-4 w-4 mr-1" />
                                    <span>{date}</span>
                                    <span className="mx-2">•</span>
                                    <User className="h-4 w-4 mr-1" />
                                    <span>{author}</span>
                                </div>
                            </div>

                            {/* Post Content */}
                            <div className="prose prose-img:rounded-xl prose-img:shadow-md prose-blockquote:border-l-4 prose-blockquote:pl-4 prose-blockquote:text-gray-600 prose-headings:scroll-mt-24 prose-a:text-blue-600">
                                {parse(content)}
                            </div>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-8">
                                {tags.map((tag) => (
                                    <Badge key={tag} variant="outline">
                                        {tag}
                                    </Badge>
                                ))}
                            </div>

                            {/* Share Buttons */}
                            <div className="flex items-center space-x-4 mb-8">
                                <span className="text-sm font-medium">Compartir:</span>
                                <Button variant="ghost" size="icon" className="rounded-full">
                                    <Facebook className="h-4 w-4" />
                                    <span className="sr-only">Compartir en Facebook</span>
                                </Button>
                                <Button variant="ghost" size="icon" className="rounded-full">
                                    <Twitter className="h-4 w-4" />
                                    <span className="sr-only">Compartir en Twitter</span>
                                </Button>
                                <Button variant="ghost" size="icon" className="rounded-full">
                                    <Linkedin className="h-4 w-4" />
                                    <span className="sr-only">Compartir en LinkedIn</span>
                                </Button>
                                <Button variant="ghost" size="icon" className="rounded-full">
                                    <Mail className="h-4 w-4" />
                                    <span className="sr-only">Compartir por Email</span>
                                </Button>
                            </div>

                            <Separator className="my-8" />

                            {/* Author Bio */}
                            {/*        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-6 bg-muted rounded-lg">
                      <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                        <Image
                          src={post.authorImage || "/placeholder.svg"}
                          alt={post.author}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">{post.author}</h3>
                        <p className="text-muted-foreground">{post.authorBio}</p>
                      </div>
                    </div> */}
                        </article>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1 space-y-8">
                        {/* Related Posts */}
                        {/*          <Card>
                    <CardHeader className="pb-2">
                      <h3 className="text-lg font-semibold">Artículos Relacionados</h3>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <div className="space-y-6">
                        {post.relatedPosts.map((relatedPost) => (
                          <div key={relatedPost.id} className="flex gap-4">
                            <div className="w-24 h-24 rounded-md overflow-hidden flex-shrink-0">
                              <img
                                src={relatedPost.image || "/placeholder.svg"}
                                alt={relatedPost.title}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div>
                              <Link href={`/blog/${relatedPost.slug}`} className="hover:underline">
                                <h4 className="font-medium line-clamp-2">{relatedPost.title}</h4>
                              </Link>
                              <p className="text-sm text-muted-foreground mt-1">{relatedPost.date}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card> */}

                        {/* Popular Tags */}
                        <Card>
                            <CardHeader className="pb-2">
                                <h3 className="text-lg font-semibold">Etiquetas Populares</h3>
                            </CardHeader>
                            <CardContent className="p-4 pt-0">
                                <div className="flex flex-wrap gap-2">
                                    <Badge variant="outline">Ubicación</Badge>
                                    <Badge variant="outline">Compra</Badge>
                                    <Badge variant="outline">Venta</Badge>
                                    <Badge variant="outline">Inversión</Badge>
                                    <Badge variant="outline">Diseño</Badge>
                                    <Badge variant="outline">Consejos</Badge>
                                    <Badge variant="outline">Financiamiento</Badge>
                                    <Badge variant="outline">Mercado</Badge>
                                </div>
                            </CardContent>
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
                                <Button variant="secondary" className="w-full">
                                    Suscribirse
                                </Button>
                            </CardContent>
                        </Card>

                        {/* CTA */}
                        <Card>
                            <CardContent className="p-6">
                                <h3 className="text-lg font-semibold mb-2">¿Buscando una propiedad?</h3>
                                <p className="text-muted-foreground mb-4">
                                    Nuestros asesores inmobiliarios están listos para ayudarte a encontrar tu hogar ideal.
                                </p>
                                <Button className="w-full" asChild>
                                    <Link href="/contacto">Contactar un asesor</Link>
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
