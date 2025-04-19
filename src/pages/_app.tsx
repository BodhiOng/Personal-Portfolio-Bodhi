import "@/styles/globals.css";
import type { AppProps } from "next/app";
import HeadComponent from './_head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <HeadComponent />
      <Component {...pageProps} />
    </>
  );
}
