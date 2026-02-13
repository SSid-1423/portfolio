import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface SkillBarProps {
  name: string;
  percentage: number;
  delay?: number;
}

const SkillBar = ({ name, percentage, delay = 0 }: SkillBarProps) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-sm font-mono text-foreground">{name}</span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: delay + 0.3, duration: 0.3 }}
          className="text-xs font-mono text-primary"
        >
          {percentage}%
        </motion.span>
      </div>
      <div className="h-2 rounded-full bg-secondary/50 overflow-hidden">
        <motion.div
          ref={ref}
          initial={{ width: "0%" }}
          animate={inView ? { width: `${percentage}%` } : {}}
          transition={{
            delay: delay,
            duration: 0.8,
            ease: "easeOut",
          }}
          className="h-full bg-gradient-to-r from-primary to-accent rounded-full shadow-[0_0_10px_hsl(172_66%_50%_/_0.3)]"
        />
      </div>
    </div>
  );
};

export default SkillBar;
