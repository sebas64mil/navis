import React from 'react';
import { Text } from '@react-three/drei';
import type { NavigationNodeProps } from '../../types/navigation';
import { navigationNodes } from '../../features/navigation/navigationNodes';

export const NavigationNodeView: React.FC<NavigationNodeProps> = ({ nodeId, position, children, isOnRoute = false }) => {
  const node = navigationNodes.find((candidate) => candidate.id === nodeId);
  if (!node) return <>{children}</>;

  return (
    <group position={position}>
      {children}

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
        {`Nodo ${node.id}`}
      </Text>

      <Text position={[0, 0.35, 0]} fontSize={0.16} color="#facc15" anchorX="center" anchorY="middle" outlineWidth={0.015} outlineColor="#000000">
        {node.tags.length > 0 ? node.tags.join(', ') : node.name}
      </Text>
    </group>
  );
};

export const NavigationNode = NavigationNodeView;