

import { fetchFeaturedPosts, fetchPosts } from "@/lib/fetch-posts"
import { PostsGrid } from "@/posts/components/PostsGrid"
import { fetchCategories } from "@/lib/fetch-categories"
import { CategoriesCard } from "@/posts/components/CategoriesCard"
import { FeaturedPostsCard } from "@/posts/components/FeaturedPostsCard"
import { CallToAction } from "@/posts/components/CallToAction"
import { PaginationFront } from "@/components/Pagination"




export default async function BlogPage() {

    const featuredPosts = await fetchFeaturedPosts()
    const { posts, totalPages } = await fetchPosts()
    const categorias = await fetchCategories()

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
                    {/* Posts Grid */}
                    <PostsGrid posts={posts} />

                    {/* Pagination */}
                    <PaginationFront totalPages={totalPages} />
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
                    <FeaturedPostsCard featuredPosts={featuredPosts} />

                    {/* Newsletter */}
                    {/* <Card className="bg-primary text-primary-foreground">
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
                    </Card> */}

                    {/* Call to Action */}
                    <CallToAction />
                </div>
            </div>
        </div>
    )
}


