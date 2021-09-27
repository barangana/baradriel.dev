import { FunctionComponent } from "react";
import info from "../utils/info";

const About: FunctionComponent = () => {
  return (
    <section>
      <p>Hi my name is</p>
      <h1>{info.title}</h1>
      <p>{info.header}</p>
      <p>{info.who}</p>
    </section>
  );
};

export default About;
