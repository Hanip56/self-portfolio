import React from "react";
import instationImg from "../assets/images/instation_1.png";
import { projectInfo } from "../constants/info";
import { motion } from "framer-motion";
import useWindowDimensions from "../utils/getDimensions";
import { useNavigate, useNavigation } from "react-router-dom";

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
  const navigate = useNavigate();

  const mobileScreen = width <= 768;

  console.log(mobileScreen);

  return (
    <motion.div className="my-64">
      <div className="flex w-[90vw] md:w-[55rem] mx-auto mb-48">
        <div className="flex-1">
          <h1 className="titleWhite mb-8 ">Projects</h1>
          <p className="text-md md:text-lg text-gray-400 leading-6 md:leading-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
            asperiores adipisci, accusantium voluptatum exercitationem qui.
          </p>
        </div>
        <div className="flex gap-8 flex-1 h-80 overflow-hidden justify-center items-center">
          {/* images container */}
          <div className="flex flex-col gap-4 rotate-12 opacity-80">
            {projectInfo.map((project, idx) => (
              <div className="w-48">
                <img
                  src={project.imagePreview}
                  alt={project.name}
                  className="w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* web development section */}
      <motion.div>
        <h3 className="text-white text-center text-xl font-bold underline underline-offset-8 mb-20">
          Web development
        </h3>

        <motion.div className="relative w-[90vw] md:w-[60rem] mx-auto mt-12">
          {projectInfo.map((project, idx) => (
            <motion.div
              key={idx}
              className={`min-h-[600px] w-full flex ${
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
                  <p className="text-md text-gray-300">{project.description}</p>
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
                  transition={{ delay: 0.4, duration: 1.7, ease: "easeInOut" }}
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
          <motion.button
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="ml-[17px] md:mx-auto text-white border border-gray-500 block py-2 px-4 hover:bg-white/20"
          >
            More
          </motion.button>
        </motion.div>
      </motion.div>

      {/* graphic design section */}
      <div className="mt-48">
        <h3 className="text-white text-center text-xl font-bold underline underline-offset-8 mb-20 grid">
          Graphic Design
        </h3>

        <div className="grid grid-rows-6 grid-cols-7 w-[90vw] md:w-[55rem] mx-auto gap-4">
          <div className="bg-blue-500 col-span-2 row-span-2 h-48">01</div>
          <div className="bg-blue-500 col-span-2 row-span-2">01</div>
          <div className="bg-blue-500 col-span-3 row-span-2">01</div>
          <div className="bg-blue-500 col-span-3 row-span-4">01</div>
          <div className="bg-blue-500 col-span-4 row-span-3">01</div>
        </div>
      </div>
    </motion.div>
  );
};

export default AlternateProjects;
