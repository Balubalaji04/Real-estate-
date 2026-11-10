import { Suspense, useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

function WindowGrid({ width, height, depth }) {
  const panes = useMemo(() => {
    const items = []
    const cols = 3
    const rows = Math.max(3, Math.floor(height * 2.2))
    for (let r = 0; r < rows; r += 1) {
      for (let c = 0; c < cols; c += 1) {
        items.push({
          key: `${r}-${c}`,
          x: -width / 2 + 0.22 + c * ((width - 0.35) / (cols - 1 || 1)),
          y: -height / 2 + 0.3 + r * ((height - 0.5) / (rows - 1 || 1)),
        })
      }
    }
    return items
  }, [width, height])

  return (
    <group>
      {panes.map((pane) => (
        <mesh key={pane.key} position={[pane.x, pane.y, depth / 2 + 0.01]}>
          <boxGeometry args={[0.12, 0.1, 0.02]} />
          <meshStandardMaterial color="#F7F5F1" emissive="#D4AF37" emissiveIntensity={0.15} />
        </mesh>
      ))}
    </group>
  )
}

function Tower({ position, size, color, accent }) {
  const [w, h, d] = size
  return (
    <group position={position}>
      <mesh>
        <boxGeometry args={[w, h, d]} />
        <meshStandardMaterial color={color} metalness={0.35} roughness={0.35} />
      </mesh>
      <mesh position={[0, h / 2 + 0.06, 0]}>
        <boxGeometry args={[w * 0.92, 0.12, d * 0.92]} />
        <meshStandardMaterial color={accent} metalness={0.6} roughness={0.25} />
      </mesh>
      <WindowGrid width={w} height={h} depth={d} />
    </group>
  )
}

function IsometricBuilding() {
  const group = useRef()

  useFrame((_, delta) => {
    if (!group.current) return
    group.current.rotation.y += delta * 0.25
    group.current.position.y = Math.sin(performance.now() * 0.001) * 0.08 - 0.35
  })

  return (
    <group ref={group} rotation={[0.35, 0.7, 0]} position={[0, -0.35, 0]}>
      <Tower position={[-1.15, 0.7, 0.2]} size={[0.9, 1.8, 0.9]} color="#123056" accent="#D4AF37" />
      <Tower position={[0, 1.15, 0]} size={[1.15, 2.7, 1.15]} color="#0B1F3A" accent="#E8C96A" />
      <Tower position={[1.2, 0.85, -0.15]} size={[0.95, 2.1, 0.95]} color="#1A3A66" accent="#D4AF37" />
      <mesh position={[0, -0.15, 0]}>
        <boxGeometry args={[4.2, 0.12, 3.2]} />
        <meshStandardMaterial color="#071526" metalness={0.2} roughness={0.8} />
      </mesh>
      <mesh position={[0, -0.02, 0]}>
        <boxGeometry args={[3.4, 0.05, 2.4]} />
        <meshStandardMaterial color="#D4AF37" metalness={0.5} roughness={0.4} />
      </mesh>
    </group>
  )
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 8, 4]} intensity={1.25} />
      <directionalLight position={[-4, 3, -2]} intensity={0.35} color="#D4AF37" />
      <IsometricBuilding />
    </>
  )
}

export default function BuildingCanvas() {
  return (
    <Canvas
      camera={{ position: [4.2, 3.2, 4.2], fov: 38 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: 'transparent' }}
    >
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  )
}
