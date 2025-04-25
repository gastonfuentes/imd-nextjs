import { Skeleton } from "@/components/ui/skeleton"


export default function Loading() {
    return (
        <div className="w-5/6 mx-auto mt-8 p-4 rounded-md shadow-md bg-white">

            <header className="my-4">
                <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>
                    <Skeleton className='h-10 w-full' />
                    <Skeleton className='h-10 w-full' />
                    <Skeleton className='h-10 w-full' />
                </div>
            </header>

            <div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {Array.from({ length: 8 }).map((_, index) => (
                        <div key={index} className="w-full max-w-sm mx-auto">
                            <Skeleton className="h-64 w-full rounded-lg" />
                            <Skeleton className="h-6 w-full mt-2" />
                            <Skeleton className="h-4 w-full mt-1" />
                            <Skeleton className="h-4 w-full mt-1" />
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}
