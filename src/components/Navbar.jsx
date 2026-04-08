import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#profile' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Internships', href: '#internships' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive('#' + entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    navLinks.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-[#080c14]/90 backdrop-blur-lg border-b border-white/5 shadow-xl shadow-black/20' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.a
          href="#profile"
          className="text-xl font-extrabold tracking-tight text-white flex items-center gap-2"
          whileHover={{ scale: 1.03 }}
        >
          <span className="w-8 h-8 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center text-sm font-black shadow-lg">
            OB
          </span>
          <span>
            Om <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Borekar</span>
          </span>
        </motion.a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              whileHover={{ scale: 1.05 }}
              className={`relative px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                active === link.href
                  ? 'text-white bg-white/10'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {link.name}
              {active === link.href && (
                <motion.span
                  layoutId="nav-indicator"
                  className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-purple-400"
                />
              )}
            </motion.a>
          ))}
          <a
            href="#contact"
            className="ml-3 px-5 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-sm font-bold rounded-full transition-all duration-300 shadow-md shadow-purple-900/40 hover:scale-105"
          >
            Hire Me
          </a>
        </nav>

        {/* Hamburger */}
        <button
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden bg-[#080c14]/95 backdrop-blur-lg border-b border-white/5 overflow-hidden"
          >
            <ul className="flex flex-col px-6 py-4 gap-1">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                      active === link.href
                        ? 'text-white bg-purple-900/40 border border-purple-700/40'
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center px-4 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-sm font-bold rounded-xl transition"
                >
                  Hire Me
                </a>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}