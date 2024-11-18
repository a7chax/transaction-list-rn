import { QueryClient } from '@tanstack/react-query';

export const tanstackClientConfig = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: 0,
      },
    },
  });
