import Head from "next/head";
import { Container } from "@chakra-ui/react";
import ContactForm from "./components/ContactForm";

export default function Home() {
  return (
    <>
      <Head>
        <title>Contacto - Lulox Portfolio</title>
        <meta name="description" content="Full-stack Web3 developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ContactForm />

      {/* <Container bg={"green.400"} maxW="container.lg" minH="100vh">
        Aca iria un formulario de contacto
      </Container> */}
    </>
  );
}
