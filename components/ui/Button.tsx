import Link from 'next/link'
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  href?: string
  variant?: 'primary' | 'secondary' | 'outline'
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

export default function Button({
  children,
  href,
  variant = 'primary',
  className = '',
  onClick,
  type = 'button',
  disabled = false,
}: ButtonProps) {
  const baseStyles = 'inline-block font-medium transition-all duration-300 text-center focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed'
  
  const variants = {
    primary: 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 rounded-full px-8 py-3',
    secondary: 'bg-gradient-to-r from-secondary to-accent text-white shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 rounded-full px-8 py-3',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-full px-8 py-3',
  }

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`

  if (href) {
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    )
  }

  return (
    <button
      type={type}
      className={combinedClassName}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}