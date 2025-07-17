'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

export function CuteWaveCharacter() {
  const [currentMessage, setCurrentMessage] = useState(0)
  
  const messages = ['Hi!', 'Pika Pika!', 'Welcome!', '⚡ Pika! ⚡', 'Nice to meet you!']
  
  useEffect(() => {
    // Message cycling
    const messageInterval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length)
    }, 3000)
    
    // Load Tenor script if not already loaded
    if (!document.querySelector('script[src="https://tenor.com/embed.js"]')) {
      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.async = true
      script.src = 'https://tenor.com/embed.js'
      document.head.appendChild(script)
    }
    
    return () => {
      clearInterval(messageInterval)
    }
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.3, y: 100 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ 
        duration: 1,
        ease: "easeOut",
        type: "spring",
        bounce: 0.6,
        delay: 0.5
      }}
      className="fixed bottom-8 right-8 z-50 pointer-events-none"
    >
      {/* Speech Bubble */}
      <motion.div
        initial={{ opacity: 0, scale: 0.3, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6, type: "spring", bounce: 0.6 }}
        className="absolute -top-20 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="relative bg-white dark:bg-gray-800 px-6 py-3 rounded-2xl shadow-xl border-2 border-yellow-400 backdrop-blur-sm">
          <AnimatePresence mode="wait">
            <motion.span
              key={currentMessage}
              initial={{ opacity: 0, y: 10, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.8 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="text-lg font-bold text-yellow-600 dark:text-yellow-400 whitespace-nowrap"
            >
              {messages[currentMessage]}
            </motion.span>
          </AnimatePresence>
          {/* Speech bubble tail */}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[12px] border-r-[12px] border-t-[12px] border-transparent border-t-yellow-400"></div>
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 translate-y-[-2px] w-0 h-0 border-l-[10px] border-r-[10px] border-t-[10px] border-transparent border-t-white dark:border-t-gray-800"></div>
        </div>
      </motion.div>

      {/* Cute Pikachu GIF */}
      <div className="relative w-28 h-28">
        {/* Shadow under Pikachu */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-14 h-3 bg-gray-500 dark:bg-gray-700 rounded-full opacity-30 blur-sm"></div>
        
        {/* Pikachu GIF using Tenor embed */}
        <div 
          className="w-full h-full"
          style={{
            filter: 'drop-shadow(2px 4px 8px rgba(0,0,0,0.2))',
          }}
        >
          <div 
            className="tenor-gif-embed" 
            data-postid="15583157" 
            data-share-method="host" 
            data-aspect-ratio="1.12676" 
            data-width="100%"
          >
            <a href="https://tenor.com/view/waving-pikachu-gif-cute-hi-gif-15583157">Waving Pikachu Sticker</a>
            from <a href="https://tenor.com/search/waving-stickers">Waving Stickers</a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
