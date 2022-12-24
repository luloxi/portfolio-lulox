import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import { ReactNode } from "react";

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
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
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

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("gray.300", "gray.900")}
      color={useColorModeValue("gray.900", "gray.200")}
      position="fixed"
      left="0"
      right="0"
      bottom="0"
      width="100%"
      height="64px"
    >
      <Container
        // border={"1px solid red"}
        as={Stack}
        maxW={"container.sm"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "center" }}
        // justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        {/* <Text>© 2022 Chakra Templates. All rights reserved</Text> */}
        <Stack
          direction={"row"}
          spacing={6}
          w="full"
          // border="1px solid blue"
          justify={"space-evenly"}
        >
          <SocialButton
            label={"LinkedIn"}
            href={"https://www.linkedin.com/in/lulox/"}
          >
            <FaLinkedin />
          </SocialButton>
          <SocialButton label={"GitHub"} href={"https://github.com/luloxi"}>
            <FaGithub />
          </SocialButton>
          <SocialButton label={"Twitter"} href={"https://twitter.com/LuloxEth"}>
            <FaTwitter />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
}
