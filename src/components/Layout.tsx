import NavBar from "./NavBar";
import Footer from "./Footer";
import { Container } from "@chakra-ui/react";

export default function Layout({ children }: { children: any }) {
  return (
    <>
      <NavBar />
      {/* <Container maxW="container.xl" mb="64px"> */}
      <Container maxW="container.xl">{children}</Container>
      {/* <Footer /> */}
    </>
  );
}
