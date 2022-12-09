import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  About,
  AlternateProjects,
  Contacts,
  Expertise,
  Footer,
  Home,
  Projects,
} from "../components";

const HomeContainer = () => {
  return (
    <>
      <Home />
      <About />
      <Expertise />
      <AlternateProjects />
      {/* <Projects /> */}
      <Contacts />
      <Footer />
    </>
  );
};

export default HomeContainer;
