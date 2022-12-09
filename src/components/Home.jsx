import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import TitleReveal from "./TitleReveal";

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="Home"
      className="relative min-h-screen mx-auto flex flex-col gap-y-4 md:gap-y-6 justify-center items-center text-txtWhite text-center"
    >
      <motion.p
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="md:text-lg"
      >
        Hi, Im
      </motion.p>
      <TitleReveal text={"HANIP"} delay={0.5} />
      <TitleReveal text={"AL HAPIDZ"} delay={0.8} />
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className=""
      >
        <p className="text-sm sm:text-md lg:text-lg tracking-widest font-extralight leading-6 md:leading-8 uppercase">
          Software Engineer <br /> & Designer
        </p>
      </motion.p>

      {!isScrolled && (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute bottom-5"
          >
            <svg
              x="0px"
              y="0px"
              width="35px"
              height="35px"
              viewBox="0 0 47 47"
              enableBackground="new 0 0 47 47"
            >
              <circle
                fill="none"
                stroke="#9B9A9A"
                strokeMiterlimit="10"
                cx="23.5"
                cy="23.5"
                r="23"
              />
              <line
                fill="none"
                stroke="#FFFFFD"
                strokeMiterlimit="10"
                x1="23.5"
                y1="11.3"
                x2="23.5"
                y2="31.5"
              />
              <polyline
                fill="#FFFFFD"
                points="29.1,30.8 23.5,36.3 17.9,30.8 "
              />
            </svg>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
};

export default Home;
