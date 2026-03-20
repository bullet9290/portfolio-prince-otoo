'use client'

import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import SectionHeading from '@/components/ui/SectionHeading'

export default function AboutPreview() {
  const stats = [
    { value: '3+', label: 'Years Experience' },
    { value: '4+', label: 'Major Projects' },
    { value: '8+', label: 'Technologies' },
    { value: '2', label: 'Open Source' },
  ]

  return (
    <section className="section-container bg-gradient-to-b from-transparent to-primary/5 dark:to-primary/10">
      <SectionHeading
        title="About Me"
        subtitle="Get to know me better"
      />
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
            I'm a results-driven Full-Stack Software Engineer with experience in building scalable web applications
            using React, Next.js, Node.js, NestJS, MongoDB, and PHP.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            I've developed complete systems including a School ERP, POS, and interactive quiz platforms.
            I love clean architecture, maintainable code, and solving real-world problems with technology.
          </p>
          <Button href="/about" variant="primary" className="btn-primary">
            More About Me
          </Button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 gap-6"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-4xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}