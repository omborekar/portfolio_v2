import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'TerraSpotter – Smart Plantation Intelligence Platform',
    description:
      'A production-deployed, full-stack environmental platform built with Spring Boot (REST API backend) and React.js (frontend). Enables crowdsourced identification of optimal tree-planting locations through geotagged photo submissions, GPS-based map integration, and AI-driven plant species recommendations. Features community contribution workflows, location validation & rating systems, and tree canopy capacity estimation — built with a scalable SQL Server/MySQL backend and deployed on Vercel.',
    tags: ['Spring Boot', 'React.js', 'SQL Server', 'MySQL', 'REST API', 'Geolocation'],
    github: 'https://github.com/omborekar/TerraSpotter-Mapping-the-Right-Place-to-Plant.git',
    live: 'https://terraspotterfrontend.vercel.app/',
    featured: true,
  },
  {
    title: 'Digital Payment Wallet – Secure MERN Fintech App',
    description:
      'A full-stack fintech web application modeled after real-world digital wallets. Engineered with JWT-based authentication, encrypted fund transfer flows, and real-time transaction ledger. Built on the MERN stack with a RESTful API architecture, featuring user onboarding, wallet balance management, peer-to-peer transfers, and a filterable transaction history dashboard.',
    tags: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'JWT', 'REST API'],
    github: 'https://github.com/omborekar/Digital_Payment_wallet_Clone_By_Om_Borekar.git',
  },
  {
    title: 'BusEase – Dynamic Bus Ticket Reservation System',
    description:
      'A modular bus booking platform built with Node.js and Express, featuring real-time dynamic seat availability rendering using Handlebars.js templating. Includes end-to-end booking flows with SMTP-powered email confirmation, multi-route management, and a clean responsive UI. Designed for rapid deployment by small-to-mid-scale transport operators.',
    tags: ['Node.js', 'Express.js', 'Handlebars.js', 'SMTP', 'JavaScript'],
    github: 'https://github.com/omborekar/BusEase_Bus_reservation_system_in_nodejs_express_html_css_js_using_HBS.git',
  },
  {
    title: 'AI Resume Analyzer – Gemini API-Powered Career Tool',
    description:
      'An intelligent resume analysis tool leveraging Google's Gemini API to parse candidate resumes and job descriptions, delivering actionable, context-aware improvement suggestions. Built with Python and a lightweight HTML/JS frontend, it compares skill alignment, identifies gaps, and generates tailored recommendations — reducing manual HR review effort while improving candidate-role fit.',
    tags: ['Python', 'Gemini API', 'NLP', 'HTML', 'AI/ML'],
    github: 'https://github.com/omborekar/AI_Resume_Analyzer_and_suggestion_using_gemini_API.git',
  },
  {
    title: 'FoodieHub – Full-Stack Restaurant Ordering Platform',
    description:
      'A complete end-to-end food delivery web application built with PHP and MySQL. Implements XML/XSL for structured data rendering, a dynamic cart system, real-time order tracking, and an analytics dashboard powered by Chart.js for restaurant-side performance monitoring. Demonstrates strong backend architecture with MVC separation and relational data modeling.',
    tags: ['PHP', 'MySQL', 'XSLT', 'Chart.js', 'XML'],
    github: 'https://github.com/omborekar/FoodieHub_a_food_delivery_web_application_using_PHP.git',
  },
  {
    title: 'Bulk Certificate Generator – Automated Email Dispatch Tool',
    description:
      'A Python desktop automation application that generates personalized certificates at scale from an Excel data source and dispatches them via SMTP email integration. Built with Flask for the web layer and PyQt5 for a native desktop GUI, it replaces entirely manual certificate workflows — enabling batch generation and delivery for 100+ recipients in under a minute.',
    tags: ['Python', 'Flask', 'PyQt5', 'SMTP', 'Excel Automation'],
    github: 'https://github.com/omborekar/Bulk_Certificate_Generator_with_email_integration_using_python',
  },
];

const slideUp = (i) => ({
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, type: 'spring', stiffness: 60 },
  },
});

export default function Projects() {
  return (
    <section id="projects" className="relative bg-[#080c14] text-gray-300 py-28 px-6 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'linear-gradient(#7c3aed 1px, transparent 1px), linear-gradient(90deg, #7c3aed 1px, transparent 1px)', backgroundSize: '60px 60px' }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="text-xs uppercase tracking-[0.25em] text-purple-400 bg-purple-900/30 border border-purple-700/40 px-4 py-1.5 rounded-full">
            What I've Built
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mt-4">Featured Projects</h2>
        </motion.div>

        <div className="space-y-16">
          {projects.map((proj, i) => (
            <motion.div
              key={proj.title}
              initial="hidden"
              whileInView="visible"
              variants={slideUp(i)}
              viewport={{ once: true }}
              className={`relative border-l-2 border-purple-700/50 pl-8 group ${proj.featured ? 'before:content-[""] before:absolute before:-left-6 before:-top-4 before:w-56 before:h-28 before:bg-purple-700/5 before:rounded-2xl before:pointer-events-none' : ''}`}
            >
              {/* Timeline dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 bg-purple-600 rounded-full ring-4 ring-[#080c14] group-hover:ring-purple-900/60 transition-all" />

              <div className="flex flex-wrap items-center gap-3 mb-2">
                <span className="text-xs text-purple-500 uppercase tracking-widest font-semibold">
                  Project {String(i + 1).padStart(2, '0')}
                </span>
                {proj.featured && (
                  <span className="text-xs font-bold px-2 py-0.5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full">
                    ✦ Featured
                  </span>
                )}
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 leading-snug group-hover:text-purple-300 transition-colors">
                {proj.title}
              </h3>

              <p className="text-gray-400 leading-relaxed mb-5 max-w-3xl text-sm sm:text-base">
                {proj.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {proj.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-purple-900/20 border border-purple-700/40 text-purple-300 px-3 py-1 rounded-full text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 hover:bg-purple-700/30 hover:border-purple-600 text-white text-sm font-medium rounded-full transition-all duration-300"
                >
                  <FaGithub /> GitHub
                </a>
                {proj.live && (
                  <a
                    href={proj.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-sm font-medium rounded-full transition-all duration-300 shadow-lg shadow-purple-900/30"
                  >
                    <FaExternalLinkAlt className="text-xs" /> Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}