
import type { NavigationNode } from '../types/navigation';

/* =========================================================
   RESULTADO DE DIJKSTRA
   ========================================================= */

export interface DijkstraResult {
  path: number[];
  distance: number;
}


/* =========================================================
   CALCULAR DISTANCIA ENTRE DOS NODOS
   ========================================================= */

export const calculateDistance = (
  nodeA: NavigationNode,
  nodeB: NavigationNode
): number => {

  const [ax, ay, az] = nodeA.position;
  const [bx, by, bz] = nodeB.position;

  const dx = bx - ax;
  const dy = by - ay;
  const dz = bz - az;

  return Math.sqrt(
    dx * dx +
    dy * dy +
    dz * dz
  );
};


/* =========================================================
   DIJKSTRA
   ========================================================= */

export const dijkstra = (
  nodes: NavigationNode[],
  startId: number,
  targetId: number
): DijkstraResult | null => {

  /*
   * Distancia mínima conocida desde el nodo inicial
   * hasta cada nodo.
   *
   * Ejemplo:
   *
   * distances[1] = 0
   * distances[2] = 2
   * distances[3] = 4
   */

  const distances: Record<number, number> = {};

  /*
   * Guarda cuál fue el nodo anterior que utilizamos
   * para llegar al nodo actual.
   *
   * Esto nos permitirá reconstruir el camino
   * cuando encontremos el destino.
   */

  const previous: Record<number, number | null> = {};


  /*
   * Nodos que todavía tenemos que revisar.
   */

  const unvisited = new Set<number>();


  /* =====================================================
     INICIALIZACIÓN
     ===================================================== */

  nodes.forEach((node) => {

    distances[node.id] = Infinity;

    previous[node.id] = null;

    unvisited.add(node.id);

  });


  /*
   * La distancia del nodo inicial hasta sí mismo
   * siempre es 0.
   */

  distances[startId] = 0;


  /* =====================================================
     BÚSQUEDA
     ===================================================== */

  while (unvisited.size > 0) {

    /*
     * Buscamos el nodo no visitado que tenga
     * la distancia más pequeña conocida.
     */

    let currentId: number | null = null;

    let smallestDistance = Infinity;


    unvisited.forEach((nodeId) => {

      if (
        distances[nodeId] <
        smallestDistance
      ) {

        smallestDistance =
          distances[nodeId];

        currentId = nodeId;

      }

    });


    /*
     * Si no encontramos ningún nodo alcanzable,
     * significa que el destino no se puede alcanzar.
     */

    if (currentId === null) {
      break;
    }


    /*
     * Si llegamos al destino,
     * podemos terminar la búsqueda.
     */

    if (currentId === targetId) {
      break;
    }


    /*
     * Obtenemos el nodo actual.
     */

    const currentNode =
      nodes.find(
        (node) =>
          node.id === currentId
      );


    if (!currentNode) {
      break;
    }


    /*
     * Revisamos todas las conexiones
     * del nodo actual.
     */

    for (
      const connectionId
      of currentNode.connections
    ) {

      /*
       * Si el nodo ya fue visitado,
       * no necesitamos procesarlo nuevamente.
       */

      if (
        !unvisited.has(connectionId)
      ) {
        continue;
      }


      /*
       * Buscamos el nodo conectado.
       */

      const connectedNode =
        nodes.find(
          (node) =>
            node.id === connectionId
        );


      if (!connectedNode) {
        continue;
      }


      /*
       * El peso de la conexión es la distancia
       * física entre los dos nodos.
       */

      const connectionDistance =
        calculateDistance(
          currentNode,
          connectedNode
        );


      const newDistance =
        distances[currentId] +
        connectionDistance;


      if (
        newDistance <
        distances[connectionId]
      ) {

        distances[connectionId] =
          newDistance;

        previous[connectionId] =
          currentId;

      }

    }


    unvisited.delete(currentId);

  }



  if (
    distances[targetId] === Infinity
  ) {

    return null;

  }


  const path: number[] = [];

  let current: number | null =
    targetId;


  /*
   * Vamos desde el destino hacia atrás utilizando
   * el registro "previous".
   */

  while (current !== null) {

    path.unshift(current);

    current = previous[current];

  }


  /* =====================================================
     RESULTADO
     ===================================================== */

  return {

    path,

    distance: distances[targetId],

  };

};

