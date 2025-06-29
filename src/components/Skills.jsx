import { motion } from "framer-motion";
import {
  FaCode,
  FaGlobe,
  FaDatabase,
  FaTools,
  FaLanguage,
} from "react-icons/fa";

const skills = [
  {
    title: "Programming",
    icon: FaCode,
    tags: ["JavaScript", "Python", "C++", "Java"],
    color: "text-yellow-400",
  },
  {
    title: "Web Technologies",
    icon: FaGlobe,
    tags: ["HTML", "CSS", "React", "Node.js"],
    color: "text-pink-400",
  },
  {
    title: "Databases",
    icon: FaDatabase,
    tags: ["MySQL", "MongoDB", "NoSQL"],
    color: "text-blue-400",
  },
  {
    title: "Tools",
    icon: FaTools,
    tags: ["Git", "Excel", "PowerPoint"],
    color: "text-green-400",
  },
  {
    title: "Languages",
    icon: FaLanguage,
    tags: ["English", "Hindi", "Marathi"],
    color: "text-purple-400",
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { type: "spring" } },
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-28 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Skills Journey
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* First Column (3 items) */}
          <div className="space-y-12">
            {skills.slice(0, 3).map((skill) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.title}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="flex gap-6 items-start"
                >
                  <div className="min-w-12 min-h-12 flex items-center justify-center rounded-full bg-white/10 border border-white/20">
                    <Icon className={`text-2xl ${skill.color}`} />
                  </div>
                  <div className="space-y-2">
                    <h3 className={`text-xl font-semibold ${skill.color}`}>
                      {skill.title}
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {skill.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-white/10 border border-white/20 rounded-full px-4 py-1 text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Second Column (2 items) */}
          <div className="space-y-12">
            {skills.slice(3).map((skill) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.title}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="flex gap-6 items-start"
                >
                  <div className="min-w-12 min-h-12 flex items-center justify-center rounded-full bg-white/10 border border-white/20">
                    <Icon className={`text-2xl ${skill.color}`} />
                  </div>
                  <div className="space-y-2">
                    <h3 className={`text-xl font-semibold ${skill.color}`}>
                      {skill.title}
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {skill.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-white/10 border border-white/20 rounded-full px-4 py-1 text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
