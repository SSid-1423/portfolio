import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import profilePic from "@/assets/profile.jpg";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-heading">01. About Me</p>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-8">
            Who I Am
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-4 text-muted-foreground leading-relaxed text-glow-hover">
              <p>
                I'm a Computer Science graduate with applied experience in{" "}
                <span className="text-primary">AI/ML model development</span>,{" "}
                <span className="text-primary">data engineering</span>, and{" "}
                <span className="text-primary">full-stack applications</span>.
              </p>
              <p>
                Proficient in Python, SQL, and modern web technologies with hands-on expertise 
                in building ETL pipelines, integrating REST APIs, and deploying ML models into 
                production-ready systems.
              </p>
              <p>
                Strong foundation in data visualization, cloud platforms (AWS, Streamlit, Netlify), 
                and CI/CD pipelines. Adept at delivering scalable, reusable solutions that improve 
                user experience and enable data-driven decision-making.
              </p>
            </div>

            <div className="glass-card rounded-xl p-6 flex flex-col items-center justify-center text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="w-32 h-32 rounded-full mb-4 overflow-hidden border-3 border-primary/50 shadow-[0_0_30px_var(--glow-medium)]"
              >
                <img src={profilePic} alt="Siddharth Patel" className="w-full h-full object-cover" />
              </motion.div>
              <p className="font-heading font-semibold text-foreground">Siddharth Patel</p>
              <p className="text-sm text-muted-foreground font-mono mt-1">M.Tech Data Science</p>
              <p className="text-xs text-muted-foreground font-mono">IIIT Bhopal</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
