import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  useColorModeValue,
  Button,
  Center,
  SimpleGrid,
  GridItem,
  useBreakpointValue,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

export default function ProjectsContent() {
  const colSpan = useBreakpointValue({ base: 2, md: 1 });

  return (
    <Box p={4}>
      {/* Heading */}
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={"3xl"} mt={4}>
          Mis proyectos
        </Heading>
      </Stack>

      {/* Sections */}

      <SimpleGrid
        columns={2}
        columnGap={3}
        rowGap={3}
        w="full"
        // border={"1px solid red"}
        justifyItems={"center"}
      >
        {/* First card */}
        <GridItem colSpan={colSpan}>
          <Box
            maxW={"445px"}
            _hover={{ bg: useColorModeValue("gray.100", "gray.800") }}
            bg={useColorModeValue("white", "gray.900")}
            boxShadow={"2xl"}
            m={4}
            rounded={"md"}
            p={6}
            overflow={"hidden"}
          >
            <Box
              h={"230px"}
              bg={"gray.100"}
              mt={-6}
              mx={-6}
              mb={6}
              pos={"relative"}
            >
              <Image
                alt="Ethernaut with Hardhat"
                src={"/projects/ethernaut.png"}
                layout={"fill"}
              />
            </Box>
            <Stack>
              <Text
                color={"green.500"}
                textTransform={"uppercase"}
                fontWeight={800}
                fontSize={"sm"}
                letterSpacing={1.1}
              >
                Smart contracts
              </Text>
              <Heading
                color={useColorModeValue("gray.700", "white")}
                fontSize={"2xl"}
                fontFamily={"body"}
              >
                Ethernaut con Hardhat
              </Heading>
              <Text color={"gray.500"}>
                Resolví una serie de desafíos de seguridad que imitan grandes
                hackeos en la historia de la blockchain utilizando Hardhat, un
                framework de desarrollo muy utilizado en la actualidad.
              </Text>
              <Center>
                <Link
                  href="https://github.com/luloxi/ethernaut-with-hardhat"
                  target={"_blank"}
                >
                  <Button
                    rounded={"full"}
                    size={"lg"}
                    fontWeight={"normal"}
                    px={6}
                    color={useColorModeValue("gray.800", "gray.100")}
                    bg={useColorModeValue("blue.400", "blue.700")}
                    _hover={{ bg: useColorModeValue("blue.300", "blue.600") }}
                  >
                    Ver en GitHub
                  </Button>
                </Link>
              </Center>
            </Stack>
          </Box>
        </GridItem>
        {/* Second card */}
        <GridItem colSpan={colSpan}>
          <Box
            maxW={"445px"}
            bg={useColorModeValue("white", "gray.900")}
            _hover={{ bg: useColorModeValue("gray.100", "gray.800") }}
            boxShadow={"2xl"}
            m={4}
            rounded={"md"}
            p={6}
            overflow={"hidden"}
          >
            <Box
              h={"240px"}
              bg={"gray.100"}
              mt={-6}
              mx={-6}
              mb={6}
              pos={"relative"}
            >
              <Image
                alt="Sportsbook"
                src={"/projects/landing.png"}
                layout={"fill"}
              />
            </Box>
            <Stack>
              <Text
                color={"green.500"}
                textTransform={"uppercase"}
                fontWeight={800}
                fontSize={"sm"}
                letterSpacing={1.1}
              >
                dApps
              </Text>
              <Heading
                color={useColorModeValue("gray.700", "white")}
                fontSize={"2xl"}
                fontFamily={"body"}
              >
                Sportsbook - EN DESARROLLO
              </Heading>
              <Text color={"gray.500"}>
                dApp para contactar equipos con una red social, y coordinar un
                encuentro con la opción de apostar en el resultado. Fue ganador
                del hackathon de Think & Dev -King of Devs-
              </Text>
              <Center>
                <Link
                  href="https://github.com/luloxi/sportsbook-dapp"
                  target={"_blank"}
                >
                  <Button
                    rounded={"full"}
                    size={"lg"}
                    fontWeight={"normal"}
                    px={6}
                    color={useColorModeValue("gray.800", "gray.100")}
                    bg={useColorModeValue("blue.400", "blue.700")}
                    _hover={{ bg: useColorModeValue("blue.300", "blue.600") }}
                  >
                    Ver en GitHub
                  </Button>
                </Link>
              </Center>
            </Stack>
          </Box>
        </GridItem>
      </SimpleGrid>
    </Box>
  );
}
