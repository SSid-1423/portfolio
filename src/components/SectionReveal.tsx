import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";

interface SectionRevealProps {
  children: ReactNode;
  className?: string;
}

const SectionReveal = ({ children, className = "" }: SectionRevealProps) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className={className}>
      <motion.div
        initial={{ 
          opacity: 0, 
          y: 80, 
          scale: 0.95,
          filter: "blur(10px)"
        }}
        animate={inView ? { 
          opacity: 1, 
          y: 0, 
          scale: 1,
          filter: "blur(0px)"
        } : {}}
        transition={{ 
          duration: 0.8, 
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default SectionReveal;
