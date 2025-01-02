import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Mail, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-background border-t">
            <div className="container mx-auto px-6 py-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                    <div className="space-y-0">
                        <div className="flex items-center gap-2">
                            <Image
                                src="/logo.png"
                                alt="Adeptus Logo"
                                width={60}
                                height={60}
                            />
                            <h2 className="text-3xl font-bold">Adeptus</h2>
                        </div>
                        <p className="px-14 font-semibold text-muted-foreground">
                            A Technical Community.<br />
                            Learn, Grow and Contribute.
                        </p>
                    </div>

                    <div className="ml-10">
                        <h3 className="font-semibold text-xl mb-1">Quick Links</h3>
                        <ul className="space-y-0">
                            <li><Link href="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
                            <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link href="/article" className="text-muted-foreground hover:text-primary transition-colors">Articles</Link></li>
                            <li><Link href="/event" className="text-muted-foreground hover:text-primary transition-colors">Events</Link></li>
                            <li><Link href="/team" className="text-muted-foreground hover:text-primary transition-colors">Our Team</Link></li>
                            <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-2xl mb-4">Connect With Us</h3>
                        <div className="flex space-x-8">
                            <a href="mailto:admn.adeptus@gmail.com" className="text-muted-foreground hover:text-primary transition-colors flex flex-col items-center">
                                <Mail className="h-8 w-8 mb-2" />
                                <p>Mail Us</p>
                            </a>
                            <a href="https://www.linkedin.com/in/adeptus-eec/" className="text-muted-foreground hover:text-primary transition-colors flex flex-col items-center">
                                <Linkedin className="h-8 w-8 mb-2" />
                                <p>LinkedIn</p>
                            </a>
                            <a href="https://www.instagram.com/adeptus_eec/" className="text-muted-foreground hover:text-primary transition-colors flex flex-col items-center">
                                <Instagram className="h-8 w-8 mb-2" />
                                <p>Instagram</p>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t mt-2 pt-2 text-center text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} Adeptus. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;