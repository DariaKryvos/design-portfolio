"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Float, MeshTransmissionMaterial } from "@react-three/drei";
import * as THREE from "three";
import { useMemo, useRef } from "react";

function createHolographicTexture(colors: string[]) {
  const canvas = document.createElement("canvas");
  canvas.width = 1024;
  canvas.height = 1024;
  const ctx = canvas.getContext("2d")!;

  const gradient = ctx.createRadialGradient(512, 512, 0, 512, 512, 512);
  colors.forEach((color, i) => {
    gradient.addColorStop(i / (colors.length - 1), color);
  });

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 1024, 1024);

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  return texture;
}

function HoloBlob({
  position,
  scale,
  colors,
  distort,
  speed,
  rotationSpeed = 0.3,
  floatSpeed = 1.5,
  floatIntensity = 1,
}: {
  position: [number, number, number];
  scale: number;
  colors: string[];
  distort: number;
  speed: number;
  rotationSpeed?: number;
  floatSpeed?: number;
  floatIntensity?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const texture = useMemo(() => createHolographicTexture(colors), [colors]);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * rotationSpeed * 0.5;
      meshRef.current.rotation.y = state.clock.elapsedTime * rotationSpeed;
    }
  });

  return (
    <Float speed={floatSpeed} rotationIntensity={0.5} floatIntensity={floatIntensity}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <sphereGeometry args={[1, 128, 128]} />
        <MeshDistortMaterial
          map={texture}
          distort={distort}
          speed={speed}
          transparent
          opacity={0.85}
          roughness={0.05}
          metalness={0.8}
          envMapIntensity={2}
        />
      </mesh>
    </Float>
  );
}

function GlassBlob({
  position,
  scale,
  distort,
  speed,
}: {
  position: [number, number, number];
  scale: number;
  distort: number;
  speed: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.5;
      meshRef.current.rotation.z = Math.cos(state.clock.elapsedTime * 0.2) * 0.3;
    }
  });

  return (
    <Float speed={1} rotationIntensity={0.3} floatIntensity={0.8}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <sphereGeometry args={[1, 64, 64]} />
        <MeshDistortMaterial
          color="#ffffff"
          distort={distort}
          speed={speed}
          transparent
          opacity={0.08}
          roughness={0}
          metalness={1}
        />
      </mesh>
    </Float>
  );
}

function Particles() {
  const particlesRef = useRef<THREE.Points>(null);
  const count = 200;

  const [positions, sizes] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const sz = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
      sz[i] = Math.random() * 2 + 0.5;
    }
    return [pos, sz];
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.02;
      particlesRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.01) * 0.1;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-size"
          args={[sizes, 1]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#ffffff"
        transparent
        opacity={0.4}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export default function BlobBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 55 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <color attach="background" args={["#0a0a0b"]} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} color="#ffa040" />
        <directionalLight position={[-5, -3, 2]} intensity={0.6} color="#4060ff" />
        <pointLight position={[0, 0, 3]} intensity={1.5} color="#ff6a00" />
        <pointLight position={[-3, 2, -2]} intensity={0.8} color="#a855f7" />

        {/* Main hero blob - warm orange/amber */}
        <HoloBlob
          position={[0.5, 0, 0]}
          scale={2.2}
          colors={["#ff6a00", "#ff3d00", "#ffaa00", "#ff6a00"]}
          distort={0.4}
          speed={1.5}
          rotationSpeed={0.2}
          floatSpeed={1.2}
          floatIntensity={1}
        />

        {/* Secondary blob - cool blue/purple */}
        <HoloBlob
          position={[-2.5, -1.5, -2]}
          scale={1.2}
          colors={["#3b82f6", "#8b5cf6", "#6366f1", "#3b82f6"]}
          distort={0.5}
          speed={2}
          rotationSpeed={0.35}
          floatSpeed={1.8}
          floatIntensity={1.5}
        />

        {/* Accent blob - pink/magenta */}
        <HoloBlob
          position={[3, 1.5, -1.5]}
          scale={0.8}
          colors={["#ec4899", "#f43f5e", "#d946ef", "#ec4899"]}
          distort={0.6}
          speed={2.5}
          rotationSpeed={0.4}
          floatSpeed={2}
          floatIntensity={1.2}
        />

        {/* Glass overlay blobs for depth */}
        <GlassBlob position={[1.5, 2, -1]} scale={1.5} distort={0.3} speed={1} />
        <GlassBlob position={[-2, 1, 1]} scale={0.9} distort={0.4} speed={1.5} />

        <Particles />
      </Canvas>
    </div>
  );
}
