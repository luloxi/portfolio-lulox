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
        <title>About me | Lulox Portfolio</title>
        <meta
          name="description"
          content="Hey there, I'm a Full-stack Web3 developer"
        />
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
        <Heading
          color={useColorModeValue("blue.500", "blue.300")}
          fontSize={"3xl"}
          mt={4}
        >
          I&apos;m Luciano Oliva Bianco
        </Heading>
        <Text color={useColorModeValue("gray.500", "gray.300")} fontSize={"xl"}>
          Hey there, I&apos;m a Full-stack Web3 developer!
        </Text>
      </Stack>
      <AboutContent />
      <AboutCats />
    </>
  );
}
