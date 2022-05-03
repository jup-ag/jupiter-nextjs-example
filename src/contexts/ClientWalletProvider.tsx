import type { WalletProviderProps } from "@solana/wallet-adapter-react";
import { WalletProvider } from "@solana/wallet-adapter-react";

import {
  BitKeepWalletAdapter,
  BitpieWalletAdapter,
  BloctoWalletAdapter,
  CloverWalletAdapter,
  Coin98WalletAdapter,
  CoinhubWalletAdapter,
  GlowWalletAdapter,
  MathWalletAdapter,
  SlopeWalletAdapter,
  TorusWalletAdapter,
  LedgerWalletAdapter,
  SolletWalletAdapter,
  SolongWalletAdapter,
  PhantomWalletAdapter,
  SafePalWalletAdapter,
  SolflareWalletAdapter,
  TokenPocketWalletAdapter,
  SolletExtensionWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import { useMemo } from "react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";

import("@solana/wallet-adapter-react-ui/styles.css" as any);

export function ClientWalletProvider(
  props: Omit<WalletProviderProps, "wallets">
): JSX.Element {
  const wallets = useMemo(
    () => [
      new BitKeepWalletAdapter(),
      new BitpieWalletAdapter(),
      new BloctoWalletAdapter(),
      new CloverWalletAdapter(),
      new Coin98WalletAdapter(),
      new CoinhubWalletAdapter(),
      new GlowWalletAdapter(),
      new MathWalletAdapter(),
      new SlopeWalletAdapter(),
      new TorusWalletAdapter(),
      new LedgerWalletAdapter(),
      new SolletWalletAdapter(),
      new SolongWalletAdapter(),
      new PhantomWalletAdapter(),
      new SafePalWalletAdapter(),
      new SolflareWalletAdapter(),
      new TokenPocketWalletAdapter(),
      new SolletExtensionWalletAdapter(),
    ],
    []
  );

  return (
    <WalletProvider wallets={wallets} {...props}>
      <WalletModalProvider {...props} />
    </WalletProvider>
  );
}

export default ClientWalletProvider;
