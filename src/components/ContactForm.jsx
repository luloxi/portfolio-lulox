import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Container,
  Flex,
  Box,
  chakra,
  VisuallyHidden,
  Heading,
  Text,
  Button,
  VStack,
  HStack,
  Link,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
} from "@chakra-ui/react";
import { MdPhone, MdEmail, MdLocationOn, MdOutlineEmail } from "react-icons/md";
import { BsPerson } from "react-icons/bs";
import { FaLinkedin, FaTwitter, FaGithub, FaEnvelope } from "react-icons/fa";

export default function ContactForm() {
  const form = useRef(null);
  const [mailSent, setMailSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_apg37xq", // SERVICE ID
        "template_5ynpw4u", // TEMPLATE ID
        form.current,
        "89m38kP3B8tfOnSbr" // PUBLIC KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Message sent");
          // e.target.reset();
          setMailSent(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const SocialButton = ({ children, label, href }) => {
    return (
      <chakra.button
        bg={"blue.600"}
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
        _hover={{ bg: "blue.400" }}
      >
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };
  return (
    <>
      <Container maxW="full" marginY={4} centerContent overflow="hidden">
        <Flex>
          <Box
            bg="gray.700"
            color="white"
            borderRadius="lg"
            m={{ sm: 4, md: 2, lg: 2, xl: 8 }}
            p={{ sm: 5, md: 5, lg: 5 }}
          >
            <Box p={4}>
              <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
                {/* Left side of contact card */}
                <WrapItem>
                  <Box>
                    <Heading>Contact</Heading>
                    <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.400">
                      For any work or collab related inquiries,
                      <br />
                      please send me a message!
                    </Text>
                    {/* Left side icons with text */}
                    <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                      <VStack pl={0} spacing={3} alignItems="flex-start">
                        <Link href="mailto:lulox.eth@protonmail.com">
                          <Button
                            size="md"
                            height="48px"
                            width="300px"
                            variant="ghost"
                            color="#DCE2FF"
                            _hover={{ border: "2px solid #1C6FEB" }}
                            leftIcon={<MdEmail color="#1970F1" size="20px" />}
                          >
                            lulox.eth@protonmail.com
                          </Button>
                        </Link>
                        <Link href="tel:+5491162959490">
                          <Button
                            size="md"
                            height="48px"
                            width="300px"
                            variant="ghost"
                            color="#DCE2FF"
                            _hover={{ border: "2px solid #1C6FEB" }}
                            leftIcon={<MdPhone color="#1970F1" size="20px" />}
                          >
                            (+54 9 🇦🇷) 1162959490
                          </Button>
                        </Link>

                        <Button
                          size="md"
                          height="48px"
                          width="300px"
                          variant="ghost"
                          color="#DCE2FF"
                          _hover={{ border: "2px solid #1C6FEB" }}
                          leftIcon={
                            <MdLocationOn color="#1970F1" size="20px" />
                          }
                        >
                          Buenos Aires, Argentina
                        </Button>

                        <HStack w="full" justifyContent={"space-evenly"}>
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
                        </HStack>
                      </VStack>
                    </Box>
                  </Box>
                </WrapItem>

                {/* Right side with contact form*/}
                <WrapItem>
                  {mailSent ? (
                    <>
                      <Box
                        bg="green.300"
                        alignItems={"center"}
                        borderRadius="lg"
                      >
                        <Box m={8} color="#0B0E3F">
                          <Text>
                            Your message was successfully sent!
                            <br />
                          </Text>
                        </Box>
                      </Box>
                    </>
                  ) : (
                    <>
                      <Box bg="white" borderRadius="lg">
                        <Box m={8} color="#0B0E3F">
                          <form ref={form} onSubmit={sendEmail}>
                            <VStack spacing={5}>
                              {/* NAME input */}
                              <FormControl id="user_name">
                                <FormLabel>Name</FormLabel>
                                <InputGroup borderColor="#E0E1E7">
                                  <InputLeftElement pointerEvents="none">
                                    <BsPerson color="gray.800" />
                                  </InputLeftElement>
                                  <Input
                                    type="text"
                                    size="md"
                                    name="user_name"
                                    _hover={{
                                      borderColor: "blue.300",
                                    }}
                                    placeholder="John Cena"
                                  />
                                </InputGroup>
                              </FormControl>
                              {/* MAIL input */}
                              <FormControl id="user_email" isRequired>
                                <FormLabel>E-mail</FormLabel>
                                <InputGroup borderColor="#E0E1E7">
                                  <InputLeftElement pointerEvents="none">
                                    <MdOutlineEmail color="gray.800" />
                                  </InputLeftElement>
                                  <Input
                                    type="text"
                                    size="md"
                                    name="user_email"
                                    _hover={{
                                      borderColor: "blue.300",
                                    }}
                                    placeholder="john.cena@ethereum.com"
                                  />
                                </InputGroup>
                              </FormControl>
                              {/* MESSAGE input */}
                              <FormControl id="message" isRequired>
                                <FormLabel>Message</FormLabel>
                                <Textarea
                                  borderColor="gray.300"
                                  _hover={{
                                    borderColor: "blue.300",
                                  }}
                                  placeholder="Write here your message..."
                                  name="message"
                                />
                              </FormControl>
                              {/* SEND button */}
                              <FormControl id="submit" float="right">
                                <Button
                                  type="submit"
                                  variant="solid"
                                  bg="blue.400"
                                  color="white"
                                  _hover={{ boxShadow: "md", bg: "blue.500" }}
                                  _active={{ boxShadow: "lg", bg: "blue.700" }}
                                  // value="Send"
                                  // onClick={sendEmail}
                                >
                                  Send
                                </Button>
                              </FormControl>
                            </VStack>
                          </form>
                        </Box>
                      </Box>
                    </>
                  )}
                </WrapItem>
              </Wrap>
            </Box>
          </Box>
        </Flex>
      </Container>
    </>
  );
}
