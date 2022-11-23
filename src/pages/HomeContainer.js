import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  About,
  AlternateProjects,
  Contacts,
  Expertise,
  Footer,
  Home,
} from "../components";

const HomeContainer = () => {
  return (
    <>
      <Home />
      <About />
      <Expertise />
      <AlternateProjects />
      <Contacts />
      <Footer />
    </>
  );
};

export default HomeContainer;
