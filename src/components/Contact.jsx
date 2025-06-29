import { motion } from 'framer-motion';
import toast from 'react-hot-toast';

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    // Send form via Formspree
    fetch("https://formspree.io/f/manjarew", {
      method: "POST",
      body: new FormData(form),
      headers: {
        Accept: "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          toast.success("Message sent!");
          form.reset();
        } else {
          toast.error("Failed to send. Try again.");
        }
      })
      .catch(() => toast.error("Network error. Try again later."));
  };

  return (
    <section id="contact" className="bg-[#1e1e2e] text-white py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xs uppercase tracking-widest text-purple-400 bg-purple-900/20 inline-block px-5 py-2 rounded-full mb-4">
            Get In Touch
          </h2>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
            Contact Me
          </h1>
          <p className="mt-4 max-w-xl mx-auto text-gray-400 text-base">
            I’m open to opportunities, collaborations, or just a friendly chat.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-10 bg-white/5 backdrop-blur-md border border-purple-700/30 rounded-3xl p-10 shadow-2xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          {/* Left Info */}
          <div className="flex flex-col justify-center gap-6 text-gray-300 text-sm">
            <p>Drop me a message or reach me through the details below:</p>
            <div className="space-y-3">
              <p>
                <span className="font-semibold text-purple-400">Email:</span>{' '}
                <a href="mailto:you@example.com" className="hover:underline">you@example.com</a>
              </p>
              <p>
                <span className="font-semibold text-purple-400">Phone:</span>{' '}
                <a href="tel:+919876543210" className="hover:underline">+91 98765 43210</a>
              </p>
              <p>
                <span className="font-semibold text-purple-400">LinkedIn:</span>{' '}
                <a
                  href="https://linkedin.com/in/your-linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  linkedin.com/in/your-linkedin
                </a>
              </p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <FloatingInput name="name" label="Your Name" type="text" />
            <FloatingInput name="email" label="Your Email" type="email" />
            <FloatingTextArea name="message" label="Your Message" />
            <button
              type="submit"
              className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white text-lg font-semibold rounded-full transition-all duration-300 shadow-md cursor-pointer"
            >
              Send Message
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
        placeholder={label}
        className="peer w-full px-4 pt-6 pb-2 bg-transparent border-b border-gray-500 text-white placeholder-transparent focus:outline-none focus:border-purple-500"
      />
      <label className="absolute left-4 top-1 text-sm text-gray-400 transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm peer-focus:text-purple-400">
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
        placeholder={label}
        className="peer w-full px-4 pt-6 pb-2 bg-transparent border-b border-gray-500 text-white placeholder-transparent focus:outline-none focus:border-purple-500 resize-none"
      />
      <label className="absolute left-4 top-1 text-sm text-gray-400 transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm peer-focus:text-purple-400">
        {label}
      </label>
    </div>
  );
}
