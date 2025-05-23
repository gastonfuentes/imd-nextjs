import React from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card'
import Image from 'next/image'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { Button } from '../ui/button'
import Link from 'next/link'
import placeholder from '@/app/images/image.png';

export const ServiciosCard = ({ title, description, image, items }: { title: string, description: string, image: string, items: string[] }) => {
    return (
        <Card className="bg-primary text-sidebar-primary-foreground overflow-hidden pt-0">
            <div className="relative h-64">
                <Image
                    width={600}
                    height={400}
                    src={image || placeholder}
                    alt="Servicios de imd"
                    className="w-full h-full object-cover"
                />
                {/* <div className="absolute inset-0 bg-primary/40 flex items-center justify-center">
                    <Building className="h-20 w-20 text-secondary" />
                </div> */}
            </div>
            <CardHeader>
                <CardTitle className="text-2xl">{title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <p className="text-primary-foreground">
                    {description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                    {items.map((item, index) => (
                        <div key={index} className="flex items-start">
                            <CheckCircle className="h-5 w-5 mr-2 text-accent flex-shrink-0" />
                            <p className="text-sm">{item}</p>
                        </div>
                    ))}
                </div>
            </CardContent>
            <CardFooter>
                <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90" asChild>
                    <Link href="/contacto">
                        Contactanos
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    )
}
