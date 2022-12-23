import Head from "next/head";
import { Container } from "@chakra-ui/react";
import ProjectsContent from "../src/components/ProjectsContent";

export default function Home() {
  return (
    <>
      <Head>
        <title>Proyectos | Lulox Portfolio</title>
        <meta name="description" content="Full-stack Web3 developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ProjectsContent />
    </>
  );
}
