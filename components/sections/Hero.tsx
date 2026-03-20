'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Button from '@/components/ui/Button'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 -z-10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent -z-10"></div>
      
      {/* Floating blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full filter blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full filter blur-3xl animate-float animation-delay-2000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants}>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="gradient-text">Hi, I'm Prince Essel</span>
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 mt-6 leading-relaxed">
              Full-Stack Software Engineer | Building scalable web apps with React, Next.js, Node.js, and PHP.
            </p>
            <div className="flex gap-4 mt-10">
              <Button href="/projects" variant="primary" className="btn-primary">
                View Projects
              </Button>
              <Button href="/contact" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 rounded-full px-8 py-3">
                Contact Me
              </Button>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <div className="relative h-[500px] w-full">
              <Image
                src="/images/hero-image.jpg"
                alt="Prince Essel"
                fill
                className="object-cover rounded-2xl shadow-2xl"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Decorative ring */}
              <div className="absolute -inset-4 border-2 border-primary/30 rounded-2xl -z-10 animate-pulse-slow"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}