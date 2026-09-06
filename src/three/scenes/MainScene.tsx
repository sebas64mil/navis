
import React, { useCallback, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useAppStore } from '../../store/useAppStore';
import { NavigationNode } from '../Components/NavigationNode';
import { NodeConnection } from '../Components/NodeConnection';
import type { NavigationNode as NavigationNodeData, NavigationNodeProps } from '../../types/navigation';



interface NavigationGraphProps {
  routePath: number[] | null;
  children: React.ReactNode;
}

const NavigationGraph: React.FC<NavigationGraphProps> = ({ routePath, children }) => {
  const [nodes, setNodes] = useState<NavigationNodeData[]>([]);
  const setNavigationNodes = useAppStore((state) => state.setNavigationNodes);

  const handleRegister = useCallback((registeredNode: NavigationNodeData) => {
    setNodes((currentNodes) => {
      const existingNode = currentNodes.find((node) => node.id === registeredNode.id);
      if (
        existingNode &&
        existingNode.position.every((value, index) => value === registeredNode.position[index]) &&
        existingNode.connections.join(',') === registeredNode.connections.join(',')
      ) {
        return currentNodes;
      }

      const nextNodes = [
        ...currentNodes.filter((node) => node.id !== registeredNode.id),
        registeredNode,
      ].sort((first, second) => first.id - second.id);
      setNavigationNodes(nextNodes);
      return nextNodes;
    });
  }, [setNavigationNodes]);

  const getNodePosition = (nodeId: number) =>
    nodes.find((node) => node.id === nodeId)?.position ?? [0, 0, 0] as [number, number, number];

  const isNodeOnRoute = (nodeId: number) => routePath?.includes(nodeId) ?? false;

  const isConnectionOnRoute = (startId: number, endId: number) => {
    if (!routePath) return false;

    return routePath.some(
      (nodeId, index) =>
        (nodeId === startId && routePath[index + 1] === endId) ||
        (nodeId === endId && routePath[index + 1] === startId),
    );
  };

  return (

    <group>

      {/* NODOS */}

      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return child;

        const nodeElement = child as React.ReactElement<NavigationNodeProps>;
        const nodeProps = nodeElement.props;

        return React.cloneElement(
          nodeElement,
          {
            onRegister: handleRegister,
            isOnRoute: isNodeOnRoute(nodeProps.id),
          },
        );
      })}
      {/* CONEXIONES */}

      {nodes.map((node) =>

        node.connections.map(
          (connectionId) => {


            if (
              node.id >= connectionId
            ) {

              return null;

            }


            const connectedNode =
              nodes.find(
                (otherNode) =>
                  otherNode.id ===
                  connectionId
              );


            if (!connectedNode) {

              return null;

            }

            return (

              <NodeConnection
                key={`${node.id}-${connectionId}`}
                start={getNodePosition(node.id)}
                end={getNodePosition(connectedNode.id)}
                isOnRoute={isConnectionOnRoute(node.id, connectionId)}
              />

            );

          }
        )

      )}

    </group>

  );

};


/* =========================================================
   ESCENA PRINCIPAL
   ========================================================= */

export const MainScene: React.FC = () => {

  const theme =
    useAppStore(
      (state) => state.theme
    );
  const routePath = useAppStore((state) => state.routePath);


  const bgColor =
    theme === 'dark'
      ? '#0f172a'
      : '#f8fafc';


  return (

    <div
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
      }}
    >

      <Canvas

         camera={{
          position: [6, 6, 8],
          fov: 50,
        }}

        style={{
          width: '100%',
          height: '100%',
          backgroundColor: bgColor,
        }}

      >

        {/* ILUMINACIÓN */}

        <ambientLight
          intensity={0.7}
        />


        <directionalLight
          position={[10, 10, 5]}
          intensity={1.2}
        />


        <directionalLight
          position={[-10, -10, -5]}
          intensity={0.4}
        />


        {/* GRAFO */}

