"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

const skills = [
  "React & Next.js",
  "TypeScript",
  "Node.js",
  "Python",
  "UI/UX Design",
  "System Architecture",
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 lg:py-32 bg-gradient-to-br from-sky-50/30 to-cyan-50/20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center"
        >
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:mx-0">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-sky-400/15 to-cyan-400/10 dark:from-sky-400/10 dark:to-cyan-400/5" />
              <div className="relative h-full rounded-2xl overflow-hidden border border-sky-200/50 dark:border-sky-800/30 bg-card shadow-lg shadow-sky-100/20 dark:shadow-sky-900/20">
                <Image
                  src="/Profile.png"
                  alt="Kunal Kashyap"
                  fill
                  className="object-cover z-20"
                  priority
                  sizes="(max-width: 768px) 100vw, 400px"
                  onError={(e) => {
                    // Fallback to a colored div if image doesn't exist
                    console.error("Failed to load profile image");
                    e.currentTarget.style.display = "none";
                  }}
                />
                {/* Fallback colored div with light blue theme */}
                <div className="absolute inset-0 bg-gradient-to-br from-sky-100 to-cyan-200 dark:from-sky-800 dark:to-cyan-900 flex items-center justify-center z-10">
                  <span className="text-6xl font-bold text-sky-600 dark:text-sky-300">
                    KK
                  </span>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                className="absolute -top-4 -right-4 w-16 h-16 rounded-full glass flex items-center justify-center"
              >
                <span className="text-2xl">🚀</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                viewport={{ once: true }}
                className="absolute -bottom-4 -left-4 w-12 h-12 rounded-full glass flex items-center justify-center"
              >
                <span className="text-lg">⚡</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6"
              >
                Code. Scale.
                <br />
                <span className="text-muted-foreground">Compete. Repeat.</span>
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="space-y-4 text-lg text-muted-foreground leading-relaxed"
              >
                <p>
                  Hi, I’m currently pursuing my Bachelor's in Electronics and
                  Communication Engineering from BIT Mesra. I specialize in
                  backend development and enjoy creating scalable,
                  high-performance systems.
                </p>
                <p>
                  In my free time, I actively take part in competitive
                  programming and problem-solving contests. I’ve worked on
                  several self-initiated tech solutions, including building my
                  own SaaS product. With a strong passion for learning and
                  building, I’m always exploring new ideas through code.
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Core Expertise
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
                    viewport={{ once: true }}
                    className={cn(
                      "group relative px-4 py-2 rounded-lg border border-border bg-card text-card-foreground",
                      "text-sm font-medium text-center",
                      "hover:bg-accent hover:text-accent-foreground transition-all duration-300 cursor-default",
                      "hover:scale-105 hover:shadow-md"
                    )}
                  >
                    {/* Subtle hover effect */}
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="relative">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
