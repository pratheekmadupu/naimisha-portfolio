"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send, MapPin } from "lucide-react";
import Link from "next/link";

export default function Contact() {
    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Let's <span className="gradient-text">Connect</span></h2>
                        <p className="text-white/60 mb-10 text-lg">
                            Have a project in mind or want to discuss AI engineering? I'm always open to new opportunities and collaborations.
                        </p>

                        <div className="space-y-6 mb-12">
                            <div className="flex items-center gap-4 group">
                                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:neon-border transition-all">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-xs text-white/40 uppercase tracking-widest">Email</p>
                                    <Link href="mailto:naimisha.suguru@gmail.com" className="text-white hover:text-accent transition-colors font-medium">naimisha.suguru@gmail.com</Link>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 group">
                                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-blue-500 group-hover:neon-border transition-all">
                                    <Linkedin className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-xs text-white/40 uppercase tracking-widest">LinkedIn</p>
                                    <Link href="https://linkedin.com/in/naimisha-suguru-254b93355" className="text-white hover:text-accent transition-colors font-medium">linkedin.com/in/naimisha-suguru-254b93355</Link>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 group">
                                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:neon-border transition-all">
                                    <Github className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-xs text-white/40 uppercase tracking-widest">GitHub</p>
                                    <Link href="https://github.com/naimishasuguru" className="text-white hover:text-accent transition-colors font-medium">github.com/naimishasuguru</Link>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 group">
                                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-accent group-hover:neon-border transition-all">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-xs text-white/40 uppercase tracking-widest">Location</p>
                                    <p className="text-white font-medium">New Jersey, USA</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass p-8 md:p-12 relative"
                    >
                        <form className="space-y-6 relative z-10">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-white/60">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        placeholder="John Doe"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-all"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-white/60">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder="john@example.com"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-all"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium text-white/60">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    placeholder="Project Inquiry"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-all"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-white/60">Your Message</label>
                                <textarea
                                    id="message"
                                    rows={5}
                                    placeholder="How can I help you?"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-all resize-none"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full py-4 rounded-xl bg-primary text-white font-bold hover:bg-primary/90 transition-all flex items-center justify-center gap-2 group shadow-lg shadow-primary/20"
                            >
                                Send Message
                                <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
