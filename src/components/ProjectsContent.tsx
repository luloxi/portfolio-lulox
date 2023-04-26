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
          My projects
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
            _hover={{ bg: useColorModeValue("yellow.100", "red.900") }}
            transition={"background 0.9s ease"}
            bg={useColorModeValue("blue.100", "blue.900")}
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
                alt="Tuse"
                src={"/projects/evolution-DAO.png"}
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
                Dapps
              </Text>
              <Heading
                color={useColorModeValue("gray.700", "white")}
                fontSize={"2xl"}
                fontFamily={"body"}
              >
                evolution-DAO
              </Heading>
              <Text color={useColorModeValue("gray.700", "white")}>
                DAO development learning project that makes different DAOs with
                increasing difficulty level.
              </Text>
              <Center>
                {/* <Link href="https://tuse.vercel.app/" target={"_blank"}>
                  <Button
                    rounded={"full"}
                    size={"lg"}
                    fontWeight={"normal"}
                    px={6}
                    color={useColorModeValue("white", "gray.100")}
                    bg={useColorModeValue("orange.500", "orange.700")}
                    _hover={{ bg: useColorModeValue("blue.400", "blue.600") }}
                  >
                    Web
                  </Button>
                </Link> */}
                <Link
                  href="https://buidlguidl.com/build/0XiixjBqbKqluguYpmFE"
                  target={"_blank"}
                >
                  <Button
                    rounded={"full"}
                    size={"lg"}
                    marginLeft={"5"}
                    fontWeight={"normal"}
                    px={6}
                    color={useColorModeValue("white", "gray.100")}
                    bg={useColorModeValue("blue.500", "blue.700")}
                    _hover={{ bg: useColorModeValue("blue.400", "blue.600") }}
                  >
                    View on BuidlGuidl
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
            _hover={{ bg: useColorModeValue("yellow.100", "red.900") }}
            transition={"background 0.9s ease"}
            bg={useColorModeValue("blue.100", "blue.900")}
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
                Sportsbook
              </Heading>
              <Text color={useColorModeValue("gray.700", "white")}>
                DeFi dApp for betting between teams on a sports match, that
                mints an NFT with the result to each team.
                <strong>
                  1st place winner of the Think & Dev hackathon &quot;King of
                  Devs&quot;
                </strong>
              </Text>
              <Center>
                <Link
                  href="https://buidlguidl.com/build/TeO63e0zuipeKI1alGUc"
                  target={"_blank"}
                >
                  <Button
                    rounded={"full"}
                    size={"lg"}
                    fontWeight={"normal"}
                    px={6}
                    color={useColorModeValue("white", "gray.100")}
                    bg={useColorModeValue("blue.500", "blue.700")}
                    _hover={{ bg: useColorModeValue("blue.400", "blue.600") }}
                  >
                    View on BuidlGuidl
                  </Button>
                </Link>
              </Center>
            </Stack>
          </Box>
        </GridItem>
        {/* Third card */}
        <GridItem colSpan={colSpan}>
          <Box
            maxW={"445px"}
            _hover={{ bg: useColorModeValue("yellow.100", "red.900") }}
            transition={"background 0.9s ease"}
            bg={useColorModeValue("blue.100", "blue.900")}
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
                Ethernaut with Hardhat
              </Heading>
              <Text color={useColorModeValue("gray.700", "white")}>
                Repo solving most Ethernaut security challenges, many of them
                inspired by famous security breaches, known failures and
                vulnerabilities in the Solidity language and EVM ecosystem.
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
                    color={useColorModeValue("white", "gray.100")}
                    bg={useColorModeValue("blue.500", "blue.700")}
                    _hover={{ bg: useColorModeValue("blue.400", "blue.600") }}
                  >
                    View on GitHub
                  </Button>
                </Link>
              </Center>
            </Stack>
          </Box>
        </GridItem>

        {/* Fourth card */}
        <GridItem colSpan={colSpan}>
          <Box
            maxW={"445px"}
            _hover={{ bg: useColorModeValue("yellow.100", "red.900") }}
            transition={"background 0.9s ease"}
            bg={useColorModeValue("blue.100", "blue.900")}
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
                src={"/projects/foxymask.png"}
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
                Full stack
              </Text>
              <Heading
                color={useColorModeValue("gray.700", "white")}
                fontSize={"2xl"}
                fontFamily={"body"}
              >
                FoxyMask (ECDSA node)
              </Heading>
              <Text color={useColorModeValue("gray.700", "white")}>
                Project implementing ECDSA on a client and a server to transact
                value between different addresses with ease and security.
              </Text>
              <Center>
                <Link
                  href="https://github.com/luloxi/ECDSA-node"
                  target={"_blank"}
                >
                  <Button
                    rounded={"full"}
                    size={"lg"}
                    fontWeight={"normal"}
                    px={6}
                    color={useColorModeValue("white", "gray.100")}
                    bg={useColorModeValue("blue.500", "blue.700")}
                    _hover={{ bg: useColorModeValue("blue.400", "blue.600") }}
                  >
                    View on GitHub
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
