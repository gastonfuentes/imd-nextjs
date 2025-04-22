import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Calendar, User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { SimplePost } from "../interfaces/simple-post"
import placeholder from "@/app/images/image.png"
import parse from 'html-react-parser'


export const PostsGrid = ({ posts }: { posts: SimplePost[] }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {posts.map((post) => (
                <Card key={post.id} className="overflow-hidden pt-0">
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
                        <p className=" prose ">{parse(post.excerpt)}</p>
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
    )
}
