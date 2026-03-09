"use client";

import { Github, Linkedin, Twitter, Mail, Download } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-12 border-t border-white/5 bg-black">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
                    <div>
                        <Link href="/" className="text-2xl font-bold gradient-text">Naimisha Suguru</Link>
                        <p className="text-white/40 mt-2 text-sm uppercase tracking-widest font-medium">AI Engineer | Full-Stack Developer</p>
                    </div>

                    <div className="flex items-center gap-6">
                        <Link href="https://github.com/naimishasuguru" className="text-white/40 hover:text-white transition-colors">
                            <Github className="w-5 h-5" />
                        </Link>
                        <Link href="https://linkedin.com/in/naimisha-suguru-254b93355" className="text-white/40 hover:text-blue-500 transition-colors">
                            <Linkedin className="w-5 h-5" />
                        </Link>
                        <Link href="#" className="text-white/40 hover:text-accent transition-colors">
                            <Twitter className="w-5 h-5" />
                        </Link>
                        <Link href="mailto:naimisha.suguru@gmail.com" className="text-white/40 hover:text-primary transition-colors">
                            <Mail className="w-5 h-5" />
                        </Link>
                    </div>

                    <a
                        href="/naimisha-cv.pdf"
                        download="Naimisha_CV.pdf"
                        className="flex items-center gap-2 px-6 py-2 rounded-full border border-white/10 text-white/60 text-sm hover:bg-white/5 transition-all cursor-pointer"
                    >
                        <Download className="w-4 h-4" />
                        Download Resume
                    </a>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-white/20 text-xs">
                    <p>© {currentYear} Naimisha Suguru. All rights reserved.</p>
                    <div className="flex gap-8">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
