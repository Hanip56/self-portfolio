import React, { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import useOutsideAlerter from "../utils/clickOutside";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const barRef = useRef(null);

  const handleClose = () => {
    setShowMenu(false);
  };

  useOutsideAlerter(barRef, setShowMenu);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="z-30 fixed w-full h-16 top-0 bg-[#0d1828] py-6 px-12 flex justify-between text-gray-400 trackingWider"
      >
        <h1 className="text-2xl font-bold">H</h1>
        <ul className="hidden md:flex text-[.75rem] gap-x-12 font-montserrat">
          <li className="navList">
            <a href="/#About">About</a>
          </li>
          <li className="navList">
            <a href="/#Skills">Skills</a>
          </li>
          <li className="navList">
            <a href="/#Projects">Projects</a>
          </li>
          <li className="navList">
            <a href="/#Contacts">Contacts</a>
          </li>
        </ul>
        <div></div>
        <div className="relative w-6 h-6 block md:hidden cursor-pointer">
          <svg
            x="0px"
            y="0px"
            width="63.1px"
            height="39.4px"
            viewBox="0 0 63.1 39.4"
            enableBackground="new 0 0 63.1 39.4"
            className="w-full h-full"
            onClick={() => setShowMenu((prev) => !prev)}
          >
            <line
              fill="none"
              stroke="#9ba2ae"
              strokeWidth="5"
              strokeMiterlimit="10"
              x1="0"
              y1="2.5"
              x2="63.1"
              y2="2.5"
            />
            <line
              fill="none"
              stroke="#9ba2ae"
              strokeWidth="5"
              strokeMiterlimit="10"
              x1="0"
              y1="19.7"
              x2="63.1"
              y2="19.7"
            />
            <line
              fill="none"
              stroke="#9ba2ae"
              strokeWidth="5"
              strokeMiterlimit="10"
              x1="0"
              y1="36.9"
              x2="63.1"
              y2="36.9"
            />
          </svg>
          <AnimatePresence>
            {showMenu && (
              <motion.div
                ref={barRef}
                initial={{ opacity: 0, scale: 0, originX: 1, originY: -0.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                className="absolute w-40 h-40 bg-[#0e334f] z-[60] -bottom-[10.5rem] -left-[8.5rem] rounded-md"
              >
                <ul className="py-2">
                  <li>
                    <a
                      className="navListMenu"
                      href="#About"
                      onClick={handleClose}
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      className="navListMenu"
                      href="#Skills"
                      onClick={handleClose}
                    >
                      Skills
                    </a>
                  </li>
                  <li>
                    <a
                      className="navListMenu"
                      href="#Projects"
                      onClick={handleClose}
                    >
                      Projects
                    </a>
                  </li>
                  <li>
                    <a
                      className="navListMenu"
                      href="#Contacts"
                      onClick={handleClose}
                    >
                      Contacts
                    </a>
                  </li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
