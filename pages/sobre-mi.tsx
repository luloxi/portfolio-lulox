import Head from "next/head";
import { Container } from "@chakra-ui/react";
import AboutContent from "./components/AboutContent";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sobre mí | Lulox Portfolio</title>
        <meta name="description" content="Full-stack Web3 developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AboutContent />
    </>
  );
}
