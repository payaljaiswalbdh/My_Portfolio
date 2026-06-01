"use client";

import { motion } from "framer-motion";
import { GraduationCap, Target, Sparkles } from "lucide-react";

const About = () => {
  const stats = [
    { value: "8.32", label: "CGPA", suffix: "/10" },
    { value: "200+", label: "Problems Solved", suffix: "" },
    { value: "5", label: "Star Rating", suffix: "★" },
    { value: "4+", label: "Projects", suffix: "" },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border text-sm text-muted-foreground mb-4">
            <Sparkles size={16} className="text-primary" />
            Get to know me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A passionate developer dedicated to creating impactful digital experiences
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - About Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Education</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Currently pursuing B.Tech in Computer Science and Engineering at
                    Pranveer Singh Institute of Technology, Kanpur with a CGPA of 8.32/10.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <Target size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Career Goal</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Seeking Software Development Engineer opportunities to build scalable applications, solve real-world problems, and contribute to impactful software solutions while continuously enhancing my technical expertise.
                  </p>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed pl-[60px]">
                I specialize in building full-stack applications using{" "}
                <span className="text-primary font-medium">Java</span>,{" "}
                <span className="text-primary font-medium">Node.js</span>,{" "}
                <span className="text-primary font-medium">Express.js</span>,{" "}
                <span className="text-primary font-medium">MongoDB</span>, and{" "}
                <span className="text-primary font-medium">SQL</span>, with a focus on
                scalable backend systems and RESTful APIs.
              </p>
            </div>
            <div className="pl-[60px]">
  <a
    href="\resume payal (1).pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center px-6 py-3 mt-2 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
  >
    View Resume
  </a>
</div>
          </motion.div>

          {/* Right - Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors text-center"
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.value}
                  <span className="text-primary">{stat.suffix}</span>
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
