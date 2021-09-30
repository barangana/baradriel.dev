import { FunctionComponent } from "react";

import knowledges from "../utils/skills";
import Technology from "../components/Technologies/Technology";

export type KnowledgeType = {
  id: number;
  title: string;
  skills: [{ name: string }];
};

const Technologies: FunctionComponent = () => {
  return (
    <section>
      <h1>Technologies Section</h1>
      {knowledges.map((knowledge) => {
        return <Technology key={knowledge.id} knowledge={knowledge} />;
      })}
    </section>
  );
};

export default Technologies;
