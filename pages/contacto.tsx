import Head from "next/head";
import ContactForm from "../src/components/ContactForm.jsx";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contacto | Lulox Portfolio</title>
        <meta name="description" content="Full-stack Web3 developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ContactForm />
    </>
  );
}
