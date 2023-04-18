import { ReactNode } from "react";
import {
  Box,
  Flex,
  chakra,
  HStack,
  // Link,
  IconButton,
  Text,
  VisuallyHidden,
  Button,
  useDisclosure,
  useColorMode,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import Link from "next/link";
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
      bg={useColorModeValue("blue.400", "blue.800")}
      rounded={"full"}
      color={useColorModeValue("gray.200", "gray.200")}
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
        bg: useColorModeValue("blue.600", "blue.600"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const Links = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "projects" },
  // { name: "About me", href: "about" },
  { name: "Contact", href: "contact" },
];

const NavLink = ({ children, href }: { children: ReactNode; href: string }) => (
  <Link href={`${href}`}>
    <Box
      px={5}
      py={5}
      rounded={"md"}
      // bg={useColorModeValue("blue.300", "blue.700")}
      textAlign={"center"}
      color={useColorModeValue("gray.200", "gray.200")}
      fontWeight={"600"}
      transition={"background 0.3s ease"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("blue.600", "blue.600"),
      }}
    >
      {children}
    </Box>
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
            aria-label={"Open menú"}
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
