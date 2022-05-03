import React, { useMemo } from "react";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import {
  ConnectionProvider,
  useConnection,
  useWallet,
} from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import WalletProvider from "../contexts/ClientWalletProvider";
import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import "../styles/App.css";
import { JupiterProvider } from "@jup-ag/react-hook";

const SOLANA_NETWORK = WalletAdapterNetwork.Mainnet;

function MyApp({ Component, pageProps }: AppProps) {
  const endpoint = useMemo(() => "https://ssc-dao.genesysgo.net/", []);

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
      cluster="mainnet-beta"
      connection={connection}
      userPublicKey={wallet.publicKey || undefined}
      routeCacheDuration={0}
    >
      {children}
    </JupiterProvider>
  );
};

export default MyApp;
