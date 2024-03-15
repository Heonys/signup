import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import router from './routes/index.tsx';
import { ChakraBaseProvider, theme } from '@chakra-ui/react';
import worker from './_mock/worker.ts';

const queryClient = new QueryClient();

if (process.env.NODE_ENV === 'development') {
  worker.start();
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ChakraBaseProvider theme={theme}>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </ChakraBaseProvider>,
);
