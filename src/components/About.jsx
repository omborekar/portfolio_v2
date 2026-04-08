import { motion } from 'framer-motion';
import { FaGraduationCap, FaBullseye, FaUsers } from 'react-icons/fa';

const items = [
  {
    title: 'Education',
    icon: <FaGraduationCap />,
    gradient: 'from-sky-500 to-cyan-400',
    glow: 'bg-sky-500',
    rows: [
      { label: 'B.E. Computer Engineering', detail: 'Sinhgad Academy of Engineering, Pune (2022–2026)', badge: 'CGPA 7.95' },
      { label: 'HSC – Science', detail: 'Nutan Jr. College, Malkapur (2022)', badge: '88.33%' },
      { label: 'SSC', detail: 'Nutan Vidyalaya, Malkapur (2020)', badge: '96.60%' },
    ],
  },
  {
    title: 'Career Objective',
    icon: <FaBullseye />,
    gradient: 'from-emerald-500 to-teal-400',
    glow: 'bg-emerald-500',
    text: `Aspiring software engineer with a passion for building AI-first, data-driven products that solve real-world problems at scale. Focused on bridging the gap between complex ML systems and user-friendly interfaces — delivering solutions that are fast, reliable, and meaningful. Eager to contribute to a high-impact engineering team while continuing to grow across the full software development lifecycle.`,
  },
  {
    title: 'Extra-Curriculars',
    icon: <FaUsers />,
    gradient: 'from-violet-500 to-purple-400',
    glow: 'bg-violet-500',
    bullets: [
      'Led technical team at ACES (Association of Computer Engineering Students) — organized hackathons and workshops for 200+ students.',
      'Hosted inter-departmental coding competitions, driving practical problem-solving culture.',
      'Collaborated on cross-functional capstone projects, demonstrating team leadership and product ownership.',
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, type: 'spring', stiffness: 80, damping: 14 },
  }),
};

export default function About() {
  return (
    <section
      id="about"
      className="relative py-28 px-6 bg-[#080c14] overflow-hidden"
    >
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'linear-gradient(#7c3aed 1px, transparent 1px), linear-gradient(90deg, #7c3aed 1px, transparent 1px)', backgroundSize: '60px 60px' }}
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
            Who I Am
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mt-4">About Me</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="group relative bg-white/[0.04] backdrop-blur-md border border-white/10 rounded-3xl p-7 hover:border-purple-700/40 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-900/20"
            >
              <div className={`absolute -top-6 -left-6 w-24 h-24 rounded-full ${item.glow} blur-2xl opacity-20 pointer-events-none group-hover:opacity-40 transition-opacity duration-500`} />

              {/* Icon */}
              <div className={`w-12 h-12 flex items-center justify-center rounded-2xl bg-gradient-to-tr ${item.gradient} text-white text-xl shadow-lg mb-5`}>
                {item.icon}
              </div>

              <h3 className="text-white text-xl font-bold mb-4 tracking-tight">{item.title}</h3>

              {/* Education rows */}
              {item.rows && (
                <div className="space-y-4">
                  {item.rows.map((row) => (
                    <div key={row.label} className="border-l-2 border-purple-700/50 pl-3">
                      <p className="text-white text-sm font-semibold">{row.label}</p>
                      <p className="text-gray-400 text-xs mt-0.5">{row.detail}</p>
                      <span className={`inline-block mt-1.5 text-xs font-bold px-2 py-0.5 rounded-full bg-gradient-to-r ${item.gradient} text-white`}>
                        {row.badge}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Career objective */}
              {item.text && (
                <p className="text-gray-300 text-sm leading-relaxed">{item.text}</p>
              )}

              {/* Bullets */}
              {item.bullets && (
                <ul className="space-y-3">
                  {item.bullets.map((b) => (
                    <li key={b} className="flex gap-2 text-gray-300 text-sm leading-relaxed">
                      <span className={`mt-1.5 w-2 h-2 flex-shrink-0 rounded-full bg-gradient-to-br ${item.gradient}`} />
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}