'use client'

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"

export const Navbar = () => {
    return (
        // <nav className="flex items-center justify-between p-4 bg-stone-600">
        <nav className="flex items-center justify-between p-4 bg-transparent absolute top-0 left-0 w-full z-10">

            <Link href="/" className="ml-60">
                <Image
                    src="/travellogo.png"
                    alt="Logo"
                    width={60}
                    height={60}
                    className="cursor-pointer"
                />
            </Link>

            <div className="flex space-x-4 mr-20">
                <Link href="/" className="[text-shadow:_0_4px_4px_rgb(0_0_0_/_0.8)] text-white opacity-90 font-semibold text-[25px] mr-10">
                    Home
                </Link>
                <Link href="/" className="[text-shadow:_0_4px_4px_rgb(0_0_0_/_0.8)] text-white opacity-90 font-semibold text-[25px] mr-40">
                    Explore
                </Link>
            </div>
        </nav>
    )
}