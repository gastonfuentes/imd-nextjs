"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Expand } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { cn } from "@/lib/utils"

interface PropertyImageGalleryProps {
    images: string[]
    title: string
}

export default function PropertyImageGallery({ images, title }: PropertyImageGalleryProps) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [fullscreenIndex, setFullscreenIndex] = useState(0)
    const [isFullscreenOpen, setIsFullscreenOpen] = useState(false)

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
    }

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
    }

    const openFullscreen = (index: number) => {
        setFullscreenIndex(index)
        setIsFullscreenOpen(true)
    }

    return (
        <div className="relative">
            {/* Main Image */}
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg">
                <Image
                    src={images[currentIndex] || "/placeholder.svg"}
                    alt={`${title} - Imagen ${currentIndex + 1}`}
                    fill
                    className="object-cover"
                    priority
                />
                <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white rounded-full"
                    onClick={() => openFullscreen(currentIndex)}
                >
                    <Expand className="h-5 w-5" />
                </Button>
                <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full"
                    onClick={goToPrevious}
                >
                    <ChevronLeft className="h-6 w-6" />
                </Button>
                <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full"
                    onClick={goToNext}
                >
                    <ChevronRight className="h-6 w-6" />
                </Button>
            </div>

            {/* Thumbnails */}
            <div className="mt-4 grid grid-cols-6 gap-2">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={cn(
                            "relative aspect-[4/3] cursor-pointer overflow-hidden rounded-md",
                            currentIndex === index && "ring-2 ring-primary ring-offset-2",
                        )}
                        onClick={() => setCurrentIndex(index)}
                    >
                        <Image
                            src={image || "/placeholder.svg"}
                            alt={`${title} - Thumbnail ${index + 1}`}
                            fill
                            className="object-cover"
                        />
                    </div>
                ))}
            </div>

            {/* Fullscreen Gallery Dialog */}
            <Dialog open={isFullscreenOpen} onOpenChange={setIsFullscreenOpen}>
                <DialogContent className="max-w-7xl w-[90vw] p-0 bg-black">
                    <div className="relative h-[90vh] w-full">
                        <Image
                            src={images[fullscreenIndex] || "/placeholder.svg"}
                            alt={`${title} - Imagen ${fullscreenIndex + 1}`}
                            fill
                            className="object-contain"
                        />
                        <Button
                            variant="ghost"
                            size="icon"
                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full"
                            onClick={() => setFullscreenIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
                        >
                            <ChevronLeft className="h-6 w-6" />
                        </Button>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full"
                            onClick={() => setFullscreenIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))}
                        >
                            <ChevronRight className="h-6 w-6" />
                        </Button>
                    </div>
                    <div className="bg-black p-4 text-white text-center">
                        {fullscreenIndex + 1} / {images.length}
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}

