import React from "react";
import { motion } from "framer-motion";
import Glow from "../components/design/GlowTilt.jsx";
import { SiMysql } from "react-icons/si";
import { SiPython } from "react-icons/si";
import { SiCplusplus } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { FaJava } from "react-icons/fa6";

const Skills = () => {
  return (
    <div className="border-b border-neutral-800 pb-20">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="py-10 my-2 text-center text-4xl font-medium"
      >
        Technical <span className="text-blue-500">Skills</span>
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="lg:px-40 md:px-40 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1"
      >
        <div className="p-8 flex flex-col items-center justify-center">
          <Glow icon={SiMysql} bgColor="bg-blue-500" size="text-6xl" />
          <span className="text-center mt-2 text-sm">MySQL</span>
        </div>
        <div className="p-8 flex flex-col items-center justify-center">
          <Glow icon={SiPython} bgColor="bg-blue-500" size="text-6xl" />
          <span className="text-center mt-2 text-sm">Python</span>
        </div>
        <div className="p-8 flex flex-col items-center justify-center">
          <Glow icon={SiCplusplus} bgColor="bg-blue-500" size="text-6xl" />
          <span className="text-center mt-2 text-sm">C++</span>
        </div>
        <div className="p-8 flex flex-col items-center justify-center">
          <Glow icon={IoLogoJavascript} bgColor="bg-blue-500" size="text-6xl" />
          <span className="text-center mt-2 text-sm">JavaScript</span>
        </div>
        <div className="p-8 flex flex-col items-center justify-center">
          <Glow icon={FaJava} bgColor="bg-blue-500" size="text-6xl" />
          <span className="text-center mt-2 text-sm">Java</span>
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
