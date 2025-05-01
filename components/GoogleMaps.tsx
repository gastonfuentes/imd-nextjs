'use client'

import { useEffect, useRef } from "react"
import { Card, /* CardContent */ } from "./ui/card"

import { Loader } from '@googlemaps/js-api-loader'
import { GoogleMaps } from "@/inmuebles/interfaces/inmuebles-response"



interface GoogleMapsProps {
    maps: GoogleMaps
}


export const GoogleMapsCard = ({ maps }: GoogleMapsProps) => {

    const mapRef = useRef<HTMLDivElement>(null)

    useEffect(() => {

        if (!maps.lat || !maps.lng || !maps.zoom) return; // Asegúrate de que los valores existan

        const initMap = async () => {
            const loader = new Loader({
                apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY || "",
                version: "quarterly",
                libraries: ["places"]
            })

            const { Map } = await loader.importLibrary("maps")

            /*  const location = { lat: maps.lat, lng: maps.lng } // Cambia esto por la ubicación deseada */

            const options: google.maps.MapOptions = {
                zoom: maps.zoom,
                center: {
                    lat: maps.lat,
                    lng: maps.lng
                },
                mapId: "map",
                streetViewControl: false,
                fullscreenControl: false,
                mapTypeControl: false,
            }

            const map = new Map(mapRef.current as HTMLElement, options)

            // Cargar la librería de marcadores
            const { AdvancedMarkerElement } = await loader.importLibrary("marker") as google.maps.MarkerLibrary

            new AdvancedMarkerElement({
                position: {
                    lat: maps.lat,
                    lng: maps.lng
                },
                map: map,
                title: maps.address,
            })

        }

        initMap()


    }, [maps.lat, maps.lng, maps.zoom, maps.address]) // Asegúrate de que los valores existan antes de inicializar el mapa


    return (
        <Card ref={mapRef} className="w-full h-96 bg-muted rounded-md">

        </Card>
    )
}
