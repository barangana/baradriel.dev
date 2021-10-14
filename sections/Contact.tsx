import { FC } from "react";

// Styles
import { Button, Heading, Text, Box, Center } from "@chakra-ui/react";

// Utils
import info from "../utils/info";

const handleMail = (e: any) => {
  e.preventDefault();
  location.href = `mailto:${info.email}`;
};

const Contact: FC = () => {
  return (
    <Box height="100vh" id="contact">
      <Box position="relative" top="35%">
        <Center>
          <Heading pt={5} pb={5}>
            Let&apos;s talk.
          </Heading>
        </Center>

        <Center>
          <Text pt={5} pb={5}>
            Have an idea for a project, want to work together or just chat? Do
            not be shy and send me an email!
          </Text>
        </Center>

        <Center>
          <Button
            size="md"
            variant="outline"
            colorScheme="teal"
            onClick={handleMail}
          >
            Send Mail
          </Button>
        </Center>
      </Box>
    </Box>
  );
};

export default Contact;
