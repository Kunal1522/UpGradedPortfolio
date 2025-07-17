"use client"

import { useRef, useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Text, useAnimations } from '@react-three/drei'
import { motion } from 'framer-motion'
import * as THREE from 'three'

// 3D Character that waves
function WavingCharacter() {
  const characterRef = useRef<THREE.Group>(null)
  const armRef = useRef<THREE.Group>(null)
  const [waveComplete, setWaveComplete] = useState(false)

  useFrame((state) => {
    if (!characterRef.current || !armRef.current) return

    // Gentle floating animation
    characterRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1

    // Waving animation for the first 3 seconds
    if (state.clock.elapsedTime < 3) {
      // Wave the arm
      armRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 8) * 0.8 + 0.3
    } else {
      // Gentle idle arm movement
      armRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.1 + 0.1
      if (!waveComplete) setWaveComplete(true)
    }

    // Gentle body rotation
    characterRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1
  })

  return (
    <group ref={characterRef} position={[0, 0, 0]}>
      {/* Head */}
      <mesh position={[0, 1.5, 0]}>
        <sphereGeometry args={[0.6, 32, 32]} />
        <meshStandardMaterial color="#FFE0BD" />
      </mesh>

      {/* Eyes */}
      <mesh position={[-0.2, 1.6, 0.4]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial color="#000" />
      </mesh>
      <mesh position={[0.2, 1.6, 0.4]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial color="#000" />
      </mesh>

      {/* Smile */}
      <mesh position={[0, 1.3, 0.5]} rotation={[0, 0, 0]}>
        <torusGeometry args={[0.15, 0.03, 8, 16, Math.PI]} />
        <meshStandardMaterial color="#000" />
      </mesh>

      {/* Body */}
      <mesh position={[0, 0.5, 0]}>
        <cylinderGeometry args={[0.4, 0.5, 1, 32]} />
        <meshStandardMaterial color="#4F46E5" />
      </mesh>

      {/* Waving Arm */}
      <group ref={armRef} position={[0.7, 0.8, 0]}>
        <mesh position={[0, -0.3, 0]}>
          <cylinderGeometry args={[0.08, 0.08, 0.6, 16]} />
          <meshStandardMaterial color="#FFE0BD" />
        </mesh>
        {/* Hand */}
        <mesh position={[0, -0.7, 0]}>
          <sphereGeometry args={[0.12, 16, 16]} />
          <meshStandardMaterial color="#FFE0BD" />
        </mesh>
      </group>

      {/* Other Arm */}
      <mesh position={[-0.7, 0.5, 0]}>
        <cylinderGeometry args={[0.08, 0.08, 0.6, 16]} />
        <meshStandardMaterial color="#FFE0BD" />
      </mesh>

      {/* Legs */}
      <mesh position={[-0.2, -0.3, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 0.6, 16]} />
        <meshStandardMaterial color="#2563EB" />
      </mesh>
      <mesh position={[0.2, -0.3, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 0.6, 16]} />
        <meshStandardMaterial color="#2563EB" />
      </mesh>
    </group>
  )
}

// 3D Text that appears with animation
function AnimatedText() {
  const textRef = useRef<THREE.Mesh>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1000)
    return () => clearTimeout(timer)
  }, [])

  useFrame((state) => {
    if (!textRef.current || !visible) return
    
    // Gentle floating for text
    textRef.current.position.y = Math.sin(state.clock.elapsedTime * 1.5) * 0.2 + 2.5
    textRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
  })

  if (!visible) return null

  return (
    <Text
      ref={textRef}
      position={[0, 2.5, 0]}
      fontSize={0.6}
      color="#4F46E5"
      anchorX="center"
      anchorY="middle"
    >
      Hi! 👋
    </Text>
  )
}

// Main component
export function WaveCharacter() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Show character after a short delay
    const timer = setTimeout(() => setIsVisible(true), 500)
    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ 
        duration: 0.8, 
        ease: "easeOut",
        type: "spring",
        bounce: 0.4
      }}
      className="absolute bottom-8 right-8 w-48 h-48 pointer-events-none z-20"
    >
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        {/* Lighting */}
        <ambientLight intensity={0.6} />
        <directionalLight
          position={[5, 5, 5]}
          intensity={0.8}
          castShadow
        />
        <pointLight position={[-5, 5, 5]} intensity={0.4} />

        {/* 3D Character */}
        <WavingCharacter />
        
        {/* Animated Text */}
        <AnimatedText />
      </Canvas>

      {/* Optional speech bubble background */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1 shadow-lg border border-border/20">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="text-sm font-medium text-foreground"
        >
          Welcome! ✨
        </motion.span>
      </div>
    </motion.div>
  )
}
