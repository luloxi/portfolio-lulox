import Head from "next/head";
import ContactForm from "../src/components/ContactForm.jsx";
import Hero from "../src/components/Hero";
import { ColorModeScript } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Lulox Portfolio</title>
        <meta name="description" content="Full-stack Web3 developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ColorModeScript initialColorMode={"dark"} />

      <Hero />

      <ContactForm />
    </>
  );
}
