import { motion } from 'framer-motion';
import { FaCode, FaGlobe, FaDatabase, FaTools, FaBrain, FaLanguage } from 'react-icons/fa';

const skillGroups = [
  {
    title: 'Programming Languages',
    icon: FaCode,
    color: 'text-amber-400',
    border: 'border-amber-500/30',
    tags: ['JavaScript (ES6+)', 'Python', 'Java', 'C++', 'PHP'],
  },
  {
    title: 'Web Technologies',
    icon: FaGlobe,
    color: 'text-pink-400',
    border: 'border-pink-500/30',
    tags: ['React.js', 'Node.js', 'Express.js', 'Spring Boot', 'HTML5', 'CSS3', 'REST APIs'],
  },
  {
    title: 'Databases',
    icon: FaDatabase,
    color: 'text-sky-400',
    border: 'border-sky-500/30',
    tags: ['MySQL', 'MongoDB', 'SQL Server', 'NoSQL'],
  },
  {
    title: 'AI / ML & Cloud',
    icon: FaBrain,
    color: 'text-emerald-400',
    border: 'border-emerald-500/30',
    tags: ['Scikit-learn', 'NLP', 'Computer Vision', 'Azure ML', 'Gemini API'],
  },
  {
    title: 'Dev Tools & Concepts',
    icon: FaTools,
    color: 'text-violet-400',
    border: 'border-violet-500/30',
    tags: ['Git & GitHub', 'JWT Auth', 'Data Cleaning', 'DSA', 'Agile/SDLC'],
  },
  {
    title: 'Languages',
    icon: FaLanguage,
    color: 'text-orange-400',
    border: 'border-orange-500/30',
    tags: ['English (Professional)', 'Hindi', 'Marathi'],
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, type: 'spring', stiffness: 70, damping: 14 },
  }),
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-28 px-6 bg-gradient-to-b from-[#080c14] to-[#0d1117] overflow-hidden"
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
            Technical Stack
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mt-4">Skills & Expertise</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.01 }}
                className={`bg-white/[0.04] border ${skill.border} rounded-2xl p-6 hover:bg-white/[0.07] transition-all duration-300 hover:shadow-xl`}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10">
                    <Icon className={`text-xl ${skill.color}`} />
                  </div>
                  <h3 className={`text-base font-bold tracking-tight ${skill.color}`}>{skill.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-white/5 border border-white/10 text-gray-300 rounded-full px-3 py-1 text-xs font-medium tracking-wide hover:bg-white/10 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}