"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, Sparkles, TrendingUp, Users, Zap } from "lucide-react"
import Image from "next/image"
import { cn } from "@/lib/utils"

const projects = [
  {
    title: "Bitotsav'25",
    description: "Developed the official website and QR-based ticketing system for Bitotsav'25, East India's biggest cultural fest, streamlining participant verification and engagement. Built key pages and an Android app, resolving 200+ technical issues and boosting online activity by 40%.",
    image: "/bittotsav.jpg",
    tags: ["Next.js", "Javascript", "Redux", "Tailwind CSS", "Prisma", "MongoDB", "Radix UI"],
    github: "https://github.com/Kunal1522/website",
    demo: "https://www.bitotsav.com/",
    featured: true,
    status: "Live",
    metrics: { users: "10k+", growth: "+40%", rating: "4.9" },
    gradient: "from-sky-400 to-cyan-500"
  },
  {
    title: "Waste Management App",
    description: "Built a web platform promoting sustainable waste management by enabling efficient collection, segregation, and treatment tracking. Designed an interactive UI to educate users and drive eco-conscious behavior.",
    image: "/wastemanage.jpg",
    tags: ["Next.js", "Javascript", "Tailwind CSS", "MongoDB", "Express"],
    github: "https://github.com/Kunal1522/WASTE-MANAGEMENT-BIT-",
    demo: "https://waste-management-bit.vercel.app/",
    featured: false,
    status: "Live",
    metrics: { users: "5k+", growth: "+250%", rating: "4.8" },
    gradient: "from-green-400 to-emerald-500"
  },
  {
    title: "MoleculeX",
    description: "AI-powered drug research platform that enables advanced molecule search and machine learning–driven drug modeling for controlled compound generation. It supports secure user access, real-time collaboration, and scalable data handling to streamline pharmaceutical research.",
    image: "/moleculex.jpg",
    tags: ["Next.js", "Node.js", "MongoDB", "RdKit"],
    github: "https://github.com/Kunal1522/MoleculeX-Lab",
    demo: "https://molecule-x-lab-2.vercel.app/auth-page/signin",
    featured: false,
    status: "Live",
    metrics: { users: "2k+", growth: "+180%", rating: "4.7" },
    gradient: "from-purple-400 to-pink-500"
  },
  {
    title: "CodeForcesTracker",
    description: "Designed a highly scalable full-stack architecture for tracking Codeforces activity, supporting over 10,000 student profiles with modular CRUD operations. Implemented efficient asynchronous background jobs and daily cron-based sync for 99% data freshness, ensuring timely updates while optimizing API calls by 30%.",
    image: "/codeforces-manage.jpg",
    tags: ["Full Stack", "CRUD", "Cron Jobs", "API Optimization"],
    github: "https://github.com/Kunal1522/smart-cp-eliminator",
    demo: "https://drive.google.com/file/d/1QjsxaVuYR7GWbGd6Ip2FRyo1G9dnwOSe/view",
    featured: false,
    status: "Development",
    metrics: { users: "10k+", growth: "+30%", rating: "4.9" },
    gradient: "from-sky-500 to-cyan-400"
  },
  {
    title: "C++ Chat Server",
    description: "Constructed a high-performance real-time chat server using Boost.Asio, enabling seamless multi-client communication with efficient message delivery and multithreading support.",
    image: "/chatserver.jpg",
    tags: ["C++", "Boost.Asio", "MultiThreading", "Networking"],
    github: "https://github.com/Kunal1522/C-Chat-Server",
    demo: "#",
    featured: false,
    status: "Open Source",
    metrics: { users: "500+", growth: "+150%", rating: "4.8" },
    gradient: "from-orange-400 to-red-500"
  }
]

