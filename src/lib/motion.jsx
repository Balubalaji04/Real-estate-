import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  Children,
  cloneElement,
  isValidElement,
} from 'react'
import { useReducedMotion } from '../hooks/useReducedMotion'

const PresenceContext = createContext({ isPresent: true, onExitComplete: null })

function MotionBase({
  as: Tag = 'div',
  children,
  className,
  style,
  initial,
  animate,
  exit,
  transition,
  whileHover,
  whileInView,
  viewport,
  layout,
  ...rest
}) {
  const reduced = useReducedMotion()
  const ref = useRef(null)
  const [hovered, setHovered] = useState(false)
  const [inView, setInView] = useState(!whileInView)
  const presence = useContext(PresenceContext)

  useEffect(() => {
    if (!whileInView || !ref.current || reduced) {
      setInView(true)
      return undefined
    }
    const node = ref.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          if (viewport?.once !== false) observer.disconnect()
        }
      },
      { threshold: typeof viewport?.amount === 'number' ? viewport.amount : 0.2 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [whileInView, viewport, reduced])

  const target = useMemo(() => {
    if (reduced) return { opacity: 1, y: 0, x: 0, scale: 1 }
    if (whileInView && !inView) return initial || { opacity: 0, y: 24 }
    if (hovered && whileHover) {
      return { opacity: 1, y: 0, x: 0, scale: 1, ...animate, ...whileHover }
    }
    return { opacity: 1, y: 0, x: 0, scale: 1, ...(animate || whileInView || {}) }
  }, [reduced, whileInView, inView, initial, animate, hovered, whileHover])

  const duration = reduced ? 0 : transition?.duration ?? 0.55
  const delay = reduced ? 0 : transition?.delay ?? 0

  useEffect(() => {
    if (!presence.isPresent && presence.onExitComplete) {
      const timer = setTimeout(() => presence.onExitComplete(), reduced ? 0 : 250)
      return () => clearTimeout(timer)
    }
    return undefined
  }, [presence, reduced])

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        ...style,
        opacity: target.opacity ?? 1,
        transform: `translate3d(${target.x || 0}px, ${target.y || 0}px, 0) scale(${target.scale ?? 1})`,
        transition: `opacity ${duration}s ease, transform ${duration}s ease`,
        transitionDelay: `${delay}s`,
      }}
      onMouseEnter={(e) => {
        setHovered(true)
        rest.onMouseEnter?.(e)
      }}
      onMouseLeave={(e) => {
        setHovered(false)
        rest.onMouseLeave?.(e)
      }}
      {...rest}
    >
      {children}
    </Tag>
  )
}

function createMotion(tag) {
  return function MotionTag(props) {
    return <MotionBase as={tag} {...props} />
  }
}

export const motion = {
  div: createMotion('div'),
  p: createMotion('p'),
  h1: createMotion('h1'),
  h2: createMotion('h2'),
  h3: createMotion('h3'),
  section: createMotion('section'),
  article: createMotion('article'),
  span: createMotion('span'),
  button: createMotion('button'),
  form: createMotion('form'),
  ul: createMotion('ul'),
  li: createMotion('li'),
  a: createMotion('a'),
}

export function AnimatePresence({ children }) {
  const items = Children.toArray(children).filter(isValidElement)

  return items.map((child) => (
    <PresenceContext.Provider
      key={child.key ?? undefined}
      value={{ isPresent: true, onExitComplete: null }}
    >
      {cloneElement(child)}
    </PresenceContext.Provider>
  ))
}
