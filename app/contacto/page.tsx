import Link from "next/link";
import type { Metadata } from "next";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowRight,
  Instagram,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
/* import ContactForm from "@/components/ContactForm" */
import ContactFormNetlify from "@/components/ContactFormNetlify";
import { CONTACT_INFO } from "@/config";

export const metadata: Metadata = {
  title: "Contacto | InmobiliariaXYZ",
  description:
    "Ponte en contacto con nosotros para resolver tus dudas o solicitar información sobre nuestras propiedades...",
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
          Contacta con Nosotros
        </h1>
        <p className="text-primary/70 max-w-2xl mx-auto">
          Estamos aquí para ayudarte. Ponte en contacto con nuestro equipo de
          expertos inmobiliarios para resolver tus dudas o solicitar información
          sobre nuestras propiedades.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {/* Contact Form */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Envíanos un mensaje</CardTitle>
              <CardDescription className="text-primary/70">
                Completa el formulario y te responderemos a la brevedad.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ContactFormNetlify />
            </CardContent>
          </Card>
        </div>

        {/* Contact Information */}
        <div className="space-y-6">
          <Card className="bg-primary text-primary-foreground">
            <CardHeader>
              <CardTitle>Información de Contacto</CardTitle>
              <CardDescription className="text-primary-foreground/80">
                Diferentes formas de contactarnos
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-0.5 text-accent" />
                <div>
                  <p className="font-medium">Dirección</p>
                  <p className="text-primary-foreground/80">
                    {CONTACT_INFO.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="h-5 w-5 mr-3 mt-0.5 text-accent" />
                <div>
                  <p className="font-medium">Teléfonos</p>
                  {CONTACT_INFO.phones.map((phone, index) => (
                    <p className="text-primary-foreground/80" key={index}>
                      {phone}
                    </p>
                  ))}
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="h-5 w-5 mr-3 mt-0.5 text-accent" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-primary-foreground/80">
                    {CONTACT_INFO.email}
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="h-5 w-5 mr-3 mt-0.5 text-accent" />
                <div>
                  <p className="font-medium">Horario de Atención</p>
                  <p className="text-primary-foreground/80">
                    Lunes a Viernes: 9:00 - 18:00
                  </p>
                  <p className="text-primary-foreground/80">
                    Sábados: 9:00 - 13:00
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-secondary text-white">
            <CardHeader>
              <CardTitle>Síguenos</CardTitle>

              <CardDescription className="text-white">
                Conéctate con nosotros en redes sociales
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href={CONTACT_INFO.instagram} target="_blank">
                <Button
                  variant="outline"
                  size="default"
                  className="rounded-full border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground w-10 h-10"
                >
                  <Instagram className="h-5 w-5" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Map Section */}
      <Card className="mb-12">
        <CardHeader>
          <CardTitle>Nuestra Ubicación</CardTitle>
          <CardDescription className="text-primary/70">
            Visítanos en nuestra oficina central
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/*  <div className="aspect-[21/9] bg-primary/5 rounded-md flex items-center justify-center">
                        <p className="text-primary/50">Mapa de ubicación</p>
                    </div> */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6215.520087144692!2d-68.0521701494388!3d-38.83795595723658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x960a4a058ecfbe11%3A0x1d9f7a780fbb7b04!2sR%C3%ADo%20Colorado%2C%20R8303%20Cinco%20Saltos%2C%20R%C3%ADo%20Negro!5e0!3m2!1ses-419!2sar!4v1748012367322!5m2!1ses-419!2sar"
            width="770"
            height="600"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full rounded-md"
          ></iframe>
        </CardContent>
      </Card>

      {/* FAQ Section */}
      <div className="mb-12">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-2 text-primary">
            Preguntas Frecuentes
          </h2>
          <p className="text-primary/70 max-w-2xl mx-auto">
            Respuestas a las preguntas más comunes sobre nuestros servicios
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="">
            <CardHeader>
              <CardTitle className="text-lg">
                ¿Cómo puedo agendar una visita a una propiedad?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-primary/70">
                Puedes agendar una visita a través de nuestro formulario de
                contacto, llamando a nuestro número telefónico o enviando un
                mensaje por WhatsApp desde la página de la propiedad que te
                interesa.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">
                ¿Cuáles son los documentos necesarios para comprar una
                propiedad?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-primary/70">
                Para comprar una propiedad necesitarás tu identificación
                oficial, comprobante de ingresos, historial crediticio y, en
                algunos casos, un comprobante de domicilio. Nuestros asesores te
                guiarán durante todo el proceso.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">
                ¿Ofrecen asesoría para obtener financiamiento?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-primary/70">
                Sí, contamos con asesores especializados que te ayudarán a
                encontrar la mejor opción de financiamiento según tus
                necesidades y capacidad de pago, trabajamos con los principales
                bancos y entidades financieras.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">
                ¿Cuánto tiempo toma vender una propiedad?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-primary/70">
                El tiempo de venta varía según diversos factores como la
                ubicación, precio, condiciones del mercado y características de
                la propiedad. En promedio, nuestras propiedades se venden en un
                plazo de 2 a 3 meses.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary text-primary-foreground rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">
          ¿Buscas una propiedad específica?
        </h2>
        <p className="max-w-2xl mx-auto mb-6 text-primary-foreground/90">
          Nuestros asesores inmobiliarios pueden ayudarte a encontrar
          exactamente lo que estás buscando. Cuéntanos tus necesidades y te
          presentaremos las mejores opciones.
        </p>
        <Button
          className="bg-accent text-accent-foreground hover:bg-accent/90"
          size="lg"
          asChild
        >
          <Link href="/propiedades">
            Explorar Propiedades
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
