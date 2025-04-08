import { fetchPropertiesSimple, fetchPropertyBySlug } from '@/lib/fetch-properties';
import { SimpleInmueble } from '../../../../inmuebles/interfaces/simple-inmueble';
/* import Image from 'next/image';
import placeholder from '@/app/images/image.png'; */
import Link from 'next/link';
import { ArrowLeft, BedDouble, Building2, Car, Flame, Home, MapPin, Ruler, Share2, Tag } from 'lucide-react';
import PropertyImageGallery from '@/components/PropertyImageGallery';
import { Card, CardContent } from '@/components/ui/card';
import PropertyContactForm from '@/components/PropertyContactForm';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';



//SOLOS SE EJECUTA EN BUILDTIME
export async function generateStaticParams() {

    try {

        const data: SimpleInmueble[] = await fetchPropertiesSimple();

        if (!data || data.length === 0) {
            console.warn('No se encontraron propiedades para generar los parámetros estáticos.');
            return [];
        }

        return data.map((inmueble) => ({
            name: inmueble.slug,
        }))

    } catch (error) {
        console.error("Error en generateStaticParams:", error);
        return []; // Retorna un array vacío en caso de error
    }

}



export async function generateMetadata({ params }: { params: Promise<{ name: string }>; }) {
    const { name } = await params;
    const inmueble: SimpleInmueble = await fetchPropertyBySlug(name);

    return {
        title: inmueble.title,
        description: inmueble.descripcion,
    }
}




const getProperty = async (slug: string) => {
    const data: SimpleInmueble = await fetchPropertyBySlug(slug);
    return data;
}


export default async function PropiedadPage({ params, }: { params: Promise<{ name: string }>; }) {

    const { name } = await params;



    try {

        const inmueble: SimpleInmueble = await getProperty(name);


        if (!inmueble) {
            return (
                <div className="min-h-screen bg-gray-100">
                    <h1>Propiedad no encontrada</h1>
                </div>
            );
        }

        const {
            title,
            images,
            descripcion = " Encantadora casa en alquiler ideal para descansar y desconectar Ubicada en una zona tranquila y segura, esta acogedora propiedad ofrece todo lo que necesitás para una estadía cómoda y placentera. Cuenta con ambientes amplios y luminosos, dos dormitorios equipados, cocina completa, living-comedor con vista al jardín y un patio ideal para disfrutar al aire libre ",
            direccion,
            precio,
            superficie_construida_total,
            superficie_del_terreno,
            superficie_cubierta_total,
            quincho,
            dormitorios,
            cochera,
            plantas,
            tipo_operacion,
            id,
            tipo_inmueble_nombre,
            ubicacion_nombre,
        } = inmueble;

        return (


            < main className="container mx-auto px-4 py-8" >
                <div className="mb-6">
                    <Link
                        href='/propiedades/listado'
                        className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-4"
                        replace={true}
                    >
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Volver a listado
                    </Link>

                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">{title}</h1>
                            <div className="flex items-center mt-2 text-muted-foreground">
                                <MapPin className="h-4 w-4 mr-1" />
                                <span>{direccion}</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-2">
                            <span className="text-2xl md:text-3xl font-bold">{precio}</span>
                            <Badge className="ml-2">{tipo_operacion === "venta" ? "Venta" : "Alquiler"}</Badge>
                        </div>
                    </div>
                </div>

                {/* Image Gallery */}
                <PropertyImageGallery images={images} title={title} />

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
                    <div className="lg:col-span-2">
                        {/* Property Description */}
                        <Card className="mb-8">
                            <CardContent className="p-6">
                                <h2 className="text-xl font-semibold mb-4">Descripción</h2>
                                <p className="text-muted-foreground whitespace-pre-line">{descripcion} Encantadora casa en alquiler ideal para descansar y desconectar
                                    Ubicada en una zona tranquila y segura, esta acogedora propiedad ofrece todo lo que necesitás para una estadía cómoda y placentera. Cuenta con ambientes amplios y luminosos, dos dormitorios equipados, cocina completa, living-comedor con vista al jardín y un patio ideal para disfrutar al aire libre.</p>
                            </CardContent>
                        </Card>

                        {/* Property Details */}
                        <Card className="mb-8">
                            <CardContent className="p-6">
                                <h2 className="text-xl font-semibold mb-4">Detalles de la propiedad</h2>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-4">
                                        <div className="flex items-center">
                                            <Tag className="h-5 w-5 mr-3 text-muted-foreground" />
                                            <div>
                                                <p className="text-sm text-muted-foreground">ID de Propiedad</p>
                                                <p className="font-medium">{id}</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center">
                                            <Home className="h-5 w-5 mr-3 text-muted-foreground" />
                                            <div>
                                                <p className="text-sm text-muted-foreground">Tipo de Inmueble</p>
                                                <p className="font-medium">{tipo_inmueble_nombre}</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center">
                                            <Ruler className="h-5 w-5 mr-3 text-muted-foreground" />
                                            <div>
                                                <p className="text-sm text-muted-foreground">Superficie Construida Total</p>
                                                <p className="font-medium">{superficie_construida_total}</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center">
                                            <Ruler className="h-5 w-5 mr-3 text-muted-foreground" />
                                            <div>
                                                <p className="text-sm text-muted-foreground">Superficie del Terreno</p>
                                                <p className="font-medium">{superficie_del_terreno}</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center">
                                            <Ruler className="h-5 w-5 mr-3 text-muted-foreground" />
                                            <div>
                                                <p className="text-sm text-muted-foreground">Superficie Cubierta Total</p>
                                                <p className="font-medium">{superficie_cubierta_total}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="flex items-center">
                                            <BedDouble className="h-5 w-5 mr-3 text-muted-foreground" />
                                            <div>
                                                <p className="text-sm text-muted-foreground">Dormitorios</p>
                                                <p className="font-medium">{dormitorios}</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center">
                                            <Car className="h-5 w-5 mr-3 text-muted-foreground" />
                                            <div>
                                                <p className="text-sm text-muted-foreground">Cochera</p>
                                                <p className="font-medium">{cochera} vehículos</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center">
                                            <Building2 className="h-5 w-5 mr-3 text-muted-foreground" />
                                            <div>
                                                <p className="text-sm text-muted-foreground">Plantas</p>
                                                <p className="font-medium">{plantas}</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center">
                                            <Flame className="h-5 w-5 mr-3 text-muted-foreground" />
                                            <div>
                                                <p className="text-sm text-muted-foreground">Quincho</p>
                                                <p className="font-medium">{quincho ? "Sí" : "No"}</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center">
                                            <MapPin className="h-5 w-5 mr-3 text-muted-foreground" />
                                            <div>
                                                <p className="text-sm text-muted-foreground">Ubicación</p>
                                                <p className="font-medium">{ubicacion_nombre}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Location Map (placeholder) */}
                        <Card>
                            <CardContent className="p-6">
                                <h2 className="text-xl font-semibold mb-4">Ubicación</h2>
                                <div className="aspect-video bg-muted rounded-md flex items-center justify-center">
                                    <p className="text-muted-foreground">Mapa de ubicación</p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-8">
                            <PropertyContactForm propertyId={id} propertyTitle={title} />

                            <div className="mt-4 flex justify-center">
                                <Button variant="outline" className="w-full">
                                    <Share2 className="h-4 w-4 mr-2" />
                                    Compartir propiedad
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </main >
        );

    } catch (error) {
        console.error("Error en PropiedadPage:", error);
        return (
            <div className="min-h-screen bg-gray-100">
                <h1>Error al cargar la propiedad</h1>
            </div>
        );
    }
}


