import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MemoryRouterProvider } from "next-router-mock/MemoryRouterProvider";
import { ReactNode } from "react";

export const TestQueryWrapper = ({ children }: { children: ReactNode }) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <MemoryRouterProvider>{children}</MemoryRouterProvider>
    </QueryClientProvider>
  );
};
