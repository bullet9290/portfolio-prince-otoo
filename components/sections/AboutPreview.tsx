'use client'

import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import SectionHeading from '@/components/ui/SectionHeading'
import SkillCard from '@/components/ui/SkillCard'
import { skills } from '@/lib/skills'

export default function AboutPreview() {
  const previewSkills = skills.slice(0, 4) // Show first 4 skills

  return (
    <section className="section-container bg-gradient-to-b from-transparent to-primary/5 dark:to-primary/10">
      <SectionHeading
        title="About Me"
        subtitle="Get to know me better"
      />
      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
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
          {/* Stats cards */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="text-4xl font-bold gradient-text mb-2">3+</div>
            <div className="text-gray-600 dark:text-gray-400">Years Experience</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="text-4xl font-bold gradient-text mb-2">4+</div>
            <div className="text-gray-600 dark:text-gray-400">Major Projects</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="text-4xl font-bold gradient-text mb-2">8+</div>
            <div className="text-gray-600 dark:text-gray-400">Technologies</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="text-4xl font-bold gradient-text mb-2">2</div>
            <div className="text-gray-600 dark:text-gray-400">Open Source</div>
          </div>
        </motion.div>
      </div>

      {/* Skills Preview */}
      <div className="mt-16">
        <h3 className="text-2xl font-bold text-center mb-8 gradient-text">Tech Stack I Use</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {previewSkills.map((skill, idx) => (
            <SkillCard
              key={skill.name}
              name={skill.name}
              iconName={skill.iconName}
              color={skill.color}
              delay={idx * 0.05}
            />
          ))}
        </div>
        <div className="text-center mt-8">
          <Button href="/about" variant="outline" className="rounded-full">
            View All Skills →
          </Button>
        </div>
      </div>
    </section>
  )
}