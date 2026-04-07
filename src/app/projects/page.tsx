"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { projects } from "@/data/projects";
import { SectionDivider } from "@/components/VintageElements";

const categories = [
  "All",
  ...Array.from(new Set(projects.map((p) => p.category))),
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function ProjectsPage() {
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-8">
        <motion.div {...fadeUp}>
          <span className="text-sm font-mono text-accent-brown tracking-widest uppercase">
            Portfolio
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-text-primary mt-2 mb-4">
            All Projects
          </h1>
          <p className="text-text-secondary max-w-xl leading-relaxed">
            A collection of projects I&apos;ve worked on throughout my career, from B2B payment flows to mobile app redesigns.
          </p>
        </motion.div>

        <motion.div {...fadeUp} className="flex flex-wrap gap-3 mt-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filter === cat
                  ? "bg-accent-brown text-white"
                  : "bg-white border border-accent-brown/15 text-text-secondary hover:text-accent-brown hover:border-accent-brown/30"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>
      </section>

      <SectionDivider />

      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filtered.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              layout
            >
              <Link href={`/projects/${project.slug}`} className="group block">
                <div className="bg-white shadow-sm border border-accent-brown/8 rounded-xl overflow-hidden hover:-translate-y-2 transition-all duration-300 warm-glow">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <motion.div
                      className="absolute inset-0"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Image
                        src={project.thumbnail}
                        alt={project.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-t from-white/60 to-transparent" />
                    <div className="absolute top-4 left-4 px-3 py-1 bg-white/80 backdrop-blur-sm rounded-full text-xs font-mono text-accent-brown">
                      {project.category}
                    </div>
                    <div className="absolute top-4 right-4 px-3 py-1 bg-white/80 backdrop-blur-sm rounded-full text-xs font-mono text-text-muted">
                      {project.year}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-serif font-bold text-text-primary group-hover:text-accent-brown-dark transition-colors mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tools.map((tool) => (
                        <span
                          key={tool}
                          className="px-2 py-1 text-xs font-mono bg-white/80 backdrop-blur-sm rounded text-accent-brown"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 text-sm font-medium text-accent-brown">
                      <span>Read Case Study</span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:translate-x-1 transition-transform">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
