import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Timeline from './pages/timeline/Timeline';

function App() {
  const queryClient = new QueryClient();
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Timeline />
      </QueryClientProvider>
    </div>
  );
}

export default App;
