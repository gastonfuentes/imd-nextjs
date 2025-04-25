import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { SimplePost } from "../interfaces/simple-post"
import { Separator } from "@radix-ui/react-select"
import Link from "next/link"




export const FeaturedPostsCard = ({ featuredPosts }: { featuredPosts: SimplePost[] }) => {
    return (

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
    )
}