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

// Sticker-style vintage images - no frame
const vintageItems = [
  { src: "/images/vintage-camera.png", alt: "Vintage camera", rotate: -10, w: 120, h: 100 },
  { src: "/images/vintage-coffee.png", alt: "Coffee", rotate: 8, w: 100, h: 100 },
  { src: "/images/vintage-travel.png", alt: "Travel", rotate: -6, w: 130, h: 130 },
  { src: "/images/vintage-cassette.png", alt: "Music cassette", rotate: 12, w: 110, h: 80 },
  { src: "/images/vintage-books.png", alt: "Books", rotate: -8, w: 120, h: 120 },
  { src: "/images/vintage-tulips.png", alt: "Tulips", rotate: 5, w: 90, h: 130 },
];

const floatingPositions = [
  "top-[14%] left-[4%] lg:left-[7%]",
  "top-[12%] right-[4%] lg:right-[8%]",
  "bottom-[24%] left-[5%] lg:left-[10%]",
  "bottom-[20%] right-[4%] lg:right-[8%]",
  "top-[48%] left-[1%] lg:left-[4%]",
  "top-[42%] right-[1%] lg:right-[5%]",
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
        className="relative min-h-[100vh] flex items-center justify-center overflow-hidden hero-bg"
      >
        {/* Floating vintage sticker images - no frame, no white bg */}
        {vintageItems.map((item, i) => (
          <motion.div
            key={item.alt}
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 + i * 0.15, duration: 0.7 }}
            className={`absolute ${floatingPositions[i]} hidden md:block z-10`}
          >
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [item.rotate, item.rotate + 3, item.rotate],
              }}
              transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
              className="hover:scale-110 transition-transform duration-500 cursor-pointer"
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={item.w}
                height={item.h}
                className="object-contain drop-shadow-xl"
                style={{ transform: `rotate(${item.rotate}deg)` }}
              />
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
            className="text-sm font-mono text-accent-sage font-semibold tracking-widest uppercase mb-6"
          >
            This is Putri
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-[family-name:var(--font-display)] text-text-primary leading-[1.1] mb-6"
          >
            <span className="italic text-accent-sage">Product</span> and
            <br />
            <span className="italic text-accent-sage">Visual</span> designer
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
              className="inline-flex items-center gap-2 px-10 py-4 bg-accent-brown text-white rounded-full font-medium text-lg hover:bg-accent-brown-dark transition-all duration-300 shadow-lg"
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
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
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
          <span className="text-sm font-mono text-accent-brown tracking-widest uppercase">
            Selected Work
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-text-primary mt-2">
            Projects I&apos;ve worked on
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div key={project.slug} {...stagger} transition={{ delay: i * 0.15, duration: 0.5 }}>
              <Link href={`/projects/${project.slug}`} className="group block">
                <div className="bg-white rounded-xl overflow-hidden hover:-translate-y-2 transition-all duration-300 shadow-sm hover:shadow-lg border border-accent-brown/8">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <motion.div className="absolute inset-0" whileHover={{ scale: 1.05 }} transition={{ duration: 0.5 }}>
                      <Image src={project.thumbnail} alt={project.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                    </motion.div>
                    <div className="absolute top-4 left-4 px-3 py-1 bg-white/80 backdrop-blur-sm rounded-full text-xs font-mono text-accent-brown">
                      {project.category}
                    </div>
                    <div className="absolute top-4 right-4 px-3 py-1 bg-white/80 backdrop-blur-sm rounded-full text-xs font-mono text-text-muted">
                      {project.year}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-serif font-bold text-text-primary group-hover:text-accent-brown transition-colors mb-2 line-clamp-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed mb-4">
                      {project.description}
                    </p>
                    <div className="flex items-center gap-2 text-sm font-medium text-accent-brown">
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

      {/* =================== EXPERIENCE =================== */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <motion.div {...fadeUp} className="mb-12">
          <span className="text-sm font-mono text-accent-brown tracking-widest uppercase">
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
              className="group relative pl-12 pb-12 border-l border-accent-brown/15 last:pb-0"
            >
              <div className="absolute left-[-17px] top-0 w-8 h-8 rounded-full bg-bg-page border-2 border-accent-brown/20 flex items-center justify-center group-hover:border-accent-brown/50 transition-colors">
                <VintageIcon type={exp.icon} />
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm hover:-translate-y-1 transition-all duration-300 border border-accent-brown/8">
                <h3 className="text-lg font-serif font-bold text-text-primary">
                  {exp.role} - {exp.company}
                </h3>
                <p className="text-sm font-mono text-accent-brown mt-1 mb-3">
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

      {/* =================== DRIBBBLE EXPLORATIONS =================== */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <motion.div {...fadeUp} className="mb-12">
          <span className="text-sm font-mono text-accent-brown tracking-widest uppercase">
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
            <motion.div key={shot.title} {...stagger} transition={{ delay: i * 0.08, duration: 0.5 }}>
              <a href={shot.url} target="_blank" rel="noopener noreferrer" className="group block">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-sm hover:-translate-y-1 transition-all duration-300 border border-accent-brown/8">
                  <Image src={shot.image} alt={shot.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" sizes="(max-width: 768px) 50vw, 20vw" />
                  <div className="absolute inset-0 bg-text-primary/0 group-hover:bg-text-primary/40 transition-colors duration-300 flex items-end">
                    <div className="p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-white text-xs font-bold">{shot.title}</p>
                    </div>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div {...fadeUp} className="text-center mt-8">
          <a href="https://dribbble.com/putrisyrfh" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-accent-brown text-white rounded-full text-sm font-medium hover:bg-accent-brown-dark transition-all">
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
          className="bg-white rounded-2xl p-10 md:p-16 text-center relative overflow-hidden shadow-sm border border-accent-brown/8"
        >
          <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-accent-brown/15" />
          <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-accent-brown/15" />
          <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-accent-brown/15" />
          <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-accent-brown/15" />

          <span className="text-sm font-mono text-accent-brown tracking-widest uppercase">
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
            <a href="mailto:putrisyarifah12@gmail.com" className="px-8 py-3 bg-accent-brown text-white rounded-full font-medium hover:bg-accent-brown-dark transition-all">
              Send Me a Message
            </a>
            <a href="https://wa.me/6285813133021" target="_blank" rel="noopener noreferrer" className="px-8 py-3 border-2 border-accent-brown text-accent-brown rounded-full font-medium hover:bg-accent-brown hover:text-white transition-all">
              WhatsApp Me
            </a>
          </div>

          <div className="flex justify-center gap-6 mt-8">
            <a href="mailto:putrisyarifah12@gmail.com" className="text-text-muted hover:text-accent-brown transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/putrist/" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-accent-brown transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="https://dribbble.com/putrisyrfh" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-accent-brown transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"/><path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"/><path d="M8.56 2.75c4.37 6 6 12.42 6.84 20.68"/></svg>
            </a>
            <a href="https://wa.me/6285813133021" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-accent-brown transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
            </a>
          </div>
        </motion.div>
      </section>
    </>
  );
}
