"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Sparkles, Utensils, ShoppingBag } from "lucide-react";
import Link from "next/link";

const projects = [
    {
        title: "Ad Copy Generator",
        description: "AI tool for generating high-converting social media ads using GPT-4 and DALL·E. Simplifies marketing workflows with automated creative generation.",
        icon: <Sparkles className="w-8 h-8" />,
        tech: ["Angular", "Spring Boot", "Firebase", "AWS", "OpenAI API"],
        github: "#",
        color: "from-purple-500/20 to-blue-500/20"
    },
    {
        title: "Smart Meal Generator",
        description: "AI application generating personalized meal plans based on dietary preferences and health goals using GPT-4. Integrates user authentication and tracking.",
        icon: <Utensils className="w-8 h-8" />,
        tech: ["React.js", "Node.js", "Firebase Auth", "AWS", "GPT-4"],
        github: "#",
        color: "from-green-500/20 to-emerald-500/20"
    },
    {
        title: "Snow-Mow Solutions",
        description: "Marketplace platform connecting customers with snow removal and lawn care services. Real-time scheduling and secure payment processing.",
        icon: <ShoppingBag className="w-8 h-8" />,
        tech: ["React.js", "Node.js", "MongoDB", "Stripe API"],
        github: "#",
        color: "from-blue-500/20 to-cyan-500/20"
    }
];

export default function Projects() {
    return (
        <section id="projects" className="py-24 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured <span className="gradient-text">Projects</span></h2>
                    <p className="text-white/60">Innovative solutions built using cutting-edge technologies.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group relative h-full flex flex-col glass overflow-hidden hover:neon-border transition-all duration-500"
                        >
                            <div className={`h-48 flex items-center justify-center bg-gradient-to-br ${project.color} group-hover:scale-105 transition-transform duration-500`}>
                                <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md text-white border border-white/20 group-hover:rotate-12 transition-transform">
                                    {project.icon}
                                </div>
                            </div>

                            <div className="p-8 flex flex-col flex-grow">
                                <h3 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors">{project.title}</h3>
                                <p className="text-white/60 text-sm mb-6 line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                                    {project.tech.map((t, tIdx) => (
                                        <span key={tIdx} className="text-[10px] uppercase tracking-wider font-bold text-white/40 border border-white/5 bg-white/5 px-2 py-1 rounded">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4">
                                    <Link
                                        href={project.github}
                                        className="flex-1 py-2 flex items-center justify-center gap-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-sm font-medium"
                                    >
                                        <Github className="w-4 h-4" />
                                        Code
                                    </Link>
                                    <button className="flex-1 py-2 flex items-center justify-center gap-2 rounded-lg bg-primary/20 border border-primary/20 hover:bg-primary/30 transition-colors text-primary text-sm font-medium">
                                        <ExternalLink className="w-4 h-4" />
                                        Demo
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