<NavigationGraph routePath={routePath}>

  {/* ==================== PISO 1 ==================== */}

  <NavigationNode
    id={1}
    kind="Entrada"
    tags={['entrada']}
    connections={[2]}
  >
    <mesh position={[0, 0, 0]}>
      <boxGeometry args={[0.5, 0.5, 0.5]} />
      <meshStandardMaterial color="#38bdf8" transparent opacity={0.65} />
    </mesh>
  </NavigationNode>

  <NavigationNode
    id={2}
    kind="otro"
    tags={['Conexion']}
    connections={[1, 3, 10]}
  >
    <mesh position={[0, 0, 2]}>
      <boxGeometry args={[0.5, 0.5, 0.5]} />
      <meshStandardMaterial color="#38bdf8" transparent opacity={0.65} />
    </mesh>
  </NavigationNode>

  <NavigationNode
    id={3}
    kind="escalera"
    tags={['Escalera']}
    connections={[2, 4]}
  >
    <mesh position={[-2, 0.5, 1.5]}>
      <boxGeometry args={[0.5, 0.5, 0.5]} />
      <meshStandardMaterial color="#38bdf8" transparent opacity={0.65} />
    </mesh>
  </NavigationNode>

  <NavigationNode
    id={4}
    kind="otro"
    tags={['Conexion']}
    connections={[3, 5]}
  >
    <mesh position={[0, 1, 1]}>
      <boxGeometry args={[0.5, 0.5, 0.5]} />
      <meshStandardMaterial color="#38bdf8" transparent opacity={0.65} />
    </mesh>
  </NavigationNode>

  <NavigationNode
    id={5}
    kind="otro"
    tags={['Conexion']}
    connections={[4, 6, 9]}
  >
    <mesh position={[0, 1, 3]}>
      <boxGeometry args={[0.5, 0.5, 0.5]} />
      <meshStandardMaterial color="#38bdf8" transparent opacity={0.65} />
    </mesh>
  </NavigationNode>

  <NavigationNode
    id={6}
    kind="pasillo"
    tags={['Corredor']}
    connections={[5, 7, 8]}
  >
    <mesh position={[0, 1, 5]}>
      <boxGeometry args={[0.5, 0.5, 0.5]} />
      <meshStandardMaterial color="#38bdf8" transparent opacity={0.65} />
    </mesh>
  </NavigationNode>

  <NavigationNode
    id={7}
    kind="administracion"
    tags={['Decanatura.Ing']}
    connections={[6]}
  >
    <mesh position={[2, 1, 5]}>
      <boxGeometry args={[0.5, 0.5, 0.5]} />
      <meshStandardMaterial color="#38bdf8" transparent opacity={0.65} />
    </mesh>
  </NavigationNode>

  <NavigationNode
    id={8}
    kind="administracion"
    tags={['Facultad De Ingenieria']}
    connections={[6]}
  >
    <mesh position={[-2, 1, 5]}>
      <boxGeometry args={[0.5, 0.5, 0.5]} />
      <meshStandardMaterial color="#38bdf8" transparent opacity={0.65} />
    </mesh>
  </NavigationNode>

  <NavigationNode
    id={9}
    kind="pasillo"
    tags={['Corredor']}
    connections={[5, 11]}
  >
    <mesh position={[-2, 1, 3]}>
      <boxGeometry args={[0.5, 0.5, 0.5]} />
      <meshStandardMaterial color="#38bdf8" transparent opacity={0.65} />
    </mesh>
  </NavigationNode>


  {/* ==================== SEGUNDA ESCALERA ==================== */}

  <NavigationNode
    id={10}
    kind="escalera"
    tags={['Escalera']}
    connections={[2, 11]}
  >
    <mesh position={[-4, 0.5, 2]}>
      <boxGeometry args={[0.5, 0.5, 0.5]} />
      <meshStandardMaterial color="#38bdf8" transparent opacity={0.65} />
    </mesh>
  </NavigationNode>


  {/* ==================== PASILLO HACIA SALONES ==================== */}

  <NavigationNode
    id={11}
    kind="pasillo"
    tags={['Corredor']}
    connections={[10, 9, 12, 13, 14]}
  >
    <mesh position={[-4, 1, 3]}>
      <boxGeometry args={[0.5, 0.5, 0.5]} />
      <meshStandardMaterial color="#38bdf8" transparent opacity={0.65} />
    </mesh>
  </NavigationNode>


  {/* ==================== SALONES ==================== */}

  <NavigationNode
    id={12}
    kind="salon"
    tags={['Salon']}
    connections={[11]}
  >
    <mesh position={[-4, 1, 5]}>
      <boxGeometry args={[0.5, 0.5, 0.5]} />
      <meshStandardMaterial color="#38bdf8" transparent opacity={0.65} />
    </mesh>
  </NavigationNode>

  <NavigationNode
    id={13}
    kind="salon"
    tags={['Salon']}
    connections={[11]}
  >
    <mesh position={[-6, 1, 5]}>
      <boxGeometry args={[0.5, 0.5, 0.5]} />
      <meshStandardMaterial color="#38bdf8" transparent opacity={0.65} />
    </mesh>
  </NavigationNode>

  <NavigationNode
    id={14}
    kind="salon"
    tags={['Salon']}
    connections={[11]}
  >
    <mesh position={[-8, 1, 5]}>
      <boxGeometry args={[0.5, 0.5, 0.5]} />
      <meshStandardMaterial color="#38bdf8" transparent opacity={0.65} />
    </mesh>
  </NavigationNode>

</NavigationGraph>

        {/* PLANO DE REFERENCIA */}

        <gridHelper
          args={[
            50,
            50,
            '#94a3b8',
            '#cbd5e1',
          ]}
          position={[0, -0.5, 0]}
        />

        {/* CONTROLES */}
        <OrbitControls
          makeDefault
        />

      </Canvas>

    </div>

  );

};

