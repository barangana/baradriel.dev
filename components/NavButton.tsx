import { FC } from "react";

import { Flex, Box, Link } from "@chakra-ui/react";

type Button = {
  label: string;
  link: string;
};

interface ButtonProps {
  buttons: Button[];
}

const NavButton: FC<ButtonProps> = ({ buttons }) => {
  return (
    <Flex>
      {buttons.map((button, i) => {
        return (
          <Box
            key={i}
            _hover={{ color: "brand.600", textDecoration: "underline" }}
            pr="2"
          >
            <Link href={button.link}>{button.label}</Link>
          </Box>
        );
      })}
    </Flex>
  );
};

export default NavButton;
