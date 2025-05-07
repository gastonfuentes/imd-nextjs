

import { fetchFeaturedPosts, fetchPosts } from "@/lib/fetch-posts"
import { PostsGrid } from "@/posts/components/PostsGrid"
import { fetchCategories } from "@/lib/fetch-categories"
import { CategoriesCard } from "@/posts/components/CategoriesCard"
import { FeaturedPostsCard } from "@/posts/components/FeaturedPostsCard"
import { CallToAction } from "@/posts/components/CallToAction"
import { PaginationFront } from "@/components/Pagination"




export default async function BlogPage() {

    const featuredPosts = await fetchFeaturedPosts()
    const posts = await fetchPosts()
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
                    <PaginationFront />
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


