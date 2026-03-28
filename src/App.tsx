/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ArrowUpRight, Menu, X, Instagram, Linkedin, Twitter, Globe } from "lucide-react";
import { useState, useEffect } from "react";

const PROJECTS = [
  {
    id: 1,
    title: "The Vertical Forest",
    location: "Milan, Italy",
    year: "2024",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600",
    description: "A sustainable residential prototype integrating 800 trees and 15,000 plants into the urban fabric."
  },
  {
    id: 2,
    title: "Prism Gallery",
    location: "Tokyo, Japan",
    year: "2023",
    image: "https://images.unsplash.com/photo-1518005020251-58296d8511ff?auto=format&fit=crop&q=80&w=1600",
    description: "A cultural landmark defined by its geometric transparency and adaptive lighting systems."
  },
  {
    id: 3,
    title: "Nexus Hub",
    location: "Berlin, Germany",
    year: "2023",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1600",
    description: "A commercial ecosystem designed for the future of hybrid work and collaborative innovation."
  },
  {
    id: 4,
    title: "The Monolith",
    location: "Reykjavik, Iceland",
    year: "2022",
    image: "https://images.unsplash.com/photo-1449156001935-d2863fb22690?auto=format&fit=crop&q=80&w=1600",
    description: "An institutional structure carved from local basalt, echoing the raw volcanic landscape."
  },
  {
    id: 5,
    title: "Ether Pavilion",
    location: "Venice, Italy",
    year: "2024",
    image: "https://images.unsplash.com/photo-1503387762-592dee582a7b?auto=format&fit=crop&q=80&w=1600",
    description: "An experimental installation exploring the boundaries between digital space and physical presence."
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-black selection:bg-black selection:text-white font-sans">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-sm py-4 border-b border-black/5' : 'py-10'}`}>
        <div className="max-w-[1800px] mx-auto px-8 flex justify-between items-end">
          <div className="flex flex-col">
            <span className="text-2xl font-black uppercase tracking-tighter leading-none">Axiom</span>
            <span className="text-[10px] font-mono uppercase tracking-[0.4em] mt-1 opacity-40">Architectural Studio</span>
          </div>
          
          <div className="hidden md:flex gap-16 items-center">
            {['Projects', 'About', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-[11px] font-bold uppercase tracking-widest hover:opacity-50 transition-opacity"
              >
                {item}
              </a>
            ))}
            <div className="w-8 h-8 bg-black flex items-center justify-center text-white cursor-pointer hover:bg-black/80 transition-colors">
              <Menu size={16} />
            </div>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-40 bg-white flex flex-col justify-center px-8 md:hidden"
        >
          <div className="flex flex-col gap-6">
            {['Projects', 'About', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-6xl font-black uppercase tracking-tighter"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </motion.div>
      )}

      {/* Hero */}
      <header className="pt-64 pb-32 px-8 max-w-[1800px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-[12vw] md:text-[10vw] font-black uppercase leading-[0.8] tracking-tighter mb-12">
            Architecture <br />
            Is Evolution.
          </h1>
          <div className="grid md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-4 text-sm font-bold uppercase tracking-widest flex items-center gap-4">
              <div className="w-12 h-[2px] bg-black" />
              Selected Portfolio 2024
            </div>
            <div className="md:col-span-6 text-xl md:text-2xl font-medium leading-tight text-black/60 max-w-xl">
              We create resilient, adaptive structures that respond to the shifting needs of our planet. Our work is a dialogue between technology and nature.
            </div>
          </div>
        </motion.div>
      </header>

      {/* Linear Vertical Project List - BIG Style */}
      <main id="projects" className="px-8 max-w-[1800px] mx-auto space-y-32 md:space-y-64 pb-64">
        {PROJECTS.map((project, idx) => (
          <motion.section 
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="group"
          >
            <div className="grid md:grid-cols-12 gap-8 mb-8 items-end">
              <div className="md:col-span-8">
                <div className="text-[10px] font-mono uppercase tracking-[0.3em] mb-4 opacity-40">
                  {idx + 1} / {PROJECTS.length} — {project.location}
                </div>
                <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none group-hover:italic transition-all duration-500">
                  {project.title}
                </h2>
              </div>
              <div className="md:col-span-4 md:text-right hidden md:block">
                <div className="text-xs font-bold uppercase tracking-widest mb-2">Year</div>
                <div className="text-2xl font-black">{project.year}</div>
              </div>
            </div>

            <div className="relative aspect-[16/9] overflow-hidden bg-gray-100">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-8 right-8 w-16 h-16 bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 cursor-pointer">
                <ArrowUpRight size={24} />
              </div>
            </div>

            <div className="grid md:grid-cols-12 gap-8 mt-12">
              <div className="md:col-span-4 text-sm font-bold uppercase tracking-widest">
                Project Overview
              </div>
              <div className="md:col-span-6 text-lg md:text-xl text-black/50 leading-relaxed font-medium">
                {project.description}
              </div>
              <div className="md:col-span-2 flex justify-end">
                <button className="text-[10px] font-bold uppercase tracking-widest border-b-2 border-black pb-1 hover:opacity-50 transition-opacity">
                  Full Details
                </button>
              </div>
            </div>
          </motion.section>
        ))}
      </main>

      {/* About Section - Minimalist */}
      <section id="about" className="bg-black text-white py-64 px-8">
        <div className="max-w-[1800px] mx-auto">
          <div className="grid md:grid-cols-12 gap-16">
            <div className="md:col-span-6">
              <div className="text-[10px] font-mono uppercase tracking-[0.4em] mb-12 opacity-40">Our Studio</div>
              <h2 className="text-6xl md:text-[8vw] font-black uppercase leading-[0.8] tracking-tighter mb-16">
                Big Ideas. <br />
                Small <br />
                Footprint.
              </h2>
            </div>
            <div className="md:col-span-6 flex flex-col justify-end">
              <p className="text-2xl md:text-4xl font-medium leading-tight mb-12 text-white/80">
                Based in Copenhagen and New York, Axiom is a multidisciplinary studio focused on the intersection of architecture, urbanism, and research.
              </p>
              <div className="grid grid-cols-2 gap-12">
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-widest mb-4 opacity-40">Contact</div>
                  <div className="text-sm font-bold uppercase tracking-widest">hello@axiom.arch</div>
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-widest mb-4 opacity-40">Press</div>
                  <div className="text-sm font-bold uppercase tracking-widest">press@axiom.arch</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-24 px-8 max-w-[1800px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
          <div>
            <div className="text-2xl font-black uppercase tracking-tighter mb-4">Axiom</div>
            <div className="flex gap-8">
              {['Instagram', 'LinkedIn', 'Twitter'].map(social => (
                <a key={social} href="#" className="text-[10px] font-bold uppercase tracking-widest hover:opacity-50 transition-opacity">{social}</a>
              ))}
            </div>
          </div>
          <div className="text-right">
            <div className="text-[10px] font-mono uppercase tracking-widest opacity-40 mb-2">© 2026 Axiom Architectural Studio</div>
            <div className="text-[10px] font-mono uppercase tracking-widest opacity-40">All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
