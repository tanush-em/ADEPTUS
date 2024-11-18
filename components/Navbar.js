"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import LoadingBar from 'react-top-loading-bar';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const Navbar = () => {
    const [progress, setProgress] = useState(0)
    const [open, setOpen] = useState(false);
    const pathname = usePathname()
    const router = useRouter();

    const isActive = (path) => {
        return pathname === path ? "relative text-primary font-semibold after:absolute after:bottom-[-5px] after:left-0 after:h-[2px] after:w-full after:bg-primary after:content-['']" : "";
    };

    const handleNavigation = (path) => {
        router.push(path);
        setOpen(false); 
    };

    useEffect(() => {
        setProgress(20)
        setTimeout(() => {
            setProgress(40)
        }, 350);
        setTimeout(() => {
            setProgress(100)
        }, 700);
    }, [pathname]);

    useEffect(() => {
        setTimeout(() => {
            setProgress(0)
        }, 50);
    }, []);

    return (
        <nav className="p-4 bg-background/50 sticky top-0 backdrop-blur border-b z-10">
            <LoadingBar
                color='#933ce6'
                progress={progress}
                onLoaderFinished={() => setProgress(0)}
            />

            <div className="container mx-auto flex justify-between items-center">
                <Link href={"/"}>
                    <div className="text-3xl font-bold flex items-center gap-2">
                        <Image
                            src="/logo.png"
                            alt="Adeptus-Logo"
                            width={60}
                            height={60}
                        />
                        <span className="font-extrabold">ADEPTUS</span>
                    </div>
                </Link>

                <div className="hidden md:flex space-x-6 items-center">
                    <Link href="/" className={`hover:scale-105 transition-transform duration-300 text-lg ${isActive("/")}`}>
                        Home
                    </Link>
                    <Link href="/about" className={`hover:scale-105 transition-transform duration-300 text-lg ${isActive("/about")}`}>
                        About
                    </Link>
                    <Link href="/article" className={`hover:scale-105 transition-transform duration-300 text-lg ${isActive("/article")}`}>
                        Articles
                    </Link>
                    <Link href="/event" className={`hover:scale-105 transition-transform duration-300 text-lg ${isActive("/event")}`}>
                        Events
                    </Link>
                    <Link href="/team" className={`hover:scale-105 transition-transform duration-300 text-lg ${isActive("/team")}`}>
                        Our Team
                    </Link>
                    <Link href="/contact" className={`hover:scale-105 transition-transform duration-300 text-lg ${isActive("/contact")}`}>
                        Contact
                    </Link>
                </div>

                <div className="md:hidden">
                    <Sheet open={open} onOpenChange={setOpen}>
                        <SheetTrigger>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                        </SheetTrigger>
                        <SheetContent>
                            <SheetHeader>
                                <SheetTitle className="font-bold my-4 flex items-center gap-2">
                                    <Image
                                        src="/logo.png"
                                        alt="Logo"
                                        width={30}
                                        height={30}
                                    />
                                    ADEPTUS
                                </SheetTitle>
                                <SheetDescription>
                                    <div className="flex flex-col gap-6">
                                        <div onClick={() => handleNavigation('/')}>Home</div>
                                        <div onClick={() => handleNavigation('/about')}>About Us</div>
                                        <div onClick={() => handleNavigation('/article')}>Articles</div>
                                        <div onClick={() => handleNavigation('/event')}>Events</div>
                                        <div onClick={() => handleNavigation('/team')}>Our Team</div>
                                        <div onClick={() => handleNavigation('/contact')}>Contact</div>
                                    </div>
                                </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
