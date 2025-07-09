"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Twitter, Heart } from "lucide-react"
import { cn } from "@/lib/utils"

const socialLinks = [
  { name: "GitHub", href: "#", icon: Github },
  { name: "LinkedIn", href: "#", icon: Linkedin },
  { name: "Twitter", href: "#", icon: Twitter },
]

const navigation = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start"
        >
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground">Kunal Kashyap</h3>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Building exceptional digital experiences with modern technologies 
              and thoughtful design.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "w-10 h-10 rounded-lg border border-border bg-background",
                    "flex items-center justify-center text-muted-foreground",
                    "hover:bg-accent hover:text-accent-foreground hover:border-primary/20",
                    "transition-all duration-200 hover:scale-105",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  )}
                  aria-label={link.name}
                >
                  <link.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="font-medium text-foreground">Navigation</h4>
            <nav className="flex flex-col space-y-3">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors w-fit"
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-medium text-foreground">Get in Touch</h4>
            <div className="space-y-2">
              <a
                href="mailto:kunal@example.com"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                kunal@example.com
              </a>
              <p className="text-muted-foreground">
                Available for freelance and full-time opportunities
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4"
        >
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Made with <Heart className="h-3 w-3 text-red-500 fill-current" /> using Next.js & Tailwind CSS
          </p>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Kunal Kashyap. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
