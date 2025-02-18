 "use client";
import { WagmiProvider, type WagmiProviderProps } from 'wagmi';
import { config } from '../lib/config';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RainbowKitProvider, darkTheme } from "@rainbow-me/rainbowkit";
import React from 'react';
import PoolBody from '@/components/PoolBody';

type Props = {
  children: React.ReactNode;
};
function Providers({ children }: Props) { 
    const queryClient = new QueryClient();
  return (
    <WagmiProvider config={config}> 
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider
          theme={darkTheme({
            accentColor: "#0E76FD",
            accentColorForeground: "white",
            borderRadius: "large",
            fontStack: "system",
            overlayBlur: "small",
          })}
        >
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}

export default Providers