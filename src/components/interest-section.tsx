"use client"

import { motion } from "framer-motion"
import { 
  Calculator, 
  Mic, 
  Book, 
  Twitter,
  Palette,
  Globe
} from "lucide-react"
import { cn } from "@/lib/utils"

const interests = [
  {
    icon: Calculator,
    title: "Problem Solving - Maths",
    description: "Solving complex mathematical problems and algorithmic challenges",
    gradient: "from-sky-400 to-cyan-500",
    delay: 0
  },
  {
    icon: Mic,
    title: "Giving Public Talk",
    description: "Sharing knowledge and inspiring others through public speaking",
    gradient: "from-blue-400 to-sky-500",
    delay: 0.1
  },
  {
    icon: Book,
    title: "Reading Books",
    description: "Expanding knowledge and exploring new ideas through literature",
    gradient: "from-cyan-400 to-blue-500",
    delay: 0.2
  },
  {
    icon: Twitter,
    title: "Posting on X",
    description: "Sharing insights and connecting with the tech community",
    gradient: "from-sky-500 to-cyan-400",
    delay: 0.3
  }
]

function InterestCard({ interest, index }: { interest: typeof interests[0], index: number }) {
  const Icon = interest.icon
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.8 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.6, 
        delay: interest.delay,
        type: "spring",
        bounce: 0.4
      }}
      viewport={{ once: true }}
      whileHover={{ 
        y: -10, 
        scale: 1.05,
        transition: { duration: 0.3, type: "spring", bounce: 0.6 }
      }}
      className={cn(
        "group relative p-6 rounded-2xl",
        "bg-card/50 backdrop-blur-sm border border-border/50",
        "hover:shadow-xl hover:shadow-black/10 dark:hover:shadow-white/5",
        "transition-all duration-300 overflow-hidden cursor-pointer",
        "before:absolute before:inset-0 before:rounded-2xl before:p-[1px]",
        "before:bg-gradient-to-br before:from-primary/20 before:to-transparent",
        "before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500"
      )}
    >
      {/* Gradient Background */}
      <div className={cn(
        "absolute inset-0 bg-gradient-to-br opacity-5 group-hover:opacity-10 transition-opacity duration-500",
        interest.gradient
      )} />
      
      {/* Icon with Premium Styling */}
      <div className="relative mb-4">
        <motion.div
          whileHover={{ rotate: 12, scale: 1.1 }}
          transition={{ duration: 0.3, type: "spring", bounce: 0.6 }}
          className={cn(
            "inline-flex p-4 rounded-xl",
            "bg-gradient-to-br bg-opacity-20 backdrop-blur-sm",
            "border border-white/10 shadow-lg",
            interest.gradient,
            "group-hover:shadow-xl transition-shadow duration-300"
          )}
        >
          <Icon className="h-6 w-6 text-white drop-shadow-sm" />
        </motion.div>
      </div>
      
      {/* Content */}
      <div className="relative space-y-3">
        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
          {interest.title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {interest.description}
        </p>
      </div>
      
      {/* Decorative Elements */}
      <div className={cn(
        "absolute top-0 right-0 w-20 h-20 rounded-full blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500",
        `bg-gradient-to-br ${interest.gradient}`
      )} />
    </motion.div>
  )
}

export function InterestSection() {
  return (
    <section id="interests" className="py-24 lg:py-32 bg-gradient-to-br from-cyan-50/40 to-sky-50/60 relative overflow-hidden">
      {/* Background Pattern with light blue theme */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
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
            <Palette className="h-5 w-5 text-primary" />
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6">
            Beyond the Code
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            When I&apos;m not crafting digital experiences, you&apos;ll find me exploring these passions that fuel my creativity and inspiration.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {interests.map((interest, index) => (
            <InterestCard key={interest.title} interest={interest} index={index} />
          ))}
        </div>
        
        {/* Bottom Decorative Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/20">
            <Globe className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Always exploring, always learning</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
