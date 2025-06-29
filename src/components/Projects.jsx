import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: 'Digital Payment Wallet System',
    description:
      'A secure MERN stack web app for wallet creation, fund transfers, and transaction history. Includes JWT auth, MongoDB storage, and real-time UI built with React.',
    tags: ['React', 'Node.js', 'MongoDB', 'JWT'],
    github: 'https://github.com/omborekar/Digital_Payment_wallet_Clone_By_Om_Borekar.git',
  },
  {
    title: 'BusEase Reservation System',
    description:
      'Node.js-based bus ticket booking system with dynamic seat rendering, responsive UI, and modular Express routing. Ideal for small-scale transport businesses.',
    tags: ['Node.js', 'Express', 'Handlebars.js', 'SMTP'],
    github: 'https://github.com/omborekar/BusEase_Bus_reservation_system_in_nodejs_express_html_css_js_using_HBS.git',
  },
  {
    title: 'AI Resume Analyzer (Gemini API)',
    description:
      'Python + Gemini API web app that parses resumes and job descriptions to give smart, AI-based suggestions for improving candidate resumes.',
    tags: ['AI', 'Gemini API', 'Python', 'HTML'],
    github: 'https://github.com/omborekar/AI_Resume_Analyzer_and_suggestion_using_gemini_API.git',
  },
  {
    title: 'FoodieHub - Restaurant Ordering System',
    description:
      'End-to-end PHP-based food delivery platform with XML/XSL for data rendering. Includes cart, order tracking, and analytics with Chart.js.',
    tags: ['PHP', 'MySQL', 'XSLT', 'Chart.js'],
    github: 'https://github.com/omborekar/FoodieHub_a_food_delivery_web_application_using_PHP.git',
  },
  {
    title: 'Bulk Certificate Generator',
    description:
      'Python app that generates and emails certificates using Excel import and SMTP integration. Built with Flask and PyQt5 for UI and automation.',
    tags: ['Python', 'Flask', 'PyQt5', 'SMTP'],
    github: 'https://github.com/omborekar/Bulk_Certificate_Generator_with_email_integration_using_python',
  },
];

const slideUp = (i) => ({
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      type: 'spring',
      stiffness: 60,
    },
  },
});

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#0b1320] text-gray-300 py-28 px-6"
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-4xl font-extrabold text-center text-purple-400 mb-20 tracking-wide"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>

        <div className="space-y-20">
          {projects.map((proj, i) => (
            <motion.div
              key={proj.title}
              initial="hidden"
              whileInView="visible"
              variants={slideUp(i)}
              viewport={{ once: true }}
              className="relative border-l-4 border-purple-600 pl-8"
            >
              <div className="absolute -left-[10px] top-2 w-5 h-5 bg-purple-600 rounded-full shadow-md"></div>

              <div className="mb-2 text-sm text-purple-500 uppercase tracking-wider">
                Project {i + 1}
              </div>

              <h3 className="text-2xl font-bold mb-3 text-white">{proj.title}</h3>

              <p className="text-gray-400 leading-relaxed mb-4 max-w-3xl">
                {proj.description}
              </p>

              <div className="flex flex-wrap gap-3 mb-6">
                {proj.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-purple-900/30 border border-purple-700 text-purple-300 px-3 py-1 rounded-full text-xs font-medium tracking-wide"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={proj.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium rounded-full transition"
              >
                <FaGithub className="text-lg" />
                GitHub Repo
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
