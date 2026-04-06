"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { SectionDivider } from "@/components/VintageElements";

const RESUME_URL =
  "https://drive.google.com/file/d/1COqXmbVOjKdPLA39qRR6zY2ONPV2KT8v/view?usp=sharing";

const floatingTitles = [
  "Product Designer",
  "Web Designer",
  "Mobile Designer",
  "Traveler",
  "Coffee Lover",
  "Photographer",
];

// Vintage hero floating images (like Sandra reference)
const heroImages = [
  { src: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=180&h=180&fit=crop", alt: "Vintage camera", pos: "top-[15%] left-[8%]", rotate: -10 },
  { src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=180&h=180&fit=crop", alt: "Coffee", pos: "top-[12%] right-[10%]", rotate: 8 },
  { src: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=180&h=180&fit=crop", alt: "Guitar", pos: "bottom-[20%] right-[8%]", rotate: 12 },
  { src: "https://images.unsplash.com/photo-1524578271613-d550eacf6090?w=180&h=180&fit=crop", alt: "Books", pos: "bottom-[22%] left-[10%]", rotate: -6 },
  { src: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=180&h=180&fit=crop", alt: "Yarn", pos: "top-[45%] left-[3%]", rotate: 5 },
  { src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=180&h=180&fit=crop", alt: "Travel", pos: "top-[40%] right-[4%]", rotate: -7 },
];

const designValues = [
  {
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=120&h=120&fit=crop",
    title: "Collaboration & Communication",
    description:
      "I believe that the best designs emerge from collaboration. I work closely with clients, developers, and other stakeholders to ensure that every project is a collective success.",
  },
  {
    image: "https://images.unsplash.com/photo-1524578271613-d550eacf6090?w=120&h=120&fit=crop",
    title: "Flexible & Adaptable",
    description:
      "I believe as UI/UX Designer, I have to flexible in every situation and adaptable with workflow, teams, and stakeholders.",
  },
  {
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=120&h=120&fit=crop",
    title: "Attention to detail",
    description:
      "Every pixel matters. I focus on the finer details that elevate a good design to a great one, ensuring a polished and professional end product.",
  },
  {
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=120&h=120&fit=crop",
    title: "Inclusivity & Accessibility",
    description:
      "I am passionate about designing for a diverse audience. My goal is to create accessible experiences that everyone can enjoy, regardless of their abilities or backgrounds.",
  },
];

export default function AboutPage() {
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % floatingTitles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* =================== HERO =================== */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden hero-bg">
        {/* Floating vintage images */}
        {heroImages.map((item, i) => (
          <motion.div
            key={item.alt}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 + i * 0.15, duration: 0.7 }}
            className={`absolute ${item.pos} hidden md:block`}
          >
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
              className="glass-card rounded-xl overflow-hidden p-2"
              style={{ rotate: `${item.rotate}deg` }}
            >
              <div className="relative w-20 h-20 lg:w-24 lg:h-24 rounded-lg overflow-hidden">
                <Image src={item.src} alt={item.alt} fill className="object-cover" sizes="96px" />
              </div>
            </motion.div>
          </motion.div>
        ))}

        <div className="max-w-6xl mx-auto px-6 w-full text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-sm font-mono text-accent-gold/70 tracking-widest uppercase">
              About Me
            </span>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-text-primary mt-6 mb-4">
              I&apos;m Putri
            </h1>

            <div className="h-16 sm:h-20 flex items-center justify-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.p
                  key={titleIndex}
                  initial={{ opacity: 0, y: 30, rotateX: -90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  exit={{ opacity: 0, y: -30, rotateX: 90 }}
                  transition={{ duration: 0.5 }}
                  className="text-2xl sm:text-3xl lg:text-4xl font-serif italic text-accent-gold"
                >
                  {floatingTitles[titleIndex]}
                </motion.p>
              </AnimatePresence>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-text-secondary max-w-2xl mx-auto mt-6 leading-relaxed"
            >
              A product designer with 6+ years of experience in B2B payment and invoicing.
              I find inspiration in the everyday, from freshly brewed coffee to the rhythm of a good playlist.
              I believe great digital experiences should feel genuinely human.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 glass-button rounded-full font-medium text-accent-cream hover:text-accent-gold transition-all"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download Resume
              </a>
              <a
                href="mailto:putrisyarifah12@gmail.com"
                className="inline-flex items-center gap-2 px-8 py-3 glass-button rounded-full font-medium text-accent-cream hover:text-accent-gold transition-all"
              >
                Get in Touch
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <SectionDivider />

      {/* =================== MY STORY =================== */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-mono text-accent-gold/70 tracking-widest uppercase">
            My Story
          </span>
          <h2 className="text-3xl font-serif font-bold text-text-primary mt-2 mb-6">
            A little bit about me
          </h2>
          <div className="space-y-4 text-text-secondary leading-relaxed">
            <p>
              Hi! I&apos;m Putri, a product designer based in Bogor, Indonesia.
              I&apos;ve spent the last 6+ years designing digital products, mostly in the B2B payment and invoicing space.
              The last 2 years have been focused on payment gateway products, where I&apos;ve been solving complex transaction flows and making them feel simple.
            </p>
            <p>
              My journey into design started through photography. Capturing moments taught me about composition, light, and storytelling.
              That naturally evolved into designing interfaces that guide people through meaningful experiences.
            </p>
            <p>
              When I&apos;m not pushing pixels, you&apos;ll find me exploring new coffee shops, knitting, reading a good book, or planning my next trip.
              These hobbies aren&apos;t separate from my work. Every trip teaches me something new about how people interact with the world, and that perspective shows up in my designs.
            </p>
          </div>
        </motion.div>
      </section>

      <SectionDivider />

      {/* =================== DESIGN VALUES (with real vintage images) =================== */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-sm font-mono text-accent-gold/70 tracking-widest uppercase">
            Philosophy
          </span>
          <h2 className="text-3xl font-serif font-bold text-text-primary mt-2">
            How I approach design
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {designValues.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass-card rounded-xl p-6 hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="relative w-16 h-16 rounded-xl overflow-hidden mb-4">
                <Image src={value.image} alt={value.title} fill className="object-cover" sizes="64px" />
              </div>
              <h3 className="text-lg font-serif font-bold italic text-text-primary mb-2">
                {value.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <SectionDivider />

      {/* =================== TOOLS =================== */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-sm font-mono text-accent-gold/70 tracking-widest uppercase">
            Toolkit
          </span>
          <h2 className="text-3xl font-serif font-bold text-text-primary mt-2">
            Tools of the trade
          </h2>
        </motion.div>

        <div className="flex flex-wrap gap-3">
          {[
            "Figma", "Sketch", "Adobe XD", "Framer", "Webflow", "Principle",
            "After Effects", "Illustrator", "Photoshop", "Miro", "FigJam",
            "Maze", "Hotjar", "Notion", "Linear",
          ].map((tool, i) => (
            <motion.span
              key={tool}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="px-4 py-2 glass-card rounded-lg text-sm font-mono text-accent-gold/70 hover:text-accent-gold hover:border-accent-gold/30 transition-all cursor-default"
            >
              {tool}
            </motion.span>
          ))}
        </div>
      </section>

      <SectionDivider />

      {/* =================== CTA =================== */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-2xl p-10 md:p-16 text-center relative overflow-hidden warm-glow"
        >
          <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-accent-gold/20" />
          <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-accent-gold/20" />
          <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-accent-gold/20" />
          <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-accent-gold/20" />

          <h2 className="text-3xl md:text-4xl font-serif font-bold text-text-primary mt-4 mb-6">
            Like what you see?
          </h2>
          <p className="text-text-secondary max-w-lg mx-auto mb-8 leading-relaxed">
            I&apos;m always excited to work on projects that challenge me and make a real impact.
            Let&apos;s grab a virtual coffee and talk about your next big idea.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:putrisyarifah12@gmail.com"
              className="px-8 py-3 glass-button rounded-full font-medium text-accent-cream hover:text-accent-gold transition-all"
            >
              Let&apos;s Chat
            </a>
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 glass-button rounded-full font-medium text-accent-cream hover:text-accent-gold transition-all"
            >
              Download Resume
            </a>
          </div>
        </motion.div>
      </section>
    </>
  );
}
