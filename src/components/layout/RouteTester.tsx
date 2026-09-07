import React, { useEffect, useState } from 'react';
import { findPath, type DijkstraResult } from '../../Utils/dijkstra';
import { useAppStore } from '../../store/useAppStore';

export const RouteTester: React.FC = () => {
  const [startId, setStartId] = useState(1);
  const [targetId, setTargetId] = useState(9);
  const [route, setRoute] = useState<DijkstraResult | null>(null);
  const [hasSearched, setHasSearched] = useState(false);
  const setRoutePath = useAppStore((state) => state.setRoutePath);
  const navigationNodes = useAppStore((state) => state.navigationNodes);

  useEffect(() => {
    if (navigationNodes.length === 0) return;

    if (!navigationNodes.some((node) => node.id === startId)) {
      setStartId(navigationNodes[0].id);
    }

    if (!navigationNodes.some((node) => node.id === targetId)) {
      setTargetId(navigationNodes[navigationNodes.length - 1].id);
    }
  }, [navigationNodes, startId, targetId]);

  const handleSearch = () => {
    const path = findPath(navigationNodes, startId, targetId);
    const result: DijkstraResult | null = path
      ? { path, distance: path.length - 1 }
      : null;
    setRoute(result);
    setRoutePath(result?.path ?? null);
    setHasSearched(true);
  };

  return (
    <section style={{ position: 'absolute', top: 24, right: 24, width: 280, padding: 16, border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', background: 'var(--color-surface)', boxShadow: 'var(--shadow-lg)', zIndex: 20 }}>
      <h3 style={{ margin: '0 0 14px', color: 'var(--color-text-primary)', fontSize: 'var(--font-size-md)' }}>Probar ruta</h3>
      <div style={{ display: 'grid', gap: 10 }}>
        <label style={{ display: 'grid', gap: 5, color: 'var(--color-text-secondary)', fontSize: 'var(--font-size-xs)' }}>
          Punto inicial
          <select value={startId} onChange={(event) => setStartId(Number(event.target.value))} style={{ padding: '8px 10px', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', background: 'var(--color-background)', color: 'var(--color-text-primary)' }}>
            {navigationNodes.map((node) => <option key={node.id} value={node.id}>Nodo {node.id} · {node.name}</option>)}
          </select>
        </label>
        <label style={{ display: 'grid', gap: 5, color: 'var(--color-text-secondary)', fontSize: 'var(--font-size-xs)' }}>
          Punto destino
          <select value={targetId} onChange={(event) => setTargetId(Number(event.target.value))} style={{ padding: '8px 10px', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', background: 'var(--color-background)', color: 'var(--color-text-primary)' }}>
            {navigationNodes.map((node) => <option key={node.id} value={node.id}>Nodo {node.id} · {node.name}</option>)}
          </select>
        </label>
        <button type="button" onClick={handleSearch} disabled={navigationNodes.length < 2} style={{ marginTop: 4, padding: '9px 12px', border: 'none', borderRadius: 'var(--radius-md)', background: 'var(--color-primary)', color: '#fff', cursor: navigationNodes.length < 2 ? 'not-allowed' : 'pointer', opacity: navigationNodes.length < 2 ? 0.5 : 1, fontWeight: 700 }}>
          Buscar
        </button>
      </div>
      {hasSearched && (
        <div style={{ marginTop: 14, paddingTop: 12, borderTop: '1px solid var(--color-border)', color: 'var(--color-text-secondary)', fontSize: 'var(--font-size-sm)', lineHeight: 1.5 }}>
          {route ? <><div><strong>Ruta:</strong> {route.path.join(' → ')}</div><div><strong>Costo:</strong> {route.distance.toFixed(2)} unidades</div></> : <div>No existe una ruta entre esos puntos.</div>}
        </div>
      )}
    </section>
  );
};