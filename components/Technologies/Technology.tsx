import { FC } from "react";

// Types
import { KnowledgeType } from "../../sections/Technologies";

// Styles
import {
  Icon,
  Heading,
  Box,
  Flex,
  SimpleGrid,
  Text,
  Center,
} from "@chakra-ui/react";

type Props = {
  knowledge: KnowledgeType;
};

const Technology: FC<Props> = ({ knowledge }) => {
  return (
    <Flex>
      <Box borderRadius="lg" borderWidth="1px" height="450px" width="400px">
        <Heading p="5" color="brand.600">
          {knowledge.title}
        </Heading>
        <SimpleGrid columns={3}>
          {knowledge.skills.map((skill, i) => {
            return (
              <Box key={i} p="4" height="32" width="32">
                <Center>
                  <Box>
                    <Icon as={skill.img} boxSize="8"></Icon>
                  </Box>
                </Center>
                <Center>
                  <Box>
                    <Text>{skill.name}</Text>
                  </Box>
                </Center>
              </Box>
            );
          })}
        </SimpleGrid>
      </Box>
    </Flex>
  );
};

export default Technology;
