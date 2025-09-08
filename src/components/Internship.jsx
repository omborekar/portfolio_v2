import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

const internships = [
  {
    role: "AI Intern",
    company: "Microsoft AI Azure (Edunet Foundation)",
    duration: "May 2025 - Jun 2025",
    description:
      "Worked on Azure-based machine learning, computer vision, and NLP. Deployed AI models and built intelligent cloud solutions.",
    tags: ["Azure", "Machine Learning", "Computer Vision", "NLP"],
    certificate: "https://drive.google.com/file/d/16oSK6u9yjjHy9CcOpW_d884fTsG_iZXs/view?usp=sharing" // replace with Google Drive link
  },
  {
    role: "Web Developer Intern",
    company: "EY GDS (Edunet Foundation)",
    duration: "Dec 2024 - Jan 2025",
    description:
      "Completed a 6-week MERN stack internship with hands-on experience in full-stack development, API integration, and project deployment.",
    tags: ["MERN", "React.js", "MongoDB", "Express.js"],
    certificate: "https://drive.google.com/file/d/1nezA5v0peA3BBZK8T1jMBSBnD3uAUCkP/view?usp=sharing"
  },
  {
    role: "Software Developer Intern",
    company: "Shell (Edunet Foundation)",
    duration: "Nov 2024 - Dec 2024",
    description:
      "Built a diabetes prediction model using Python with data cleaning, feature engineering, and classification. Applied AI in healthcare.",
    tags: ["Python", "Data Science", "AI", "Scikit-learn"],
    certificate: "https://drive.google.com/file/d/1eVV-AX0bN74X2wLWEbJSaOjjhKlslyi4/view?usp=sharing"
  }
];

const fadeIn = (i) => ({
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      type: "spring",
      stiffness: 80,
    },
  },
});

export default function InternshipPage() {
  return (
    <section id="internships" className="bg-gradient-to-br from-[#0b1320] via-[#111827] to-[#0b1320] text-gray-300 py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-extrabold text-center text-purple-400 mb-16 tracking-wide"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Internships
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {internships.map((internship, i) => (
            <motion.div
              key={internship.role}
              initial="hidden"
              whileInView="visible"
              variants={fadeIn(i)}
              viewport={{ once: true }}
              className="bg-[#1c2434] rounded-2xl shadow-lg hover:shadow-purple-700/30 border border-purple-700/30 p-6 flex flex-col justify-between transition"
            >
              <div>
                <h3 className="text-2xl font-bold mb-2 text-white">
                  {internship.role}
                </h3>
                <p className="text-sm text-purple-400 mb-1">{internship.company}</p>
                <p className="text-xs text-gray-400 mb-4">{internship.duration}</p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  {internship.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {internship.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-purple-900/30 border border-purple-700 text-purple-300 px-3 py-1 rounded-full text-xs font-medium tracking-wide"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href={internship.certificate}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium rounded-full transition self-start"
              >
                <FaExternalLinkAlt className="text-sm" /> View Certificate
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
