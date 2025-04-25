import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"


export const CallToAction = () => {
    return (
        <Card>
            <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">¿Buscando una propiedad?</h3>
                <p className="text-muted-foreground mb-4">
                    Nuestros asesores inmobiliarios están listos para ayudarte a encontrar tu hogar ideal.
                </p>
                <Button className="w-full" asChild>
                    <Link href="/contacto">Contactar un asesor</Link>
                </Button>
            </CardContent>
        </Card>
    )
}
