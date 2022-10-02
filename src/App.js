import { useState } from "react";
import About from "./components/About";
import Contacts from "./components/Contacts";
import Home from "./components/Home";
import ModalProject from "./components/ModalProject";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { useDisableBodyScroll } from "./utils/preventScroll";
import { motion } from "framer-motion";
import Footer from "./components/Footer";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [currentModalInfo, setCurrentModalInfo] = useState({});

  useDisableBodyScroll(showModal);

  return (
    <>
      {showModal && (
        <ModalProject
          setShowModal={setShowModal}
          setCurrentModalInfo={setCurrentModalInfo}
          currentModalInfo={currentModalInfo}
        />
      )}

      <div className="bg-bgBlue">
        <Navbar />
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="hidden text-xs md:block fixed -left-[8.1rem] text-[#B7B7B7]/60 z-10 -rotate-90 top-[50%]"
        >
          <p className="tracking-[0.5em]">hanipalhapidz56@gmail.com</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="hidden text-xs md:block fixed -right-[8.1rem] text-[#B7B7B7]/60 z-10 rotate-90 top-[50%]"
        >
          <p className="tracking-[0.5em]">hanipalhapidz56@gmail.com</p>
        </motion.div> */}
        <Home />
        <About />
        <Skills />
        <Projects
          setShowModal={setShowModal}
          setCurrentModalInfo={setCurrentModalInfo}
          currentModalInfo={currentModalInfo}
        />
        <Contacts />
        <Footer />
      </div>
    </>
  );
}

export default App;
