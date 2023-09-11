import React, { useEffect, useMemo } from "react";
import type { AppProps } from "next/app";
import {
  ConnectionProvider,
  useConnection,
  useWallet,
} from "@solana/wallet-adapter-react";
import WalletProvider from "../contexts/ClientWalletProvider";
import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import "../styles/App.css";
import { JupiterProvider } from "@jup-ag/react-hook";
import { SOLANA_RPC_ENDPOINT } from "../constants";

export const SECOND_TO_REFRESH = 30 * 1000;

function MyApp({ Component, pageProps }: AppProps) {
  const endpoint = useMemo(() => SOLANA_RPC_ENDPOINT, []);

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider>
        <JupiterWrapper>
          <Component {...pageProps} />
        </JupiterWrapper>
      </WalletProvider>
    </ConnectionProvider>
  );
}

const JupiterWrapper: React.FC = ({ children }) => {
  const { connection } = useConnection();
  const wallet = useWallet();

  return (
    <JupiterProvider
      connection={connection}
      userPublicKey={wallet.publicKey || undefined}
      routeCacheDuration={SECOND_TO_REFRESH}
    >
      {children}
    </JupiterProvider>
  );
};

export default MyApp;
