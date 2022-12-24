import { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  VStack,
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

export default function ContactTest() {
  const form = useRef(null);

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
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <Container maxW="full" mt={0} centerContent overflow="hidden">
        <Flex>
          <Box
            bg="gray.700"
            color="white"
            borderRadius="lg"
            m={{ sm: 4, md: 2, lg: 8 }}
            p={{ sm: 5, md: 5, lg: 5 }}
          >
            <Box p={4}>
              <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
                {/* Izquierda con info de contacto */}
                <WrapItem>
                  <Box>
                    <Heading>Contacto</Heading>
                    <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
                      Por dudas o propuestas, enviame
                      <br /> un mensaje
                    </Text>
                    {/* Lateral izquierdo con iconos e info */}
                    <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                      <VStack pl={0} spacing={3} alignItems="flex-start">
                        <Link href="mailto:lucianoolivabianco@gmail.com">
                          <Button
                            size="md"
                            height="48px"
                            width="300px"
                            variant="ghost"
                            color="#DCE2FF"
                            _hover={{ border: "2px solid #1C6FEB" }}
                            leftIcon={<MdEmail color="#1970F1" size="20px" />}
                          >
                            lucianoolivabianco@gmail.com
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
                      </VStack>
                    </Box>
                  </Box>
                </WrapItem>

                {/* Derecha con Formulario de contacto*/}
                <WrapItem>
                  <Box bg="white" borderRadius="lg">
                    <Box m={8} color="#0B0E3F">
                      <form ref={form} onSubmit={sendEmail}>
                        <VStack spacing={5}>
                          {/* NAME input */}
                          <FormControl id="user_name">
                            <FormLabel>Nombre</FormLabel>
                            <InputGroup borderColor="#E0E1E7">
                              <InputLeftElement
                                pointerEvents="none"
                                children={<BsPerson color="gray.800" />}
                              />
                              <Input type="text" size="md" name="user_name" />
                            </InputGroup>
                          </FormControl>
                          {/* MAIL input */}
                          <FormControl id="user_email" isRequired>
                            <FormLabel>E-mail</FormLabel>
                            <InputGroup borderColor="#E0E1E7">
                              <InputLeftElement
                                pointerEvents="none"
                                children={<MdOutlineEmail color="gray.800" />}
                              />
                              <Input type="text" size="md" name="user_email" />
                            </InputGroup>
                          </FormControl>
                          {/* MESSAGE input */}
                          <FormControl id="message" isRequired>
                            <FormLabel>Mensaje</FormLabel>
                            <Textarea
                              borderColor="gray.300"
                              _hover={{
                                borderRadius: "gray.300",
                              }}
                              placeholder="Escribi acá tu mensaje"
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
                              Enviar
                            </Button>
                          </FormControl>
                        </VStack>
                      </form>
                    </Box>
                  </Box>
                </WrapItem>
              </Wrap>
            </Box>
          </Box>
        </Flex>
      </Container>
    </>
  );
}

export async function getStaticProps() {
  const EMAILJS_SERVICE_ID = process.env.EMAILJS_SERVICE_ID;
  const EMAILJS_TEMPLATE_ID = process.env.EMAILJS_TEMPLATE_ID;
  const EMAILJS_PUBLIC_KEY = process.env.EMAILJS_PUBLIC_KEY;
}