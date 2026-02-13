import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    degree: "M.Tech in Data Science",
    school: "IIIT Bhopal",
    period: "Aug 2025 — Jun 2027",
    cgpa: "8.52 / 10.0",
    courses: ["Artificial Intelligence", "Data Warehouse Mining", "Data Science", "Big Data", "Machine Learning"],
  },
  {
    degree: "B.Tech in Computer Science",
    school: "KIIT University",
    period: "Aug 2021 — Apr 2025",
    cgpa: "8.64 / 10.0",
    courses: ["Data Structures", "DBMS", "Computer Networks", "Machine Learning", "Cloud Computing", "OS"],
  },
];

const certifications = [
  "Deloitte — Data Analytics Job Simulation (Forage, Sep 2025)",
  "Google — Foundations of Data Science (Coursera, Mar 2024)",
  "IBM — Intro to Web Dev with HTML, CSS, JS (Coursera, Mar 2024)",
  "Devtown — Google Drive Cloning Program (Apr 2023)",
];

const EducationSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-24 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-heading">05. Education</p>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-10">
            Academic Journey
          </h2>
        </motion.div>

        <div className="space-y-6 mb-16">
          {education.map((edu, i) => (
            <motion.div
              key={edu.school}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass-card rounded-xl p-6 md:p-8"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <GraduationCap className="text-primary" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-heading font-bold text-foreground">{edu.degree}</h3>
                  <p className="text-primary font-mono text-sm">{edu.school}</p>
                  <div className="flex flex-wrap gap-4 mt-1 text-sm text-muted-foreground font-mono">
                    <span>{edu.period}</span>
                    <span>CGPA: {edu.cgpa}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {edu.courses.map((c) => (
                      <span key={c} className="skill-tag">{c}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <Award className="text-primary" size={22} />
            <h3 className="text-xl font-heading font-semibold text-foreground">Certifications</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-3">
            {certifications.map((cert) => (
              <div key={cert} className="flex gap-3 items-start text-sm text-muted-foreground p-3 rounded-lg bg-secondary/30">
                <span className="text-primary shrink-0 mt-0.5">◆</span>
                {cert}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
