export interface Project {
  slug: string
  title: string
  description: string
  image: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
  overview: string
  features: string[]
  challenges?: string
  outcome?: string
}

export const projects: Project[] = [
  {
    slug: 'school-erp-system',
    title: 'School ERP System',
    description: 'Complete school management system with modules for students, teachers, attendance, exams, and payments. Built with scalable backend APIs and modern frontend.',
    image: '/images/projects/erp.jpg',
    technologies: ['Next.js', 'NestJS', 'MongoDB', 'Tailwind CSS', 'JWT'],
    overview: `The School ERP System is a comprehensive platform designed to digitize and streamline administrative and academic operations for educational institutions. It includes role-based access for administrators, teachers, students, and parents, enabling efficient management of student records, attendance, exams, fees, and communication.`,
    features: [
      'Role-based authentication (Admin, Teacher, Student, Parent)',
      'Student enrollment and profile management',
      'Attendance tracking with daily reports',
      'Exam scheduling, grading, and result publication',
      'Fee management and payment tracking',
      'Announcements and messaging system',
      'Dashboard with analytics for each role',
    ],
    challenges: `One of the main challenges was designing a flexible database schema that could handle the complex relationships between users, courses, exams, and payments while maintaining performance. I solved this by using MongoDB's document model with embedded references and optimizing indexes for frequent queries.`,
    outcome: `The system is now used by a local school, reducing administrative workload by 40% and providing real-time insights into student performance. The modular architecture allows easy extension for additional modules like library management.`,
  },
  {
    slug: 'inventory-pos-system',
    title: 'Inventory & POS System',
    description: 'Full-featured Point of Sale with real-time inventory tracking, barcode scanning, role-based authentication, and sales analytics dashboard.',
    image: '/images/projects/pos.jpg',
    technologies: ['PHP', 'MySQL', 'JavaScript', 'HTML', 'CSS'],
    liveUrl: 'http://bulletventorypos.42web.io/',
    overview: `A complete retail management solution that combines point-of-sale operations with inventory control. It supports barcode scanning, receipt generation, and detailed sales reporting. The system is used by small to medium retail businesses to manage stock and sales efficiently.`,
    features: [
      'Secure user authentication with roles (Admin, Manager, Cashier)',
      'Barcode scanning and product search',
      'Real-time inventory tracking with low-stock alerts',
      'Sales dashboard with charts and daily/monthly reports',
      'Customer management and purchase history',
      'CSV import/export for bulk inventory updates',
      'Receipt generation and printing',
    ],
    challenges: `Handling concurrent transactions and ensuring data consistency during peak hours was critical. I implemented database transactions and locking mechanisms to prevent overselling and maintain accurate inventory levels.`,
    outcome: `The POS reduced checkout time by 35% and gave store owners better visibility into stock levels. The system has been deployed in three retail shops, with positive feedback on ease of use.`,
  },
  {
    slug: 'quiz-examination-system',
    title: 'Quiz / Examination System',
    description: 'Interactive exam platform with automatic grading, timed tests, admin panel for question banks, and detailed performance tracking.',
    image: '/images/projects/quiz.jpg',
    technologies: ['PHP', 'MySQL', 'JavaScript', 'HTML5', 'CSS3'],
    liveUrl: 'https://quizmasterpro2.infinityfreeapp.com',
    overview: `An online testing platform that allows educators to create timed quizzes with multiple question types. Students can take exams, receive instant scores, and view detailed feedback. The system includes a question bank with categories and difficulty levels.`,
    features: [
      'Question types: multiple choice, true/false, short answer',
      'Timed exams with auto-submission',
      'Randomized question selection from question bank',
      'Instant scoring and detailed performance analytics',
      'Admin dashboard to create/manage questions and exams',
      'Student progress tracking and improvement reports',
      'Responsive design works on mobile and desktop',
    ],
    challenges: `Implementing a flexible scoring system that could handle partial credit and different question types was complex. I built a modular scoring engine that evaluates answers based on predefined rules.`,
    outcome: `The platform has been used by a training institute for practice tests, improving student engagement and providing valuable data on learning gaps.`,
  },
  {
    slug: 'ecommerce',
    title: 'Ecommerce Website',
    description: 'Modern E-commerce built with PHP, MySQL, JavaScript, featuring reusable UI components, responsive layouts, and product management.',
    image: '/images/projects/ecommerce.jpg',
    technologies: ['PHP', 'MySQL', 'JavaScript', 'HTML5', 'CSS3'],
    liveUrl: 'https://jumiaclone.infinityfree.me/',
    overview: `A full-featured e-commerce website that allows users to browse products, add to cart, and complete purchases. It includes an admin panel for managing products, orders, and customers. Built as a clone of popular e-commerce platforms to demonstrate advanced web development skills.`,
    features: [
      'Product catalog with categories and search',
      'Shopping cart with quantity updates',
      'User authentication and profile management',
      'Order processing with payment integration (simulated)',
      'Admin dashboard for product and order management',
      'Responsive design for mobile and desktop',
      'Secure data handling with prepared statements',
    ],
    challenges: `One challenge was maintaining cart data across sessions while ensuring security. I used PHP sessions and sanitized all inputs to prevent SQL injection and XSS attacks. Another challenge was implementing a smooth checkout flow.`,
    outcome: `The site demonstrates a complete e-commerce workflow and has been used to showcase my full-stack PHP skills. It serves as a foundation for future enhancements like real payment gateway integration.`,
  },
]