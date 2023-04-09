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
              <Image alt="Tuse" src={"/projects/tuse.jpg"} layout={"fill"} />
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
                Tuse
              </Heading>
              <Text color={"gray.500"}>
                Descentralized mutual fund dApp, governed by a DAO, one vote per
                NFT, which changes dynamnically depending if that NFT has funds
                associated with it or not, and a Vault.
              </Text>
              <Center>
                <Link href="https://tuse.vercel.app/" target={"_blank"}>
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
                </Link>
                <Link
                  href="https://github.com/manuel-salvador/hackathon-tuse"
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
                    View on GitHub
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
                Sportsbook
              </Heading>
              <Text color={"gray.500"}>
                Social dApp for connecting local teams of a given sport, that
                allows betting on the outcome of a match, paying for location of
                a match, and collecting NFTs on the result of past matches.
                <strong>
                  1st place winner of the Think & Dev hackathon &quot;King of
                  Devs&quot;
                </strong>
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
        {/* Third card */}
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
                Ethernaut with Hardhat
              </Heading>
              <Text color={"gray.500"}>
                Repo solving most Ethernaut security challenges, most inspired
                in famous security breaches and known failures and
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
      </SimpleGrid>
    </Box>
  );
}
