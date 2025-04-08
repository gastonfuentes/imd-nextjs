import { Award, Clock, Users } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"


export const PorQueElegirnos = () => {
    return (
        <section className="py-16">
            <div className="container px-4 mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-2">¿Por qué elegirnos?</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Nos destacamos por ofrecer un servicio personalizado y profesional, enfocado en satisfacer las necesidades
                        de nuestros clientes.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <Card>
                        <CardHeader>
                            <Clock className="h-10 w-10 text-primary mb-2" />
                            <CardTitle>Experiencia</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">
                                Más de 15 años de experiencia en el mercado inmobiliario, ofreciendo soluciones efectivas a nuestros
                                clientes.
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <Users className="h-10 w-10 text-primary mb-2" />
                            <CardTitle>Equipo Profesional</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">
                                Contamos con un equipo de profesionales altamente capacitados y comprometidos con tu satisfacción.
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <Award className="h-10 w-10 text-primary mb-2" />
                            <CardTitle>Calidad Garantizada</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">
                                Todas nuestras propiedades cumplen con los más altos estándares de calidad y seguridad.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}
