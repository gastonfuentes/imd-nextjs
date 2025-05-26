"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Home, Phone, Mail } from "lucide-react"
/* import {  ChevronDown } from "lucide-react" */

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
/* import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu" */
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"


// Definición de los enlaces de navegación
const navigationLinks = [
    { name: "Inicio", href: "/" },
    { name: "Propiedades", href: "/propiedades/listado" },
    /*  {
         name: "Servicios",
         href: "#",
         children: [
             { name: "Compra", href: "/servicios/compra" },
             { name: "Venta", href: "/servicios/venta" },
             { name: "Alquiler", href: "/servicios/alquiler" },
             { name: "Tasaciones", href: "/servicios/tasaciones" },
         ],
     }, */
    { name: "Nosotros", href: "/nosotros" },
    { name: "Blog", href: "/blog" },
    { name: "Contacto", href: "/contacto" },
]

export default function Navbar() {
    const pathname = usePathname()
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    // Detectar scroll para cambiar el estilo del navbar
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    // Cerrar el menú móvil cuando se cambia de ruta
    useEffect(() => {
        setIsMobileMenuOpen(false)
    }, [pathname])

    return (
        <header
            className={cn(
                "sticky top-0 z-50 w-full transition-all duration-300",
                isScrolled ? "bg-white shadow-md dark:bg-gray-900" : "bg-white dark:bg-gray-900/80",
            )}
        >
            <div className="container mx-auto px-4">
                <div className="flex h-26 items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2">
                        {/* <Home className="h-6 w-6 text-primary" />
                        <span className="text-xl font-bold">IMD Inmobiliaria</span> */}
                        <Image src="/secundario-fondo-claro.svg" alt="Logo" width={150} height={56} className="h-24 w-auto" />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-6">
                        {navigationLinks.map((item) => {
                            // Si el elemento tiene submenú
                            /* if (item.children) {
                                return (
                                    <DropdownMenu key={item.name}>
                                        <DropdownMenuTrigger asChild>
                                            <button className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground">
                                                {item.name}
                                                <ChevronDown className="ml-1 h-4 w-4" />
                                            </button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="center" className="w-48">
                                            {item.children.map((child) => (
                                                <DropdownMenuItem key={child.name} asChild>
                                                    <Link href={child.href}>{child.name}</Link>
                                                </DropdownMenuItem>
                                            ))}
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                )
                            } */

                            // Elemento normal sin submenú
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={cn(
                                        "text-sm font-medium transition-colors hover:text-foreground",
                                        pathname === item.href ? "text-foreground" : "text-muted-foreground",
                                    )}
                                >
                                    {item.name}
                                </Link>
                            )
                        })}
                    </nav>

                    {/* Desktop Action Buttons */}
                    <div className="hidden md:flex items-center space-x-4">
                        {/*  <Button variant="outline" size="sm" asChild>
                            <Link href="/mi-cuenta">
                                <User className="h-4 w-4 mr-2" />
                                Mi Cuenta
                            </Link>
                        </Button> */}
                        <Button size="sm" asChild>
                            <Link href="/contacto">
                                <Mail className="h-4 w-4 mr-2" />
                                Contactar
                            </Link>
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="md:hidden">
                                <Menu className="h-6 w-6" />
                                <span className="sr-only">Abrir menú</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[300px] sm:w-[350px]">
                            <div className="flex flex-col h-full">
                                <div className="flex items-center justify-between mb-6">
                                    <Link href="/" className="flex items-center space-x-2">
                                        <Home className="h-6 w-6 text-primary" />
                                        <span className="text-xl font-bold">IMD Inmobiliaria</span>
                                    </Link>
                                    <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)}>
                                        <X className="h-6 w-6" />
                                        <span className="sr-only">Cerrar menú</span>
                                    </Button>
                                </div>

                                {/* Mobile Navigation */}
                                <nav className="flex flex-col space-y-4">
                                    {navigationLinks.map((item) => {
                                        // Si el elemento tiene submenú
                                        /* if (item.children) {
                                            return (
                                                <div key={item.name} className="space-y-2">
                                                    <div className="font-medium">{item.name}</div>
                                                    <div className="pl-4 border-l border-border space-y-2">
                                                        {item.children.map((child) => (
                                                            <Link
                                                                key={child.name}
                                                                href={child.href}
                                                                className={cn(
                                                                    "block text-sm text-muted-foreground hover:text-foreground",
                                                                    pathname === child.href ? "text-foreground font-medium" : "",
                                                                )}
                                                            >
                                                                {child.name}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </div>
                                            )
                                        } */

                                        // Elemento normal sin submenú
                                        return (
                                            <Link
                                                key={item.name}
                                                href={item.href}
                                                className={cn(
                                                    "text-base font-medium transition-colors hover:text-foreground",
                                                    pathname === item.href ? "text-foreground" : "text-muted-foreground",
                                                )}
                                            >
                                                {item.name}
                                            </Link>
                                        )
                                    })}
                                </nav>

                                {/* Mobile Action Buttons */}
                                <div className="mt-auto pt-6 space-y-4">
                                    {/* <Button variant="outline" className="w-full" asChild>
                                        <Link href="/mi-cuenta">
                                            <User className="h-4 w-4 mr-2" />
                                            Mi Cuenta
                                        </Link>
                                    </Button> */}
                                    <Button className="w-full" asChild>
                                        <Link href="/contacto">
                                            <Phone className="h-4 w-4 mr-2" />
                                            Contactar
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    )
}
