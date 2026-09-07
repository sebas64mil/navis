
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useAppStore } from '../../store/useAppStore';
import { NavigationNodeView } from '../Components/NavigationNode';
import { NodeConnection } from '../Components/NodeConnection';
import { navigationNodes } from '../../features/navigation/navigationNodes';
import type { NavigationNodeProps } from '../../types/navigation';



interface NavigationGraphProps {
  routePath: number[] | null;
  children: React.ReactNode;
}

const NavigationGraph: React.FC<NavigationGraphProps> = ({ routePath, children }) => {
  const visualNodes = React.Children.toArray(children).flatMap((child) => {
    if (!React.isValidElement(child)) return [];
    const element = child as React.ReactElement<NavigationNodeProps>;
    return [{ id: element.props.nodeId, position: element.props.position }];
  });

  const getNodePosition = (nodeId: number) =>
    visualNodes.find((node) => node.id === nodeId)?.position ?? [0, 0, 0] as [number, number, number];

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
            isOnRoute: isNodeOnRoute(nodeProps.nodeId),
          },
        );
      })}
      {/* CONEXIONES */}

      {navigationNodes.map((node) =>

        node.connections.map(
          (connectionId) => {


            if (
              node.id >= connectionId
            ) {

              return null;

            }


            const connectedNode =
              navigationNodes.find(
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

  <NavigationNodeView nodeId={1} position={[0, 0, 0]}>
    <mesh>
      <boxGeometry args={[0.5, 0.5, 0.5]} />
      <meshStandardMaterial color="#38bdf8" transparent opacity={0.65} />
    </mesh>
  </NavigationNodeView>

  <NavigationNodeView nodeId={2} position={[0, 0, 2]}>
    <mesh>
      <boxGeometry args={[0.5, 0.5, 0.5]} />
      <meshStandardMaterial color="#38bdf8" transparent opacity={0.65} />
    </mesh>
  </NavigationNodeView>

  <NavigationNodeView nodeId={3} position={[-2, 0.5, 1.5]}>
    <mesh>
      <boxGeometry args={[0.5, 0.5, 0.5]} />
      <meshStandardMaterial color="#38bdf8" transparent opacity={0.65} />
    </mesh>
  </NavigationNodeView>

  <NavigationNodeView nodeId={4} position={[0, 1, 1]}>
    <mesh>
      <boxGeometry args={[0.5, 0.5, 0.5]} />
      <meshStandardMaterial color="#38bdf8" transparent opacity={0.65} />
    </mesh>
  </NavigationNodeView>

  <NavigationNodeView nodeId={5} position={[0, 1, 3]}>
    <mesh>
      <boxGeometry args={[0.5, 0.5, 0.5]} />
      <meshStandardMaterial color="#38bdf8" transparent opacity={0.65} />
    </mesh>
  </NavigationNodeView>

  <NavigationNodeView nodeId={6} position={[0, 1, 5]}>
    <mesh>
      <boxGeometry args={[0.5, 0.5, 0.5]} />
      <meshStandardMaterial color="#38bdf8" transparent opacity={0.65} />
    </mesh>
  </NavigationNodeView>

  <NavigationNodeView nodeId={7} position={[2, 1, 5]}>
    <mesh>
      <boxGeometry args={[0.5, 0.5, 0.5]} />
      <meshStandardMaterial color="#38bdf8" transparent opacity={0.65} />
    </mesh>
  </NavigationNodeView>

  <NavigationNodeView nodeId={8} position={[-2, 1, 5]}>
    <mesh>
      <boxGeometry args={[0.5, 0.5, 0.5]} />
      <meshStandardMaterial color="#38bdf8" transparent opacity={0.65} />
    </mesh>
  </NavigationNodeView>

  <NavigationNodeView nodeId={9} position={[-2, 1, 3]}>
    <mesh>
      <boxGeometry args={[0.5, 0.5, 0.5]} />
      <meshStandardMaterial color="#38bdf8" transparent opacity={0.65} />
    </mesh>
  </NavigationNodeView>


  {/* ==================== SEGUNDA ESCALERA ==================== */}

  <NavigationNodeView nodeId={10} position={[-4, 0.5, 2]}>
    <mesh>
      <boxGeometry args={[0.5, 0.5, 0.5]} />
      <meshStandardMaterial color="#38bdf8" transparent opacity={0.65} />
    </mesh>
  </NavigationNodeView>


  {/* ==================== PASILLO HACIA SALONES ==================== */}

  <NavigationNodeView nodeId={11} position={[-4, 1, 3]}>
    <mesh>
      <boxGeometry args={[0.5, 0.5, 0.5]} />
      <meshStandardMaterial color="#38bdf8" transparent opacity={0.65} />
    </mesh>
  </NavigationNodeView>


  {/* ==================== SALONES ==================== */}

  <NavigationNodeView nodeId={12} position={[-4, 1, 5]}>
    <mesh>
      <boxGeometry args={[0.5, 0.5, 0.5]} />
      <meshStandardMaterial color="#38bdf8" transparent opacity={0.65} />
    </mesh>
  </NavigationNodeView>

  <NavigationNodeView nodeId={13} position={[-6, 1, 5]}>
    <mesh>
      <boxGeometry args={[0.5, 0.5, 0.5]} />
      <meshStandardMaterial color="#38bdf8" transparent opacity={0.65} />
    </mesh>
  </NavigationNodeView>

  <NavigationNodeView nodeId={14} position={[-8, 1, 5]}>
    <mesh>
      <boxGeometry args={[0.5, 0.5, 0.5]} />
      <meshStandardMaterial color="#38bdf8" transparent opacity={0.65} />
    </mesh>
  </NavigationNodeView>

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

