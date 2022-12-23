import {
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Icon,
  Stack,
  FormControl,
} from "@chakra-ui/react";

const Form = () => {
  return (
    <form action="submit">
      <Stack spacing={3}>
        <FormControl isRequired>
          <InputGroup>
            <InputLeftElement children={<Icon name="info" />} />
            <Input
              type="name"
              placeholder="First name"
              aria-label="First name"
            />
          </InputGroup>
        </FormControl>
        <FormControl isRequired>
          <InputGroup>
            <InputLeftElement children={<Icon name="info" />} />
            <Input
              type="email"
              placeholder="Enter your email"
              aria-label="Email"
            />
          </InputGroup>
        </FormControl>
        <Input />
        <Input />
        <Button type="submit" variant="solid">
          Sign up!
        </Button>
      </Stack>
    </form>
  );
};

export default Form;
