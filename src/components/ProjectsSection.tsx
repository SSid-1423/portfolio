import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Perplexa",
    subtitle: "AI-Powered RAG System",
    period: "Jan 2025 — Apr 2025",
    description:
      "An intelligent search system with FAISS-based RAG, real-time web context, and MongoDB-backed authentication with Google OAuth.",
    highlights: [
      "99.9% uptime with MongoDB + Captcha verification",
      "Reduced hallucination by 7% with < 150ms latency",
      "500 concurrent queries/min on Streamlit Cloud",
    ],
    tech: ["Python", "FAISS", "MongoDB", "Streamlit", "OAuth", "SSL"],
    github: "https://github.com/SSid-2314",
  },
  {
    title: "Weather Forecasting App",
    subtitle: "Real-time Global Weather",
    period: "May 2024",
    description:
      "A real-time forecasting system delivering instant weather insights across 10,000+ global locations with geospatial tracking.",
    highlights: [
      "99.8% uptime across 10,000+ locations",
      "Granular geospatial device positioning",
      "40% faster load times on Netlify",
    ],
    tech: ["JavaScript", "REST API", "Netlify", "Geolocation"],
  },
  {
    title: "Instagram Reach Analysis",
    subtitle: "Predictive Analytics Platform",
    period: "Jul 2024 — Oct 2024",
    description:
      "A predictive analytics platform analyzing Instagram engagement patterns using statistical trend analysis and visualization.",
    highlights: [
      "27% boost in engagement accuracy",
      "40% improvement in analytical efficiency",
      "15% better content strategy effectiveness",
    ],
    tech: ["Python", "Pandas", "Seaborn", "Scikit-learn", "Visualization"],
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="projects" className="py-24 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-heading">03. Projects</p>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-10">
            Things I've Built
          </h2>

          <div className="flex flex-col md:flex-row gap-6">
            {/* Tabs */}
            <div className="flex md:flex-col gap-2 overflow-x-auto md:min-w-[220px]">
              {projects.map((proj, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTab(i)}
                  className={`text-left px-4 py-3 text-sm font-mono whitespace-nowrap rounded-lg transition-all duration-300 ${
                    activeTab === i
                      ? "bg-primary/10 text-primary border-l-2 border-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                  }`}
                >
                  {proj.title}
                </button>
              ))}
            </div>

            {/* Content with 3D flip animation */}
            <div className="flex-1" style={{ perspective: "1200px" }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ 
                    opacity: 0, 
                    rotateY: 15,
                    rotateX: -5,
                    scale: 0.92,
                    filter: "blur(8px)"
                  }}
                  animate={{ 
                    opacity: 1, 
                    rotateY: 0,
                    rotateX: 0,
                    scale: 1,
                    filter: "blur(0px)"
                  }}
                  exit={{ 
                    opacity: 0, 
                    rotateY: -15,
                    rotateX: 5,
                    scale: 0.92,
                    filter: "blur(8px)"
                  }}
                  transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="glass-card rounded-xl p-6 md:p-8"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <p className="text-xs font-mono text-primary mb-1">{projects[activeTab].period}</p>
                      <h3 className="text-xl font-heading font-bold text-foreground">
                        {projects[activeTab].title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{projects[activeTab].subtitle}</p>
                    </div>
                    <div className="flex gap-3">
                      {projects[activeTab].github && (
                        <a href={projects[activeTab].github} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                          <Github size={20} />
                        </a>
                      )}
                      <ExternalLink size={20} className="text-muted-foreground" />
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-5 text-glow-hover">
                    {projects[activeTab].description}
                  </p>

                  <ul className="space-y-3 mb-5">
                    {projects[activeTab].highlights.map((h, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + i * 0.1 }}
                        className="flex gap-2 text-sm text-muted-foreground text-glow-hover"
                      >
                        <span className="text-primary shrink-0">✦</span>
                        {h}
                      </motion.li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {projects[activeTab].tech.map((t, i) => (
                      <motion.span
                        key={t}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 + i * 0.05 }}
                        className="skill-tag"
                      >
                        {t}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
