import React from "react";
import instationImg from "../assets/images/instation_1.png";
import { motion } from "framer-motion";
import { useEffect } from "react";

const ModalProject = ({
  setShowModal,
  setCurrentModalInfo,
  currentModalInfo,
}) => {
  useEffect(() => {
    return () => {
      setCurrentModalInfo({});
    };
  }, []);
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.1 }}
        onClick={() => setShowModal(false)}
        className="z-30 fixed h-screen w-screen bg-black/30 flex justify-center items-center"
      ></motion.div>

      <motion.div
        initial={{ opacity: 0, y: "-50%", x: "-50%" }}
        animate={{ opacity: 1 }}
        className="z-50 fixed min-h-[28rem] w-[55rem] bg-[#082640] flex top-[50%] left-[50%]"
      >
        <div className="basis-[50%] bg-black">
          <img
            src={currentModalInfo?.imagePreview}
            alt={currentModalInfo?.name}
            className="object-contain object-center w-full h-full"
          />
        </div>
        <div className="flex-1 p-8 text-txtWhite space-y-6">
          <h1 className="text-3xl">{currentModalInfo?.name}</h1>
          <div className="flex flex-wrap gap-3">
            {currentModalInfo?.stack.map((stack, idx) => (
              <div
                key={idx}
                className="py-1 px-2 bg-gray-500/20 text-center text-sm"
              >
                <p>{stack}</p>
              </div>
            ))}
          </div>
          <div className="text-gray-400 h-48 overflow-scroll scrollbar-hide">
            <p className="text-sm text-justify">
              {currentModalInfo?.description}
            </p>
          </div>
          <div className="flex gap-x-2 justify-end">
            <a href={currentModalInfo?.code} target="_blank" rel="noreferrer">
              <button className="bg-[#c25051] hover:bg-[#9b3c3d] px-7 py-[0.15rem] text-sm text-txtWhite mt-2">
                Code
              </button>
            </a>
            <a href={currentModalInfo?.live} target="_blank" rel="noreferrer">
              <button className="bg-[#c25051] hover:bg-[#9b3c3d] px-7 py-[0.15rem] text-sm text-txtWhite mt-2">
                Live
              </button>
            </a>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ModalProject;
