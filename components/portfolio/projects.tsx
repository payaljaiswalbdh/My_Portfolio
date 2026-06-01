"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Folder, Calendar, Sparkles } from "lucide-react";

const projects = [
  {
    title: "RevenuePulse",
    subtitle: "Client Follow-Up & Payment Tracking CRM",
    period: "Jan 2026 — Mar 2026",
    description:
      "A MERN stack web application to automate business follow-ups, payment tracking, and customer communication with real-time dashboards.",
    highlights: [
      "Automated reminders and real-time dashboards using React.js and Tailwind CSS",
      "Secure backend with JWT authentication and multi-channel notifications",
      "Integrated Twilio (SMS API) and Nodemailer for notifications",
    ],
    techStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "TypeScript",
      "Tailwind CSS",
      "JWT",
      "Twilio",
    ],
    github: "https://github.com/payaljaiswalbdh/Revenue_pulse",
    featured: true,
  },
  {
    title: "Music Streaming Backend API",
    subtitle: "Scalable Backend Architecture",
    period: "Apr 2026",
    description:
      "A scalable backend for a music streaming platform with dual role-based access control for users and artists.",
    highlights: [
      "Secure authentication pipeline using JWT and bcrypt password hashing",
      "RESTful APIs for playlists, albums, users, and music management",
      "Integrated ImageKit CDN improving asset load performance by ~40%",
    ],
    techStack: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "bcrypt",
      "REST APIs",
      "ImageKit",
    ],
    github: "https://github.com/payaljaiswalbdh/spotify_clone",
    featured: true,
  },
  {
  title: "StudySphere",
  subtitle: "Academic Workflow Coordination Layer",
  period: "Dec 2025 — Mar 2026",
  description:
    "A full-stack MERN web application designed to manage academic and personal workflows through category-based task organization, calendar scheduling, and secure task management.",
  highlights: [
    "Implemented category-based task segmentation for structured academic and personal productivity",
    "Built drag-and-drop calendar scheduling using React Hooks and RESTful APIs to enhance planning efficiency",
    "Developed secure backend services with JWT authentication and complete CRUD operations",
    "Integrated MongoDB Atlas cloud database with Local Storage fallback for offline-first task persistence",
  ],
  techStack: [
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "JavaScript",
    "Tailwind CSS",
    "React Calendar",
    "MongoDB Atlas",
    "Local Storage",
    "JWT Authentication",
    "REST APIs",
  ],
github: "https://github.com/payaljaiswalbdh/studyplanner/tree/main/StudySphere-main",
  featured: true,
},
{
  title: "Developer Portfolio",
  subtitle: "Personal Portfolio Website",
  period: "May 2026",
  description:
    "A responsive portfolio website showcasing projects, skills, achievements, and contact information with modern UI and smooth animations.",
  highlights: [
    "Built using Next.js, TypeScript, Tailwind CSS, and Framer Motion",
    "Responsive design optimized for desktop, tablet, and mobile devices",
    "Interactive project showcase and professional developer branding",
  ],
  techStack: [
    "Next.js",
    "TypeScript",
    "React.js",
    "Tailwind CSS",
    "Framer Motion",
  ],
  github: "https://github.com/payaljaiswalbdh/My_Portfolio",
  featured: true,
}
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
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
            <Folder size={16} className="text-primary" />
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my technical expertise and problem-solving abilities
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative"
            >
              <div className="p-6 md:p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300">
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute -top-3 left-6 px-4 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full flex items-center gap-1">
                    <Sparkles size={12} />
                    Featured Project
                  </div>
                )}

                <div className="grid lg:grid-cols-[1fr,auto] gap-6">
                  {/* Content */}
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <span className="text-sm text-muted-foreground">
                        — {project.subtitle}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      <Calendar size={14} />
                      {project.period}
                    </div>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Highlights */}
                    <ul className="space-y-2 mb-6">
                      {project.highlights.map((highlight, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: i * 0.1 }}
                          className="flex items-start gap-3 text-sm text-muted-foreground"
                        >
                          <span className="w-1.5 h-1.5 mt-2 bg-primary rounded-full shrink-0" />
                          {highlight}
                        </motion.li>
                      ))}
                    </ul>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs bg-secondary/50 border border-border rounded-md text-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex lg:flex-col gap-3">
                   <a
  href={project.github}
  target="_blank"
  rel="noopener noreferrer"
  className="p-3 rounded-lg bg-secondary/50 border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
  aria-label={`View ${project.title} on GitHub`}
>
  <Github size={20} />
</a>
                    <button
                      className="p-3 rounded-lg bg-secondary/50 border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
                      aria-label="View Live Demo"
                    >
                      <ExternalLink size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* More Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/payaljaiswalbdh"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border bg-secondary/30 text-foreground rounded-lg font-medium hover:bg-secondary/50 hover:border-primary/50 transition-colors"
          >
            <Github size={20} />
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
