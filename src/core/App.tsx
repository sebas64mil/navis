import { Providers } from './providers';
import { MainLayout } from '../components/layout/MainLayout';

function AppContent() {
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
