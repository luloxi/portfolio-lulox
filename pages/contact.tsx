import Head from "next/head";
import ContactForm from "../src/components/ContactForm.jsx";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact | Lulox Portfolio</title>
        <meta name="description" content="Contact form & other info" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ContactForm />
    </>
  );
}
