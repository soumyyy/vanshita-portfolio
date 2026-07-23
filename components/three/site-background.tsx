"use client"

import { useEffect, useMemo, useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Float, MeshDistortMaterial } from "@react-three/drei"
import * as THREE from "three"
import { gsap, ScrollTrigger } from "@/lib/gsap"

function useScrollProgress() {
  const progress = useRef(0)
  useEffect(() => {
    const st = ScrollTrigger.create({
      trigger: document.body,
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      onUpdate: (self) => {
        progress.current = self.progress
      },
    })
    return () => st.kill()
  }, [])
  return progress
}

function usePointer(reduced: boolean) {
  const pointer = useRef({ x: 0, y: 0 })
  useEffect(() => {
    if (reduced) return
    const handleMove = (e: PointerEvent) => {
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1
      pointer.current.y = (e.clientY / window.innerHeight) * 2 - 1
    }
    window.addEventListener("pointermove", handleMove)
    return () => window.removeEventListener("pointermove", handleMove)
  }, [reduced])
  return pointer
}

function OrganicForm({ reduced }: { reduced: boolean }) {
  const group = useRef<THREE.Group>(null)
  const mesh = useRef<THREE.Mesh>(null)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const material = useRef<any>(null)
  const pointer = usePointer(reduced)
  const scroll = useScrollProgress()

  useFrame((_, delta) => {
    if (mesh.current) {
      mesh.current.rotation.y += delta * 0.035
      mesh.current.rotation.x += delta * 0.015
    }
    if (group.current) {
      const targetX = 1.7 + pointer.current.x * 0.2
      const targetY = 0.3 + pointer.current.y * -0.15
      group.current.position.x = THREE.MathUtils.lerp(group.current.position.x, targetX, delta * 1.2)
      group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, targetY, delta * 1.2)
    }
    if (material.current) {
      // Full presence in the hero moment, recedes to a quiet ambient presence once you scroll into content
      const heroFade = 1 - THREE.MathUtils.smoothstep(scroll.current, 0.06, 0.22) * 0.82
      material.current.opacity = THREE.MathUtils.lerp(material.current.opacity ?? 1, heroFade, delta * 2)
    }
  })

  return (
    <Float speed={0.7} rotationIntensity={0.12} floatIntensity={0.45} enabled={!reduced}>
      <group ref={group} position={[1.7, 0.3, -0.5]}>
        <mesh ref={mesh} scale={1.25}>
          <icosahedronGeometry args={[1, reduced ? 6 : 10]} />
          <MeshDistortMaterial
            ref={material}
            color="#dbb0b4"
            roughness={0.5}
            metalness={0.18}
            distort={reduced ? 0.25 : 0.34}
            speed={1.6}
            emissive="#7a3a3a"
            emissiveIntensity={0.06}
            transparent
          />
        </mesh>
      </group>
    </Float>
  )
}

function ParticleField({ reduced }: { reduced: boolean }) {
  const points = useRef<THREE.Points>(null)
  const count = reduced ? 60 : 160

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const radius = 4 + Math.random() * 7
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      arr[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
      arr[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta) * 0.7
      arr[i * 3 + 2] = radius * Math.cos(phi) * 0.7 - 2
    }
    return arr
  }, [count])

  useFrame((_, delta) => {
    if (points.current) points.current.rotation.y += delta * 0.01
  })

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#b8956a" size={0.026} sizeAttenuation transparent opacity={0.35} />
    </points>
  )
}

function Scene({ reduced }: { reduced: boolean }) {
  return (
    <>
      <ambientLight intensity={0.75} />
      <pointLight position={[4, 3, 4]} intensity={22} color="#c9a876" />
      <pointLight position={[-5, -2, -3]} intensity={14} color="#e8dcc4" />
      <OrganicForm reduced={reduced} />
      <ParticleField reduced={reduced} />
    </>
  )
}

export function SiteBackground({ reduced = false }: { reduced?: boolean }) {
  return (
    <div className="fixed inset-0 z-0" style={{ pointerEvents: "none" }}>
      <Canvas
        dpr={reduced ? [1, 1] : [1, 1.6]}
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Scene reduced={reduced} />
      </Canvas>
    </div>
  )
}
