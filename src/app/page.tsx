"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { projects } from "@/data/projects";
import { SectionDivider } from "@/components/VintageElements";
import Globe from "@/components/Globe";
import {
  VintageCoffee,
  VintageCamera,
  VintageYarn,
  VintageBook,
  VintageVinyl,
  VintageCompass,
} from "@/components/VintageIllustrations";

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

const experiences = [
  {
    company: "TechCorp Studio",
    role: "Senior Product Designer",
    period: "2023 — Present",
    description:
      "Leading product design for consumer-facing applications, driving design system development and mentoring junior designers.",
  },
  {
    company: "PixelWave Agency",
    role: "Product Designer",
    period: "2021 — 2023",
    description:
      "Designed end-to-end digital products for clients across fintech, healthcare, and e-commerce industries.",
  },
  {
    company: "CreativeNest",
    role: "UI/UX Designer",
    period: "2019 — 2021",
    description:
      "Crafted user interfaces and experiences for web and mobile applications, from wireframes to high-fidelity prototypes.",
  },
];

const explorations = [
  {
    title: "Vintage Travel Posters",
    category: "Visual Design",
    image: "/images/placeholder-project.svg",
  },
  {
    title: "Coffee Shop Branding",
    category: "Brand Identity",
    image: "/images/placeholder-project.svg",
  },
  {
    title: "Analog Film UI Kit",
    category: "Design System",
    image: "/images/placeholder-project.svg",
  },
  {
    title: "Knitting Pattern App",
    category: "Mobile Design",
    image: "/images/placeholder-project.svg",
  },
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
      {/* =================== HERO SECTION =================== */}
      <section
        ref={heroRef}
        className="relative min-h-[100vh] flex items-center justify-center overflow-hidden"
      >
        {/* Subtle paper texture bg */}
        <div className="absolute inset-0 opacity-[0.03]">
          <svg viewBox="0 0 1200 800" fill="none" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
            {Array.from({ length: 15 }, (_, i) => (
              <line key={`h${i}`} x1="0" y1={i * 55} x2="1200" y2={i * 55} stroke="currentColor" strokeWidth="0.5" />
            ))}
            {Array.from({ length: 22 }, (_, i) => (
              <line key={`v${i}`} x1={i * 55} y1="0" x2={i * 55} y2="800" stroke="currentColor" strokeWidth="0.5" />
            ))}
          </svg>
        </div>

        {/* Floating vintage illustrations - positioned like reference */}
        {/* Top left */}
        <motion.div
          initial={{ opacity: 0, x: -40, rotate: -15 }}
          animate={{ opacity: 1, x: 0, rotate: -8 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="absolute top-[12%] left-[5%] lg:left-[8%] hidden md:block"
        >
          <div className="postcard p-2 -rotate-6 hover:rotate-0 transition-transform duration-500 shadow-md">
            <VintageCoffee />
          </div>
        </motion.div>

        {/* Top right */}
        <motion.div
          initial={{ opacity: 0, x: 40, rotate: 15 }}
          animate={{ opacity: 1, x: 0, rotate: 6 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="absolute top-[10%] right-[5%] lg:right-[10%] hidden md:block"
        >
          <div className="postcard p-2 rotate-6 hover:rotate-0 transition-transform duration-500 shadow-md">
            <VintageCamera />
          </div>
        </motion.div>

        {/* Bottom left */}
        <motion.div
          initial={{ opacity: 0, x: -40, rotate: -10 }}
          animate={{ opacity: 1, x: 0, rotate: 5 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="absolute bottom-[18%] left-[6%] lg:left-[12%] hidden md:block"
        >
          <div className="postcard p-2 rotate-3 hover:rotate-0 transition-transform duration-500 shadow-md">
            <VintageYarn />
          </div>
        </motion.div>

        {/* Bottom right */}
        <motion.div
          initial={{ opacity: 0, x: 40, rotate: 10 }}
          animate={{ opacity: 1, x: 0, rotate: -5 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="absolute bottom-[15%] right-[5%] lg:right-[10%] hidden md:block"
        >
          <div className="postcard p-2 -rotate-4 hover:rotate-0 transition-transform duration-500 shadow-md">
            <VintageVinyl />
          </div>
        </motion.div>

        {/* Mid left */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="absolute top-[45%] left-[2%] lg:left-[5%] hidden lg:block"
        >
          <div className="postcard p-2 -rotate-3 hover:rotate-0 transition-transform duration-500 shadow-md">
            <VintageBook />
          </div>
        </motion.div>

        {/* Mid right */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute top-[40%] right-[2%] lg:right-[6%] hidden lg:block"
        >
          <div className="postcard p-2 rotate-5 hover:rotate-0 transition-transform duration-500 shadow-md">
            <VintageCompass />
          </div>
        </motion.div>

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
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold text-ink leading-[1.1] mb-6"
          >
            <span className="italic text-warm-brown">Product</span> and
            <br />
            <span className="italic text-warm-brown">Visual</span> designer
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="text-lg text-ink-light max-w-lg mx-auto mb-10 leading-relaxed"
          >
            crafting warm, thoughtful digital experiences with 6+ years of care
            and a whole lot of coffee
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-10 py-4 bg-warm-brown text-cream rounded-full font-medium text-lg hover:bg-warm-brown-dark transition-colors shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
            >
              Check out my works
            </Link>
          </motion.div>

          {/* Globe below CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="mt-12 flex justify-center"
          >
            <Globe />
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-6 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] font-mono text-warm-brown-light tracking-widest uppercase">
              Scroll to explore
            </span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-warm-brown-light" strokeWidth="2">
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
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-ink mt-2">
            Projects I&apos;m proud of
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.slice(0, 4).map((project, i) => (
            <motion.div
              key={project.slug}
              {...stagger}
              transition={{ delay: i * 0.15, duration: 0.5 }}
            >
              <Link href={`/projects/${project.slug}`} className="group block">
                <div className="postcard overflow-hidden hover:-translate-y-2 transition-all duration-300">
                  <div className="relative aspect-[4/3] bg-cream-dark overflow-hidden">
                    <Image
                      src={project.thumbnail}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Category badge */}
                    <div className="absolute top-4 left-4 px-3 py-1 bg-paper/90 backdrop-blur-sm rounded-full text-xs font-mono text-warm-brown">
                      {project.category}
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-serif font-bold text-ink group-hover:text-warm-brown transition-colors">
                        {project.title}
                      </h3>
                      <span className="text-sm font-mono text-warm-brown-light">
                        {project.year}
                      </span>
                    </div>
                    <p className="text-sm text-ink-light leading-relaxed">
                      {project.description}
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-sm font-medium text-warm-brown">
                      <span>View Case Study</span>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="group-hover:translate-x-1 transition-transform"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div {...fadeUp} className="text-center mt-12">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-8 py-3 border-2 border-warm-brown text-warm-brown rounded-full font-medium hover:bg-warm-brown hover:text-cream transition-colors"
          >
            See All Projects
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>
      </section>

      <SectionDivider />

      {/* =================== EXPERIENCE =================== */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <motion.div {...fadeUp} className="mb-12">
          <span className="text-sm font-mono text-warm-brown tracking-widest uppercase">
            Experience
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-ink mt-2">
            Where I&apos;ve been crafting
          </h2>
        </motion.div>

        <div className="space-y-0">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              {...stagger}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="group relative pl-8 pb-12 border-l-2 border-warm-brown-light/20 last:pb-0"
            >
              {/* Timeline dot */}
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-paper border-2 border-warm-brown group-hover:bg-warm-brown transition-colors" />

              <div className="postcard p-6 hover:-translate-y-1 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                  <h3 className="text-xl font-serif font-bold text-ink">
                    {exp.company}
                  </h3>
                  <span className="text-sm font-mono text-warm-brown-light">
                    {exp.period}
                  </span>
                </div>
                <p className="text-warm-brown font-medium mb-2">{exp.role}</p>
                <p className="text-sm text-ink-light leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <SectionDivider />

      {/* =================== DESIGN EXPLORATIONS =================== */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <motion.div {...fadeUp} className="mb-12">
          <span className="text-sm font-mono text-warm-brown tracking-widest uppercase">
            Playground
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-ink mt-2">
            Design explorations
          </h2>
          <p className="text-ink-light mt-3 max-w-xl">
            Side projects, visual experiments, and creative explorations that
            keep my design muscles sharp and my curiosity alive.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {explorations.map((item, i) => (
            <motion.div
              key={item.title}
              {...stagger}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-square rounded-lg overflow-hidden vintage-border hover:-translate-y-1 transition-all duration-300">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/40 transition-colors duration-300 flex items-end">
                  <div className="p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-cream text-sm font-bold">{item.title}</p>
                    <p className="text-cream/80 text-xs">{item.category}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <SectionDivider />

      {/* =================== CONTACT CTA =================== */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <motion.div
          {...fadeUp}
          className="postcard p-10 md:p-16 text-center relative overflow-hidden"
        >
          {/* Decorative corners */}
          <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-warm-brown-light/30" />
          <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-warm-brown-light/30" />
          <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-warm-brown-light/30" />
          <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-warm-brown-light/30" />

          <motion.span
            {...stagger}
            className="text-sm font-mono text-warm-brown tracking-widest uppercase"
          >
            Let&apos;s Connect
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-ink mt-4 mb-6">
            Got a project in mind?
          </h2>
          <p className="text-ink-light max-w-lg mx-auto mb-8 leading-relaxed">
            Whether it&apos;s a brand new product, a redesign, or just a
            creative conversation — I&apos;m always open to new adventures.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:hello@putri.design"
              className="px-8 py-3 bg-warm-brown text-cream rounded-full font-medium hover:bg-warm-brown-dark transition-colors"
            >
              Send Me a Message
            </a>
            <a
              href="https://drive.google.com/file/d/1COqXmbVOjKdPLA39qRR6zY2ONPV2KT8v/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border-2 border-warm-brown text-warm-brown rounded-full font-medium hover:bg-warm-brown hover:text-cream transition-colors"
            >
              Download Resume
            </a>
          </div>
        </motion.div>
      </section>
    </>
  );
}
