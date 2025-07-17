"use client"

import * as React from "react"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { ThemeToggle } from "./theme-toggle"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
]

export function Navigation() {
  const [activeSection, setActiveSection] = React.useState("")
  const { scrollY } = useScroll()
  
  // Transform values for the narrowing effect
  const navWidth = useTransform(scrollY, [0, 100], ["100%", "70%"])
  const navPadding = useTransform(scrollY, [0, 100], ["1.5rem", "1rem"])
  const navHeight = useTransform(scrollY, [0, 100], ["4rem", "3.5rem"])
  const borderRadius = useTransform(scrollY, [0, 100], ["0px", "16px"])
  const marginTop = useTransform(scrollY, [0, 100], ["0px", "12px"])

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5 }
    )

    navigation.forEach(({ href }) => {
      const element = document.querySelector(href)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center"
    >
      <motion.div
        style={{
          width: navWidth,
          borderRadius: borderRadius,
          marginTop: marginTop,
          height: navHeight,
          paddingLeft: navPadding,
          paddingRight: navPadding,
        }}
        className="bg-black/60 dark:bg-white/40 backdrop-blur-md border border-black/30 dark:border-white/30 shadow-lg shadow-black/10 dark:shadow-white/10 transition-all duration-300 flex items-center justify-between"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Link
            href="/"
            className="text-xl font-semibold tracking-tight text-foreground hover:text-primary transition-colors"
          >
            KK
          </Link>
        </motion.div>

        <div className="hidden md:flex items-center space-x-6">
          {navigation.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              <Link
                href={item.href}
                className={cn(
                  "relative text-sm font-medium transition-all duration-200 hover:text-primary",
                  "px-3 py-2 rounded-lg hover:bg-muted/50",
                  activeSection === item.href.slice(1)
                    ? "text-primary bg-muted/30"
                    : "text-muted-foreground"
                )}
              >
                {item.name}
                {activeSection === item.href.slice(1) && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute inset-0 bg-primary/10 rounded-lg border border-primary/20"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex items-center gap-3"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden sm:inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-4 py-2 text-sm font-medium transition-colors hover:bg-primary/90"
          >
            Get in touch
          </motion.button>
          <ThemeToggle />
        </motion.div>
      </motion.div>
    </motion.header>
  )
}
