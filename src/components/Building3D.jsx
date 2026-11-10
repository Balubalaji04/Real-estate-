import { lazy, Suspense, useEffect, useState } from 'react'
import ErrorBoundary from './ErrorBoundary'
import { useReducedMotion } from '../hooks/useReducedMotion'

const BuildingCanvas = lazy(() => import('./BuildingCanvas.jsx'))

function StaticBuilding({ className = '' }) {
  return (
    <img
      src="/building-static.svg"
      alt="Isometric skyline building illustration"
      className={`h-full w-full object-contain ${className}`}
    />
  )
}

export default function Building3D() {
  const reduced = useReducedMotion()
  const [desktop, setDesktop] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(min-width: 768px)')
    const update = () => setDesktop(media.matches)
    update()
    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [])

  if (!desktop || reduced) {
    return (
      <div className="relative h-full min-h-[280px] w-full">
        <StaticBuilding />
      </div>
    )
  }

  return (
    <div className="relative h-full min-h-[280px] w-full">
      <ErrorBoundary fallback={<StaticBuilding />}>
        <Suspense fallback={<StaticBuilding />}>
          <BuildingCanvas />
        </Suspense>
      </ErrorBoundary>
    </div>
  )
}
