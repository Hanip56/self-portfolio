import React from "react";
import { projectInfo } from "../constants/info";
import { motion } from "framer-motion";
import useWindowDimensions from "../utils/getDimensions";
import { useNavigate } from "react-router-dom";
import { revealVariants } from "../utils/variants";
import { MustholahCover2 } from "../assets/images";
import "react-medium-image-zoom/dist/styles.css";
import GraphicModal from "./GraphicModal";
import { useState } from "react";
import { graphicList } from "../constants/info";

const projectLineVariants = {
  offscreen: {
    height: 0,
  },
  onscreen: {
    height: "600px",
  },
};

const AlternateProjects = () => {
  const { width } = useWindowDimensions();
  const [showGraphicModal, setShowGraphicModal] = useState(false);
  const [currentGrahpicInfo, setCurrentGraphicInfo] = useState({});
  const navigate = useNavigate();

  const mobileScreen = width <= 768;

  const handleShowGraphicModal = (info) => {
    setShowGraphicModal(true);
    setCurrentGraphicInfo(info);
  };

  return (
    <>
      {showGraphicModal && (
        <GraphicModal
          setShowModal={setShowGraphicModal}
          currentGrahpicInfo={currentGrahpicInfo}
        />
      )}

      <motion.div id="Projects" className="my-64">
        <motion.div
          variants={revealVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          className="mb-28 mx-auto flex w-[90vw] lg:w-[55rem]"
        >
          <div className="flex-1 flex flex-col">
            <h2 className="titleWhite text-start">Projects</h2>
            <p className="text-gray-500 tracking-wider text-start">
              Some Project that I've already built
            </p>
          </div>
          <div className="hidden flex-1 md:flex justify-center items-center">
            <div className="relative border border-gray-500 w-28 h-16">
              <div className="absolute w-10 h-12 border border-gray-500 -left-14" />
              <div className="absolute w-10 h-16 border border-gray-500 -right-14" />
            </div>
          </div>
        </motion.div>

        {/* web development section */}
        <motion.div>
          <motion.h3
            variants={revealVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
            className="text-white text-center text-xl font-bold underline underline-offset-8 mb-20"
          >
            Web development
          </motion.h3>

          <motion.div className="relative w-[90vw] md:w-[60rem] mx-auto mt-12">
            {projectInfo.map((project, idx) => (
              <motion.div
                key={idx}
                className={`min-h-[400px] w-full flex ${
                  (idx % 2 === 0 || mobileScreen) && "flex-row-reverse"
                } ${mobileScreen && "flex-row"}`}
              >
                {/* image project */}
                <motion.div
                  initial={{
                    x: idx % 2 === 0 || mobileScreen ? "50" : "-50",
                    opacity: 0,
                  }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{
                    delay: 0.2,
                    ease: "easeOut",
                    x: { duration: 0.7 },
                    opacity: { duration: 0.4 },
                  }}
                  viewport={{ once: true }}
                  className={`flex-1 p-6 md:p-12 md:pt-0`}
                >
                  <img
                    src={project.imagePreview}
                    alt={project.name}
                    className="w-full object-contain"
                  />
                  {/* description */}
                  <div
                    className={`block md:hidden flex-1 text-start text-white mt-4`}
                  >
                    <h2 className="text-2xl font-bold">{project.name}</h2>
                    <h3 className="text-xl tracking-wide mb-2 mt-1 text-gray-400">
                      {project.type}
                    </h3>
                    <p className="text-md text-gray-300">
                      {project.description}
                    </p>
                    <button
                      className={`text-white border border-gray-500 block py-2 px-4 hover:bg-white/20 mt-6 mr-auto`}
                      onClick={() => navigate(`/project/${project.slug}`)}
                    >
                      View
                    </button>
                  </div>
                </motion.div>
                {/* line */}
                <div className="flex flex-col items-center w-[36px] h-[600px]">
                  <motion.div
                    initial={{ width: 0, height: 0 }}
                    whileInView={{ width: 36, height: 36 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                    className="rounded-full border border-gray-500"
                  />
                  <motion.div
                    variants={projectLineVariants}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.4,
                      duration: 1.7,
                      ease: "easeInOut",
                    }}
                    className="w-[1px] h-[588px] bg-gray-500"
                  ></motion.div>
                </div>
                {/* description project */}
                <motion.div
                  initial={{
                    x: idx % 2 === 0 || mobileScreen ? "-50" : "50",
                    opacity: 0,
                  }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{
                    delay: 0.2,
                    ease: "easeOut",
                    x: { duration: 0.7 },
                    opacity: { duration: 0.4 },
                  }}
                  viewport={{ once: true }}
                  className={`hidden md:block flex-1 ${
                    idx % 2 === 0 || mobileScreen ? "text-end" : "text-start"
                  } text-white p-12 pt-0`}
                >
                  <h2 className="text-4xl font-bold">{project.name}</h2>
                  <h3 className="text-3xl tracking-wide mb-8 mt-4 text-gray-400">
                    {project.type}
                  </h3>
                  <p className="text-lg text-gray-300">{project.description}</p>
                  <button
                    className={`text-white border border-gray-500 block py-2 px-4 hover:bg-white/20 mt-6  ${
                      idx % 2 === 0 || mobileScreen ? "ml-auto" : "mr-auto"
                    }`}
                    onClick={() => navigate(`/project/${project.slug}`)}
                  >
                    View
                  </button>
                </motion.div>
              </motion.div>
            ))}
            {/* more button */}
            <a
              href="https://github.com/Hanip56"
              rel="noreferrer"
              target="_blank"
            >
              <motion.button
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                className="ml-[17px] md:mx-auto text-white border border-gray-500 block py-2 px-4 hover:bg-white/20"
              >
                More
              </motion.button>
            </a>
          </motion.div>
        </motion.div>

        {/* graphic design section */}
        <div className="mt-48">
          <motion.h3
            variants={revealVariants}
            initial="offscreen"
            whileInView="onscreen"
            className="text-white text-center text-xl font-bold underline underline-offset-8 mb-20 grid"
            viewport={{ once: true }}
          >
            Graphic Design
          </motion.h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-rows-6 lg:grid-cols-7 w-[90vw] lg:w-[55rem] mx-auto gap-4 cursor-pointer">
            {graphicList?.map((el, idx) => (
              <motion.div
                className={`relative bg-blue-500 group h-24 sm:h-64 ${el.className}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                onClick={() => handleShowGraphicModal(el)}
              >
                <div className="bg-black/30 hover:opacity-0 opacity-100 transition-opacity duration-200 absolute top-0 left-0 w-full h-full" />
                <img
                  src={el.previewImg}
                  alt={el.name}
                  className="object-cover w-full h-full"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default AlternateProjects;
