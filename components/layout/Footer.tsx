'use client'

import Link from 'next/link'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const socials = [
    { icon: FiGithub, href: 'https://github.com/bullet9290', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://www.linkedin.com/in/prince-essel-ba4a48326/', label: 'LinkedIn' },
    { icon: FaWhatsapp, href: 'https://wa.me/233244821278', label: 'WhatsApp' },
    { icon: FiMail, href: 'mailto:kingsfordessel242@gmail.com', label: 'Email' },
  ]

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-600 dark:text-gray-400 mb-4 md:mb-0">
            © {currentYear} Prince Essel. All rights reserved.
          </div>
          <div className="flex space-x-6">
            {socials.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}