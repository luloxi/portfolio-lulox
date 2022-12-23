import { Box } from "@chakra-ui/react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactTest() {
  const form = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    // Make these into environment variables, don't push to GitHub
    emailjs
      .sendForm(
        "service_apg37xq", // SERVICE_ID
        "template_5ynpw4u", // TEMPLATE_ID
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
      <Box width="container.sm" m={6}>
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
      </Box>
    </>
  );
}
