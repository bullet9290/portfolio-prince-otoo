import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { projects, Project } from '@/lib/projects'
import Button from '@/components/ui/Button'
import { FiArrowLeft, FiGithub, FiExternalLink } from 'react-icons/fi'

interface ProjectPageProps {
  params: Promise<{ slug: string }>   // ← params is a Promise
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params   // ← await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) return { title: 'Project Not Found' }
  return {
    title: `${project.title} | Prince Essel`,
    description: project.description,
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params   // ← await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) notFound()

  return (
    <div className="pt-24 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        <Link href="/projects" className="inline-flex items-center text-primary hover:underline mb-8">
          <FiArrowLeft className="mr-2" /> Back to Projects
        </Link>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
          <div className="relative h-96 w-full">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
          </div>

          <div className="p-8">
            <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              {project.title}
            </h1>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-sm rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              {project.description}
            </p>

            <div className="prose dark:prose-invert max-w-none mb-8">
              <h2>Overview</h2>
              <p>
                This is a detailed description of the project. You can explain the problem it solves,
                the approach you took, challenges faced, and the final outcome. Use this space to
                showcase your work in depth.
              </p>
              <h2>Key Features</h2>
              <ul>
                <li>Feature one with explanation</li>
                <li>Feature two with explanation</li>
                <li>Feature three with explanation</li>
              </ul>
              <h2>Technical Stack</h2>
              <p>
                Explain why you chose specific technologies and how they contributed to the project.
              </p>
            </div>

            <div className="flex gap-4">
              {project.liveUrl && (
                <Button href={project.liveUrl} variant="primary" className="flex items-center gap-2">
                  <FiExternalLink /> Live Demo
                </Button>
              )}
              {project.githubUrl && (
                <Button href={project.githubUrl} variant="outline" className="flex items-center gap-2">
                  <FiGithub /> View Code
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}