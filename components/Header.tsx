'use client'

import Link from "next/link"

import { BsBorderWidth, BsTelephone } from "react-icons/bs";

import { useState } from "react";
import { NavBar } from "@/components/NavBar";




export function Header() {

    const [openMobileMenu, setOpenMobileMenu] = useState(false)

    return (
        <div className="container mx-auto my-5">
            <div className="flex items-center justify-between px-5 md:px-0">
                <Link href="/">
                    <h1 className="font-medium"> IMD Inmobiliaria</h1>
                </Link>
                <BsBorderWidth className="block text-2xl md:hidden " onClick={() => setOpenMobileMenu(!openMobileMenu)
                } />

                <NavBar openMobileMenu={openMobileMenu} />

                <div className="flex items-center gap-2 md:gap-5">
                    <Link href={'tel:34343434'} className="flex items-center gap-4 cursor-pointer">
                        <BsTelephone />
                        <span className="hidden md:block"> 23243234208 </span>
                    </Link>

                </div>

            </div>

        </div>
    )
}