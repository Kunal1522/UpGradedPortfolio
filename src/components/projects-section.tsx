"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import { cn } from "@/lib/utils"

const projects = [
  {
    title: "SaaS Analytics Platform",
    description: "A comprehensive analytics dashboard for SaaS businesses with real-time metrics, user insights, and revenue tracking.",
    image: "/project-1.jpg",
    tags: ["Next.js", "TypeScript", "Prisma", "Tailwind"],
    github: "#",
    demo: "#",
    featured: true
  },
  {
    title: "E-commerce Mobile App",
    description: "React Native app with seamless shopping experience, payment integration, and real-time order tracking.",
    image: "/project-2.jpg",
    tags: ["React Native", "Node.js", "PostgreSQL", "Stripe"],
    github: "#",
    demo: "#",
    featured: true
  },
  {
    title: "Design System Library",
    description: "Comprehensive component library with consistent design tokens, accessibility features, and developer tools.",
    image: "/project-3.jpg",
    tags: ["React", "Storybook", "Figma", "NPM"],
    github: "#",
    demo: "#",
    featured: false
  },
  {
    title: "AI Content Generator",
    description: "Machine learning powered content creation tool with natural language processing and template generation.",
    image: "/project-4.jpg",
    tags: ["Python", "OpenAI", "FastAPI", "React"],
    github: "#",
    demo: "#",
    featured: false
  }
]

function ProjectCard({ project, index }: { project: typeof projects[0], index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={cn(
        "group relative rounded-2xl border border-border bg-card overflow-hidden",
        "hover:shadow-2xl hover:shadow-black/5 dark:hover:shadow-white/5",
        "transition-all duration-500 hover:-translate-y-2",
        project.featured ? "lg:col-span-2" : ""
      )}
    >
      <div className="aspect-video relative overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            // Fallback gradient background
            e.currentTarget.style.display = 'none'
          }}
        />
        {/* Fallback gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 dark:from-blue-500/10 dark:to-purple-500/10" />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Project links */}
        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a
            href={project.github}
            className="p-2 rounded-lg glass text-white hover:bg-white/20 transition-colors"
            aria-label="View source code"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={project.demo}
            className="p-2 rounded-lg glass text-white hover:bg-white/20 transition-colors"
            aria-label="View live demo"
          >
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A collection of projects that showcase my expertise in modern web development, 
            from concept to deployment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button
            className={cn(
              "inline-flex items-center justify-center rounded-lg",
              "border border-border bg-card text-card-foreground px-6 py-3",
              "font-medium transition-all duration-200",
              "hover:bg-accent hover:text-accent-foreground hover:scale-105",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            )}
          >
            <Github className="h-4 w-4 mr-2" />
            View All Projects
          </button>
        </motion.div>
      </div>
    </section>
  )
}
