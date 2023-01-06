import {
  Box,
  Container,
  SimpleGrid,
  Icon,
  Text,
  HStack,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { CheckIcon, AddIcon } from "@chakra-ui/icons";

const features = [
  {
    id: 1,
    title: "Innovator",
    text: "I'm always looking for the latest technology advances and trends.",
    icon: AddIcon,
    iconColor: "yellow.400",
  },
  {
    id: 2,
    title: "Self-learner",
    text: "I can learn with ease by myself, and I'm constantly researching on new technologies.",
    icon: AddIcon,
    iconColor: "yellow.400",
  },
  {
    id: 3,
    title: "Flexible",
    text: "I enjoy teaching and collaborating with my peers, and also solving complex tasks on my own",
    icon: AddIcon,
    iconColor: "yellow.400",
  },
  {
    id: 4,
    title: "Web development",
    text: "I'm currently focused on using React and Next.js, along with ChakraUI and TailwindCSS",
    icon: CheckIcon,
    iconColor: "green.400",
  },
  {
    id: 5,
    title: "Smart contracts",
    text: "I can develop smart contracts for most blockchains with Solidity and Hardhat.",
    icon: CheckIcon,
    iconColor: "green.400",
  },
  {
    id: 6,
    title: "JavaScript",
    text: "My main language for frontend and backend development. But I'm willing to learn new ones!",
    icon: CheckIcon,
    iconColor: "green.400",
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
              transition={"background 0.9s ease"}
            >
              <Box color={feature.iconColor} px={2}>
                <Icon as={feature.icon} />
              </Box>
              <VStack align={"start"}>
                <Text
                  color={useColorModeValue("blue.500", "blue.300")}
                  fontWeight={600}
                >
                  {feature.title}
                </Text>
                <Text color={textColor}>{feature.text}</Text>
              </VStack>
            </HStack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
