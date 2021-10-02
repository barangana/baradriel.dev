import { FunctionComponent } from "react";

// Styles
import { Button, Heading, Text } from "@chakra-ui/react";

// Utils
import info from "../utils/info";

const handleMail = (e: any) => {
  e.preventDefault();
  location.href = `mailto:${info.email}`;
};

const Contact: FunctionComponent = () => {
  return (
    <section>
      <Heading>Let&apos;s talk.</Heading>
      <p>
        Have an idea for a project, want to work together or just chat? Do not
        be shy and send me an email!
      </p>
      <Button
        size="md"
        variant="outline"
        colorScheme="teal"
        onClick={handleMail}
      >
        Send Mail
      </Button>
    </section>
  );
};

export default Contact;
