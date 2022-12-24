import Head from "next/head";
import AboutContent from "../src/components/AboutContent";
import ContactForm from "../src/components/ContactForm.jsx";
import Hero from "../src/components/Hero";

export default function Home() {
  return (
    <>
      <Head>
        <title>Lulox Portfolio</title>
        <meta name="description" content="Full-stack Web3 developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      {/* <AboutContent /> */}
      <ContactForm />
    </>
  );
}
