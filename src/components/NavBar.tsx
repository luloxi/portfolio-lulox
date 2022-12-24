import { ReactNode } from "react";
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Button,
  useDisclosure,
  useColorMode,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";

// const Links = ["Inicio", "Proyectos", "Sobre mí", "Contacto"];
const Links = [
  { name: "Inicio", href: "/" },
  { name: "Proyectos", href: "proyectos" },
  { name: "Sobre mí", href: "sobre-mi" },
  { name: "Contacto", href: "contacto" },
];

const NavLink = ({ children, href }: { children: ReactNode; href: string }) => (
  <Link
    px={4}
    py={2}
    rounded={"md"}
    bg={useColorModeValue("blue.300", "blue.700")}
    color={useColorModeValue("gray.800", "gray.200")}
    fontWeight={"600"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("blue.100", "blue.500"),
    }}
    href={`${href}`}
  >
    {children}
  </Link>
);

export default function NavBar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue("blue.400", "blue.800")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          {/* Button for mobile */}
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            {/* This could be a logo <Box>Lulox</Box> */}
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLink key={link.name} href={link.href}>
                  {link.name}
                </NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link.name} href={link.href}>
                  {link.name}
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
