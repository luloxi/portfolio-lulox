import Head from "next/head";
import ContactForm from "../src/components/ContactForm.jsx";
import { Box, Container } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Contacto | Lulox Portfolio</title>
        <meta name="description" content="Full-stack Web3 developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <Box p={4}> */}

      <ContactForm />

      {/* </Box> */}
    </>
  );
}
