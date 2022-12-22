import {
  Box,
  Container,
  Heading,
  Center,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import Image from "next/image";

export default function blogPostWithImage() {
  return (
    <Box p={4}>
      {/* Heading */}
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={"3xl"} mt={4}>
          Mis proyectos
        </Heading>
      </Stack>

      {/* Sections */}

      <Center py={6}>
        {/* First card */}
        <Box
          maxW={"445px"}
          w={"full"}
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
              alt="Something"
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
          </Stack>
        </Box>
        {/* Second card */}
        <Box
          maxW={"445px"}
          w={"full"}
          bg={useColorModeValue("white", "gray.900")}
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
              alt="Something"
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
              Sportsbook
            </Heading>
            <Text color={"gray.500"}>
              dApp que permite desafiar a otros equipos y apostar en el
              resultado de un encuentro deportivo. Fue presentado y desarrollado
              para el hackathon de Think & Dev "King of Devs"
            </Text>
          </Stack>
        </Box>
      </Center>
    </Box>
  );
}
