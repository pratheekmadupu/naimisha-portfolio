"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Animated Background Blobs */}
            <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-accent text-sm font-medium mb-6">
                        Available for new opportunities
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                        Hi, I'm <span className="gradient-text">Naimisha Suguru</span>
                    </h1>
                    <h2 className="text-2xl md:text-3xl font-medium text-white/80 mb-8">
                        AI Engineer | LLM & Full-Stack Developer
                    </h2>
                    <p className="max-w-2xl mx-auto text-lg text-white/60 mb-10 leading-relaxed">
                        Building scalable AI systems using LLMs, RAG pipelines, and cloud-native architectures.
                        Based in New Jersey, USA.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            href="#projects"
                            className="px-8 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-all flex items-center gap-2 group"
                        >
                            View Projects
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <a
                            href="/naimisha-cv.pdf"
                            download="Naimisha_CV.pdf"
                            className="px-8 py-3 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-all flex items-center gap-2 cursor-pointer"
                        >
                            <Download className="w-4 h-4" />
                            Download Resume
                        </a>
                        <Link
                            href="#contact"
                            className="px-8 py-3 rounded-full border border-accent/30 text-accent font-medium hover:bg-accent/10 transition-all flex items-center gap-2"
                        >
                            <Mail className="w-4 h-4" />
                            Contact Me
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Hero Particles Replacement / Decorative Elements */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
                <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
                    <div className="w-1 h-2 bg-white/50 rounded-full"></div>
                </div>
            </div>
        </section>
    );
}
