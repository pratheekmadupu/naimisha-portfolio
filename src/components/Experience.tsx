"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
    {
        title: "Software Engineer",
        company: "Microgig Inc",
        period: "2025 – Present",
        description: "AI microservices development and RAG pipeline implementation.",
        highlights: [
            "Developed AI microservices using FastAPI",
            "Implemented RAG pipelines using LangChain",
            "Built vector search systems using FAISS & MongoDB Atlas",
            "Integrated OpenAI APIs and containerized services using Docker",
            "Deployed on AWS cloud infrastructure"
        ]
    },
    {
        title: "Custom Software Engineer",
        company: "Accenture",
        period: "2021 – 2023",
        description: "Scalable enterprise applications and ML logistics models.",
        highlights: [
            "Built scalable React.js applications",
            "Developed backend systems using Django & PostgreSQL",
            "Implemented ML logistics optimization models using Python & Pandas",
            "Integrated RabbitMQ for asynchronous processing",
            "Deployed applications on AWS Elastic Beanstalk"
        ]
    }
];

export default function Experience() {
    return (
        <section id="experience" className="py-24 bg-black/30">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Work <span className="gradient-text">History</span></h2>
                    <p className="text-white/60">Professional journey in software engineering and AI.</p>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    {experiences.map((exp, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 }}
                            className="relative pl-8 pb-12 last:pb-0 group"
                        >
                            {/* Timeline Line */}
                            {idx !== experiences.length - 1 && (
                                <div className="absolute left-[11px] top-8 bottom-0 w-[2px] bg-gradient-to-b from-primary/50 to-transparent group-hover:from-primary transition-colors"></div>
                            )}

                            {/* Timeline Dot */}
                            <div className="absolute left-0 top-1 w-6 h-6 rounded-full border-2 border-primary bg-black flex items-center justify-center p-1 z-10">
                                <div className="w-full h-full bg-primary rounded-full animate-pulse"></div>
                            </div>

                            <div className="glass p-8 group-hover:neon-border transition-all duration-300">
                                <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                                    <div>
                                        <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">{exp.title}</h3>
                                        <div className="flex items-center gap-2 text-white/50 font-medium">
                                            <Briefcase className="w-4 h-4 text-accent" />
                                            <span>{exp.company}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-white/60">
                                        <Calendar className="w-4 h-4" />
                                        <span>{exp.period}</span>
                                    </div>
                                </div>
                                <p className="text-white/80 mb-6 italic">{exp.description}</p>
                                <ul className="space-y-3">
                                    {exp.highlights.map((highlight, hIdx) => (
                                        <li key={hIdx} className="flex items-start gap-3 text-white/60 text-sm">
                                            <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0"></div>
                                            {highlight}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
