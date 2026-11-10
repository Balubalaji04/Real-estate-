import { motion } from '../lib/motion'
import { useReducedMotion } from '../hooks/useReducedMotion'

export default function SectionReveal({
  children,
  className = '',
  delay = 0,
  as = 'div',
}) {
  const reduced = useReducedMotion()
  const Tag = motion[as] || motion.div

  if (reduced) {
    return <div className={className}>{children}</div>
  }

  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </Tag>
  )
}
