"use client";

import { motion } from "framer-motion";
import { Brain, Cpu, Globe, Zap } from "lucide-react";

const features = [
    {
        icon: <Brain className="w-6 h-6 text-purple-500" />,
        title: "AI Specialist",
        description: "Expertise in LLMs, RAG pipelines, and semantic search systems."
    },
    {
        icon: <Cpu className="w-6 h-6 text-blue-500" />,
        title: "Full-Stack Dev",
        description: "Building production-ready apps with Python, React, and Node.js."
    },
    {
        icon: <Globe className="w-6 h-6 text-accent" />,
        title: "Cloud Native",
        description: "Deploying scalable AI solutions on AWS using Docker & CI/CD."
    },
    {
        icon: <Zap className="w-6 h-6 text-yellow-500" />,
        title: "Scalable Systems",
        description: "Experience with messaging queues like Kafka and RabbitMQ."
    }
];

export default function About() {
    return (
        <section id="about" className="py-24 bg-black/50">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Passionate about <span className="text-primary">AI Innovation</span>
                        </h2>
                        <p className="text-white/60 mb-6 leading-relaxed">
                            I am an AI Engineer with over 3 years of experience specializing in building intelligent systems that solve complex problems. My focus lies in the intersection of Large Language Models (LLMs) and robust Full-Stack development.
                        </p>
                        <p className="text-white/60 mb-8 leading-relaxed">
                            From architecting RAG pipelines using LangChain to deploying containerized microservices on AWS, I bridge the gap between AI research and production-ready applications. My experience at Microgig Inc and Accenture has equipped me with the skills to build scalable, data-driven solutions.
                        </p>
                        <div className="grid grid-cols-2 gap-6">
                            {features.map((feature, index) => (
                                <div key={index} className="flex flex-col gap-2">
                                    {feature.icon}
                                    <h3 className="font-semibold text-white">{feature.title}</h3>
                                    <p className="text-sm text-white/40">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="aspect-square glass flex items-center justify-center p-8 relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-accent/10 group-hover:opacity-20 transition-opacity"></div>
                            {/* This represents a futuristic visual/avatar placeholder */}
                            <div className="w-full h-full relative">
                                <div className="absolute inset-0 border-2 border-dashed border-white/10 rounded-full animate-spin-slow"></div>
                                <div className="absolute inset-4 border-2 border-primary/20 rounded-full"></div>
                                <div className="absolute inset-12 border-2 border-accent/20 rounded-full"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <Brain className="w-32 h-32 text-white/20" />
                                </div>
                            </div>
                        </div>
                        {/* Experience Badge */}
                        <div className="absolute -bottom-6 -right-6 glass p-6 neon-border">
                            <span className="text-4xl font-bold gradient-text">3+</span>
                            <p className="text-sm text-white/60">Years of<br />Experience</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
