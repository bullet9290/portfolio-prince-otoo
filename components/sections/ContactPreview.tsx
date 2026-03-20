'use client'

import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import SectionHeading from '@/components/ui/SectionHeading'

export default function ContactPreview() {
  return (
    <section className="section-container">
      <SectionHeading
        title="Let's Work Together"
        subtitle="Have a project in mind? I'd love to hear about it."
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center"
      >
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
          Whether you're looking for a developer, have a question, or just want to connect,
          feel free to drop me a message. I'll get back to you as soon as possible.
        </p>
        <Button href="/contact" variant="primary" className="text-lg">
          Get In Touch
        </Button>
      </motion.div>
    </section>
  )
}