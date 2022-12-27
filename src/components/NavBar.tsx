import { ReactNode } from "react";
import {
  Box,
  Flex,
  chakra,
  HStack,
  Link,
  IconButton,
  Text,
  VisuallyHidden,
  Button,
  useDisclosure,
  useColorMode,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { FaLinkedin, FaTwitter, FaGithub, FaEnvelope } from "react-icons/fa";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blue.300", "blue.700")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      target="_blank"
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blue.200", "blue.800"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

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
    textAlign={"center"}
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
            icon={
              isOpen ? (
                <CloseIcon />
              ) : (
                <>
                  <HStack px={4}>
                    <HamburgerIcon />
                    <Text>Menu</Text>
                  </HStack>
                </>
              )
            }
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

              <SocialButton
                label={"LinkedIn"}
                href={"https://www.linkedin.com/in/lulox/"}
              >
                <FaLinkedin />
              </SocialButton>
              <SocialButton label={"GitHub"} href={"https://github.com/luloxi"}>
                <FaGithub />
              </SocialButton>
              <SocialButton
                label={"Twitter"}
                href={"https://twitter.com/LuloxEth"}
              >
                <FaTwitter />
              </SocialButton>
              <SocialButton
                label={"Email"}
                href={"mailto:lucianoolivabianco@gmail.com"}
              >
                <FaEnvelope />
              </SocialButton>
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
              <HStack justifyContent={"space-evenly"}>
                <SocialButton
                  label={"LinkedIn"}
                  href={"https://www.linkedin.com/in/lulox/"}
                >
                  <FaLinkedin />
                </SocialButton>
                <SocialButton
                  label={"GitHub"}
                  href={"https://github.com/luloxi"}
                >
                  <FaGithub />
                </SocialButton>
                <SocialButton
                  label={"Twitter"}
                  href={"https://twitter.com/LuloxEth"}
                >
                  <FaTwitter />
                </SocialButton>
                <SocialButton
                  label={"Email"}
                  href={"mailto:lucianoolivabianco@gmail.com"}
                >
                  <FaEnvelope />
                </SocialButton>
              </HStack>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
