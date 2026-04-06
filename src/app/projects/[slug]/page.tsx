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

  let numberedCount = 0;

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

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <motion.div {...fadeUp}>
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3 py-1 glass rounded-full text-xs font-mono text-warm-brown-light">
              {project.category}
            </span>
            <span className="text-sm font-mono text-text-muted">{project.year}</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-text-primary mb-6">
            {project.title}
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl leading-relaxed">
            {project.description}
          </p>
        </motion.div>

        <motion.div {...fadeUp} className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
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

      {/* Thumbnail */}
      <motion.div {...fadeUp} className="max-w-6xl mx-auto px-6">
        <div className="relative aspect-video rounded-xl overflow-hidden glass-card">
          <Image src={project.thumbnail} alt={project.title} fill className="object-cover" sizes="100vw" />
        </div>
      </motion.div>

      <SectionDivider />

      {/* Case Study Content */}
      <section className="max-w-3xl mx-auto px-6 py-8">
        {project.sections.map((section, i) => {
          if (section.type === "header") {
            return (
              <motion.h2
                key={i}
                {...fadeUp}
                className="text-2xl md:text-3xl font-serif font-bold text-text-primary mt-12 mb-6"
              >
                {section.content}
              </motion.h2>
            );
          }
          if (section.type === "subheader") {
            return (
              <motion.h3
                key={i}
                {...fadeUp}
                className="text-lg md:text-xl font-serif font-bold text-warm-brown-light mt-8 mb-4"
              >
                {section.content}
              </motion.h3>
            );
          }
          if (section.type === "text") {
            return (
              <motion.p
                key={i}
                {...fadeUp}
                className="text-text-secondary leading-relaxed mb-4"
              >
                {section.content}
              </motion.p>
            );
          }
          if (section.type === "bullet") {
            return (
              <motion.div key={i} {...fadeUp} className="flex gap-3 mb-3">
                <span className="text-warm-brown mt-1.5 flex-shrink-0">
                  <svg width="8" height="8" viewBox="0 0 8 8"><circle cx="4" cy="4" r="3" fill="currentColor" /></svg>
                </span>
                <p className="text-text-secondary leading-relaxed">{section.content}</p>
              </motion.div>
            );
          }
          if (section.type === "numbered") {
            numberedCount++;
            return (
              <motion.div key={i} {...fadeUp} className="flex gap-3 mb-3">
                <span className="text-warm-brown font-mono text-sm mt-0.5 flex-shrink-0 w-6">
                  {numberedCount}.
                </span>
                <p className="text-text-secondary leading-relaxed">{section.content}</p>
              </motion.div>
            );
          }
          if (section.type === "image" && section.src) {
            return (
              <motion.div key={i} {...fadeUp} className="my-8 rounded-xl overflow-hidden glass-card">
                <div className="relative aspect-video">
                  <Image src={section.src} alt="" fill className="object-contain" sizes="100vw" />
                </div>
              </motion.div>
            );
          }
          if (section.type === "divider") {
            return (
              <div key={i} className="flex items-center gap-4 my-8">
                <div className="flex-1 h-px bg-glass-border" />
                <div className="w-1.5 h-1.5 rounded-full bg-warm-brown/30" />
                <div className="flex-1 h-px bg-glass-border" />
              </div>
            );
          }
          return null;
        })}
      </section>

      <SectionDivider />

      {/* Next Project */}
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
