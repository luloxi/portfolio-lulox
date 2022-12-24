import Head from "next/head";
import {
  Container,
  Stack,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import AboutContent from "../src/components/AboutContent";
import AboutCats from "../src/components/AboutCats";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sobre mí | Lulox Portfolio</title>
        <meta name="description" content="Full-stack Web3 developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Heading */}
      <Stack
        spacing={4}
        as={Container}
        maxW={"3xl"}
        textAlign={"center"}
        mt={6}
      >
        <Heading fontSize={"3xl"} mt={4}>
          Soy Luciano Oliva Bianco
        </Heading>
        <Text color={useColorModeValue("gray.500", "gray.300")} fontSize={"xl"}>
          Desarrollador web de aplicaciones decentralizadas y contratos
          inteligentes.
        </Text>
      </Stack>
      <AboutContent />
      <AboutCats />
    </>
  );
}
