import { motion } from 'framer-motion';
import { FaGraduationCap, FaBullseye, FaUsers } from 'react-icons/fa';

const items = [
  {
    title: "Education",
    icon: <FaGraduationCap />,
    color: "from-blue-500 to-cyan-500",
    content: (
      <>
        <p><strong>BE (2022–2026):</strong> Sinhgad Academy of Engineering, Pune – CGPA: 7.78</p>
        <p><strong>12th (2022):</strong> Nutan Jr. College, Malkapur – 88.33%</p>
        <p><strong>10th (2020):</strong> Nutan Vidyalaya, Malkapur – 96.60%</p>
      </>
    ),
  },
  {
    title: "Career Objective",
    icon: <FaBullseye />,
    color: "from-green-500 to-emerald-500",
    content: (
      <p>
        To build AI-first products that simplify lives, enhance decision-making,
        and bring imagination into intelligent solutions.
      </p>
    ),
  },
  {
    title: "Extra-Curricular Activities",
    icon: <FaUsers />,
    color: "from-pink-500 to-purple-500",
    content: (
      <p>
        Led tech teams at ACES, hosted college-level coding events, and collaborated
        on innovative tech initiatives to foster student learning.
      </p>
    ),
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.25,
      type: 'spring',
      stiffness: 80,
      damping: 12,
    },
  }),
};

export default function About() {
  return (
    <section id="about" className="relative py-24 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-5xl font-extrabold text-center text-white mb-20"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 perspective-[1000px]">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              whileHover={{ rotateY: 5, rotateX: 5 }}
              className="group relative bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/10 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
            >
              <div className={`absolute -top-5 -left-5 w-20 h-20 rounded-full bg-gradient-to-tr ${item.color} animate-pulse blur-xl opacity-40 z-0`} />
              <div className="relative z-10">
                <div className={`text-white text-3xl mb-4 p-3 rounded-full bg-gradient-to-tr ${item.color} shadow-lg w-fit`}>
                  {item.icon}
                </div>
                <h3 className="text-white text-xl font-semibold mb-3">{item.title}</h3>
                <div className="text-gray-200 text-sm space-y-1">{item.content}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