function ProjectCard({ project, index }: { project: typeof projects[0], index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: index * 0.15, type: "spring", bounce: 0.3 }}
      viewport={{ once: true }}
      className={cn(
        "group relative rounded-3xl border border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden h-full",
        "hover:shadow-2xl hover:shadow-black/10 dark:hover:shadow-white/10",
        "transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02]",
        "before:absolute before:inset-0 before:rounded-3xl before:p-[1px]",
        "before:bg-gradient-to-br before:from-primary/20 before:to-transparent",
        "before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500"
      )}
    >
      {/* Premium Status Badge */}
      <div className="absolute top-4 left-4 z-50">
        <span className={cn(
          "inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold",
          "backdrop-blur-md border border-white/30 shadow-lg",
          project.status === "Live" && "bg-emerald-500/20 text-emerald-200 border-emerald-400/40",
          project.status === "Beta" && "bg-blue-500/20 text-blue-200 border-blue-400/40",
          project.status === "Open Source" && "bg-purple-500/20 text-purple-200 border-purple-400/40",
          project.status === "Development" && "bg-orange-500/20 text-orange-200 border-orange-400/40"
        )}>
          <Sparkles className="w-3 h-3 mr-1" />
          {project.status}
        </span>
      </div>

      {/* Image Section with Premium Overlay */}
      <div className={cn(
        "relative overflow-hidden",
        project.featured ? "aspect-[3/1] lg:aspect-[4/1]" : "aspect-video"
      )}>
        {/* Fallback Gradient Background */}
        <div className={cn(
          "absolute inset-0 bg-gradient-to-br transition-all duration-500",
          project.gradient
        )} />
        
        {/* Project Title Overlay for visual appeal */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <h4 className="text-white text-xl md:text-2xl font-bold text-center px-6 drop-shadow-lg">
            {project.title}
          </h4>
        </div>
        
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110 relative z-10"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        {/* Premium Gradient Overlay */}
        <div className={cn(
          "absolute inset-0 bg-gradient-to-br opacity-40 group-hover:opacity-20 transition-opacity duration-500 z-20",
          "bg-black/30"
        )} />
        
        {/* Metrics Overlay */}
        <div className="absolute top-4 right-4 flex flex-col gap-2 z-30">
          <div className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-md text-white text-xs font-medium">
            <Users className="w-3 h-3" />
            {project.metrics.users}
          </div>
          <div className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-md text-white text-xs font-medium">
            <TrendingUp className="w-3 h-3" />
            {project.metrics.growth}
          </div>
        </div>
        
        {/* Premium Action Buttons */}
        <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center z-40">
          <div className="flex gap-4">
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all text-white group/btn"
              aria-label="View source code"
            >
              <Github className="h-6 w-6 group-hover/btn:rotate-12 transition-transform" />
            </motion.a>
            <motion.a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all text-white group/btn"
              aria-label="View live demo"
            >
              <ExternalLink className="h-6 w-6 group-hover/btn:rotate-12 transition-transform" />
            </motion.a>
          </div>
        </div>
      </div>
      
      {/* Content Section */}
      <div className={cn(
        project.featured ? "p-8 lg:p-12" : "p-6 lg:p-8",
        project.featured ? "space-y-6 lg:space-y-8" : "space-y-4"
      )}>
        <div className={cn(
          "flex items-start justify-between",
          project.featured ? "flex-col lg:flex-row lg:items-center gap-4" : ""
        )}>
          <div className="flex-1">
            <h3 className={cn(
              "font-bold text-foreground group-hover:text-primary transition-colors",
              project.featured ? "text-2xl lg:text-4xl" : "text-xl"
            )}>
              {project.title}
            </h3>
            {project.featured && (
              <p className={cn(
                "text-muted-foreground leading-relaxed mt-4",
                "text-lg lg:text-xl max-w-3xl"
              )}>
                {project.description}
              </p>
            )}
          </div>
          <div className="flex items-center gap-1 text-yellow-500 flex-shrink-0">
            <span className={cn(
              "font-semibold",
              project.featured ? "text-lg" : "text-sm"
            )}>{project.metrics.rating}</span>
            <Sparkles className={cn(
              "fill-current",
              project.featured ? "w-5 h-5" : "w-4 h-4"
            )} />
          </div>
        </div>
        
        {!project.featured && (
          <p className={cn(
            "text-muted-foreground leading-relaxed text-base"
          )}>
            {project.description}
          </p>
        )}
        
        {/* Premium Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, tagIndex) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 + tagIndex * 0.05 }}
              className={cn(
                "font-semibold rounded-full",
                "bg-gradient-to-r from-primary/10 to-primary/5",
                "border border-primary/20 text-primary",
                "hover:from-primary/20 hover:to-primary/10 transition-all duration-300",
                "hover:scale-105 cursor-default",
                project.featured ? "px-6 py-3 text-base" : "px-4 py-2 text-sm"
              )}
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 lg:py-32 bg-gradient-to-br from-sky-50/50 to-cyan-50/30 relative overflow-hidden">
      {/* Background Decoration with light blue theme */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-10 left-10 w-72 h-72 bg-sky-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-400/8 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, type: "spring", bounce: 0.4 }}
            className="inline-flex items-center justify-center p-2 rounded-full bg-gradient-to-r from-primary/20 to-primary/10 border border-primary/20 mb-6"
          >
            <Zap className="h-5 w-5 text-primary" />
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A collection of projects that showcase my expertise in modern web development, 
            from concept to deployment with real-world impact.
          </p>
        </motion.div>

        <div className="space-y-6 lg:space-y-8">
          {/* First project - full width */}
          <div className="w-full">
            <ProjectCard project={projects[0]} index={0} />
          </div>
          
          {/* Middle projects - single column on mobile, 2 columns on larger screens */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <ProjectCard project={projects[1]} index={1} />
            <ProjectCard project={projects[2]} index={2} />
          </div>
          
          {/* Last two projects - 50% each */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <ProjectCard project={projects[3]} index={3} />
            <ProjectCard project={projects[4]} index={4} />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            onClick={() => window.open('https://github.com/Kunal1522', '_blank')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={cn(
              "inline-flex items-center justify-center rounded-xl px-8 py-4",
              "bg-black/60 dark:bg-white/40 backdrop-blur-md border border-black/30 dark:border-white/30",
              "text-white dark:text-black font-semibold shadow-lg hover:shadow-xl",
              "transition-all duration-300 hover:bg-black/80 dark:hover:bg-white/50"
            )}
          >
            <Github className="h-5 w-5 mr-2" />
            View All Projects
            <ExternalLink className="h-4 w-4 ml-2" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
