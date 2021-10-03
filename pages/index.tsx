import type { NextPage } from "next";
import React from "react";

// Sections
import Opening from "../sections/Opening";
import About from "../sections/About";
import Technologies from "../sections/Technologies";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Styles
import { Container } from "@chakra-ui/react";

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <Opening />
      <About />
      <Technologies />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
