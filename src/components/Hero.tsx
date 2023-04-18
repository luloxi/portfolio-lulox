import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";

export default function Hero() {
  return (
    <Container maxW={"container.lg"}>
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 6, md: 12 }}
        marginBottom={6}
        direction={{ base: "column", md: "row" }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "4xl", sm: "5xl", lg: "6xl" }}
          >
            <Text as={"span"} color={"blue.400"}>
              Hi! I&apos;m {/* Hola, */}
            </Text>
            <br />
            <Text
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: "30%",
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "blue.400",
                zIndex: -1,
              }}
            >
              Luciano!
            </Text>
          </Heading>
          <Text color={useColorModeValue("gray.700", "gray.300")}>
            I love programming, blockchain technology, and cats! I&apos;m
            currently looking to work in the web3 industry. Let&apos;s make a
            change in the world together!
          </Text>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            justifyContent={"center"}
            direction={{ base: "row", sm: "row" }}
          >
            <Link href="projects">
              <Button
                rounded={"full"}
                size={"lg"}
                fontWeight={"normal"}
                px={6}
                color={useColorModeValue("white", "gray.100")}
                bg={useColorModeValue("orange.500", "orange.700")}
                transition={"background 0.5s ease"}
                _hover={{ bg: useColorModeValue("orange.400", "orange.600") }}
                _active={{ bg: useColorModeValue("orange.500", "orange.400") }}
              >
                View my projects
              </Button>
            </Link>
            <Link href="contact">
              <Button
                rounded={"full"}
                size={"lg"}
                fontWeight={"normal"}
                px={6}
                color={"white"}
                bg={useColorModeValue("blue.400", "blue.700")}
                transition={"background 0.5s ease"}
                _hover={{ bg: useColorModeValue("blue.300", "blue.600") }}
                _active={{ bg: useColorModeValue("blue.500", "blue.400") }}
              >
                Contact me!
              </Button>
            </Link>
          </Stack>
        </Stack>
        <Flex
          flex={1}
          justify={"center"}
          align={"center"}
          position={"relative"}
          w={"full"}
        >
          <Box
            position={"relative"}
            height={"400px"}
            rounded={"2xl"}
            boxShadow={"2xl"}
            // width={"full"}
            overflow={"hidden"}
            display={"flex"}
            justifyContent={"center"}
          >
            <Image
              alt={"Hero Image"}
              fit={"cover"}
              rounded={"2xl"}
              align={"center"}
              // w={"100%"}
              h={"100%"}
              src={"/profile.jpg"}
            />
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
}
