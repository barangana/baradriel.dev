import { FunctionComponent } from "react";
import info from "../utils/info";

const About: FunctionComponent = () => {
  return (
    <section>
      <h1>About me</h1>
      <p>{info.about}</p>
    </section>
  );
};

export default About;
