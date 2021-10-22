import { FC } from "react";

// Types
import { KnowledgeType } from "../../sections/Technologies";

// Styles
import { Icon, Heading, Box, SimpleGrid, Text, Center } from "@chakra-ui/react";

type KnowledgeProps = {
  knowledge: KnowledgeType;
};

const Technology: FC<KnowledgeProps> = ({ knowledge }) => {
  return (
    <Box>
      <Box
        borderRadius="lg"
        borderWidth="1px"
        height={["300px", "350px"]}
        width="400px"
      >
        <Heading pl="6" pt="4" pb="4">
          {knowledge.title}
        </Heading>
        <SimpleGrid columns={[4, 3]} pt="4" pl="6">
          {knowledge.skills.map((skill, i) => {
            return (
              <Box key={i} pb="4">
                <Icon as={skill.img} boxSize="8"></Icon>
                <Text width={["20", "32"]} pt="2">
                  {skill.name}
                </Text>
              </Box>
            );
          })}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Technology;
