'use client'

import { projects } from '@/lib/projects'
import ProjectCard from '@/components/ui/ProjectCard'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'

export default function ProjectsGrid() {
  const featuredProjects = projects.slice(0, 3)

  return (
    <section className="section-container">
      <SectionHeading
        title="Featured Projects"
        subtitle="Some of my recent work"
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredProjects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>
      <div className="text-center mt-12">
        <Button href="/projects" variant="outline" className="rounded-full border-2 px-8 py-3">
          View All Projects
        </Button>
      </div>
    </section>
  )
}