/* "use client" */

/* import { useState, useEffect } from "react" */
import Link from "next/link"
import {
    /*  Facebook, */
    Instagram,
    /*   Twitter,
      Linkedin, */
    Mail,
    Phone,
    Clock,
    HardHat,
    Hammer,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

/* import { Progress } from "@/components/ui/progress" */
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function UnderConstructionPage() {





    return (
        <div className="min-h-screen flex flex-col">
            <div className="flex-grow flex items-center justify-center py-12 px-4">
                <div className="container max-w-5xl">
                    <div className="text-center mb-8">
                        <div className="flex items-center justify-center mb-4">
                            <Image src="/secundario-fondo-claro.svg" alt="Logo" width={150} height={56} className="h-24 w-auto" />
                        </div>
                        <Badge className="mb-4 bg-accent text-accent-foreground">Próximamente</Badge>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Sitio en Construcción</h1>
                        <p className="text-xl text-primary/70 max-w-2xl mx-auto mb-6">
                            Estamos trabajando arduamente para ofrecerte la mejor experiencia inmobiliaria. ¡Muy pronto estaremos en
                            línea!
                        </p>
                    </div>

                    {/* Ilustración */}
                    <div className="relative h-64 md:h-80 mb-12 flex items-center justify-center">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="relative w-full max-w-md aspect-[16/9] bg-primary/5 rounded-lg overflow-hidden">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <HardHat className="h-16 w-16 text-accent animate-bounce" />
                                </div>
                                <div className="absolute bottom-0 left-0 right-0">
                                    {/*  <Progress value={progress} className="h-2 bg-primary/10" indicatorClassName="bg-accent" /> */}
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-1/4 left-1/4 animate-pulse">
                            <Hammer className="h-8 w-8 text-primary/60" />
                        </div>
                        <div className="absolute bottom-1/3 right-1/4 animate-pulse" style={{ animationDelay: "1s" }}>
                            <Hammer className="h-8 w-8 text-primary/60" />
                        </div>
                    </div>


                    {/* Información de contacto y redes sociales */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        <Card className="bg-primary text-primary-foreground">
                            <CardHeader>
                                <CardTitle>Contacto</CardTitle>
                                <CardDescription className="text-primary-foreground/70">
                                    Mientras tanto, puedes contactarnos por estos medios
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex items-center">
                                    <Phone className="h-5 w-5 mr-3 text-accent" />
                                    <span>2996918403 y 2984311656</span>
                                </div>
                                <div className="flex items-center">
                                    <Mail className="h-5 w-5 mr-3 text-accent" />
                                    <span>imd.serviciosinmobiliarios@gmail.com</span>
                                </div>
                                <div className="flex items-center">
                                    <Clock className="h-5 w-5 mr-3 text-accent" />
                                    <span>Lunes a Viernes: 9:00 - 18:00</span>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="bg-primary text-primary-foreground">
                            <CardHeader>
                                <CardTitle>Síguenos</CardTitle>
                                <CardDescription className="text-primary-foreground/70">
                                    Mantente al día con nuestras novedades en redes sociales
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-4">
                                    {/*     <Button
                                        variant="outline"
                                        size="icon"
                                        className="rounded-full border-primary/20 text-primary hover:bg-primary/5"
                                        asChild
                                    >
                                        <Link href="#" aria-label="Facebook">
                                            <Facebook className="h-5 w-5" />
                                        </Link>
                                    </Button> */}
                                    <Button
                                        variant="outline"
                                        size="lg"
                                        className="rounded-full border-primary/20 text-primary hover:bg-secundary"
                                        asChild
                                    >
                                        <Link href="https://www.instagram.com/imd_inmobiliaria/" aria-label="Instagram" target="_blank">
                                            <Instagram className="h-20 w-20" />
                                        </Link>
                                    </Button>
                                    {/*   <Button
                                        variant="outline"
                                        size="icon"
                                        className="rounded-full border-primary/20 text-primary hover:bg-primary/5"
                                        asChild
                                    >
                                        <Link href="#" aria-label="Twitter">
                                            <Twitter className="h-5 w-5" />
                                        </Link>
                                    </Button> */}
                                    {/*   <Button
                                        variant="outline"
                                        size="icon"
                                        className="rounded-full border-primary/20 text-primary hover:bg-primary/5"
                                        asChild
                                    >
                                        <Link href="#" aria-label="LinkedIn">
                                            <Linkedin className="h-5 w-5" />
                                        </Link>
                                    </Button> */}
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Servicios que ofreceremos */}
                    <div className="text-center mb-8">
                        <h2 className="text-2xl font-bold mb-4 text-primary">Servicios que ofreceremos</h2>
                        <p className="text-primary/70 max-w-2xl mx-auto mb-6">
                            Estamos preparando una plataforma completa para todas tus necesidades inmobiliarias
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                        <Card className="bg-secondary text-primary">
                            <CardHeader className="pb-2">
                                <CardTitle className="text-lg">Compra de Propiedades</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-primary/70">
                                    Encuentra tu hogar ideal entre nuestra amplia selección de propiedades en las mejores ubicaciones.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="bg-secondary text-primary">
                            <CardHeader className="pb-2">
                                <CardTitle className="text-lg">Venta de Propiedades</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-primary/70">
                                    Vende tu propiedad al mejor precio con nuestra asesoría especializada y estrategias de marketing.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="bg-secondary text-primary">
                            <CardHeader className="pb-2">
                                <CardTitle className="text-lg">Asesoría Inmobiliaria</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-primary/70">
                                    Recibe orientación profesional para tomar las mejores decisiones en tus inversiones inmobiliarias.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-primary text-primary-foreground py-6">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="flex items-center mb-4 md:mb-0">
                            <Image src="/secundario-fondo-oscuro.svg" alt="Logo" width={150} height={56} className="h-24 w-auto" />
                        </div>
                        <div className="text-sm text-primary-foreground/80">
                            © {new Date().getFullYear()} IMD Inmobiliaria. Todos los derechos reservados.
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}