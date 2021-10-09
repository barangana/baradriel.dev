import { FunctionComponent } from "react";

// Types
import { KnowledgeType } from "../../sections/Technologies";

// Styles
import { Icon, SimpleGrid, Heading, Box } from "@chakra-ui/react";

type Props = {
  knowledge: KnowledgeType;
};

const Technology: FunctionComponent<Props> = ({ knowledge }) => {
  return (
    <SimpleGrid columns={3}>
      <Box>
        {knowledge.skills.map((skill) => {
          return (
            <Box key={knowledge.id}>
              {skill.name}
              <Icon as={skill.img} />
            </Box>
          );
        })}
      </Box>
    </SimpleGrid>
  );
};

export default Technology;
