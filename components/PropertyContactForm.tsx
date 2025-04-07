"use client"

import type React from "react"

import { useState } from "react"
import { Send } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

interface PropertyContactFormProps {
    propertyId: number
    propertyTitle: string
}

export default function PropertyContactForm({ propertyId, propertyTitle }: PropertyContactFormProps) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: `Hola, estoy interesado/a en esta propiedad (ID: ${propertyId}). Por favor contáctenme para más información.`,
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Here you would typically send the form data to your backend
        console.log("Form submitted:", formData)
        alert("Mensaje enviado. Nos pondremos en contacto contigo pronto.")
    }

    return (
        <Card>
            <CardHeader className="pb-3">
                <CardTitle>Contactar al agente por la propiedad: {propertyTitle}</CardTitle>
                <CardDescription>Completa el formulario y te contactaremos a la brevedad</CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="name">Nombre completo</Label>
                        <Input
                            id="name"
                            name="name"
                            placeholder="Tu nombre"
                            required
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="tu@email.com"
                            required
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="phone">Teléfono</Label>
                        <Input
                            id="phone"
                            name="phone"
                            placeholder="+123456789"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="message">Mensaje</Label>
                        <Textarea
                            id="message"
                            name="message"
                            rows={4}
                            placeholder="Escribe tu mensaje aquí"
                            required
                            value={formData.message}
                            onChange={handleChange}
                        />
                    </div>

                    <Button type="submit" className="w-full">
                        <Send className="h-4 w-4 mr-2" />
                        Enviar mensaje
                    </Button>
                </form>
            </CardContent>
        </Card>
    )
}

