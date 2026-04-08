import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';

const contactInfo = [
  { icon: <FaEnvelope />, label: 'Email', value: 'om.borekar.sae.comp@gmail.com', href: 'mailto:om.borekar.sae.comp@gmail.com' },
  { icon: <FaPhone />, label: 'Phone', value: '+91-8767292374', href: 'tel:+918767292374' },
  { icon: <FaLinkedin />, label: 'LinkedIn', value: 'linkedin.com/in/omborekar04', href: 'https://linkedin.com/in/omborekar04' },
  { icon: <FaGithub />, label: 'GitHub', value: 'github.com/omborekar', href: 'https://github.com/omborekar' },
];

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch('https://formspree.io/f/manjarew', {
      method: 'POST',
      body: new FormData(form),
      headers: { Accept: 'application/json' },
    })
      .then((res) => {
        if (res.ok) { toast.success('Message sent successfully!'); form.reset(); }
        else toast.error('Failed to send. Please try again.');
      })
      .catch(() => toast.error('Network error. Please try again later.'));
  };

  return (
    <section id="contact" className="relative bg-[#080c14] text-white py-28 px-6 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'linear-gradient(#7c3aed 1px, transparent 1px), linear-gradient(90deg, #7c3aed 1px, transparent 1px)', backgroundSize: '60px 60px' }}
      />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-purple-700 rounded-full blur-[120px] opacity-10 pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="text-xs uppercase tracking-[0.25em] text-purple-400 bg-purple-900/30 border border-purple-700/40 px-4 py-1.5 rounded-full">
            Let's Connect
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mt-4">Get In Touch</h2>
          <p className="mt-4 max-w-lg mx-auto text-gray-400 text-base">
            Open to full-time roles, internships, freelance projects, or just a meaningful conversation about tech and ideas.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-10 bg-white/[0.04] backdrop-blur-md border border-white/10 rounded-3xl p-8 sm:p-10 shadow-2xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          {/* Left Info */}
          <div className="flex flex-col justify-center gap-7">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Let's work together</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Whether you're looking to hire, collaborate on a project, or just want to discuss an interesting problem — I'd love to hear from you.
              </p>
            </div>
            <div className="space-y-4">
              {contactInfo.map(({ icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-purple-900/40 border border-purple-700/40 text-purple-400 group-hover:bg-purple-700 group-hover:text-white transition-all duration-300 flex-shrink-0">
                    {icon}
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium uppercase tracking-widest">{label}</p>
                    <p className="text-sm text-gray-200 group-hover:text-purple-300 transition-colors">{value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <FloatingInput name="name" label="Your Name" type="text" />
            <FloatingInput name="email" label="Your Email" type="email" />
            <FloatingTextArea name="message" label="Your Message" />
            <button
              type="submit"
              className="w-full py-3.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-base font-bold rounded-full transition-all duration-300 shadow-lg shadow-purple-900/40 hover:scale-[1.02] cursor-pointer"
            >
              Send Message →
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

function FloatingInput({ name, label, type }) {
  return (
    <div className="relative">
      <input
        type={type}
        name={name}
        required
        placeholder=" "
        className="peer w-full px-4 pt-6 pb-2 bg-white/5 border border-white/10 focus:border-purple-500 rounded-xl text-white placeholder-transparent focus:outline-none transition-colors"
      />
      <label className="absolute left-4 top-1 text-xs text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-1 peer-focus:text-xs peer-focus:text-purple-400 pointer-events-none">
        {label}
      </label>
    </div>
  );
}

function FloatingTextArea({ name, label }) {
  return (
    <div className="relative">
      <textarea
        name={name}
        rows="4"
        required
        placeholder=" "
        className="peer w-full px-4 pt-6 pb-2 bg-white/5 border border-white/10 focus:border-purple-500 rounded-xl text-white placeholder-transparent focus:outline-none resize-none transition-colors"
      />
      <label className="absolute left-4 top-1 text-xs text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-1 peer-focus:text-xs peer-focus:text-purple-400 pointer-events-none">
        {label}
      </label>
    </div>
  );
}