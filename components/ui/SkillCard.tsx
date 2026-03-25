'use client'

import { motion } from 'framer-motion'
import * as FaIcons from 'react-icons/fa'
import * as SiIcons from 'react-icons/si'

// Merge all icon libraries
const icons = { ...FaIcons, ...SiIcons }

interface SkillCardProps {
  name: string
  iconName: string
  color?: string
  delay?: number
}

export default function SkillCard({ name, iconName, color = '#6366f1', delay = 0 }: SkillCardProps) {
  const IconComponent = icons[iconName as keyof typeof icons]

  if (!IconComponent) {
    console.warn(`Icon "${iconName}" not found`)
    return null
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ 
        scale: 1.05,
        rotateY: 5,
        rotateX: 5,
        boxShadow: '0 20px 30px -10px rgba(0,0,0,0.2)',
        transition: { duration: 0.2 }
      }}
      className="group relative bg-white dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className="flex flex-col items-center gap-4">
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: delay * 0.2 }}
          className="text-5xl"
          style={{ color }}
        >
          <IconComponent />
        </motion.div>
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{name}</h3>
      </div>
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </motion.div>
  )
}