import type { Metadata } from "next"
/* import Link from "next/link" */
import Image from "next/image"
import { Award, Building, Clock, Users, CheckCircle, Star, TrendingUp, Heart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { CallToAction, TestimoniosGrid } from "@/components/Home"

export const metadata: Metadata = {
    title: "Nosotros | InmobiliariaXYZ",
    description: "Conoce nuestra historia, misión, visión y al equipo que hace posible InmobiliariaXYZ.",
}

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative">
                <div className="absolute inset-0 bg-primary/60 z-10" />
                <div
                    className="h-[400px] bg-cover bg-center"
                    style={{
                        backgroundImage: "url('/quienes-somos.jpg')",
                    }}
                />

                <div className="absolute inset-0 z-20 flex items-center justify-center">
                    <div className="container px-4 mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4  text-white">Sobre Nosotros</h1>
                        <p className="text-xl max-w-3xl mx-auto text-white">
                            Somos una empresa inmobiliaria comprometida con la excelencia y la satisfacción de nuestros clientes.
                            Conoce nuestra historia y al equipo que hace posible a IMD.
                        </p>
                    </div>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="py-16">
                <div className="container px-16 mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <Badge className="mb-4 bg-accent text-accent-foreground">Nuestra Historia</Badge>
                            <h2 className="text-3xl font-bold mb-6 text-primary">
                                Experiencia en el mercado inmobiliario
                            </h2>
                            <div className="space-y-4 text-primary/70">
                                <p>
                                    Somos María José y Natalia, dos amigas que decidimos ayudar a las personas a encontrar ese lugar especial que pueden llamar hogar. Un proyecto que busca brindar un servicio cálido, humano y confiable. Con esa motivación nació IMD Inmobiliaria, un emprendimiento que combina experiencia, cercanía y un compromiso genuino con cada cliente, pensado para acompañarte en cada paso del camino.

                                </p>
                                <p>
                                    Creemos en el trato humano, en escuchar con atención y en acompañar cada paso del proceso, ya sea para comprar, vender o alquilar una propiedad, ya que invertir en un nuevo espacio no es solo una operación: es una decisión de vida. Por eso trabajamos con compromiso, responsabilidad y cercanía, priorizando siempre la confianza y la transparencia.

                                </p>
                                <p>
                                    Nuestro objetivo es que cada persona que se acerque a IMD se sienta escuchada, bien asesorada y segura en cada etapa del proceso.
                                    Este es solo el comienzo de una gran aventura, y nos encantaría que formes parte de ella.
                                </p>
                            </div>
                        </div>
                        <div className="relative h-[400px] rounded-lg overflow-hidden">
                            <Image
                                src="/amigas.jpg"
                                alt="Historia de InmobiliariaXYZ"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission, Vision, Values Section */}
            <section className="py-16 bg-primary text-primary-foreground">
                <div className="container px-4 mx-auto">
                    <div className="text-center mb-12">
                        <Badge className="mb-4 bg-accent text-accent-foreground">Nuestra Filosofía</Badge>
                        <h2 className="text-3xl font-bold mb-4">Misión, Visión y Valores</h2>
                        <p className="max-w-2xl mx-auto">
                            Estos son los principios que guían nuestro trabajo diario y nos ayudan a ofrecer un servicio excepcional.
                        </p>
                    </div>

                    <Tabs defaultValue="mission" className="w-full max-w-3xl mx-auto">
                        <TabsList className="grid grid-cols-3 w-full">
                            <TabsTrigger
                                value="mission"
                                className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground"
                            >
                                Misión
                            </TabsTrigger>
                            <TabsTrigger
                                value="vision"
                                className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground"
                            >
                                Visión
                            </TabsTrigger>
                            <TabsTrigger
                                value="values"
                                className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground"
                            >
                                Valores
                            </TabsTrigger>
                        </TabsList>
                        <div className="mt-6 bg-white p-6 rounded-lg text-primary">
                            <TabsContent value="mission" className="space-y-4">
                                <h3 className="text-xl font-semibold">Nuestra Misión</h3>
                                <p>
                                    Proporcionar soluciones inmobiliarias integrales que satisfagan las necesidades de nuestros clientes,
                                    a través de un servicio personalizado, transparente y profesional, generando relaciones de confianza a
                                    largo plazo.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                                    <div className="flex items-start">
                                        <CheckCircle className="h-5 w-5 mr-2 text-accent flex-shrink-0" />
                                        <p>Asesoramiento personalizado para cada cliente</p>
                                    </div>
                                    <div className="flex items-start">
                                        <CheckCircle className="h-5 w-5 mr-2 text-accent flex-shrink-0" />
                                        <p>Transparencia en todos nuestros procesos</p>
                                    </div>
                                    <div className="flex items-start">
                                        <CheckCircle className="h-5 w-5 mr-2 text-accent flex-shrink-0" />
                                        <p>Soluciones adaptadas a cada necesidad</p>
                                    </div>
                                    <div className="flex items-start">
                                        <CheckCircle className="h-5 w-5 mr-2 text-accent flex-shrink-0" />
                                        <p>Compromiso con la satisfacción del cliente</p>
                                    </div>
                                </div>
                            </TabsContent>
                            <TabsContent value="vision" className="space-y-4">
                                <h3 className="text-xl font-semibold">Nuestra Visión</h3>
                                <p>
                                    Ser la empresa inmobiliaria líder y referente en el mercado, reconocida por la excelencia en el
                                    servicio, la innovación constante y el compromiso con nuestros clientes, colaboradores y la comunidad.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                                    <div className="flex items-start">
                                        <Star className="h-5 w-5 mr-2 text-accent flex-shrink-0" />
                                        <p>Liderazgo en el sector inmobiliario</p>
                                    </div>
                                    <div className="flex items-start">
                                        <Star className="h-5 w-5 mr-2 text-accent flex-shrink-0" />
                                        <p>Innovación tecnológica constante</p>
                                    </div>
                                    <div className="flex items-start">
                                        <Star className="h-5 w-5 mr-2 text-accent flex-shrink-0" />
                                        <p>Expansión a nuevos mercados</p>
                                    </div>
                                    <div className="flex items-start">
                                        <Star className="h-5 w-5 mr-2 text-accent flex-shrink-0" />
                                        <p>Desarrollo sostenible y responsable</p>
                                    </div>
                                </div>
                            </TabsContent>
                            <TabsContent value="values" className="space-y-4">
                                <h3 className="text-xl font-semibold">Nuestros Valores</h3>
                                <p>
                                    Nuestros valores son el pilar fundamental de nuestra cultura organizacional y guían cada una de
                                    nuestras acciones y decisiones.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                                    <Card className="bg-primary/5 border-none">
                                        <CardHeader className="pb-2">
                                            <Heart className="h-6 w-6 text-accent mb-2" />
                                            <CardTitle className="text-base">Integridad</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-sm">Actuamos con honestidad, ética y transparencia en todo momento.</p>
                                        </CardContent>
                                    </Card>
                                    <Card className="bg-primary/5 border-none">
                                        <CardHeader className="pb-2">
                                            <Users className="h-6 w-6 text-accent mb-2" />
                                            <CardTitle className="text-base">Compromiso</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-sm">
                                                Nos dedicamos a cumplir y superar las expectativas de nuestros clientes.
                                            </p>
                                        </CardContent>
                                    </Card>
                                    <Card className="bg-primary/5 border-none">
                                        <CardHeader className="pb-2">
                                            <TrendingUp className="h-6 w-6 text-accent mb-2" />
                                            <CardTitle className="text-base">Excelencia</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-sm">Buscamos la mejora continua y la calidad en todo lo que hacemos.</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </TabsContent>
                        </div>
                    </Tabs>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-primary text-primary-foreground">
                <div className="container px-4 mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Nuestros Logros en Números</h2>
                        <p className="text-primary-foreground/80 max-w-2xl mx-auto">
                            Estos números reflejan nuestro compromiso con la excelencia y la satisfacción de nuestros clientes.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="text-5xl font-bold mb-2 text-accent">15+</div>
                            <p className="text-xl mb-1">Años de Experiencia</p>
                            <p className="text-primary-foreground/70 text-sm">En el mercado inmobiliario</p>
                        </div>
                        <div className="text-center">
                            <div className="text-5xl font-bold mb-2 text-accent">5,000+</div>
                            <p className="text-xl mb-1">Propiedades Vendidas</p>
                            <p className="text-primary-foreground/70 text-sm">Desde nuestra fundación</p>
                        </div>
                        <div className="text-center">
                            <div className="text-5xl font-bold mb-2 text-accent">50+</div>
                            <p className="text-xl mb-1">Profesionales</p>
                            <p className="text-primary-foreground/70 text-sm">Altamente capacitados</p>
                        </div>
                        <div className="text-center">
                            <div className="text-5xl font-bold mb-2 text-accent">98%</div>
                            <p className="text-xl mb-1">Clientes Satisfechos</p>
                            <p className="text-primary-foreground/70 text-sm">Recomiendan nuestros servicios</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-16">
                <div className="container px-4 mx-auto">
                    <div className="text-center mb-12">
                        <Badge className="mb-4 bg-accent text-accent-foreground">Nuestro Equipo</Badge>
                        <h2 className="text-3xl font-bold mb-4 text-primary">Conoce a Nuestros Expertos</h2>
                        <p className="text-primary/70 max-w-2xl mx-auto">
                            Contamos con un equipo de profesionales altamente capacitados y comprometidos con tu satisfacción.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Team Member 1 */}
                        <Card className="bg-secondary text-primary">
                            <CardHeader className="text-center pb-2">
                                <div className="mx-auto mb-4">
                                    <Avatar className="h-32 w-32">
                                        <AvatarImage src="/placeholder.svg?height=128&width=128&text=CEO" alt="Carlos Rodríguez" />
                                        <AvatarFallback>CR</AvatarFallback>
                                    </Avatar>
                                </div>
                                <CardTitle>Carlos Rodríguez</CardTitle>
                                <CardDescription className="text-primary/70">CEO & Fundador</CardDescription>
                            </CardHeader>
                            <CardContent className="text-center">
                                <p className="text-sm text-primary/70">
                                    Con más de 20 años de experiencia en el sector inmobiliario, Carlos fundó InmobiliariaXYZ con la
                                    visión de transformar la industria.
                                </p>
                            </CardContent>
                            <CardFooter className="flex justify-center gap-2">
                                <Button variant="outline" size="sm" className="rounded-full w-8 h-8 p-0 border-primary/20">
                                    <span className="sr-only">LinkedIn</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-linkedin"
                                    >
                                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                        <rect width="4" height="12" x="2" y="9" />
                                        <circle cx="4" cy="4" r="2" />
                                    </svg>
                                </Button>
                                <Button variant="outline" size="sm" className="rounded-full w-8 h-8 p-0 border-primary/20">
                                    <span className="sr-only">Twitter</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-twitter"
                                    >
                                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                                    </svg>
                                </Button>
                                <Button variant="outline" size="sm" className="rounded-full w-8 h-8 p-0 border-primary/20">
                                    <span className="sr-only">Email</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-mail"
                                    >
                                        <rect width="20" height="16" x="2" y="4" rx="2" />
                                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                    </svg>
                                </Button>
                            </CardFooter>
                        </Card>

                        {/* Team Member 2 */}
                        <Card className="bg-secondary text-primary">
                            <CardHeader className="text-center pb-2">
                                <div className="mx-auto mb-4">
                                    <Avatar className="h-32 w-32">
                                        <AvatarImage src="/placeholder.svg?height=128&width=128&text=COO" alt="Ana Martínez" />
                                        <AvatarFallback>AM</AvatarFallback>
                                    </Avatar>
                                </div>
                                <CardTitle>Ana Martínez</CardTitle>
                                <CardDescription className="text-primary/70">Directora de Operaciones</CardDescription>
                            </CardHeader>
                            <CardContent className="text-center">
                                <p className="text-sm text-primary/70">
                                    Ana lidera nuestras operaciones diarias, asegurando que cada cliente reciba un servicio excepcional y
                                    personalizado.
                                </p>
                            </CardContent>
                            <CardFooter className="flex justify-center gap-2">
                                <Button variant="outline" size="sm" className="rounded-full w-8 h-8 p-0 border-primary/20">
                                    <span className="sr-only">LinkedIn</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-linkedin"
                                    >
                                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                        <rect width="4" height="12" x="2" y="9" />
                                        <circle cx="4" cy="4" r="2" />
                                    </svg>
                                </Button>
                                <Button variant="outline" size="sm" className="rounded-full w-8 h-8 p-0 border-primary/20">
                                    <span className="sr-only">Twitter</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-twitter"
                                    >
                                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                                    </svg>
                                </Button>
                                <Button variant="outline" size="sm" className="rounded-full w-8 h-8 p-0 border-primary/20">
                                    <span className="sr-only">Email</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-mail"
                                    >
                                        <rect width="20" height="16" x="2" y="4" rx="2" />
                                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                    </svg>
                                </Button>
                            </CardFooter>
                        </Card>

                        {/* Team Member 3 */}
                        <Card className="bg-secondary text-primary">
                            <CardHeader className="text-center pb-2">
                                <div className="mx-auto mb-4">
                                    <Avatar className="h-32 w-32">
                                        <AvatarImage src="/placeholder.svg?height=128&width=128&text=CFO" alt="Roberto Sánchez" />
                                        <AvatarFallback>RS</AvatarFallback>
                                    </Avatar>
                                </div>
                                <CardTitle>Roberto Sánchez</CardTitle>
                                <CardDescription className="text-primary/70">Director Financiero</CardDescription>
                            </CardHeader>
                            <CardContent className="text-center">
                                <p className="text-sm text-primary/70">
                                    Roberto supervisa todas las operaciones financieras, asegurando la solidez y el crecimiento sostenible
                                    de la empresa.
                                </p>
                            </CardContent>
                            <CardFooter className="flex justify-center gap-2">
                                <Button variant="outline" size="sm" className="rounded-full w-8 h-8 p-0 border-primary/20">
                                    <span className="sr-only">LinkedIn</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-linkedin"
                                    >
                                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                        <rect width="4" height="12" x="2" y="9" />
                                        <circle cx="4" cy="4" r="2" />
                                    </svg>
                                </Button>
                                <Button variant="outline" size="sm" className="rounded-full w-8 h-8 p-0 border-primary/20">
                                    <span className="sr-only">Twitter</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-twitter"
                                    >
                                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                                    </svg>
                                </Button>
                                <Button variant="outline" size="sm" className="rounded-full w-8 h-8 p-0 border-primary/20">
                                    <span className="sr-only">Email</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-mail"
                                    >
                                        <rect width="20" height="16" x="2" y="4" rx="2" />
                                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                    </svg>
                                </Button>
                            </CardFooter>
                        </Card>

                        {/* Team Member 4 */}
                        <Card className="bg-secondary text-primary">
                            <CardHeader className="text-center pb-2">
                                <div className="mx-auto mb-4">
                                    <Avatar className="h-32 w-32">
                                        <AvatarImage src="/placeholder.svg?height=128&width=128&text=CMO" alt="Laura Mendoza" />
                                        <AvatarFallback>LM</AvatarFallback>
                                    </Avatar>
                                </div>
                                <CardTitle>Laura Mendoza</CardTitle>
                                <CardDescription className="text-primary/70">Directora de Marketing</CardDescription>
                            </CardHeader>
                            <CardContent className="text-center">
                                <p className="text-sm text-primary/70">
                                    Laura lidera nuestras estrategias de marketing, asegurando que nuestras propiedades lleguen a los
                                    clientes adecuados.
                                </p>
                            </CardContent>
                            <CardFooter className="flex justify-center gap-2">
                                <Button variant="outline" size="sm" className="rounded-full w-8 h-8 p-0 border-primary/20">
                                    <span className="sr-only">LinkedIn</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-linkedin"
                                    >
                                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                        <rect width="4" height="12" x="2" y="9" />
                                        <circle cx="4" cy="4" r="2" />
                                    </svg>
                                </Button>
                                <Button variant="outline" size="sm" className="rounded-full w-8 h-8 p-0 border-primary/20">
                                    <span className="sr-only">Twitter</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-twitter"
                                    >
                                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                                    </svg>
                                </Button>
                                <Button variant="outline" size="sm" className="rounded-full w-8 h-8 p-0 border-primary/20">
                                    <span className="sr-only">Email</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-mail"
                                    >
                                        <rect width="20" height="16" x="2" y="4" rx="2" />
                                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                    </svg>
                                </Button>
                            </CardFooter>
                        </Card>
                    </div>

                    {/*  <div className="text-center mt-8">
                        <Button variant="outline" className="border-primary/20 text-primary hover:bg-primary/5" asChild>
                            <Link href="/equipo">
                                Ver equipo completo
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div> */}
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-16 bg-primary text-primary-foreground">
                <div className="container px-4 mx-auto">
                    <div className="text-center mb-12">
                        <Badge className="mb-4 bg-accent text-accent-foreground">¿Por qué elegirnos?</Badge>
                        <h2 className="text-3xl font-bold mb-4">Lo que nos diferencia</h2>
                        <p className="max-w-2xl mx-auto">
                            Estas son algunas de las razones por las que nuestros clientes nos eligen y recomiendan.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <Card className="text-primary">
                            <CardHeader>
                                <Clock className="h-10 w-10 text-accent mb-2" />
                                <CardTitle>Experiencia Comprobada</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-primary/70">
                                    Más de 15 años en el mercado inmobiliario nos han permitido desarrollar un profundo conocimiento del
                                    sector y ofrecer soluciones efectivas a nuestros clientes.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="text-primary">
                            <CardHeader>
                                <Users className="h-10 w-10 text-accent mb-2" />
                                <CardTitle>Equipo Profesional</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-primary/70">
                                    Contamos con un equipo de profesionales altamente capacitados y comprometidos con tu satisfacción,
                                    dispuestos a asesorarte en cada paso del proceso.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="text-primary">
                            <CardHeader>
                                <Award className="h-10 w-10 text-accent mb-2" />
                                <CardTitle>Calidad Garantizada</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-primary/70">
                                    Todas nuestras propiedades cumplen con los más altos estándares de calidad y seguridad, garantizando
                                    una inversión segura y rentable.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="text-primary">
                            <CardHeader>
                                <Building className="h-10 w-10 text-accent mb-2" />
                                <CardTitle>Amplio Catálogo</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-primary/70">
                                    Disponemos de un extenso catálogo de propiedades en las mejores ubicaciones, adaptadas a diferentes
                                    necesidades y presupuestos.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="text-primary">
                            <CardHeader>
                                <TrendingUp className="h-10 w-10 text-accent mb-2" />
                                <CardTitle>Innovación Constante</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-primary/70">
                                    Implementamos las últimas tecnologías y tendencias del mercado para ofrecerte una experiencia
                                    inmobiliaria moderna y eficiente.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="text-primary">
                            <CardHeader>
                                <Heart className="h-10 w-10 text-accent mb-2" />
                                <CardTitle>Servicio Personalizado</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-primary/70">
                                    Entendemos que cada cliente es único, por eso ofrecemos un servicio personalizado que se adapta a tus
                                    necesidades específicas.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            {/* <section className="py-16">
                <div className="container px-4 mx-auto">
                    <div className="text-center mb-12">
                        <Badge className="mb-4 bg-accent text-accent-foreground">Testimonios</Badge>
                        <h2 className="text-3xl font-bold mb-4 text-primary">Lo que dicen nuestros clientes</h2>
                        <p className="text-primary/70 max-w-2xl mx-auto">
                            La satisfacción de nuestros clientes es nuestra mejor carta de presentación.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <Card className="relative bg-secondary text-primary">
                            <CardContent className="pt-12">
                                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                                    <div className="rounded-full overflow-hidden border-4 border-secondary w-16 h-16">
                                        <Image
                                            width={100}
                                            height={100}
                                            src="/placeholder.svg?height=100&width=100&text=JP"
                                            alt="Juan Pérez"
                                            className="object-cover w-full h-full"
                                        />
                                    </div>
                                </div>
                                <p className="text-center mb-4 italic text-primary/70">
                                    El servicio fue excepcional. Encontraron exactamente lo que estaba buscando en tiempo récord. Muy profesionales y atentos a mis necesidades
                                </p>
                                <div className="text-center">
                                    <p className="font-semibold">Juan Pérez</p>
                                    <p className="text-sm text-primary/70">Comprador</p>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="relative bg-secondary text-primary">
                            <CardContent className="pt-12">
                                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                                    <div className="rounded-full overflow-hidden border-4 border-secondary w-16 h-16">
                                        <Image
                                            src="/placeholder.svg?height=100&width=100&text=AM"
                                            alt="Ana Martínez"
                                            className="object-cover w-full h-full"
                                            width={100}
                                            height={100}
                                        />
                                    </div>
                                </div>
                                <p className="text-center mb-4 italic text-primary/70">
                                    Vendí mi propiedad en menos de un mes gracias a su excelente estrategia de marketing. El proceso fue sencillo y transparente de principio a fin.
                                </p>
                                <div className="text-center">
                                    <p className="font-semibold">Ana Martínez</p>
                                    <p className="text-sm text-primary/70">Vendedora</p>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="relative bg-secondary text-primary">
                            <CardContent className="pt-12">
                                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                                    <div className="rounded-full overflow-hidden border-4 border-secondary w-16 h-16">
                                        <Image
                                            width={100}
                                            height={100}
                                            src="/placeholder.svg?height=100&width=100&text=RS"
                                            alt="Roberto Sánchez"
                                            className="object-cover w-full h-full"
                                        />
                                    </div>
                                </div>
                                <p className="text-center mb-4 italic text-primary/70">
                                    He trabajado con varias inmobiliarias, pero ninguna como esta. Su conocimiento del mercado y atención
                                    personalizada hacen toda la diferencia
                                </p>
                                <div className="text-center">
                                    <p className="font-semibold">Roberto Sánchez</p>
                                    <p className="text-sm text-primary/70">Inversionista</p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section> */}
            <TestimoniosGrid />

            {/* CTA Section */}
            {/* <section className="py-16 bg-primary text-primary-foreground">
                <div className="container px-4 mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-4">¿Listo para trabajar con nosotros?</h2>
                    <p className="max-w-2xl mx-auto mb-8 text-primary-foreground/90">
                        Nuestro equipo de expertos está listo para ayudarte a encontrar la propiedad perfecta o a vender tu inmueble
                        al mejor precio.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            variant="secondary"
                            size="lg"
                            asChild
                            className="bg-accent text-accent-foreground hover:bg-accent/90"
                        >
                            <Link href="/propiedades">Explorar Propiedades</Link>
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="bg-transparent text-primary-foreground border-primary-foreground/20 hover:bg-primary-foreground/10"
                            asChild
                        >
                            <Link href="/contacto">Contactar un Asesor</Link>
                        </Button>
                    </div>
                </div>
            </section> */}
            <CallToAction />
        </div>
    )
}
