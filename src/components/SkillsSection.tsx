import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SkillBar from "@/components/SkillBar";

const skillCategories = [
  {
    title: "Programming",
    icon: "⚡",
    skills: [
      { name: "Python", percentage: 95 },
      { name: "C/C++", percentage: 85 },
      { name: "SQL", percentage: 90 },
      { name: "JavaScript", percentage: 88 },
      { name: "HTML/CSS", percentage: 92 },
    ],
  },
  {
    title: "Frameworks & Libraries",
    icon: "🧩",
    skills: [
      { name: "Django & Flask", percentage: 92 },
      { name: "React", percentage: 90 },
      { name: "Node.js", percentage: 85 },
      { name: "TensorFlow & PyTorch", percentage: 88 },
      { name: "Pandas & NumPy", percentage: 94 },
      { name: "Scikit-learn", percentage: 91 },
    ],
  },
  {
    title: "Data & Cloud",
    icon: "☁️",
    skills: [
      { name: "MySQL & MongoDB", percentage: 93 },
      { name: "ETL Pipelines", percentage: 91 },
      { name: "AWS", percentage: 85 },
      { name: "Streamlit", percentage: 92 },
      { name: "Power BI", percentage: 88 },
    ],
  },
  {
    title: "Dev & Deployment",
    icon: "🚀",
    skills: [
      { name: "API Integration", percentage: 92 },
      { name: "Git & GitHub", percentage: 94 },
      { name: "CI/CD Pipelines", percentage: 87 },
      { name: "Docker", percentage: 84 },
      { name: "Data Visualization", percentage: 90 },
    ],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-heading">04. Skills</p>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-10">
            Tech Stack
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: ci * 0.1 }}
              className="glass-card rounded-xl p-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{cat.icon}</span>
                <h3 className="font-heading font-semibold text-foreground">{cat.title}</h3>
              </div>
              <div className="space-y-4">
                {cat.skills.map((skill, si) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    percentage={skill.percentage}
                    delay={ci * 0.1 + si * 0.05}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
