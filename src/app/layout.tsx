import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "Naimisha Suguru | AI Engineer",
  description: "AI Engineer specializing in LLMs, RAG pipelines, and Full-Stack development. Building scalable AI systems with Python, React, and cloud-native architectures.",
  keywords: ["AI Engineer", "LLM Developer", "Full-Stack Developer", "RAG Pipelines", "Naimisha Suguru", "Machine Learning Engineer"],
  authors: [{ name: "Naimisha Suguru" }],
  openGraph: {
    title: "Naimisha Suguru | AI Engineer",
    description: "Building scalable AI systems using LLMs and cloud-native architectures.",
    url: "https://linkedin.com/in/naimisha-suguru-254b93355",
    siteName: "Naimisha Suguru Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${outfit.variable} antialiased selection:bg-primary/20`}>
        {children}
      </body>
    </html>
  );
}
