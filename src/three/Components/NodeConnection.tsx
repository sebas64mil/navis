import React from 'react';
import { Text } from '@react-three/drei';
import * as THREE from 'three';
import type { NodeConnectionProps } from '../../types/navigation';

export const NodeConnection: React.FC<NodeConnectionProps> = ({ start, end, isOnRoute = false }) => {
  const startVector = new THREE.Vector3(...start);
  const endVector = new THREE.Vector3(...end);
  const direction = new THREE.Vector3().subVectors(endVector, startVector);
  const distance = direction.length();
  const midpoint = new THREE.Vector3()
    .addVectors(startVector, endVector)
    .multiplyScalar(0.5);
  const quaternion = new THREE.Quaternion().setFromUnitVectors(
    new THREE.Vector3(0, 1, 0),
    direction.clone().normalize(),
  );

  return (
    <group>
      <mesh position={midpoint} quaternion={quaternion}>
        <cylinderGeometry args={[isOnRoute ? 0.1 : 0.05, isOnRoute ? 0.1 : 0.05, distance, 8]} />
        <meshStandardMaterial color={isOnRoute ? '#f97316' : '#94a3b8'} roughness={0.5} metalness={0.1} />
      </mesh>

      <Text
        position={[midpoint.x, midpoint.y + 0.18, midpoint.z]}
        fontSize={0.16}
        color={isOnRoute ? '#f97316' : '#ffffff'}
        anchorX="center"
        anchorY="middle"
        outlineWidth={0.015}
        outlineColor="#000000"
      >
        {`Costo: ${distance.toFixed(2)}`}
      </Text>
    </group>
  );
};