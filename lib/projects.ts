export interface Project {
  slug: string
  title: string
  description: string
  image: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
}

export const projects: Project[] = [
  {
    slug: 'school-erp-system',
    title: 'School ERP System',
    description: 'Complete school management system with modules for students, teachers, attendance, exams, and payments. Built with scalable backend APIs and modern frontend.',
    image: '/images/projects/erp.jpg',
    technologies: ['Next.js', 'NestJS', 'MongoDB', 'Tailwind CSS', 'JWT'],
    // liveUrl: 'https://your-erp-demo.com', // Add if deployed
  },
  {
    slug: 'inventory-pos-system',
    title: 'Inventory & POS System',
    description: 'Full-featured Point of Sale with real-time inventory tracking, barcode scanning, role-based authentication, and sales analytics dashboard.',
    image: '/images/projects/pos.jpg',
    technologies: ['PHP', 'MySQL', 'JavaScript', 'HTML', 'CSS'],
    liveUrl: 'http://bulletventorypos.42web.io/',
  },
  {
    slug: 'quiz-examination-system',
    title: 'Quiz / Examination System',
    description: 'Interactive exam platform with automatic grading, timed tests, admin panel for question banks, and detailed performance tracking.',
    image: '/images/projects/quiz.jpg',
    technologies: ['PHP', 'MySQL', 'JavaScript', 'HTML5', 'CSS3'],
    liveUrl: 'https://quizmasterpro2.infinityfreeapp.com',
  },
  {
    slug: 'portfolio-website',
    title: 'Portfolio Website',
    description: 'Modern portfolio built with React and Next.js, featuring reusable UI components, responsive layouts, and dark mode.',
    image: '/images/projects/portfolio.jpg',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    liveUrl: 'https://bullet9290.github.io/esselmultimedia.github.io/',
  },
]