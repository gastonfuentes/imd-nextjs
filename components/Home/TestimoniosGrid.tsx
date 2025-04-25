import Image from "next/image"
import { Card, CardContent } from "../ui/card"

import avatar from "@/app/images/avatar.svg";


// Datos de ejemplo para los testimonios
const testimonials = [
    {
        id: 1,
        name: "Juan Pérez",
        role: "Comprador",
        content:
            "El servicio fue excepcional. Encontraron exactamente lo que estaba buscando en tiempo récord. Muy profesionales y atentos a mis necesidades.",
        avatar: avatar,
    },
    {
        id: 2,
        name: "Ana Martínez",
        role: "Vendedora",
        content:
            "Vendí mi propiedad en menos de un mes gracias a su excelente estrategia de marketing. El proceso fue sencillo y transparente de principio a fin.",
        avatar: avatar,
    },
    {
        id: 3,
        name: "Roberto Sánchez",
        role: "Inversionista",
        content:
            "He trabajado con varias inmobiliarias, pero ninguna como esta. Su conocimiento del mercado y atención personalizada hacen toda la diferencia.",
        avatar: avatar,
    },
]


export const TestimoniosGrid = () => {
    return (
        <section className="py-16">
            <div className="container px-4 mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-2">Lo que dicen nuestros clientes</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        La satisfacción de nuestros clientes es nuestra mejor carta de presentación
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial) => (
                        <Card key={testimonial.id} className="relative">
                            <CardContent className="pt-12">
                                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                                    <div className="rounded-full overflow-hidden border-4 border-white w-16 h-16">
                                        <Image
                                            src={testimonial.avatar || "/placeholder.svg"}
                                            alt={testimonial.name}
                                            className="object-cover w-full h-full"
                                            width={64}
                                            height={64}
                                        />
                                    </div>
                                </div>
                                <p className="text-center mb-4 italic text-muted-foreground">{testimonial.content}</p>
                                <div className="text-center">
                                    <p className="font-semibold">{testimonial.name}</p>
                                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
