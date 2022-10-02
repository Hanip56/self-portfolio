import React from "react";
import instationImg from "../assets/images/instation_1.png";
import { iconVariants, revealVariants } from "../utils/variants";
import { motion } from "framer-motion";
import { projectInfo } from "../constants/info";

const Projects = ({ setShowModal, setCurrentModalInfo }) => {
  return (
    <div
      id="Projects"
      className="min-h-screen my-16 md:my-12 w-full flex flex-col justify-center items-center text-center"
    >
      <motion.div
        variants={revealVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="titleWhite">Projects</h2>
        <p className="text-gray-500 tracking-wider">
          Some that i've already built
        </p>
      </motion.div>
      <div className="w-[80vw] md:w-[50rem] grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
        {projectInfo.map((project, idx) => (
          <motion.div
            key={idx}
            variants={iconVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
            className="flex flex-col gap-y-6 p-4 bg-[#082640]"
          >
            <div className="flex-1">
              <img
                src={project?.imagePreview}
                alt={project.name}
                className="object-cover object-center w-full h-full"
              />
            </div>
            <div className="space-y-4">
              <h4 className="text-txtWhite">-- {project.name} --</h4>
              <button
                onClick={() => {
                  setShowModal(true);
                  setCurrentModalInfo(project);
                }}
                className="bg-[#c25051] hover:bg-[#9b3c3d] px-7 py-[0.15rem] text-sm text-txtWhite mt-2"
              >
                view
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
