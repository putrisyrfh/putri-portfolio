"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import { projects } from "@/data/projects";
import { SectionDivider } from "@/components/VintageElements";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function ProjectDetail() {
  const params = useParams();
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return (
      <div className="max-w-6xl mx-auto px-6 py-32 text-center">
        <h1 className="text-4xl font-serif font-bold text-text-primary mb-4">
          Project not found
        </h1>
        <Link href="/projects" className="text-warm-brown hover:underline">
          Back to Projects
        </Link>
      </div>
    );
  }

  const currentIndex = projects.findIndex((p) => p.slug === params.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <>
      <div className="max-w-6xl mx-auto px-6 pt-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center gap-2 text-sm font-mono text-text-muted"
        >
          <Link href="/projects" className="hover:text-warm-brown-light transition-colors">
            Projects
          </Link>
          <span>/</span>
          <span className="text-warm-brown">{project.title}</span>
        </motion.div>
      </div>

      <section className="max-w-6xl mx-auto px-6 py-12">
        <motion.div {...fadeUp}>
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3 py-1 glass rounded-full text-xs font-mono text-warm-brown-light">
              {project.category}
            </span>
            <span className="text-sm font-mono text-text-muted">
              {project.year}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-text-primary mb-6">
            {project.title}
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl leading-relaxed">
            {project.description}
          </p>
        </motion.div>

        <motion.div
          {...fadeUp}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
        >
          {[
            { label: "Role", value: project.role },
            { label: "Company", value: project.company },
            { label: "Duration", value: project.duration },
            { label: "Tools", value: project.tools.join(", ") },
          ].map((item) => (
            <div key={item.label} className="glass-card rounded-xl p-4">
              <p className="text-xs font-mono text-warm-brown uppercase tracking-widest mb-2">
                {item.label}
              </p>
              <p className="text-sm text-text-primary font-medium">{item.value}</p>
            </div>
          ))}
        </motion.div>
      </section>

      <motion.div {...fadeUp} className="max-w-6xl mx-auto px-6">
        <div className="relative aspect-video rounded-xl overflow-hidden glass-card">
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </motion.div>

      <SectionDivider />

      {/* Notion link for full case study */}
      <section className="max-w-3xl mx-auto px-6 py-16 text-center">
        <motion.div {...fadeUp}>
          <h2 className="text-2xl font-serif font-bold text-text-primary mb-4">
            Full Case Study
          </h2>
          <p className="text-text-secondary mb-8 leading-relaxed">
            The detailed case study for this project is available on Notion with the complete design process, research findings, and all project visuals.
          </p>
          <a
            href={project.notionUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 glass-button rounded-full font-medium text-warm-brown-light hover:text-warm-gold transition-all"
          >
            Read Full Case Study on Notion
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        </motion.div>
      </section>

      <SectionDivider />

      <section className="max-w-6xl mx-auto px-6 py-16">
        <motion.div {...fadeUp} className="text-center">
          <span className="text-sm font-mono text-warm-brown tracking-widest uppercase">
            Next Project
          </span>
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-text-primary mt-2 mb-8">
            {nextProject.title}
          </h2>
          <Link
            href={`/projects/${nextProject.slug}`}
            className="inline-flex items-center gap-2 px-8 py-3 glass-button rounded-full font-medium text-warm-brown-light hover:text-warm-gold transition-all"
          >
            View Project
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>
      </section>
    </>
  );
}
