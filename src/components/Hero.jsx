import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import Profile from '../assets/Profile.jpg';

function useTypewriter(words, speed = 60, pause = 2000) {
  const [displayed, setDisplayed] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let timeout;
    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex + 1));
        setCharIndex(c => c + 1);
      }, speed);
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex - 1));
        setCharIndex(c => c - 1);
      }, speed / 2);
    } else {
      setDeleting(false);
      setWordIndex(i => i + 1);
    }
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, wordIndex, words, speed, pause]);

  return displayed;
}

const Counter = ({ end, label }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) { start = end; clearInterval(timer); }
      setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [end]);

  return (
    <div className="text-center space-y-1">
      <p className="text-4xl md:text-5xl font-extrabold text-[#a78bfa]">{count}+</p>
      <p className="text-sm md:text-base font-medium text-gray-300 tracking-wide">{label}</p>
    </div>
  );
};

const socialLinks = [
  { href: 'https://linkedin.com/in/omborekar04', icon: <FaLinkedin />, label: 'LinkedIn' },
  { href: 'https://github.com/omborekar', icon: <FaGithub />, label: 'GitHub' },
  { href: 'mailto:om.borekar.sae.comp@gmail.com', icon: <FaEnvelope />, label: 'Email' },
];

export default function Hero() {
  const roles = useTypewriter(
    ['Full Stack Developer', 'AI/ML Enthusiast', 'Open Source Builder', 'Cloud Practitioner'],
    70
  );

  return (
    <section
      id="profile"
      className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center px-6 md:px-16 xl:px-28 py-24 bg-[#080c14] text-white gap-12 lg:gap-16 overflow-hidden"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: 'linear-gradient(#7c3aed 1px, transparent 1px), linear-gradient(90deg, #7c3aed 1px, transparent 1px)', backgroundSize: '60px 60px' }}
      />
      {/* Glow blobs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-purple-700 rounded-full blur-[120px] opacity-20 pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-indigo-700 rounded-full blur-[140px] opacity-15 pointer-events-none" />

      {/* Intro Text */}
      <motion.div
        className="order-2 lg:order-1 w-full lg:w-1/2 text-center lg:text-left space-y-6 relative z-10"
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <motion.span
          className="inline-block text-xs uppercase tracking-[0.25em] text-purple-400 bg-purple-900/30 border border-purple-700/40 px-4 py-1.5 rounded-full"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Available for Opportunities
        </motion.span>

        <motion.h1
          className="text-4xl sm:text-5xl xl:text-6xl font-extrabold leading-tight tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Hi, I'm{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
            Om Borekar
          </span>
        </motion.h1>

        <motion.div
          className="flex items-center justify-center lg:justify-start gap-2 text-lg sm:text-xl font-semibold text-purple-300 min-h-[2rem]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <span>{roles}</span>
          <span className="w-[2px] h-6 bg-purple-400 animate-pulse" />
        </motion.div>

        <motion.p
          className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-xl mx-auto lg:mx-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Final-year Computer Engineering student at Sinhgad Academy of Engineering, Pune.
          I architect and ship production-ready full-stack applications — from AI-powered platforms using
          MERN & Spring Boot to cloud-deployed ML pipelines on Azure. Backed by internship experience at{' '}
          <span className="text-purple-300 font-medium">Microsoft AI Azure</span>,{' '}
          <span className="text-purple-300 font-medium">EY GDS</span>, and{' '}
          <span className="text-purple-300 font-medium">Shell</span>.
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center lg:justify-start gap-4 pt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <a
            href="#contact"
            className="px-7 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold rounded-full transition-all duration-300 shadow-lg shadow-purple-900/40 hover:scale-105"
          >
            Hire Me
          </a>
          <a
            href="https://drive.google.com/file/d/1MR-XPyGbrCiUW9xAlQMQIxXEQqxigTC9/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3 border border-purple-500/60 text-purple-300 hover:bg-purple-800/40 hover:border-purple-400 font-semibold rounded-full transition-all duration-300 hover:scale-105"
          >
            Download CV
          </a>
        </motion.div>

        <motion.div
          className="flex justify-center lg:justify-start gap-4 pt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          {socialLinks.map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-purple-700/50 text-purple-400 hover:text-white hover:bg-purple-700 hover:border-purple-600 transition-all duration-300 text-lg"
            >
              {icon}
            </a>
          ))}
        </motion.div>
      </motion.div>

      {/* Profile Image */}
      <motion.div
        className="order-1 lg:order-2 relative flex-shrink-0 z-10"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="relative"
          style={{ width: '376px', maxWidth: '90vw' }}
        >
          {/* Decorative ring */}
          <div
            className="absolute -inset-3 rounded-[32px] border-2 border-purple-600/30"
            style={{ borderRadius: '32px' }}
          />
          <div className="absolute -inset-1 bg-gradient-to-tr from-purple-700 to-indigo-600 rounded-[28px] opacity-60 blur-sm" />
          <div
            className="relative overflow-hidden bg-gradient-to-br from-purple-900 to-indigo-900"
            style={{ width: '100%', aspectRatio: '376 / 477', borderRadius: '24px' }}
          >
            <img
              src={Profile}
              alt="Om Borekar"
              className="w-full h-full object-cover object-top"
            />
          </div>
          {/* Badge */}
          <motion.div
            className="absolute -bottom-4 -right-4 bg-[#1a1f35] border border-purple-700/50 rounded-2xl px-4 py-2 shadow-xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1 }}
          >
            <p className="text-xs text-gray-400">CGPA</p>
            <p className="text-xl font-extrabold text-purple-400">7.95</p>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Counters */}
      <motion.div
        className="order-3 w-full flex flex-row justify-center gap-12 lg:flex-col lg:w-auto lg:gap-10 relative z-10"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <Counter end={6} label="Projects Shipped" />
        <Counter end={3} label="Internships" />
      </motion.div>
    </section>
  );
}