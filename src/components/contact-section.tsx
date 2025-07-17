"use client"

import { motion } from "framer-motion"
import { Mail, MessageCircle, Calendar, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

const contactMethods = [
  {
    icon: Mail,
    title: "Email Me",
    description: "Drop me a line and I'll get back to you within 24 hours",
    action: "kunalkashyap8024@gmail.com",
    href: "mailto:kunalkashyap8024@gmail.com"
  },
  {
    icon: Calendar,
    title: "Book Meeting",
    description: "Book a 30-minute discovery session",
    action: "View Calendar",
    href: "#"
  }
]

export function ContactSection() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-gradient-to-br from-sky-50/50 to-cyan-50/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6">
            Let's Work Together
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? I'm always excited to work on new projects 
            and collaborate with amazing people.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-foreground mb-8">Get In Touch</h3>
            
            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={method.title}
                  href={method.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  className={cn(
                    "group flex items-start gap-4 p-6 rounded-2xl",
                    "border border-black/20 dark:border-white/20 bg-black/10 dark:bg-white/20 backdrop-blur-md",
                    "hover:bg-black/20 dark:hover:bg-white/30 hover:shadow-lg transition-all duration-300",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  )}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <method.icon className="h-5 w-5" />
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                      {method.title}
                    </h4>
                    <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                      {method.description}
                    </p>
                    <div className="flex items-center text-sm font-medium text-primary group-hover:text-primary transition-colors">
                      <span>{method.action}</span>
                      <ArrowRight className="h-3 w-3 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="rounded-2xl border border-black/20 dark:border-white/20 bg-black/10 dark:bg-white/20 backdrop-blur-md p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Send a Message</h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className={cn(
                        "w-full px-4 py-3 rounded-lg border border-black/20 dark:border-white/20",
                        "bg-black/5 dark:bg-white/10 backdrop-blur-md text-foreground",
                        "focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50",
                        "placeholder-muted-foreground transition-colors"
                      )}
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className={cn(
                        "w-full px-4 py-3 rounded-lg border border-black/20 dark:border-white/20",
                        "bg-black/5 dark:bg-white/10 backdrop-blur-md text-foreground",
                        "focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50",
                        "placeholder-muted-foreground transition-colors"
                      )}
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className={cn(
                      "w-full px-4 py-3 rounded-lg border border-black/20 dark:border-white/20",
                      "bg-black/5 dark:bg-white/10 backdrop-blur-md text-foreground",
                      "focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50",
                      "placeholder-muted-foreground transition-colors"
                    )}
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className={cn(
                      "w-full px-4 py-3 rounded-lg border border-black/20 dark:border-white/20",
                      "bg-black/5 dark:bg-white/10 backdrop-blur-md text-foreground",
                      "focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50",
                      "placeholder-muted-foreground transition-colors"
                    )}
                    placeholder="Let's work together"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className={cn(
                      "w-full px-4 py-3 rounded-lg border border-black/20 dark:border-white/20",
                      "bg-black/5 dark:bg-white/10 backdrop-blur-md text-foreground",
                      "focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50",
                      "placeholder-muted-foreground transition-colors resize-none"
                    )}
                    placeholder="Tell me about your project..."
                  />
                </div>
                
                <button
                  type="submit"
                  className={cn(
                    "w-full group relative inline-flex items-center justify-center rounded-lg",
                    "bg-black/60 dark:bg-white/40 backdrop-blur-md border border-black/30 dark:border-white/30",
                    "text-white dark:text-black px-6 py-3",
                    "font-medium transition-all duration-200",
                    "hover:bg-black/80 dark:hover:bg-white/60 hover:scale-105",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                    "shadow-lg hover:shadow-xl"
                  )}
                >
                  <span className="mr-2">Send Message</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
