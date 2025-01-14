import React from "react";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";
import background from "../assets/NYU.jpg";

//framer motion container
const dropDownVariants = {
  hidden: {
    opacity: 0,
    y: -100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 2,
      ease: "easeOut",
    },
  },
};

const Hero = () => {
  return (
    <div
      className="relative h-screen bg-fixed bg-cover bg-no-repeat bg-[10%_20%]"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 225, 0.3), rgba(0, 0, 225, 0.3)), url(${background})`,
      }}
    >
      <div className="max-w-[800px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <motion.h1
          variants={dropDownVariants}
          initial="hidden"
          animate="visible"
          className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6"
        >
          Joseph Lin
        </motion.h1>
        <div className="flex justify-center items-center w-full whitespace-nowrap text-[#FFFFFF] ">
          <p className="md:text-3xl sm:text-3xl text-xl py-4">Passionate in</p>
          <ReactTyped
            className="md:text-3xl sm:text-3xl text-xl md:pl-2 pl-1"
            strings={[
              "Computer Science",
              "Mathematics",
              "Business",
              "Economics",
            ]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-[#C0C0C0]">
          New York University Tandon School of Engineering
        </p>
        {/* <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
          Get Started
        </button> */}
      </div>
    </div>
  );
};

export default Hero;
