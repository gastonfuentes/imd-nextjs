import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function PropertyCardSkeleton() {
    return (
        <Card className="overflow-hidden w-full max-w-md mx-auto">
            {/* Image placeholder */}
            <div className="relative">
                <Skeleton className="aspect-[4/3] w-full rounded-t-lg" />
                <Skeleton className="absolute top-3 left-3 h-6 w-20 rounded-full" />
            </div>

            <CardContent className="p-4">
                <div className="space-y-3">
                    {/* Title and location placeholders */}
                    <div>
                        <Skeleton className="h-7 w-3/4 mb-2" />
                        <div className="flex items-center mt-1">
                            <Skeleton className="h-4 w-4 mr-1 rounded-full" />
                            <Skeleton className="h-4 w-1/2" />
                        </div>
                    </div>

                    {/* Description placeholder */}
                    <div className="space-y-1">
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-5/6" />
                    </div>

                    {/* Features placeholders */}
                    <div className="grid grid-cols-3 gap-2 py-2">
                        <div className="flex flex-col items-center justify-center p-2 bg-muted rounded-md">
                            <Skeleton className="h-4 w-4 mb-1 rounded-full" />
                            <Skeleton className="h-3 w-10 mb-1" />
                            <Skeleton className="h-4 w-12" />
                        </div>
                        <div className="flex flex-col items-center justify-center p-2 bg-muted rounded-md">
                            <Skeleton className="h-4 w-4 mb-1 rounded-full" />
                            <Skeleton className="h-3 w-14 mb-1" />
                            <Skeleton className="h-4 w-6" />
                        </div>
                        <div className="flex flex-col items-center justify-center p-2 bg-muted rounded-md">
                            <Skeleton className="h-4 w-4 mb-1 rounded-full" />
                            <Skeleton className="h-3 w-16 mb-1" />
                            <Skeleton className="h-4 w-6" />
                        </div>
                    </div>
                </div>
            </CardContent>

            <CardFooter className="p-4 pt-0 flex justify-between items-center">
                <Skeleton className="h-5 w-20" />
                <Skeleton className="h-10 w-40 rounded-md" />
            </CardFooter>
        </Card>
    )
}

