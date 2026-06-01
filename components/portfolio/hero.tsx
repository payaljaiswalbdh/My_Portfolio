"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Phone, Code2 } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border mb-6"
            >
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm text-muted-foreground">
                Open to Internships & Full-Time Roles
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-5xl md:text-7xl font-bold leading-tight mb-6"
            >
              <span className="text-foreground">Hi, I&apos;m</span>
              <br />
              <span className="gradient-text text-glow">Payal Jaiswal</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl md:text-2xl text-muted-foreground mb-6"
            >
              Full-Stack Developer
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-lg"
            >
              Computer Science undergraduate with strong problem-solving skills
              and a solid foundation in software development. Experienced in
              building full-stack applications with a focus on scalable backend
              systems and RESTful APIs.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <a
                href="#projects"
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center gap-2 glow"
              >
                <Code2 size={20} />
                View Projects
              </a>
              <a
                href="#contact"
                className="px-8 py-3 border border-border bg-secondary/30 text-foreground rounded-lg font-medium hover:bg-secondary/50 transition-colors"
              >
                Get in Touch
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex items-center gap-4"
            >
              <a
  href="https://github.com/payaljaiswalbdh"
  target="_blank"
  rel="noopener noreferrer"
   title="GitHub"
  className="p-3 rounded-lg bg-secondary/50 border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
  aria-label="GitHub Profile"
>
  <Github size={22} />
</a>

<a
  href="https://www.linkedin.com/in/payal-jaiswal-451703282"
  target="_blank"
  rel="noopener noreferrer"
   title="LinkedIn"
  className="p-3 rounded-lg bg-secondary/50 border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
  aria-label="LinkedIn Profile"
>
  <Linkedin size={22} />
</a>

<a
  href="mailto:payaljaiswalbdh@gmail.com"
   title="Email"
  className="p-3 rounded-lg bg-secondary/50 border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
  aria-label="Email"
>
  <Mail size={22} />
</a>
              <a
                href="tel:+919044171224"
                className="p-3 rounded-lg bg-secondary/50 border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
                aria-label="Phone"
              >
                <Phone size={22} />
              </a>
            </motion.div>
          </motion.div>

          {/* Right side - Profile Image */}
<motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ delay: 0.4, duration: 0.8 }}
  className="relative flex justify-center lg:justify-end"
>
  <div className="relative">
    {/* Profile Image */}
    <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/50 glow">
      <img
        src="/pj image.jpeg"
        alt="Payal Jaiswal"
        className="w-full h-full object-cover"
      />
    </div>

    {/* Floating Badge 1 */}
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
      className="absolute -top-4 -right-4 px-4 py-2 bg-card border border-border rounded-lg shadow-lg"
    >
      <span className="text-sm font-medium text-primary">200+</span>
      <span className="text-xs text-muted-foreground ml-1">
        LeetCode
      </span>
    </motion.div>

    {/* Floating Badge 2 */}
    <motion.div
      animate={{ y: [0, 10, 0] }}
      transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
      className="absolute -bottom-4 -left-4 px-4 py-2 bg-card border border-border rounded-lg shadow-lg"
    >
      <span className="text-sm font-medium text-primary">5★</span>
      <span className="text-xs text-muted-foreground ml-1">
        HackerRank
      </span>
    </motion.div>
  </div>
</motion.div>
          
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-sm">Scroll Down</span>
            <ArrowDown size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
