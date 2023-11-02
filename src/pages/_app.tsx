import "@/styles/globals.css";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    // <ThirdwebProvider
    //   activeChain="ethereum"
    //   clientId="408c30bea260697a97e85d9b9294acf1"
    // >
      <Component {...pageProps} />
    // </ThirdwebProvider>
  );
}
