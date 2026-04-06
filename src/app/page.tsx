"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { projects, experiences, dribbbleShots } from "@/data/projects";
import { SectionDivider } from "@/components/VintageElements";
import { VintageIcon } from "@/components/VintageIcons";
import Globe from "@/components/Globe";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

const stagger = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

// Vintage images - no box, floating transparent style
const vintageItems = [
  { src: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=200&h=200&fit=crop", alt: "Vintage camera", rotate: -10 },
  { src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=200&h=200&fit=crop", alt: "Coffee", rotate: 8 },
  { src: "https://images.unsplash.com/photo-1436491865332-7a61a109db05?w=200&h=200&fit=crop", alt: "Airplane travel", rotate: -6 },
  { src: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=200&h=200&fit=crop", alt: "Music guitar", rotate: 12 },
  { src: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=200&h=200&fit=crop", alt: "Art painting", rotate: -8 },
  { src: "https://images.unsplash.com/photo-1524578271613-d550eacf6090?w=200&h=200&fit=crop", alt: "Vintage book", rotate: 5 },
];

const floatingPositions = [
  "top-[12%] left-[5%] lg:left-[8%]",
  "top-[10%] right-[5%] lg:right-[10%]",
  "bottom-[22%] left-[6%] lg:left-[12%]",
  "bottom-[18%] right-[5%] lg:right-[10%]",
  "top-[45%] left-[2%] lg:left-[5%]",
  "top-[40%] right-[2%] lg:right-[6%]",
];

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <>
      {/* =================== HERO =================== */}
      <section
        ref={heroRef}
        className="relative min-h-[100vh] flex items-center justify-center overflow-hidden"
      >
        {/* Floating vintage images - no box, just rounded images */}
        {vintageItems.map((item, i) => (
          <motion.div
            key={item.alt}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 + i * 0.2, duration: 0.8 }}
            className={`absolute ${floatingPositions[i]} hidden md:block`}
          >
            <motion.div
              animate={{ y: [0, -10, 0], rotate: [item.rotate, item.rotate + 3, item.rotate] }}
              transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
              className="hover:scale-110 transition-transform duration-500 cursor-pointer drop-shadow-2xl"
              style={{ rotate: `${item.rotate}deg` }}
            >
              <div className="relative w-20 h-20 lg:w-28 lg:h-28 rounded-2xl overflow-hidden">
                <Image src={item.src} alt={item.alt} fill className="object-cover" sizes="112px" />
              </div>
            </motion.div>
          </motion.div>
        ))}

        {/* Center content */}
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-10 max-w-3xl mx-auto px-6 text-center"
        >
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm font-mono text-warm-brown tracking-widest uppercase mb-6"
          >
            This is Putri
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold text-text-primary leading-[1.1] mb-6"
          >
            <span className="italic text-warm-gold">Product</span> and
            <br />
            <span className="italic text-warm-gold">Visual</span> designer
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="text-lg text-text-secondary max-w-lg mx-auto mb-10 leading-relaxed"
          >
            6+ years shaping B2B payment and invoicing products, fueled by good coffee and a love for making complex things feel simple
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-10 py-4 glass-button rounded-full font-medium text-lg text-warm-brown-light hover:text-warm-gold transition-all duration-300"
            >
              Check out my works
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="mt-12 flex justify-center"
          >
            <Globe />
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-6 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] font-mono text-text-muted tracking-widest uppercase">
              Scroll to explore
            </span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-text-muted" strokeWidth="2">
              <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
            </svg>
          </div>
        </motion.div>
      </section>

      <SectionDivider />

      {/* =================== FEATURED PROJECTS =================== */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <motion.div {...fadeUp} className="mb-12">
          <span className="text-sm font-mono text-warm-brown tracking-widest uppercase">
            Selected Work
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-text-primary mt-2">
            Projects I&apos;ve worked on
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.slug}
              {...stagger}
              transition={{ delay: i * 0.15, duration: 0.5 }}
            >
              <Link href={`/projects/${project.slug}`} className="group block">
                <div className="glass-card rounded-xl overflow-hidden hover:-translate-y-2 transition-all duration-300 warm-glow">
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
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/60 to-transparent" />
                    <div className="absolute top-4 left-4 px-3 py-1 glass rounded-full text-xs font-mono text-warm-brown-light">
                      {project.category}
                    </div>
                    <div className="absolute top-4 right-4 px-3 py-1 glass rounded-full text-xs font-mono text-text-muted">
                      {project.year}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-serif font-bold text-text-primary group-hover:text-warm-gold transition-colors mb-2 line-clamp-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed mb-4">
                      {project.description}
                    </p>
                    <div className="flex items-center gap-2 text-sm font-medium text-warm-brown">
                      <span>View Case Study</span>
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

      <SectionDivider />

      {/* =================== EXPERIENCE (vertical timeline) =================== */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <motion.div {...fadeUp} className="mb-12">
          <span className="text-sm font-mono text-warm-brown tracking-widest uppercase">
            Experience
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-text-primary mt-2">
            Where I&apos;ve been working
          </h2>
        </motion.div>

        <div className="space-y-0">
          {experiences.map((exp, i) => (
            <motion.div
              key={`${exp.company}-${exp.period}`}
              {...stagger}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative pl-12 pb-12 border-l border-glass-border last:pb-0"
            >
              {/* Timeline icon */}
              <div className="absolute left-[-17px] top-0 w-8 h-8 rounded-full bg-dark-surface border border-glass-border flex items-center justify-center group-hover:border-warm-brown/40 transition-colors">
                <VintageIcon type={exp.icon} />
              </div>

              <div className="glass-card rounded-xl p-6 hover:-translate-y-1 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                  <h3 className="text-lg font-serif font-bold text-text-primary">
                    {exp.role} - {exp.company}
                  </h3>
                </div>
                <p className="text-sm font-mono text-warm-gold mb-3">
                  {exp.period} | {exp.location}
                </p>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <SectionDivider />

      {/* =================== DESIGN EXPLORATIONS (DRIBBBLE) =================== */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <motion.div {...fadeUp} className="mb-12">
          <span className="text-sm font-mono text-warm-brown tracking-widest uppercase">
            Playground
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-text-primary mt-2">
            Design explorations
          </h2>
          <p className="text-text-secondary mt-3 max-w-xl">
            Side projects and visual experiments from my Dribbble.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {dribbbleShots.map((shot, i) => (
            <motion.div
              key={shot.title}
              {...stagger}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              <a href={shot.url} target="_blank" rel="noopener noreferrer" className="group block">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden glass-card hover:-translate-y-1 transition-all duration-300">
                  <Image
                    src={shot.image}
                    alt={shot.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, 20vw"
                  />
                  <div className="absolute inset-0 bg-dark-bg/0 group-hover:bg-dark-bg/50 transition-colors duration-300 flex items-end">
                    <div className="p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-cream text-xs font-bold">{shot.title}</p>
                    </div>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div {...fadeUp} className="text-center mt-8">
          <a
            href="https://dribbble.com/putrisyrfh"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 glass-button rounded-full text-sm font-medium text-warm-brown-light hover:text-warm-gold transition-all"
          >
            See all on Dribbble
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        </motion.div>
      </section>

      <SectionDivider />

      {/* =================== CONTACT CTA =================== */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <motion.div
          {...fadeUp}
          className="glass-card rounded-2xl p-10 md:p-16 text-center relative overflow-hidden warm-glow"
        >
          <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-warm-brown/20" />
          <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-warm-brown/20" />
          <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-warm-brown/20" />
          <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-warm-brown/20" />

          <span className="text-sm font-mono text-warm-brown tracking-widest uppercase">
            Let&apos;s Connect
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-text-primary mt-4 mb-6">
            Got a project in mind?
          </h2>
          <p className="text-text-secondary max-w-lg mx-auto mb-8 leading-relaxed">
            Whether it&apos;s a new product, a redesign, or just a creative conversation,
            I&apos;m always open to new adventures.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:putrisyarifah12@gmail.com"
              className="px-8 py-3 glass-button rounded-full font-medium text-warm-brown-light hover:text-warm-gold transition-all"
            >
              Send Me a Message
            </a>
            <a
              href="https://wa.me/6285813133021"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 glass-button rounded-full font-medium text-warm-brown-light hover:text-warm-gold transition-all"
            >
              WhatsApp Me
            </a>
          </div>

          <div className="flex justify-center gap-6 mt-8">
            <a href="mailto:putrisyarifah12@gmail.com" className="text-text-muted hover:text-warm-brown-light transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/putrist/" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-warm-brown-light transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="https://dribbble.com/putrisyrfh" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-warm-brown-light transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"/><path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"/><path d="M8.56 2.75c4.37 6 6 12.42 6.84 20.68"/></svg>
            </a>
            <a href="https://wa.me/6285813133021" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-warm-brown-light transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
            </a>
          </div>
        </motion.div>
      </section>
    </>
  );
}
