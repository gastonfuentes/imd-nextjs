"use client";

import { FacebookShareButton, WhatsappShareButton, TwitterShareButton, FacebookIcon, WhatsappIcon, TwitterIcon, EmailShareButton, EmailIcon } from "react-share";
import { X } from "lucide-react";

export default function ShareModal({ open, onClose, url, title }: { open: boolean, onClose: () => void, url: string, title: string }) {
    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-primary/70" onClick={onClose}>
            <div className="bg-white rounded-lg p-6 relative w-80">
                <button className="absolute top-2 right-2" onClick={onClose}>
                    <X />
                </button>
                <h2 className="text-lg font-semibold mb-4">Compartir propiedad</h2>
                <div className="flex justify-around mb-4">
                    <FacebookShareButton url={url} title={title}>
                        <FacebookIcon size={48} round />
                    </FacebookShareButton>
                    <WhatsappShareButton url={url} title={title}>
                        <WhatsappIcon size={48} round />
                    </WhatsappShareButton>
                    <TwitterShareButton url={url} title={title}>
                        <TwitterIcon size={48} round />
                    </TwitterShareButton>
                    <EmailShareButton url={url} subject={title} body={title + " " + url}>
                        <EmailIcon size={48} round />
                    </EmailShareButton>
                </div>
                <button
                    className="w-full mt-2 py-2 border rounded hover:bg-gray-100"
                    onClick={() => {
                        navigator.clipboard.writeText(url);
                        onClose();
                        alert("¡Enlace copiado!");
                    }}
                >
                    Copiar enlace
                </button>
            </div>
        </div>
    );
}