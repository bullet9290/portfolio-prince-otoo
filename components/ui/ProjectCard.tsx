'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Project } from '@/lib/projects'
import Button from './Button'

interface ProjectCardProps {
  project: Project
  index?: number
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group relative bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/20 dark:border-gray-700/30"
    >
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2 gradient-text">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.slice(0, 3).map((tech) => (
            <span key={tech} className="px-3 py-1 text-xs bg-gray-200 dark:bg-gray-700 rounded-full">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          <Button href={`/projects/${project.slug}`} variant="primary" className="text-sm py-2 px-4 rounded-full">
            View Details
          </Button>
          {project.githubUrl && (
            <Button href={project.githubUrl} variant="outline" className="text-sm py-2 px-4 rounded-full">
              GitHub
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  )
}