import { FunctionComponent } from "react";
import Link from "next/link";

// Utils
import { SiGithub } from "react-icons/si";
import info from "../utils/info";

// Styles
import { Icon } from "@chakra-ui/react";

const Footer: FunctionComponent = () => {
  return (
    <section>
      <h1>Footer section</h1>
      <div>Built & Designed by Adriel Barangan.</div>
      <Link href={info.github}>
        <a>
          <Icon as={SiGithub} />
        </a>
      </Link>
    </section>
  );
};

export default Footer;
