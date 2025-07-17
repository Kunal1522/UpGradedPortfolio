"use client"

import { motion, useMotionValue, useTransform, useScroll } from "framer-motion"
import { ArrowRight, Download } from "lucide-react"
import { cn } from "@/lib/utils"
import { useEffect, useState, useRef } from "react"
import { useSpring, animated, useTrail, config } from "@react-spring/web"
import { useInView } from "react-intersection-observer"

// Shooting Star Animation Component
const ShootingStar = ({ delay = 0 }: { delay?: number }) => {
  return (
    <motion.div
      initial={{ 
        x: -100, 
        y: -100, 
        opacity: 0, 
        scale: 0 
      }}
      animate={{
        x: ['-100px', '100vw'],
        y: ['-100px', '100vh'],
        opacity: [0, 1, 1, 0],
        scale: [0, 1, 1, 0],
      }}
      transition={{
        duration: 3,
        delay: delay,
        repeat: Infinity,
        repeatDelay: Math.random() * 10 + 5,
        ease: "easeOut"
      }}
      className="absolute pointer-events-none z-10"
    >
      <div className="relative">
        {/* Main star */}
        <div className="w-2 h-2 bg-white rounded-full shadow-[0_0_20px_rgba(255,255,255,0.8)]" />
        
        {/* Shooting trail */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: ['0px', '80px', '0px'] }}
          transition={{
            duration: 3,
            delay: delay,
            repeat: Infinity,
            repeatDelay: Math.random() * 10 + 5,
            ease: "easeOut"
          }}
          className="absolute top-1/2 right-full h-[1px] bg-gradient-to-r from-transparent via-white to-transparent opacity-80"
          style={{
            transform: 'translateY(-50%) rotate(45deg)',
            transformOrigin: 'right center'
          }}
        />
        
        {/* Glow effect */}
        <div className="absolute inset-0 w-2 h-2 bg-sky-400/30 rounded-full blur-sm animate-pulse" />
      </div>
    </motion.div>
  )
}

// Multiple Shooting Stars Container
const ShootingStars = () => {
  const stars = Array.from({ length: 3 }, (_, i) => i)
  
  return (
    <div className="absolute inset-0 overflow-hidden">
      {stars.map((star, index) => (
        <ShootingStar key={star} delay={index * 4} />
      ))}
    </div>
  )
}

// Elegant floating elements
const FloatingElements = () => {
  return (
    <>
      {/* Elegant geometric shapes with light blue theme */}
      <motion.div
        className="absolute w-24 h-24 border border-sky-300/20 rounded-full"
        style={{ top: '15%', left: '10%' }}
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <motion.div
        className="absolute w-16 h-16 border border-cyan-400/15 rounded-lg"
        style={{ top: '60%', right: '15%' }}
        animate={{
          rotate: [0, -360],
          y: [0, -20, 0],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute w-8 h-8 bg-gradient-to-r from-sky-400/20 to-cyan-400/20 rounded-full"
        style={{ top: '25%', right: '25%' }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </>
  )
}

// Magnetic interaction hook (simplified)
const useMagneticEffect = (strength = 0.1) => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      
      const deltaX = (e.clientX - centerX) * strength
      const deltaY = (e.clientY - centerY) * strength
      
      setPosition({ x: deltaX, y: deltaY })
    }

    const handleMouseLeave = () => {
      setPosition({ x: 0, y: 0 })
    }

    element.addEventListener('mousemove', handleMouseMove)
    element.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      element.removeEventListener('mousemove', handleMouseMove)
      element.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [strength])

  return { ref, position }
}

