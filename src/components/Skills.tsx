"use client";

import { motion } from "framer-motion";
import {
    Terminal,
    Layers,
    Server,
    Database,
    Cloud,
    Code2,
    Cpu,
    MessageSquareShare
} from "lucide-react";

const skillCategories = [
    {
        title: "AI & LLM Technologies",
        icon: <Cpu className="w-5 h-5" />,
        skills: ["LangChain", "OpenAI API", "Azure OpenAI", "RAG Pipelines", "Embeddings", "Semantic Search", "Vector Databases (FAISS, MongoDB Atlas)"]
    },
    {
        title: "Programming",
        icon: <Code2 className="w-5 h-5" />,
        skills: ["Python", "JavaScript", "TypeScript", "Java"]
    },
    {
        title: "Backend Development",
        icon: <Server className="w-5 h-5" />,
        skills: ["FastAPI", "Django", "Node.js", "Spring Boot", "REST APIs"]
    },
    {
        title: "Frontend Development",
        icon: <Terminal className="w-5 h-5" />,
        skills: ["React.js", "Next.js", "HTML5", "CSS3", "Bootstrap"]
    },
    {
        title: "Cloud & DevOps",
        icon: <Cloud className="w-5 h-5" />,
        skills: ["AWS (EC2, S3, IAM, RDS)", "Docker", "CI/CD", "GitHub Actions"]
    },
    {
        title: "Infrastructure & Data",
        icon: <Database className="w-5 h-5" />,
        skills: ["PostgreSQL", "MongoDB", "Redis", "Vector DBs"]
    },
    {
        title: "Messaging & Integration",
        icon: <MessageSquareShare className="w-5 h-5" />,
        skills: ["RabbitMQ", "Apache Kafka", "Celery", "Redis Queue"]
    }
];

export default function Skills() {
    return (
        <section id="skills" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Technical <span className="gradient-text">Mastery</span></h2>
                    <p className="text-white/60">Comprehensive skill set across AI, Backend, and Cloud ecosystems.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="glass p-8 hover:neon-border transition-all duration-300 group"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                    {category.icon}
                                </div>
                                <h3 className="text-xl font-bold">{category.title}</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, sIdx) => (
                                    <span
                                        key={sIdx}
                                        className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white/70 hover:text-white hover:border-accent/50 transition-all"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
