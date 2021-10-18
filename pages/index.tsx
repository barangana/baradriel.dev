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
import { Box } from "@chakra-ui/react";

const Home: NextPage = () => {
  return (
    <Box bg="brand.100" w={"100%"}>
      <Header />
      <Opening />
      <About />
      <Technologies />
      <Projects />
      <Contact />
      <Footer />
    </Box>
  );
};

export default Home;
