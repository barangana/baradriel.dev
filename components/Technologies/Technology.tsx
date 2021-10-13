import { FC } from "react";

// Types
import { KnowledgeType } from "../../sections/Technologies";

// Styles
import { Icon, Heading, Box, Text, HStack } from "@chakra-ui/react";

type Props = {
  knowledge: KnowledgeType;
};

const Technology: FC<Props> = ({ knowledge }) => {
  return (
    <Box id="technology">
      <Box borderWidth="1px" borderRadius="lg" width="500px">
        <Heading>{knowledge.title}</Heading>
        {knowledge.skills.map((skill, i) => {
          return (
            <Box key={i}>
              <Text>{skill.name}</Text>
              <Icon as={skill.img} boxSize="8"></Icon>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Technology;
