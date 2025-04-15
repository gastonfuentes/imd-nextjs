import Link from "next/link"
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin, ArrowRight, Home } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export default function Footer() {
    return (
        <footer className="bg-primary text-primary-foreground">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <Home className="h-6 w-6" />
                            <span className="text-xl font-bold">InmobiliariaXYZ</span>
                        </div>
                        <p className="text-slate-400">
                            Ofrecemos las mejores propiedades en el mercado con un servicio personalizado y profesional.
                        </p>
                        <div className="flex space-x-4">
                            <Link href="#" className="hover:text-white transition-colors">
                                <Facebook className="h-5 w-5" />
                                <span className="sr-only">Facebook</span>
                            </Link>
                            <Link href="#" className="hover:text-white transition-colors">
                                <Instagram className="h-5 w-5" />
                                <span className="sr-only">Instagram</span>
                            </Link>
                            <Link href="#" className="hover:text-white transition-colors">
                                <Twitter className="h-5 w-5" />
                                <span className="sr-only">Twitter</span>
                            </Link>
                            <Link href="#" className="hover:text-white transition-colors">
                                <Linkedin className="h-5 w-5" />
                                <span className="sr-only">LinkedIn</span>
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Enlaces Rápidos</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="text-slate-400 hover:text-white transition-colors">
                                    Inicio
                                </Link>
                            </li>
                            <li>
                                <Link href="/propiedades" className="text-slate-400 hover:text-white transition-colors">
                                    Propiedades
                                </Link>
                            </li>
                            <li>
                                <Link href="/servicios" className="text-slate-400 hover:text-white transition-colors">
                                    Servicios
                                </Link>
                            </li>
                            <li>
                                <Link href="/agentes" className="text-slate-400 hover:text-white transition-colors">
                                    Agentes
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className="text-slate-400 hover:text-white transition-colors">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link href="/contacto" className="text-slate-400 hover:text-white transition-colors">
                                    Contacto
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Contacto</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <MapPin className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                                <span className="text-slate-400">Av. Principal 123, Piso 4, Oficina 401, Ciudad</span>
                            </li>
                            <li className="flex items-center">
                                <Phone className="h-5 w-5 mr-2 flex-shrink-0" />
                                <Link href="tel:+123456789" className="text-slate-400 hover:text-white transition-colors">
                                    +51 123 456 789
                                </Link>
                            </li>
                            <li className="flex items-center">
                                <Mail className="h-5 w-5 mr-2 flex-shrink-0" />
                                <Link
                                    href="mailto:info@inmobiliariaxyz.com"
                                    className="text-slate-400 hover:text-white transition-colors"
                                >
                                    info@inmobiliariaxyz.com
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Suscríbete</h3>
                        <p className="text-slate-400">
                            Recibe las últimas novedades y ofertas especiales directamente en tu correo.
                        </p>
                        <form className="flex flex-col sm:flex-row gap-2">
                            <Input
                                type="email"
                                placeholder="Tu email"
                                className="bg-slate-900 border-slate-700 text-white"
                                required
                            />
                            <Button type="submit" className="bg-slate-100 text-slate-900 hover:bg-white">
                                <ArrowRight className="h-4 w-4" />
                            </Button>
                        </form>
                    </div>
                </div>

                <Separator className="my-8 bg-slate-800" />

                {/* Bottom Footer */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-slate-400">
                        © {new Date().getFullYear()} InmobiliariaXYZ. Todos los derechos reservados.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 text-sm">
                        <Link href="/terminos" className="text-slate-400 hover:text-white transition-colors">
                            Términos y Condiciones
                        </Link>
                        <Link href="/privacidad" className="text-slate-400 hover:text-white transition-colors">
                            Política de Privacidad
                        </Link>
                        <Link href="/cookies" className="text-slate-400 hover:text-white transition-colors">
                            Política de Cookies
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
