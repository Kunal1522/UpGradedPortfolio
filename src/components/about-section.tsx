"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"

const skills = [
  "React & Next.js",
  "TypeScript",
  "Node.js",
  "Python",
  "UI/UX Design",
  "System Architecture"
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-32">
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
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 dark:from-blue-500/5 dark:to-purple-500/5" />
              <div className="relative h-full rounded-2xl overflow-hidden border border-border bg-card">
                <Image
                  src="/placeholder-portrait.jpg"
                  alt="Kunal Kashyap"
                  fill
                  className="object-cover"
                  onError={(e) => {
                    // Fallback to a colored div if image doesn't exist
                    e.currentTarget.style.display = 'none'
                  }}
                />
                {/* Fallback colored div */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-800 flex items-center justify-center">
                  <span className="text-6xl font-bold text-muted-foreground">KK</span>
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
                Building the future,
                <br />
                <span className="text-muted-foreground">one line at a time</span>
              </motion.h2>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="space-y-4 text-lg text-muted-foreground leading-relaxed"
              >
                <p>
                  I'm a passionate developer with 5+ years of experience creating 
                  digital experiences that blend beautiful design with robust functionality. 
                  My journey spans from early-stage startups to enterprise solutions.
                </p>
                <p>
                  I believe in the power of clean code, thoughtful design, and 
                  the importance of building products that truly serve their users. 
                  Every project is an opportunity to push boundaries and learn something new.
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-foreground mb-4">Core Expertise</h3>
              <div className="grid grid-cols-2 gap-3">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
                    viewport={{ once: true }}
                    className={cn(
                      "px-4 py-2 rounded-lg border border-border bg-card text-card-foreground",
                      "text-sm font-medium text-center",
                      "hover:bg-accent hover:text-accent-foreground transition-colors"
                    )}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
