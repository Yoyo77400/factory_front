'use client';

import { http, createStorage, cookieStorage } from 'wagmi'
import { sepolia, bscTestnet, blastSepolia } from 'wagmi/chains'
import { Chain, getDefaultConfig } from '@rainbow-me/rainbowkit'

const projectId = "1234";

const supportedChains: Chain[] = [sepolia, bscTestnet, blastSepolia];

export const config = getDefaultConfig({
   appName: 'Factory App Exam',
   projectId,
   chains: supportedChains as any,
   ssr: true,
   transports: supportedChains.reduce((obj, chain) => ({ ...obj, [chain.id]: http() }), {})
 });