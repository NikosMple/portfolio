import { useState } from "react";
import { motion } from "framer-motion";
import { HiOutlineMail, HiOutlineCheckCircle } from "react-icons/hi";
import { SiGithub, SiLinkedin } from "react-icons/si";
import SectionHeader from "../ui/SectionHeader";

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const INPUT_CLASSES = `
    w-full px-5 py-3 rounded-md
    bg-slate-900/80 border border-slate-700
    text-slate-200 placeholder-slate-500
    transition-all duration-300 font-mono
    focus:outline-none focus:border-emerald-400
    focus:ring-1 focus:ring-emerald-400
  `;

  const BUTTON_CLASSES = `
    w-full flex items-center justify-center gap-2
    px-6 py-3 rounded-md
    font-semibold text-sm uppercase tracking-wider
    bg-emerald-500 text-black
    transition-all duration-300
    hover:bg-emerald-400 
    hover:shadow-md hover:shadow-emerald-500/30
    hover:scale-[1.01]
  `;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    if (
      !formValues.name.trim() ||
      !formValues.email.trim() ||
      !formValues.message.trim()
    ) {
      setError("Please fill in all fields.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formValues.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);

    try {
      const data = new FormData();
      Object.entries(formValues).forEach(([key, value]) => {
        data.append(key, value);
      });

      const response = await fetch("https://getform.io/f/brooeqpa", {
        method: "POST",
        body: data,
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setSubmitted(true);
      setFormValues({ name: "", email: "", message: "" });
    } catch (err) {
      setError(
        "Something went wrong while sending your message. Please try again, or email me directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="px-6 py-24 max-w-3xl mx-auto">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-10"
      >
        <SectionHeader number="04" title="Contact" />
      </motion.div>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-slate-400 text-base leading-relaxed mb-8"
      >
        If you’d like to discuss a project, collaborate, or just say hello, feel
        free to reach out. I usually reply within a day.
      </motion.p>

      {/* Form */}
      {!submitted ? (
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          onSubmit={handleSubmit}
          className="space-y-6 p-6 bg-slate-800/40 border border-slate-700/40 rounded-xl shadow-sm"
        >
          {/* Name + Email in 2 columns on md+ */}
          <div className="grid gap-6 md:grid-cols-2">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="text-emerald-400 text-sm font-mono mb-1 block"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                required
                className={INPUT_CLASSES}
                placeholder="Your name"
                value={formValues.name}
                onChange={handleChange}
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="text-emerald-400 text-sm font-mono mb-1 block"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                className={INPUT_CLASSES}
                placeholder="you@example.com"
                value={formValues.email}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="text-emerald-400 text-sm font-mono mb-1 block"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              name="message"
              required
              className={`${INPUT_CLASSES} resize-none`}
              placeholder="Write your message..."
              value={formValues.message}
              onChange={handleChange}
            ></textarea>
          </div>

          {/* Error */}
          {error && <p className="text-sm font-mono text-red-400">{error}</p>}

          {/* Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`${BUTTON_CLASSES} ${
              isSubmitting ? "opacity-80 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting ? (
              <>
                <span className="h-4 w-4 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <HiOutlineMail size={18} className="text-black" />
                Send Message
              </>
            )}
          </button>

          {/* Direct email hint */}
          <p className="text-xs text-slate-500 font-mono">
            Or email me directly at{" "}
            <a
              href="mailto:nikosbletsas00@gmail.com"
              className="text-emerald-400 hover:underline"
            >
              nikosbletsas00@gmail.com
            </a>
            .
          </p>
        </motion.form>
      ) : (
        /* SUCCESS MESSAGE */
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="p-8 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center"
        >
          <HiOutlineCheckCircle
            size={50}
            className="mx-auto mb-4 text-emerald-400"
          />
          <h3 className="text-white text-xl font-semibold mb-2">
            Message Sent!
          </h3>
          <p className="text-slate-400 mb-2">
            Thank you for reaching out. I’ll get back to you as soon as
            possible.
          </p>
          <p className="text-xs text-slate-500 font-mono">
            If it’s urgent, feel free to also email{" "}
            <a
              href="mailto:nikosbletsas00@gmail.com"
              className="text-emerald-400 hover:underline"
            >
              nikosbletsas00@gmail.com
            </a>
            .
          </p>
        </motion.div>
      )}
    </section>
  );
}

export default Contact;
