import { FC } from "react";

// Types
import { KnowledgeType } from "../../sections/Technologies";

// Styles
import { Icon, Heading, Box, Text, Flex } from "@chakra-ui/react";

type Props = {
  knowledge: KnowledgeType;
};

const Technology: FC<Props> = ({ knowledge }) => {
  return (
    <Flex>
      <Box borderRadius="lg" borderWidth="1px" height="400px" width="400px">
        <Heading>{knowledge.title}</Heading>
        <Box>
          {knowledge.skills.map((skill, i) => {
            return (
              <Box key={i}>
                <Icon as={skill.img} boxSize="8"></Icon>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Flex>
  );
};

export default Technology;
