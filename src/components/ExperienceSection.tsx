import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const experiences = [
  {
    role: "Artificial Intelligence Intern",
    company: "Codec",
    period: "Oct 2025 — Dec 2025",
    location: "Remote",
    tech: ["Machine Learning", "Python", "scikit-learn", "pandas"],
    points: [
      "Built and optimized ML models using Python, scikit‑learn, and pandas for actionable insights.",
      "Applied statistical analysis, feature engineering, and visualization to improve prediction accuracy.",
      "Developed end‑to‑end data pipelines including preprocessing, training, and deployment aligned with industry standards.",
    ],
  },
  {
    role: "Web Developer Intern",
    company: "CODTECH IT SOLUTION",
    period: "May 2024 — Jul 2024",
    location: "Remote",
    tech: ["HTML", "CSS", "JavaScript", "React"],
    points: [
      "Engineered high-performance web platforms, achieving a 32% increase in responsiveness.",
      "Designed adaptive React components, elevating UI efficiency by 45%.",
      "Integrated RESTful APIs, streamlining data exchange and reducing load times by 28%.",
    ],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="experience" className="py-24 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-heading">02. Experience</p>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-10">
            Where I've Worked
          </h2>

          <div className="flex flex-col md:flex-row gap-6">
            {/* Tabs */}
            <div className="flex md:flex-col gap-2 overflow-x-auto md:min-w-[200px]">
              {experiences.map((exp, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTab(i)}
                  className={`text-left px-4 py-3 text-sm font-mono whitespace-nowrap rounded-lg transition-all duration-300 ${
                    activeTab === i
                      ? "bg-primary/10 text-primary border-l-2 border-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                  }`}
                >
                  {exp.company}
                </button>
              ))}
            </div>

            {/* Content */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="flex-1"
            >
              <h3 className="text-xl font-heading font-semibold text-foreground">
                {experiences[activeTab].role}{" "}
                <span className="text-primary">@ {experiences[activeTab].company}</span>
              </h3>
              <p className="font-mono text-sm text-muted-foreground mt-1 mb-1">
                {experiences[activeTab].period} · {experiences[activeTab].location}
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {experiences[activeTab].tech.map((t) => (
                  <span key={t} className="skill-tag text-[10px]">{t}</span>
                ))}
              </div>
              <ul className="space-y-3">
                {experiences[activeTab].points.map((point, i) => (
                  <li key={i} className="flex gap-3 text-muted-foreground text-sm leading-relaxed text-glow-hover">
                    <span className="text-primary mt-1 shrink-0">▹</span>
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
