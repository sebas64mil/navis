import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { useAppStore } from '../../store/useAppStore';

const RotatingCube: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.5;
      meshRef.current.rotation.y += delta * 0.7;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="#2563eb" roughness={0.3} metalness={0.2} />
    </mesh>
  );
};

export const MainScene: React.FC = () => {
  const theme = useAppStore((state) => state.theme);

  const bgColor = theme === 'dark' ? '#0f172a' : '#f8fafc';

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      <Canvas
        camera={{ position: [4, 4, 6], fov: 50 }}
        style={{ width: '100%', height: '100%', backgroundColor: bgColor }}
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[10, 10, 5]} intensity={1.2} />
        <directionalLight position={[-10, -10, -5]} intensity={0.4} />
        <RotatingCube />
        <gridHelper args={[20, 20, '#94a3b8', '#cbd5e1']} position={[0, -1.5, 0]} />
        <OrbitControls makeDefault />
      </Canvas>
    </div>
  );
};
