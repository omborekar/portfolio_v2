import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import profileTall from '../assets/tall-profile.jpg';
import profileSquare from '../assets/profile.jpg';

function useTypewriter(text, speed = 50, pause = 1500) {
  const [displayed, setDisplayed] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timeout;
    if (index < text.length) {
      timeout = setTimeout(() => {
        setDisplayed((prev) => prev + text.charAt(index));
        setIndex(index + 1);
      }, speed);
    } else {
      timeout = setTimeout(() => {
        setDisplayed('');
        setIndex(0);
      }, pause);
    }
    return () => clearTimeout(timeout);
  }, [index, text, speed, pause]);

  return displayed;
}

const Counter = ({ end, label }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 10);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(Math.floor(start));
    }, 10);
    return () => clearInterval(timer);
  }, [end]);

  return (
    <div className="text-center space-y-1">
      <p className="text-5xl md:text-6xl font-extrabold text-purple-500">{count}+</p>
      <p className="text-lg md:text-xl font-medium text-white">{label}</p>
    </div>
  );
};

export default function Hero() {
  const subtitle = useTypewriter("AI Enthusiast • Full Stack Developer • Open Source Learner", 50);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="min-h-screen flex flex-col lg:flex-row items-center justify-center px-6 md:px-20 py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white gap-12 lg:gap-10">
      
      {/* Profile Image */}
      <motion.div
        className="order-1 lg:order-2 relative w-44 h-44 lg:w-64 lg:h-96"
        initial={{ y: 0 }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="absolute inset-0 bg-purple-800 rounded-full lg:rounded-[48%/52%] opacity-30 blur-2xl z-0" />
        <div className="relative w-full h-full overflow-hidden shadow-2xl rounded-full lg:rounded-[48%/52%] z-10 bg-purple-700 p-1.5">
          <img
            src={isMobile ? profileSquare : profileTall}
            alt="Om Borekar"
            className="w-full h-full object-cover object-top rounded-full lg:rounded-[48%/52%]"
          />
        </div>
      </motion.div>

      {/* Counters */}
      <motion.div
        className="order-2 lg:order-3 w-full flex flex-row justify-center gap-12 lg:flex-col lg:w-1/4 lg:text-center lg:gap-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Counter end={6} label="Projects Completed" />
        <Counter end={2} label="Internships" />
      </motion.div>

      {/* Intro Text */}
      <motion.div
        className="order-3 lg:order-1 w-full lg:w-1/2 text-center lg:text-left space-y-6"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.p
          className="text-sm uppercase text-purple-400 tracking-widest"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Hello Welcome
        </motion.p>
        <motion.h1
          className="text-4xl md:text-5xl font-bold leading-tight"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          I&apos;m <span className="text-purple-500">Om Borekar</span><br />
          Final Year Computer Engineering Student
        </motion.h1>

        <motion.h2
          className="text-lg text-purple-400 font-semibold tracking-wide min-h-[1.5rem]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {subtitle}
        </motion.h2>

        <motion.p
          className="text-lg text-gray-300 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          I craft AI-powered tools and dynamic web apps using the MERN stack. Recently worked on a Resume Analyzer (Gemini API), Digital Wallet System, and Bus Reservation App. Experienced with real-world projects through internships at EY GDS and Shell.
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center lg:justify-start gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <a href="#contact" className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-md transition cursor-pointer">
            Hire Me
          </a>
          <a
  href="https://drive.google.com/uc?export=download&id=1TIT9utK1s_5B7MMIiiOGtjXWGckt6syP"
  download
  className="px-6 py-3 border border-purple-600 text-purple-400 hover:bg-purple-800 rounded-md transition cursor-pointer"
>
  Download CV
</a>

        </motion.div>

        <motion.div
          className="flex justify-center lg:justify-start gap-5 pt-4 text-2xl text-purple-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <a href="https://linkedin.com/in/omborekar04" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://github.com/omborekar" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="mailto:om.borekar.sae.comp@gmail.com"><FaEnvelope /></a>
        </motion.div>
      </motion.div>
    </section>
  );
}
