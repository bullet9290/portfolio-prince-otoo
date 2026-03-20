import { Metadata } from 'next'
import { projects } from '@/lib/projects'
import ProjectCard from '@/components/ui/ProjectCard'
import SectionHeading from '@/components/ui/SectionHeading'

export const metadata: Metadata = {
  title: 'Projects | Your Name',
  description: 'Browse my latest projects and case studies.',
}

export default function ProjectsPage() {
  return (
    <div className="pt-24 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="My Projects"
          subtitle="A collection of my work, from web apps to open source contributions"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </div>
  )
}