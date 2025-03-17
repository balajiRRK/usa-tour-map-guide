'use client'

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"

export const Navbar = () => {
    const pathName = usePathname();

    return (
        // <nav className="flex items-center justify-between p-4 bg-stone-600">
        <nav className="flex items-center justify-between p-4 bg-transparent absolute top-0 left-0 w-full z-10">

            <Link href="/" className="">
                <Image
                    src="/travellogo.png"
                    alt="Logo"
                    width={60}
                    height={60}
                    className="cursor-pointer"
                />
            </Link>

            <div className="flex space-x-4 mr-20">
                <Link
                    href="/"
                    className={`relative [text-shadow:_0_4px_4px_rgb(0_0_0_/_0.8)] ${
                        pathName === "/" ? "text-orange-500 after:w-full" : "text-white after:w-0"
                    } opacity-90 font-semibold text-[25px] mr-10 transition duration-300 hover:after:w-full after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-orange-500 after:transition-all after:duration-300`}
                >
                    Home
                </Link>
                <Link
                    href="/explore"
                    className={`relative [text-shadow:_0_4px_4px_rgb(0_0_0_/_0.8)] ${
                        pathName === "/explore" ? "text-orange-500 after:w-full" : "text-white after:w-0"
                    } opacity-90 font-semibold text-[25px] mr-40 transition duration-300 hover:after:w-full after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-white after:transition-all after:duration-300`}
                >
                    Explore
                </Link>
            </div>
        </nav>
    )
}