"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

const education = [
    {
        degree: "Master of Science – Computer Science",
        school: "University of Central Missouri",
        year: "2025",
        details: "Specialization in AI and Distributed Systems."
    },
    {
        degree: "Bachelor of Technology",
        school: "JNTU Hyderabad",
        year: "2021",
        details: "Foundational studies in Computer Science and Engineering."
    }
];

export default function Education() {
    return (
        <section id="education" className="py-24 bg-black/50">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Academic <span className="gradient-text">Foundation</span></h2>
                    <p className="text-white/60">My educational journey and certifications.</p>
                </motion.div>

                <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
                    {education.map((edu, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="glass p-8 hover:neon-border transition-all group"
                        >
                            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                                <GraduationCap className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold mb-2 text-white">{edu.degree}</h3>
                            <p className="text-accent font-medium mb-4">{edu.school}</p>
                            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-white/40 w-fit mb-6">
                                <Award className="w-4 h-4 text-purple-500" />
                                <span>Class of {edu.year}</span>
                            </div>
                            <p className="text-white/60 text-sm">{edu.details}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
