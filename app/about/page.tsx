import { Metadata } from 'next'
import Image from 'next/image'
import SectionHeading from '@/components/ui/SectionHeading'
import SkillCard from '@/components/ui/SkillCard'
import { skills } from '@/lib/skills'

export const metadata: Metadata = {
  title: 'About Me | Prince Essel',
  description: 'Full-Stack Software Engineer skilled in React, Next.js, Node.js, NestJS, MongoDB, and PHP.',
}

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="About Me"
          subtitle="Get to know the person behind the code"
        />
        
        <div className="grid md:grid-cols-3 gap-12">
          {/* Profile column (unchanged) */}
          <div className="md:col-span-1">
            <div className="sticky top-24">
              <div className="relative h-80 w-full rounded-2xl overflow-hidden mb-6">
                <Image
                  src="/images/profile.jpg"
                  alt="Prince Essel"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 300px"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Prince Essel</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">Full-Stack Software Engineer</p>
              <div className="space-y-2 text-gray-600 dark:text-gray-400">
                <p>📍 Accra, Ghana</p>
                <p>✉️ kingsfordessel242@gmail.com</p>
                <p>📱 0244821278</p>
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="md:col-span-2 space-y-8">
            <section>
              <h4 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Professional Summary</h4>
              <div className="prose dark:prose-invert max-w-none">
                <p>
                  Results-driven Full-Stack Software Engineer with experience in building scalable web applications
                  using modern technologies such as <strong>React, Next.js, Node.js, NestJS, MongoDB</strong>,
                  alongside strong backend expertise in <strong>PHP and MySQL</strong>.
                </p>
                <p>
                  Skilled in designing and developing complete systems including ERP platforms, POS systems,
                  and interactive web applications. Adept at building RESTful APIs, implementing authentication
                  systems, and creating responsive, user-focused interfaces. Passionate about clean architecture,
                  maintainable code, and solving real-world problems with technology.
                </p>
              </div>
            </section>

            {/* Technical Skills - full grid */}
            <section>
              <h4 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">Technical Skills</h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {skills.map((skill, index) => (
                  <SkillCard
                    key={skill.name}
                    name={skill.name}
                    iconName={skill.iconName}
                    color={skill.color}
                    delay={index * 0.05}
                  />
                ))}
              </div>
            </section>

            <section>
              <h4 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Experience</h4>
              <div className="space-y-6">
                <div>
                  <h5 className="font-semibold">Assistant Software Engineer (Intern)</h5>
                  <p className="text-primary mb-2">Ghana Atomic Energy Commission (GAEC) | Sep 2024 – Nov 2024</p>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                    <li>Developed and maintained responsive web applications using HTML, CSS, JavaScript, and PHP</li>
                    <li>Built dynamic interfaces using AJAX and JSON</li>
                    <li>Collaborated with designers to implement UI/UX designs</li>
                    <li>Improved application performance and cross-device compatibility</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h4 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Education</h4>
              <div>
                <h5 className="font-semibold">Bachelor of Science in Software Engineering</h5>
                <p className="text-primary mb-2">Ghana Communication Technology University | 2025</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}