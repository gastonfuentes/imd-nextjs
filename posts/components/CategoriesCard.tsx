import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import Link from "next/link"
import { SimpleCategory } from "../interfaces/simple-category"


export const CategoriesCard = ({ categorias }: { categorias: SimpleCategory[] }) => {
    return (
        <Card>
            <CardHeader className="pb-2">
                <h3 className="text-lg font-semibold">Categorías</h3>
                <p className="text-sm">Todos los posts ordenados por categoria:</p>
            </CardHeader>
            <CardContent className="p-4 pt-0">
                <ul className="space-y-2">
                    {categorias
                        .filter((category) => category.count > 0) // Filtrar categorías con al menos un post
                        .map((category) => (
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
    )
}
