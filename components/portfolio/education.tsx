"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Technology",
    field: "Computer Science and Engineering",
    institution: "Pranveer Singh Institute of Technology",
    location: "Kanpur, Uttar Pradesh",
    period: "2023 – 2027",
    grade: "CGPA: 8.32/10",
    gradeNote: "(Up to 5th Sem)",
    current: true,
  },
  {
    degree: "Intermediate (ISC)",
    field: "Science Stream",
    institution: "St. Mary's School",
    location: "Bhadohi, Uttar Pradesh",
    period: "2021 – 2022",
    grade: "82.80%",
    current: false,
  },
  {
    degree: "High School (ICSE)",
    field: "General Education",
    institution: "St. Mary's School",
    location: "Bhadohi, Uttar Pradesh",
    period: "2019 – 2020",
    grade: "76.16%",
    current: false,
  },
];

const certifications = [
  {
    name: "Machine Learning Specialization",
    issuer: "DeepLearning.AI & Stanford University (Coursera)",
    year: "2026",
  },
  {
    name: "HTML5, CSS3, JavaScript & Python Programming Fundamentals",
    issuer: "Infosys Springboard",
    year: "2025",
  },
  {
    name: "Java",
    issuer: "SoloLearn",
    year: "2024",
  },
  {
    name: "The Complete C Programming Course: Basic to Expert",
    issuer: "Udemy",
    year: "2024",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-24 relative bg-card/30">
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
            <GraduationCap size={16} className="text-primary" />
            Academic Background
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Education & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Academic achievements, certifications, and continuous learning journey
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education Timeline */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 text-xl font-semibold mb-8 text-foreground"
            >
              <BookOpen size={24} className="text-primary" />
              Education
            </motion.h3>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-border" />

              <div className="space-y-8">
                {education.map((edu, index) => (
                  <motion.div
                    key={edu.degree}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative pl-8"
                  >
                    {/* Timeline dot */}
                    <div
                      className={`absolute left-0 top-2 w-4 h-4 rounded-full border-2 ${
                        edu.current
                          ? "bg-primary border-primary"
                          : "bg-card border-border"
                      }`}
                    />

                    <div className="p-5 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors">
                      {edu.current && (
                        <span className="inline-block px-2 py-0.5 bg-primary/10 text-primary text-xs font-medium rounded mb-2">
                          Current
                        </span>
                      )}
                      <h4 className="text-lg font-semibold text-foreground mb-1">
                        {edu.degree}
                      </h4>
                      <p className="text-primary text-sm mb-2">{edu.field}</p>
                      <p className="text-foreground text-sm mb-2">
                        {edu.institution}
                      </p>
                      <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <MapPin size={12} />
                          {edu.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar size={12} />
                          {edu.period}
                        </span>
                      </div>
                      <div className="mt-3 pt-3 border-t border-border">
                        <span className="text-primary font-semibold">
                          {edu.grade}
                        </span>
                        {edu.gradeNote && (
                          <span className="text-muted-foreground text-sm ml-1">
                            {edu.gradeNote}
                          </span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 text-xl font-semibold mb-8 text-foreground"
            >
              <Award size={24} className="text-primary" />
              Certifications
            </motion.h3>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-5 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors group"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
                        {cert.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {cert.issuer}
                      </p>
                    </div>
                    <span className="shrink-0 px-3 py-1 bg-secondary/50 border border-border rounded-md text-xs text-muted-foreground">
                      {cert.year}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Achievements Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 p-6 rounded-xl bg-gradient-to-br from-primary/10 to-accent/5 border border-primary/20"
            >
              <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <Award size={20} className="text-primary" />
                Achievements
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="w-2 h-2 mt-2 bg-primary rounded-full shrink-0" />
                  <span>
                    Solved <span className="text-primary font-semibold">200+ problems</span> on
                    LeetCode, demonstrating proficiency in data structures and algorithms
                  </span>
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="w-2 h-2 mt-2 bg-primary rounded-full shrink-0" />
                  <span>
                    Achieved <span className="text-primary font-semibold">5-Star ratings</span> in
                    Problem Solving, Java, and C on HackerRank
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
