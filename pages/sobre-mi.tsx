import Head from "next/head";
import { Container } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sobre mí | Lulox Portfolio</title>
        <meta name="description" content="Full-stack Web3 developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container bg={"orange.400"} maxW="container.lg" minH="100vh">
        Acá iria información breve sobre mi, mis hobbies, intereses,
        trayectoria, etc
      </Container>
    </>
  );
}
