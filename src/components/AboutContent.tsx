import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  HStack,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

const features = [
  {
    id: 1,
    title: "Innovador",
    text: "Busco trabajar en proyectos relacionados con la decentalización y la privacidad online. Quiero ser parte de la vanguardia que implica la tecnología blockchain ",
  },
  {
    id: 2,
    title: "Auto-didacta",
    text: "Me encanta aprender por mi cuenta, y constantemente estoy investigando nuevas tecnologías.",
  },
  {
    id: 3,
    title: "Flexible",
    text: "Disfruto de enseñar y colaborar con mis colegas, así como de resolver tareas complejas a solas o en equipo.",
  },
  {
    id: 4,
    title: "Desarrollo web",
    text: "Para el desarrollo de aplicaciones web utilizo React y Next.js, junto a herramientas como TailwindCSS y ChakraUI.",
  },
  {
    id: 5,
    title: "Smart contracts",
    text: "Para el desarrollo de contratos inteligentes utilizo Solidity y Hardhat, lo cual me permite desarrollar para la mayoría de las blockchains.",
  },
  {
    id: 6,
    title: "JavaScript",
    text: "Tengo preferencia por frameworks y librerías de JavaScript, ya que es mi lenguaje principal, pero estoy abierto a utilizar otros lenguajes.",
  },
];

export default function AboutContent() {
  return (
    <Box p={4}>
      {/* Heading */}
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={"3xl"} mt={4}>
          Soy Luciano Oliva Bianco
        </Heading>
        <Text color={useColorModeValue("gray.500", "gray.300")} fontSize={"xl"}>
          Desarrollador web de aplicaciones decentralizadas y contratos
          inteligentes.
        </Text>
      </Stack>

      {/* Sections */}
      <Container maxW={"6xl"} mt={10}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          {features.map((feature) => (
            <HStack key={feature.id} align={"top"}>
              <Box color={"green.400"} px={2}>
                <Icon as={CheckIcon} />
              </Box>
              <VStack align={"start"}>
                <Text fontWeight={600}>{feature.title}</Text>
                <Text color={"gray.500"}>{feature.text}</Text>
              </VStack>
            </HStack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
