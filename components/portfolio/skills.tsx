"use client";

import { motion } from "framer-motion";
import { Code, Database, Server, Wrench, Brain, Layout } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: Code,
    skills: [
      { name: "Java" },
      { name: "Python" },
      { name: "JavaScript (ES6+)"},
      { name: "TypeScript" },
      { name: "React" }
    ],
  },
  {
    title: "Frontend",
    icon: Layout,
    skills: [
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "React.js" }
    ],
  },
  {
    title: "Backend",
    icon: Server,
    skills: [
      { name: "Node.js" },
      { name: "Express.js"},
      { name: "REST APIs" },
      { name: "JWT Auth" },
    ],
  },
  {
    title: "Databases",
    icon: Database,
    skills: [
      { name: "MongoDB" },
      { name: "SQL"},
    ],
  },
  {
    title: "Core CS",
    icon: Brain,
    skills: [
      { name: "Data Structures" },
      { name: "Algorithms"},
      { name: "OOP"},
      { name: "DBMS" },
      { name: "Computer Networks" },
      { name: "Operating Systems" },
    ],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: [
      { name: "Git & GitHub"},
      { name: "VS Code"},
      { name: "Postman" },
      { name: "Jupyter" },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative bg-card/30">
      <div className="absolute inset-0 grid-pattern opacity-10" />

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
            <Code size={16} className="text-primary" />
            Technical Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <category.icon size={20} />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
              </div>
<div className="flex flex-wrap gap-2">
  {category.skills.map((skill, skillIndex) => (
    <motion.span
      key={skill.name}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.3,
        delay: categoryIndex * 0.1 + skillIndex * 0.05,
      }}
      className="px-3 py-2 bg-secondary/50 border border-border rounded-lg text-sm text-foreground hover:border-primary/50 transition-colors"
    >
      {skill.name}
    </motion.span>
  ))}
</div>
            </motion.div>
          ))}
        </div>
              

        {/* Tech Stack Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground mb-6">Technologies I work with</p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Java",
              "Python",
              "JavaScript",
              "React",
              "Node.js",
              "Express",
              "MongoDB",
              "SQL",
              "Git",
              "TypeScript",
            ].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                className="px-4 py-2 bg-secondary/50 border border-border rounded-lg text-sm text-foreground hover:border-primary/50 hover:text-primary transition-colors cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
