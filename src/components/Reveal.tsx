import type { ReactNode } from 'react'
import { useReveal } from '../hooks/useReveal'

type Props = {
  children: ReactNode
  className?: string
  delay?: number
  as?: 'div' | 'section' | 'li' | 'article'
}

/** Wraps children in a fade-up reveal triggered on scroll into view. */
export default function Reveal({ children, className = '', delay = 0, as = 'div' }: Props) {
  const { ref, visible } = useReveal<HTMLDivElement>()
  const Tag = as as 'div'
  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  )
}
