"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"

const experiences = [
  {
    company: "TechCorp Inc.",
    position: "Senior Full Stack Developer",
    duration: "2022 - Present",
    description: "Leading development of scalable web applications serving 100K+ users. Architected microservices infrastructure and mentored junior developers.",
    logo: "/company-1.jpg",
    technologies: ["React", "Node.js", "AWS", "PostgreSQL"]
  },
  {
    company: "StartupXYZ",
    position: "Frontend Lead",
    duration: "2020 - 2022",
    description: "Built the entire frontend architecture from scratch. Implemented design system and improved performance by 60%.",
    logo: "/company-2.jpg",
    technologies: ["Next.js", "TypeScript", "Tailwind", "Vercel"]
  },
  {
    company: "Digital Agency Co.",
    position: "Full Stack Developer",
    duration: "2019 - 2020",
    description: "Developed custom solutions for enterprise clients. Collaborated with design teams to create pixel-perfect implementations.",
    logo: "/company-3.jpg",
    technologies: ["Vue.js", "Python", "Django", "Docker"]
  },
  {
    company: "FreelanceWork",
    position: "Independent Developer",
    duration: "2018 - 2019",
    description: "Worked with various clients on web development projects. Gained experience in project management and client relations.",
    logo: "/company-4.jpg",
    technologies: ["WordPress", "PHP", "JavaScript", "MySQL"]
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
        <div className="rounded-2xl border border-border bg-card p-6 group-hover:bg-accent/50 transition-all duration-300 hover:shadow-lg">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
            <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
              {experience.position}
            </h3>
            <span className="text-sm font-medium text-muted-foreground bg-secondary px-3 py-1 rounded-full">
              {experience.duration}
            </span>
          </div>
          
          <p className="text-foreground font-medium mb-3">{experience.company}</p>
          
          <p className="text-muted-foreground mb-4 leading-relaxed">
            {experience.description}
          </p>
          
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs font-medium rounded bg-primary/10 text-primary"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 lg:py-32">
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
