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
      <Heading>{knowledge.title}</Heading>
      {knowledge.skills.map((skill) => {
        return (
          <div key={knowledge.id}>
            {skill.name}
            <Icon as={skill.img} />
          </div>
        );
      })}
    </SimpleGrid>
  );
};

export default Technology;
