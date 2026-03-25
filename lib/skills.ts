export interface Skill {
  name: string
  iconName: string   // e.g., 'FaReact'
  color: string
}

export const skills: Skill[] = [
  { name: 'React', iconName: 'FaReact', color: '#61DAFB' },
  { name: 'Next.js', iconName: 'SiNextdotjs', color: '#000000' },
  { name: 'NestJS', iconName: 'SiNestjs', color: '#E0234E' },
  { name: 'Node.js', iconName: 'FaNodeJs', color: '#339933' },
  { name: 'MongoDB', iconName: 'SiMongodb', color: '#47A248' },
  { name: 'MySQL', iconName: 'SiMysql', color: '#4479A1' },
  { name: 'PHP', iconName: 'FaPhp', color: '#777BB4' },
  { name: 'Tailwind CSS', iconName: 'SiTailwindcss', color: '#06B6D4' },
  { name: 'JavaScript', iconName: 'SiJavascript', color: '#F7DF1E' },
  { name: 'TypeScript', iconName: 'SiTypescript', color: '#3178C6' },
  { name: 'Git', iconName: 'FaGitAlt', color: '#F05032' },
  { name: 'Figma', iconName: 'FaFigma', color: '#F24E1E' },
]