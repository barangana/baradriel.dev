import { FunctionComponent } from "react";
import { KnowledgeType } from "../../sections/Technologies";
import { Icon } from "@chakra-ui/react";

type Props = {
  knowledge: KnowledgeType;
};

const Technology: FunctionComponent<Props> = ({ knowledge }) => {
  return (
    <div>
      <h1>{knowledge.title}</h1>
      {knowledge.skills.map((skill) => {
        return (
          <div key={knowledge.id}>
            {skill.name}
            <Icon as={skill.img} />
          </div>
        );
      })}
    </div>
  );
};

export default Technology;
