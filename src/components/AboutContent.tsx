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
    text: "Siempre busco ser parte de la vanguardia tecnológica, y encuentro eso en la tecnología blockchain.",
  },
  {
    id: 2,
    title: "Auto-didacta",
    text: "Tengo facilidad para aprender por mis medios, y constantemente estoy investigando nuevas tecnologías.",
  },
  {
    id: 3,
    title: "Flexible",
    text: "Disfruto de enseñar y colaborar con mis colegas, y tambien de resolver tareas complejas a solas.",
  },
  {
    id: 4,
    title: "Desarrollo web",
    text: "Utilizo React y Next.js, junto a las últimas herramientas del mercado como TailwindCSS y ChakraUI.",
  },
  {
    id: 5,
    title: "Smart contracts",
    text: "Con Solidity y Hardhat puedo desarrollar contratos inteligentes para la mayoría de las blockchains.",
  },
  {
    id: 6,
    title: "JavaScript",
    text: "Mi lenguaje principal, tanto para frontend como para backend, aunque estoy abierto a utilizar otros lenguajes.",
  },
];

export default function AboutContent() {
  const textColor = useColorModeValue("gray.700", "gray.300");
  const bgColor = useColorModeValue("gray.300", "gray.700");

  return (
    <Box p={4}>
      {/* Sections */}
      <Container maxW={"container.lg"}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          {features.map((feature) => (
            <HStack
              key={feature.id}
              align={"top"}
              // border={"3px solid gray"}
              borderRadius={24}
              p={3}
              _hover={{ bg: bgColor }}
            >
              <Box color={"green.400"} px={2}>
                <Icon as={CheckIcon} />
              </Box>
              <VStack align={"start"}>
                <Text fontWeight={600}>{feature.title}</Text>
                <Text color={textColor}>{feature.text}</Text>
              </VStack>
            </HStack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
