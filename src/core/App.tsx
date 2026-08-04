import { Providers } from './providers';
import { LocationSelectorScreen } from '../features/navigation/LocationSelectorScreen';
import { MainLayout } from '../components/layout/MainLayout';
import { useAppStore } from '../store/useAppStore';

function AppContent() {
  const selectedLocationId = useAppStore((state) => state.selectedLocationId);

  if (!selectedLocationId) {
    return <LocationSelectorScreen />;
  }

  return <MainLayout />;
}

export function App() {
  return (
    <Providers>
      <AppContent />
    </Providers>
  );
}

export default App;
