import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 px-6" ref={ref}>
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-heading">06. Contact</p>
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-foreground mb-6">
            Get In Touch
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10">
            I'm currently looking for new opportunities. Whether you have a question 
            or just want to say hi, my inbox is always open!
          </p>

          <a
            href="mailto:siddharthpatel2476@gmail.com"
            className="inline-block px-10 py-4 rounded-lg font-mono text-sm font-medium border border-primary text-primary hover:bg-primary/10 transition-all duration-300 hover:shadow-[var(--glow-strong)] mb-12"
          >
            Say Hello
          </a>

          <div className="flex items-center justify-center gap-6">
            <a
              href="mailto:siddharthpatel2476@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors hover:-translate-y-1 duration-300"
              title="Email"
            >
              <Mail size={22} />
            </a>
            <a
              href="tel:+919935379254"
              className="text-muted-foreground hover:text-primary transition-colors hover:-translate-y-1 duration-300"
              title="Phone"
            >
              <Phone size={22} />
            </a>
            <a
              href="https://linkedin.com/in/siddharth1423"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors hover:-translate-y-1 duration-300"
              title="LinkedIn"
            >
              <Linkedin size={22} />
            </a>
            <a
              href="https://github.com/SSid-2314"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors hover:-translate-y-1 duration-300"
              title="GitHub"
            >
              <Github size={22} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
