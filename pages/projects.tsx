import Head from "next/head";
import { Container } from "@chakra-ui/react";
import ProjectsContent from "../src/components/ProjectsContent";

export default function Home() {
  return (
    <>
      <Head>
        <title>Projects | Lulox Portfolio</title>
        <meta
          name="description"
          content="Projects on my portfolio. Developed with Hardhat and Next.js"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ProjectsContent />
    </>
  );
}