export function HeroSection() {
  const { scrollY } = useScroll()
  const { ref: inViewRef, inView } = useInView({ threshold: 0.3 })
  
  // Parallax transforms (lighter)
  const backgroundY = useTransform(scrollY, [0, 1000], [0, -100])
  const contentY = useTransform(scrollY, [0, 1000], [0, -50])
  
  // Magnetic effect for main title
  const { ref: titleRef, position: titlePosition } = useMagneticEffect(0.05)

  // Text animations
  const nameChars = "Kunal Kashyap".split("")
  const titleChars = "Developer & Builder".split("")
  
  const nameTrail = useTrail(nameChars.length, {
    from: { opacity: 0, transform: 'translateY(40px)' },
    to: inView 
      ? { opacity: 1, transform: 'translateY(0px)' }
      : { opacity: 0, transform: 'translateY(40px)' },
    config: config.gentle,
    delay: 200
  })

  const titleTrail = useTrail(titleChars.length, {
    from: { opacity: 0, transform: 'translateY(30px)' },
    to: inView 
      ? { opacity: 1, transform: 'translateY(0px)' }
      : { opacity: 0, transform: 'translateY(30px)' },
    config: { ...config.gentle, tension: 200, friction: 20 },
    delay: 500
  })

  // Status badge animation
  const statusAnimation = useSpring({
    from: { opacity: 0, scale: 0.8 },
    to: inView 
      ? { opacity: 1, scale: 1 }
      : { opacity: 0, scale: 0.8 },
    config: config.gentle,
    delay: 100
  })

  // Description animation
  const descriptionAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: inView 
      ? { opacity: 1, transform: 'translateY(0px)' }
      : { opacity: 0, transform: 'translateY(20px)' },
    config: config.gentle,
    delay: 800
  })

  // Button animations
  const buttonsAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: inView 
      ? { opacity: 1, transform: 'translateY(0px)' }
      : { opacity: 0, transform: 'translateY(20px)' },
    config: config.gentle,
    delay: 1000
  })

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Shooting Stars Animation */}
      <ShootingStars />
      
      {/* Elegant floating elements */}
      <FloatingElements />
      
      {/* Premium gradient background with proper light/dark mode */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-50/80 via-cyan-50/40 to-blue-50/60 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800" />
      
      {/* Light mode subtle pattern */}
      <div className="absolute inset-0 bg-white/20 dark:bg-transparent" />
      
      {/* Subtle animated mesh gradient with light blue tones */}
      <motion.div
        className="absolute inset-0 opacity-40 dark:opacity-20"
        animate={{
          background: [
            'radial-gradient(circle at 20% 20%, rgba(14, 165, 233, 0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 80%, rgba(56, 189, 248, 0.12) 0%, transparent 50%)',
            'radial-gradient(circle at 40% 60%, rgba(6, 182, 212, 0.18) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 20%, rgba(14, 165, 233, 0.15) 0%, transparent 50%)',
          ]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Parallax background elements with light blue theme */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0"
      >
        {/* Elegant gradient orbs with light blue */}
        <motion.div
          className="absolute w-96 h-96 rounded-full opacity-8 dark:opacity-12"
          style={{
            background: "radial-gradient(circle, rgba(14, 165, 233, 0.15) 0%, transparent 70%)",
            left: '10%',
            top: '20%',
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.08, 0.12, 0.08],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute w-64 h-64 rounded-full opacity-8 dark:opacity-12"
          style={{
            background: "radial-gradient(circle, rgba(56, 189, 248, 0.12) 0%, transparent 70%)",
            right: '15%',
            bottom: '25%',
          }}
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.08, 0.12, 0.08],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />
      </motion.div>

      {/* Elegant grid pattern with light blue theme */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 opacity-[0.025]"
      >
        <motion.div 
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(rgba(14, 165, 233, 0.2) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(14, 165, 233, 0.2) 1px, transparent 1px)`,
            backgroundSize: '100px 100px'
          }}
          animate={{
            backgroundPosition: ['0% 0%', '2% 2%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </motion.div>
      
      <motion.div 
        ref={inViewRef}
        style={{ y: contentY }}
        className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center z-10"
      >
        <div className="mx-auto max-w-4xl">
          {/* Status badge */}
          <div className="mb-8">
            <animated.div
              style={statusAnimation}
              className="inline-block"
            >
              <motion.span
                className="inline-flex items-center rounded-full border border-black/10 dark:border-white/10 bg-white/20 dark:bg-white/10 backdrop-blur-sm px-4 py-2 text-sm font-medium text-foreground"
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: 'rgba(255,255,255,0.3)',
                  borderColor: 'rgba(14, 165, 233, 0.3)'
                }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <motion.div
                  className="w-2 h-2 bg-green-500 rounded-full mr-2"
                  animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [1, 0.7, 1]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                Available for new opportunities
              </motion.span>
            </animated.div>
          </div>

          {/* Main heading with character-level animations */}
          <div 
            ref={titleRef}
            className="mb-6"
            style={{
              transform: `translate3d(${titlePosition.x}px, ${titlePosition.y}px, 0)`,
              transition: 'transform 0.1s ease-out'
            }}
          >
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground">
              <div className="block mb-2">
                {nameTrail.map((style, index) => (
                  <animated.span
                    key={index}
                    style={style}
                    className="inline-block"
                  >
                    {nameChars[index] === ' ' ? '\u00A0' : nameChars[index]}
                  </animated.span>
                ))}
              </div>
              <div className="block text-muted-foreground relative">
                {titleTrail.map((style, index) => (
                  <animated.span
                    key={index}
                    style={style}
                    className="inline-block"
                  >
                    {titleChars[index] === ' ' ? '\u00A0' : titleChars[index]}
                  </animated.span>
                ))}
                {/* Animated underline */}
                <motion.div
                  className="absolute -bottom-2 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"
                  initial={{ width: 0 }}
                  animate={{ width: inView ? "100%" : 0 }}
                  transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                />
              </div>
            </h1>
          </div>

          {/* Description */}
          <animated.p
            style={descriptionAnimation}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          >
           I’m a backend developer who enjoys building scalable systems. Alongside development, I’m also a competitive programmer and like to take part in coding contests during my free time.
          </animated.p>

          {/* Action buttons */}
          <animated.div
            style={buttonsAnimation}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className={cn(
                "group relative inline-flex items-center justify-center rounded-lg",
                "bg-black/60 dark:bg-white/40 backdrop-blur-md border border-black/30 dark:border-white/30",
                "text-white dark:text-white px-8 py-3",
                "font-medium text-lg transition-all duration-200",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                "shadow-lg overflow-hidden"
              )}
              whileHover={{ 
                scale: 1.02, 
                y: -2,
                backgroundColor: 'rgba(0,0,0,0.6)',
                boxShadow: '0 10px 30px rgba(0,0,0,0.15)'
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative mr-2 z-10">Get in touch</span>
              <motion.div
                className="relative z-10"
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowRight className="h-4 w-4" />
              </motion.div>
            </motion.button>

            <motion.button
              onClick={() => window.open('https://drive.google.com/file/d/1sc_yfTJWMpEpl0pBu41JPr209AmNY90J/view?usp=sharing', '_blank')}
              className={cn(
                "inline-flex items-center justify-center rounded-lg",
                "border border-black/30 dark:border-white/30 bg-black/20 dark:bg-white/20 backdrop-blur-sm",
                "text-foreground px-6 py-3",
                "font-medium transition-all duration-200",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              )}
              whileHover={{ 
                scale: 1.02, 
                y: -2,
                backgroundColor: 'rgba(255,255,255,0.3)',
                borderColor: 'rgba(14, 165, 233, 0.3)'
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <motion.div
                animate={{ y: [0, -2, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <Download className="h-4 w-4 mr-2" />
              </motion.div>
              Download CV
            </motion.button>
          </animated.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 40 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div 
            className="flex flex-col items-center cursor-pointer"
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <motion.span 
              className="text-sm text-muted-foreground mb-2"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Scroll to explore
            </motion.span>
            <motion.div
              className="w-[1px] h-16 bg-gradient-to-b from-border to-transparent"
              animate={{ 
                scaleY: [1, 0.8, 1],
                opacity: [0.8, 1, 0.8]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="w-2 h-2 rounded-full bg-primary mt-2"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [1, 0.6, 1]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
