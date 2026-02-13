import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import TypingAnimator from "@/components/TypingAnimator";

const HeroSection = () => {
  const phrases = [
    "I build intelligent systems.",
    "I craft scalable solutions.",
    "I engineer data pipelines.",
    "I develop with passion.",
    "I transform ideas into reality.",
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-32">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="font-mono text-primary text-sm mb-5"
        >
          Hi, my name is
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-5xl md:text-7xl font-bold font-heading text-foreground mb-3"
        >
          Siddharth Patel.
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-3xl md:text-5xl font-bold font-heading text-muted-foreground mb-8 h-[1.2em]"
        >
          <TypingAnimator
            phrases={phrases}
            typingSpeed={80}
            deletingSpeed={40}
            delayBetweenPhrases={2500}
          />
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-muted-foreground max-w-xl text-lg leading-relaxed mb-12"
        >
          Computer Science graduate specializing in{" "}
          <span className="text-primary">AI/ML</span>,{" "}
          <span className="text-primary">data engineering</span>, and{" "}
          <span className="text-primary">full-stack development</span>. 
          Currently pursuing M.Tech in Data Science at IIIT Bhopal.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-wrap gap-4"
        >
          <a
            href="#projects"
            className="px-8 py-3 rounded-lg font-mono text-sm font-medium bg-primary text-primary-foreground hover:shadow-[var(--glow-strong)] transition-all duration-300"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-lg font-mono text-sm font-medium border border-primary text-primary hover:bg-primary/10 transition-all duration-300"
          >
            Get In Touch
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-5 h-8 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-1.5 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
