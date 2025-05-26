"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Send, Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CheckCircle2, AlertCircle } from "lucide-react"

// Definimos el esquema de validación con zod
const formSchema = z.object({
    name: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres" }),
    email: z.string().email({ message: "Ingresa un email válido" }),
    phone: z.string().min(6, { message: "Ingresa un número de teléfono válido" }),
    subject: z.string().min(1, { message: "Selecciona un asunto" }),
    contactPreference: z.enum(["email", "phone", "whatsapp"], {
        required_error: "Selecciona una preferencia de contacto",
    }),
    message: z.string().min(10, { message: "El mensaje debe tener al menos 10 caracteres" }),
})

type FormValues = z.infer<typeof formSchema>

export default function ContactFormNetlify() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [isError, setIsError] = useState(false)

    // Inicializamos el formulario con react-hook-form
    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            subject: "",
            contactPreference: "email",
            message: "",
        },
    })

    // Función para codificar los datos como x-www-form-urlencoded
    const encode = (data: Record<string, string>) =>
        Object.keys(data)
            .map(
                (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
            )
            .join("&")

    // Función para manejar el envío del formulario
    const onSubmit = async (data: FormValues) => {
        setIsSubmitting(true)
        setIsError(false)

        try {
            await fetch("/_forms.html", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: encode({
                    "form-name": "contacto",
                    ...data,
                }),
            })
            setIsSuccess(true)
            form.reset()
        } catch (error) {
            console.error("Error al enviar el formulario:", error)
            setIsError(true)
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div>
            {isSuccess ? (
                <Alert className="bg-accent/10 text-primary border-accent">
                    <CheckCircle2 className="h-4 w-4 text-accent" />
                    <AlertTitle>¡Mensaje enviado con éxito!</AlertTitle>
                    <AlertDescription>
                        Gracias por contactarnos. Uno de nuestros asesores se pondrá en contacto contigo a la brevedad.
                    </AlertDescription>
                    <Button
                        className="mt-4 bg-primary text-primary-foreground hover:bg-primary/90 col-span-2"
                        onClick={() => setIsSuccess(false)}
                    >
                        Enviar otro mensaje
                    </Button>
                </Alert>
            ) : (
                <>
                    {isError && (
                        <Alert className="bg-destructive/10 text-destructive border-destructive mb-6">
                            <AlertCircle className="h-4 w-4" />
                            <AlertTitle>Error al enviar el mensaje</AlertTitle>
                            <AlertDescription>
                                Hubo un problema al enviar tu mensaje. Por favor, inténtalo de nuevo o contáctanos directamente.
                            </AlertDescription>
                        </Alert>
                    )}

                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="space-y-6"
                            name="contacto"
                            method="POST"
                            data-netlify="true"
                            netlify-honeypot="bot-field"
                        >
                            <input type="hidden" name="form-name" value="contacto" />
                            {/* Honeypot para bots */}
                            <p hidden>
                                <label>
                                    No llenar este campo: <input name="bot-field" />
                                </label>
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Nombre completo</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Tu nombre" {...field} className="border-primary/20" />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Email</FormLabel>
                                            <FormControl>
                                                <Input placeholder="tu@email.com" {...field} className="border-primary/20" />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="phone"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Teléfono</FormLabel>
                                            <FormControl>
                                                <Input placeholder="+51 123 456 789" {...field} className="border-primary/20" />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="subject"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Asunto</FormLabel>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl>
                                                    <SelectTrigger className="border-primary/20">
                                                        <SelectValue placeholder="Selecciona un asunto" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    <SelectItem value="compra">Compra de propiedad</SelectItem>
                                                    <SelectItem value="venta">Venta de propiedad</SelectItem>
                                                    <SelectItem value="alquiler">Alquiler</SelectItem>
                                                    <SelectItem value="tasacion">Tasación</SelectItem>
                                                    <SelectItem value="informacion">Solicitud de información</SelectItem>
                                                    <SelectItem value="otro">Otro</SelectItem>
                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <FormField
                                control={form.control}
                                name="contactPreference"
                                render={({ field }) => (
                                    <FormItem className="space-y-3">
                                        <FormLabel>Preferencia de contacto</FormLabel>
                                        <FormControl>
                                            <RadioGroup
                                                onValueChange={field.onChange}
                                                defaultValue={field.value}
                                                className="flex flex-col space-y-1 sm:flex-row sm:space-y-0 sm:space-x-6"
                                            >
                                                <FormItem className="flex items-center space-x-3 space-y-0">
                                                    <FormControl>
                                                        <RadioGroupItem value="email" />
                                                    </FormControl>
                                                    <FormLabel className="font-normal cursor-pointer">Email</FormLabel>
                                                </FormItem>
                                                <FormItem className="flex items-center space-x-3 space-y-0">
                                                    <FormControl>
                                                        <RadioGroupItem value="phone" />
                                                    </FormControl>
                                                    <FormLabel className="font-normal cursor-pointer">Teléfono</FormLabel>
                                                </FormItem>
                                                <FormItem className="flex items-center space-x-3 space-y-0">
                                                    <FormControl>
                                                        <RadioGroupItem value="whatsapp" />
                                                    </FormControl>
                                                    <FormLabel className="font-normal cursor-pointer">WhatsApp</FormLabel>
                                                </FormItem>
                                            </RadioGroup>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="message"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Mensaje</FormLabel>
                                        <FormControl>
                                            <Textarea
                                                placeholder="Escribe tu mensaje aquí..."
                                                className="min-h-[120px] border-primary/20"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <Button
                                type="submit"
                                className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        Enviando...
                                    </>
                                ) : (
                                    <>
                                        <Send className="mr-2 h-4 w-4" />
                                        Enviar mensaje
                                    </>
                                )}
                            </Button>
                        </form>
                    </Form>
                </>
            )}
        </div>
    )
}
