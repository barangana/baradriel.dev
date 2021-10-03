import { FunctionComponent } from "react";
import Link from "next/link";

// Utils
import { SiGithub } from "react-icons/si";
import info from "../utils/info";

// Styles
import { Icon, Box, Container } from "@chakra-ui/react";

const Footer: FunctionComponent = () => {
  return (
    <Box>
      <Container w="4xl">
        <p>{info.copyrights}</p>
        <p> Designed & built by Adriel Barangan.</p>
        <Link href={info.github}>
          <a>
            <Icon as={SiGithub} />
          </a>
        </Link>
      </Container>
    </Box>
  );
};

export default Footer;
