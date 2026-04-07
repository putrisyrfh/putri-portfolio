"use client";

import { motion } from "framer-motion";

const RESUME_URL =
  "https://drive.google.com/file/d/1COqXmbVOjKdPLA39qRR6zY2ONPV2KT8v/view?usp=sharing";

export default function Footer() {
  return (
    <footer className="bg-bg-footer border-t border-accent-brown/10">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-12">
          <div className="max-w-md">
            <motion.h3 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-serif font-bold text-text-primary mb-4">
              Let&apos;s create something great together
            </motion.h3>
            <p className="text-text-secondary mb-6">
              Got a project in mind? I&apos;d love to hear about it. Drop me a line and let&apos;s make it happen.
            </p>
            <a href="mailto:putrisyarifah12@gmail.com" className="inline-block px-6 py-3 bg-accent-brown text-white rounded-full font-medium hover:bg-accent-brown-dark transition-all">
              Say Hello
            </a>
          </div>
          <div className="flex flex-col sm:flex-row gap-8">
            <div>
              <h4 className="text-sm font-mono text-accent-brown uppercase tracking-widest mb-4">Reach Me</h4>
              <ul className="space-y-2 text-text-secondary">
                <li><a href="mailto:putrisyarifah12@gmail.com" className="hover:text-accent-brown transition-colors">putrisyarifah12@gmail.com</a></li>
                <li><a href="https://www.linkedin.com/in/putrist/" target="_blank" rel="noopener noreferrer" className="hover:text-accent-brown transition-colors">LinkedIn</a></li>
                <li><a href="https://dribbble.com/putrisyrfh" target="_blank" rel="noopener noreferrer" className="hover:text-accent-brown transition-colors">Dribbble</a></li>
                <li><a href="https://wa.me/6285813133021" target="_blank" rel="noopener noreferrer" className="hover:text-accent-brown transition-colors">WhatsApp</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-mono text-accent-brown uppercase tracking-widest mb-4">Quick Links</h4>
              <ul className="space-y-2 text-text-secondary">
                <li><a href="/projects" className="hover:text-accent-brown transition-colors">Projects</a></li>
                <li><a href="/about" className="hover:text-accent-brown transition-colors">About</a></li>
                <li><a href={RESUME_URL} target="_blank" rel="noopener noreferrer" className="hover:text-accent-brown transition-colors">Download Resume</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-accent-brown/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-text-muted">&copy; {new Date().getFullYear()} Putri S. Crafted with care from Bogor, Indonesia.</p>
          <div className="flex items-center gap-2 text-sm text-accent-brown">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" /><circle cx="12" cy="9" r="2.5" /></svg>
            <span>Bogor, Indonesia</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
