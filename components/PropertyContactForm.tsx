"use client"

import type React from "react"
import { useState } from "react"
import { MessageCircle } from "lucide-react"
import { z } from "zod"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

interface PropertyContactFormProps {
    propertyId: number
    propertyTitle: string
    propertyUrl: string
}

// Esquema de validación con zod
const formSchema = z.object({
    name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
    email: z.string().email("Ingresa un email válido"),
    phone: z.string().min(6, "Ingresa un teléfono válido"),
    message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
})

type FormData = z.infer<typeof formSchema>

export default function PropertyContactForm({ propertyId, propertyTitle, propertyUrl }: PropertyContactFormProps) {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        phone: "",
        message: `Estoy interesado/a en esta propiedad (ID: ${propertyId}). Por favor contáctenme para más información.`,
    })
    const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({})

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
        // Validar campo individualmente
        const singleField = z.object({ [name]: formSchema.shape[name as keyof FormData] })
        const result = singleField.safeParse({ [name]: value })
        setErrors((prev) => ({
            ...prev,
            [name]: result.success ? undefined : result.error.issues[0].message,
        }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const result = formSchema.safeParse(formData)
        if (!result.success) {
            // Mostrar errores
            const fieldErrors: Partial<Record<keyof FormData, string>> = {}
            result.error.issues.forEach((issue) => {
                const field = issue.path[0] as keyof FormData
                fieldErrors[field] = issue.message
            })
            setErrors(fieldErrors)
            return
        }
        setErrors({})
        // Abrir WhatsApp con el mensaje prellenado
        window.open(whatsappUrl, "_blank")
    }

    // Validación global
    const isValid = formSchema.safeParse(formData).success

    // Cambia este número por el de tu empresa o agente (formato internacional sin +)
    const whatsappNumber = "5492996918403"
    const whatsappMessage = encodeURIComponent(
        `Hola, soy ${formData.name} (${formData.email}, ${formData.phone}).\n${formData.message}\n\nVer propiedad: ${propertyUrl}`
    )
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

    return (
        <Card>
            <CardHeader className="pb-3">
                <CardTitle>Contactar al agente por la propiedad: {propertyTitle}</CardTitle>
                <CardDescription>Completa el formulario y te responderemos a la brevedad</CardDescription>
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
                        {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
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
                        {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
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
                        {errors.phone && <p className="text-red-500 text-xs">{errors.phone}</p>}
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
                        {errors.message && <p className="text-red-500 text-xs">{errors.message}</p>}
                    </div>

                    <div className="flex flex-col gap-2">

                        <Button
                            type="submit"
                            className="w-full bg-green-500 hover:bg-green-600 text-white flex items-center justify-center"
                            disabled={!isValid}
                        >
                            <MessageCircle className="h-4 w-4 mr-2" />
                            Enviar por WhatsApp
                        </Button>

                    </div>
                </form>
            </CardContent>
        </Card>
    )
}

