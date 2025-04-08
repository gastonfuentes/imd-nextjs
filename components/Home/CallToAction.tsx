import Link from "next/link"
import { Button } from "../ui/button"


export const CallToAction = () => {
    return (
        <section className="py-16 bg-primary text-white">
            <div className="container px-4 mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">¿Listo para encontrar tu hogar ideal?</h2>
                <p className="max-w-2xl mx-auto mb-8 text-white/90">
                    Nuestro equipo de expertos está listo para ayudarte a encontrar la propiedad perfecta para ti y tu familia.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button variant="secondary" size="lg" asChild>
                        <Link href="/propiedades">Explorar Propiedades</Link>
                    </Button>
                    <Button
                        variant="outline"
                        size="lg"
                        className="bg-transparent text-white border-white hover:bg-white/10"
                        asChild
                    >
                        <Link href="/contacto">Contactar un Agente</Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}
