import Head from "next/head";
import Hero from "../src/components/Hero";
import { ColorModeScript } from "@chakra-ui/react";
import AboutContent from "../src/components/AboutContent";
import AboutCats from "../src/components/AboutCats";
import { Container, Stack, Heading, useColorModeValue } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Lulox Portfolio</title>
        <meta
          name="description"
          content="Hi, I'm Luciano, and this is my personal site. I'm a Full-stack Web3 developer"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ColorModeScript initialColorMode={"dark"} />

      <Hero />

      <Stack
        spacing={4}
        as={Container}
        maxW={"3xl"}
        textAlign={"center"}
        mt={6}
      >
        <Heading
          color={useColorModeValue("blue.500", "blue.300")}
          fontSize={"3xl"}
          mt={4}
        >
          About me
        </Heading>
      </Stack>
      <AboutContent />
      <AboutCats />

      {/* <ContactForm /> */}
    </>
  );
}
