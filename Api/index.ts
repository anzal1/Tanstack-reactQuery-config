import * as ENDPOINTS from './endpoints';
import { useQuery, useMutation } from '@tanstack/react-query';

// Define an object to store query keys
export const QUERY_KEYS = {
  // Key for the returnOrder mutation
  returnOrder: 'returnOrder',
  // Key for getting the home page widget config
  getHomePageWidgetConfig: 'getHomePageWidgetConfig',
};

/**
 * Custom hook for executing a mutation to return an order.
 * @returns The useMutation hook from @tanstack/react-query.
 */
export const useReturnOrderMutation = () => {
  // Use the useMutation hook from @tanstack/react-query
  // Pass the query key and the endpoint function as arguments
  return useMutation([QUERY_KEYS.returnOrder], ENDPOINTS.returnOrder);
};

/**
 * Custom hook for getting the home page widget config.
 * @returns The useQuery hook from @tanstack/react-query.
 */
export const useGetHomePageWidgetConfig = () => {
  // Use the useQuery hook from @tanstack/react-query
  // Pass the query key and a function that calls the getHomePageWidgetConfig endpoint
  return useQuery([QUERY_KEYS.getHomePageWidgetConfig], () =>
    ENDPOINTS.getHomePageWidgetConfig()
  );
};
