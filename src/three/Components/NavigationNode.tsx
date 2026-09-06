import React, { useRef, useState } from 'react';
import { Text } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import type { NavigationNodeProps, NavigationPosition } from '../../types/navigation';

export const NavigationNode: React.FC<NavigationNodeProps> = ({
  id,
  kind,
  tags = [],
  connections,
  children,
  onRegister,
  isOnRoute = false,
}) => {
  const objectGroupRef = useRef<THREE.Group>(null);
  const [markerPosition, setMarkerPosition] = useState<NavigationPosition | null>(null);

  useFrame(() => {
    if (!objectGroupRef.current || !onRegister) return;

    objectGroupRef.current.updateWorldMatrix(true, true);
    const bounds = new THREE.Box3().setFromObject(objectGroupRef.current);
    if (bounds.isEmpty()) return;

    const center = new THREE.Vector3();
    bounds.getCenter(center);
    const worldCenter: NavigationPosition = [center.x, center.y, center.z];
    const markerCenter = center.clone();
    objectGroupRef.current.parent?.worldToLocal(markerCenter);

    setMarkerPosition((currentPosition) => {
      if (
        currentPosition &&
        currentPosition.every((value, index) => Math.abs(value - markerCenter.getComponent(index)) < 0.0001)
      ) {
        return currentPosition;
      }

      return [markerCenter.x, markerCenter.y, markerCenter.z];
    });

    onRegister?.({
      id,
      kind,
      tags,
      position: worldCenter,
      connections,
    });
  });

  return (
    <group>
      <group ref={objectGroupRef}>{children}</group>

      {markerPosition && (
        <group position={markerPosition}>
          <mesh>
            <sphereGeometry args={[0.15, 32, 32]} />
            <meshStandardMaterial color={isOnRoute ? '#f97316' : '#25eb43'} roughness={0.3} metalness={0.2} />
          </mesh>

          <Text
            position={[0, 0.55, 0]}
            fontSize={0.25}
            color="#ffffff"
            anchorX="center"
            anchorY="middle"
            outlineWidth={0.02}
            outlineColor="#000000"
          >
            {`Nodo ${id}`}
          </Text>

          <Text
            position={[0, 0.35, 0]}
            fontSize={0.16}
            color="#facc15"
            anchorX="center"
            anchorY="middle"
            outlineWidth={0.015}
            outlineColor="#000000"
          >
            {tags.length > 0 ? tags.join(', ') : 'Sin etiqueta'}
          </Text>
        </group>
      )}
    </group>
  );
};