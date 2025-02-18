import ConnectWallet from "@/components/ConnectWallet";
import PoolBody from "@/components/PoolBody";

export default function Home() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    
    
      <div className="grid grid-rows-[20px_1fr_20px] justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <header className="row-start-1 flex items-center justify-between gap-6 w-full">
          <h1 className="text-5xl font-semibold">Bienvenue sur Uniswap 5.0</h1>
          <ConnectWallet />
        </header>
        <main className="flex flex-col gap-8 row-start-2 sm:items-start pt-5 w-1/2">
          <PoolBody />
        </main>
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
          <p>Copyright © {year} Yohan Georgelin</p>
        </footer>
      </div>
      
  );
}
