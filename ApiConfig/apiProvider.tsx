import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';

const defaultQueryOptions = {
  queries: {
    staleTime: 0,
    retry: 1,
    notifyOnStatusChange: false,
    refetchOnWindowFocus: false,
  },
};

const queryClient = new QueryClient({ defaultOptions: defaultQueryOptions });

/**
 * Component that provides the API configuration to its children.
 *
 * @param props - The component props.
 * @param props.children - The child components to render.
 * @returns The API provider component.
 */
export const ApiProvider = (props: { children: React.ReactNode }) => (
  // QueryClientProvider is a component from the react-query library
  // that provides the query client to its descendants.
  <QueryClientProvider client={queryClient}>
    {props.children}
  </QueryClientProvider>
);

export default ApiProvider;
