"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"

const experiences = [
  {
    company: "BIT Mesra",
    position: "App Developer - Bitotsav",
    duration: "2025 - 2025",
    description: "Led the development of official website of BIT Mesra for Bitotsav'25, East India's biggest cultural fest. Built QR-based ticketing system and mobile app, resolving 200+ technical issues.",
    logo: "/bittotsav.jpg",
    technologies: ["Next.js", "React Native", "Redux", "MongoDB"]
  },
  {
    company: "BIT Mesra",
    position: "Co-Director",
    duration: "2023 - Present",
    description: "Co-director of BIT Mesra, organized workshops on data structures and algorithms. Developed the official website of IEEE BIT Mesra and led various technical initiatives.",
    logo: "/company-2.jpg",
    technologies: ["Next.js", "JavaScript", "Web Development", "Leadership"]
  },
  {
    company: "Independent Developer",
    position: "Freelance Full Stack Developer",
    duration: "2022 - 2023",
    description: "Worked with multiple clients as an independent developer. Focused on upskilling and learning new technologies while delivering custom web solutions.",
    logo: "/Profile.png",
    technologies: ["React", "Node.js", "MongoDB", "Full Stack Development"]
  }
]

function ExperienceCard({ experience, index }: { experience: typeof experiences[0], index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative flex gap-6 group"
    >
      {/* Timeline line */}
      <div className="relative flex flex-col items-center">
        <div className="w-12 h-12 rounded-xl border-2 border-border bg-card flex items-center justify-center overflow-hidden group-hover:border-primary transition-colors">
          <Image
            src={experience.logo}
            alt={experience.company}
            width={32}
            height={32}
            className="rounded-lg"
            onError={(e) => {
              e.currentTarget.style.display = 'none'
            }}
          />
          {/* Fallback */}
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold">
            {experience.company[0]}
          </div>
        </div>
        
        {index !== experiences.length - 1 && (
          <div className="w-px h-full bg-border mt-4 group-hover:bg-primary/30 transition-colors" />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 pb-12">
        <div className="relative rounded-2xl border border-border bg-card p-6 group-hover:bg-accent/50 transition-all duration-300 hover:shadow-lg overflow-hidden">
          
          {/* Simple Hover Overlay */}
          <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
          
          {/* Content */}
          <div className="relative z-10">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
              <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                {experience.position}
              </h3>
              <span className="text-sm font-medium text-muted-foreground bg-secondary px-3 py-1 rounded-full group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                {experience.duration}
              </span>
            </div>
            
            <p className="text-foreground font-medium mb-3 group-hover:text-primary/80 transition-colors">{experience.company}</p>
            
            <p className="text-muted-foreground mb-4 leading-relaxed group-hover:text-foreground/70 transition-colors">
              {experience.description}
            </p>
            
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 text-xs font-medium rounded bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 lg:py-32 bg-gradient-to-br from-cyan-50/40 to-sky-50/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6">
            Professional Journey
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            My career path through different roles and companies, 
            building expertise in modern web development and team leadership.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <ExperienceCard key={experience.company} experience={experience} index={index} />
          ))}
        </div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-8 px-8 py-4 rounded-2xl border border-border bg-card">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">5+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">15+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
