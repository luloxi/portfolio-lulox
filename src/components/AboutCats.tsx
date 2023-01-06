import {
  Container,
  Stack,
  Flex,
  Box,
  Text,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";

export default function AboutCats() {
  const bgColor = useColorModeValue("gray.300", "gray.700");

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
          <Text
            color={useColorModeValue("gray.700", "gray.300")}
            _hover={{ bg: bgColor }}
            transition={"background 0.9s ease"}
            p={4}
            borderRadius={24}
          >
            And... I love cats! I enjoy practicing yoga, I prefer fans over air
            conditioners, sometimes I play chess, and I love a good coffee.
            Native Linux user, and I'm more informed on crypto than on world
            news.
          </Text>
          <Image
            alt={"Hero Image"}
            fit={"cover"}
            rounded={"2xl"}
            align={"center"}
            // w={"100%"}
            h={"100%"}
            src={"/about/horizontal.jpg"}
          />
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
              src={"/about/square.jpg"}
            />
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
}
