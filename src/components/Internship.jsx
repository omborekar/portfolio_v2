import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaCalendarAlt, FaBuilding } from 'react-icons/fa';

const internships = [
  {
    role: 'AI Intern',
    company: 'Microsoft AI Azure',
    org: 'via Edunet Foundation',
    duration: 'May 2025 – Jun 2025',
    description:
      'Designed and deployed end-to-end machine learning solutions on Microsoft Azure ML Studio. Applied computer vision techniques for image classification pipelines and built NLP models for text processing tasks. Gained hands-on exposure to cloud-based AI infrastructure — provisioning compute clusters, managing model registries, and publishing inference endpoints for real-world consumption.',
    impact: 'Deployed 2 ML models to Azure endpoints',
    tags: ['Azure ML Studio', 'Computer Vision', 'NLP', 'Python', 'Cloud AI'],
    certificate: 'https://drive.google.com/file/d/16oSK6u9yjjHy9CcOpW_d884fTsG_iZXs/view?usp=sharing',
    accent: 'from-sky-500 to-cyan-400',
    dot: 'bg-sky-400',
  },
  {
    role: 'Web Developer Intern',
    company: 'EY GDS',
    org: 'via Edunet Foundation',
    duration: 'Dec 2024 – Jan 2025',
    description:
      'Completed an intensive 6-week MERN stack program under EY GDS mentorship, building production-grade full-stack applications with React.js frontends, Node.js/Express backends, and MongoDB data persistence. Integrated third-party REST APIs, implemented JWT-based auth flows, and managed end-to-end project deployment. Strengthened real-world debugging and code review practices aligned with enterprise development standards.',
    impact: 'Delivered 2 full-stack MERN applications',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'REST APIs'],
    certificate: 'https://drive.google.com/file/d/1nezA5v0peA3BBZK8T1jMBSBnD3uAUCkP/view?usp=sharing',
    accent: 'from-amber-500 to-yellow-400',
    dot: 'bg-amber-400',
  },
  {
    role: 'Software Developer Intern',
    company: 'Shell',
    org: 'via Edunet Foundation',
    duration: 'Nov 2024 – Dec 2024',
    description:
      'Developed a clinical diabetes prediction model using Python and Scikit-learn, applying the full ML workflow: exploratory data analysis, missing value imputation, feature engineering, model selection, and hyperparameter tuning. Achieved strong classification accuracy on a real medical dataset. Built interactive data visualizations to communicate model performance and feature importance to non-technical stakeholders, demonstrating AI's practical role in predictive healthcare.',
    impact: 'Built predictive model with 80%+ accuracy',
    tags: ['Python', 'Scikit-learn', 'Pandas', 'Data Visualization', 'Feature Engineering'],
    certificate: 'https://drive.google.com/file/d/1eVV-AX0bN74X2wLWEbJSaOjjhKlslyi4/view?usp=sharing',
    accent: 'from-emerald-500 to-green-400',
    dot: 'bg-emerald-400',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.2, type: 'spring', stiffness: 70, damping: 14 },
  }),
};

export default function InternshipPage() {
  return (
    <section
      id="internships"
      className="relative bg-gradient-to-b from-[#0d1117] to-[#080c14] text-gray-300 py-28 px-6 overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #7c3aed 1px, transparent 0)', backgroundSize: '40px 40px' }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="text-xs uppercase tracking-[0.25em] text-purple-400 bg-purple-900/30 border border-purple-700/40 px-4 py-1.5 rounded-full">
            Industry Experience
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mt-4">Internships</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {internships.map((item, i) => (
            <motion.div
              key={item.role + item.company}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="group bg-white/[0.04] border border-white/10 hover:border-purple-700/40 rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-purple-900/20"
            >
              {/* Top accent bar */}
              <div className={`h-1 w-16 rounded-full bg-gradient-to-r ${item.accent} mb-6`} />

              <div className="flex-1">
                <h3 className="text-xl font-extrabold text-white mb-1">{item.role}</h3>

                <div className="flex items-center gap-2 mb-0.5">
                  <FaBuilding className="text-xs text-purple-400" />
                  <p className="text-sm font-semibold text-purple-400">{item.company}</p>
                </div>
                <p className="text-xs text-gray-500 mb-1">{item.org}</p>

                <div className="flex items-center gap-2 mb-5">
                  <FaCalendarAlt className="text-xs text-gray-500" />
                  <p className="text-xs text-gray-400">{item.duration}</p>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-5">{item.description}</p>

                {/* Impact badge */}
                <div className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r ${item.accent} text-white mb-5`}>
                  <span className="w-1.5 h-1.5 bg-white rounded-full opacity-80" />
                  {item.impact}
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-white/5 border border-white/10 text-gray-300 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href={item.certificate}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${item.accent} text-white text-sm font-semibold rounded-full transition-all duration-300 hover:opacity-90 hover:scale-105 self-start shadow-lg`}
              >
                <FaExternalLinkAlt className="text-xs" /> View Certificate
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}