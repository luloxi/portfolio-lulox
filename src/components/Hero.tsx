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
              Hola,
            </Text>
            <br />
            <Text as={"span"} color={"blue.400"}>
              soy Luciano
            </Text>
          </Heading>
          <Text color={useColorModeValue("gray.700", "gray.300")}>
            Me apasiona la programación, la tecnología blockchain, y los gatos.
            Actualmente busco trabajar con tecnologías web3.
            <br /> Te invito a conocer sobre mis proyectos y otros datos sobre
            mí.
          </Text>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            justifyContent={"center"}
            direction={{ base: "row", sm: "row" }}
          >
            <Link href="proyectos">
              <Button
                rounded={"full"}
                size={"lg"}
                fontWeight={"normal"}
                px={6}
                color={useColorModeValue("gray.800", "gray.100")}
                bg={useColorModeValue("blue.300", "blue.700")}
                _hover={{ bg: useColorModeValue("blue.200", "blue.600") }}
              >
                Mis proyectos
              </Button>
            </Link>
            <Link href="sobre-mi">
              <Button
                rounded={"full"}
                size={"lg"}
                fontWeight={"normal"}
                px={6}
                color={useColorModeValue("gray.800", "gray.100")}
                bg={useColorModeValue("gray.400", "gray.700")}
                _hover={{ bg: useColorModeValue("gray.300", "gray.600") }}
              >
                Sobre mí
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
