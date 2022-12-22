import Head from "next/head";
import { Container } from "@chakra-ui/react";
import ContactForm from "../src/components/ContactForm";

export default function Home() {
  return (
    <>
      <Head>
        <title>Contacto | Lulox Portfolio</title>
        <meta name="description" content="Full-stack Web3 developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ContactForm />
    </>
  );
}
