'use client';

import { Share2 } from "lucide-react";
import { Button } from "./ui/button";

import dynamic from "next/dynamic";
const ShareModal = dynamic(() => import('@/components/ShareModal'), { ssr: false });

import { useState } from "react";

interface PropertySharedProps {
    propertyUrl: string;
    title: string;
}

export default function PropertyShared({ propertyUrl, title }: PropertySharedProps) {

    const [modalOpen, setModalOpen] = useState(false);

    return (
        <>
            
        <ShareModal open={modalOpen} onClose={() => setModalOpen(false)} url={propertyUrl} title={title} />
        <div className="mt-4 flex justify-center">
             <Button variant="outline" className="w-full" onClick={() => setModalOpen(true)}>
                  <Share2 className="h-4 w-4 mr-2" />
                               Compartir propiedad
             </Button>
        </div>
        </>
    )
}