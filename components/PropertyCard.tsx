"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { Bed, Bath, Maximize2, MapPin, Phone } from "lucide-react";
import Image from "next/image";

import placeholder from "@/app/images/image.png";
import { useRouter } from "next/navigation";

interface PropertyCardProps {
  id: string;
  title: string;
  description: string | undefined;
  price: string;
  city: string;
  location: string;
  squareMeters: number;
  bedrooms: number;
  bathrooms: number;
  images?: string[];
  whatsappNumber?: string;
  slug: string;
  operation: string;
  moneda: string;
}

export default function PropertyCard({
  id = "1",
  title = "Modern Apartment in Downtown",
  description = "Beautiful and spacious apartment with amazing city views",
  price = "$250,000",
  city,
  location = "Downtown, City",
  squareMeters = 120,
  bedrooms = 3,
  bathrooms = 2,
  images = [
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
  ],
  whatsappNumber = "+5492984311656",
  slug,
  operation,
  moneda,
}: PropertyCardProps) {
  const router = useRouter(); // Inicializar useRouter

  /*     const handleWhatsAppClick = () => {
            const message = `Hola, Estoy interesado/a en esta propiedad: ${title} (ID: ${id})`
            const encodedMessage = encodeURIComponent(message)
            window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank")
        } */

  const handleWhatsAppClick = () => {
    const propertyUrl = `${window.location.origin}/propiedades/inmuebles/${slug}`; // Construir la URL completa de la propiedad
    const message = `Hola, estoy interesado/a en esta propiedad: ${title} (ID: ${id}). Puedes ver más detalles aquí: ${propertyUrl}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodedMessage}`,
      "_blank"
    );
  };

  return (
    <Card className="overflow-hidden w-full max-w-md mx-auto pt-0">
      <div className="relative">
        <Carousel className="w-full">
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index}>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-t-lg">
                  <Image
                    src={image || placeholder}
                    alt={`Property image ${index + 1}`}
                    className="object-cover w-full h-full"
                    width={400}
                    height={400}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </Carousel>
        <div className="absolute top-3 left-3 z-10 flex gap-1">
          <Badge className=" bg-primary text-white">${price}</Badge>
          <Badge className=" bg-green-800 text-white">{moneda}</Badge>
        </div>

        <Badge className="absolute top-3 right-3 z-10 bg-accent text-white">
          {operation === "7" ? "Comprar" : "Alquilar"}
        </Badge>
      </div>

      <CardContent
        className="p-4 cursor-pointer"
        onClick={() => router.push(`/propiedades/inmuebles/${slug}`)}
      >
        <div className="space-y-3">
          <div>
            <h3 className="text-xl font-semibold line-clamp-1">{title}</h3>
            <div className="flex items-center text-sm text-muted-foreground mt-1">
              <MapPin className="h-4 w-4 mr-1" />
              <span>
                {location}, {city.toLocaleUpperCase()}
              </span>
            </div>
            {/* detalles de la propiedad  */}
            <div className="grid grid-cols-3 gap-2 py-2">
              <div className="flex flex-col items-center justify-center p-2 bg-muted rounded-md">
                <Maximize2 className="h-4 w-4 mb-1" />
                <span className="text-xs text-muted-foreground">Area</span>
                <span className="font-medium text-sm">{squareMeters} m²</span>
              </div>
              <div className="flex flex-col items-center justify-center p-2 bg-muted rounded-md">
                <Bed className="h-4 w-4 mb-1" />
                <span className="text-xs text-muted-foreground">
                  Dormitorios
                </span>
                <span className="font-medium text-sm">{bedrooms}</span>
              </div>
              <div className="flex flex-col items-center justify-center p-2 bg-muted rounded-md">
                <Bath className="h-4 w-4 mb-1" />
                <span className="text-xs text-muted-foreground">Baños</span>
                <span className="font-medium text-sm">{bathrooms}</span>
              </div>
            </div>
            <span className="text-sm">
              {description
                ? (() => {
                    const words = description.split(" ");
                    return words.length > 34
                      ? words.slice(0, 34).join(" ") + " ... "
                      : description;
                  })()
                : ""}
            </span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0 flex justify-between items-center">
        <div className="text-sm">
          <span className="font-semibold">ID: </span>
          {id}
        </div>
        <Button
          onClick={handleWhatsAppClick}
          className="bg-green-600 hover:bg-green-700"
        >
          <Phone className="h-4 w-4 mr-2" />
          Contactar via WhatsApp
        </Button>
      </CardFooter>
    </Card>
  );
}
