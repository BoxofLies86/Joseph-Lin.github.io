import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className="absolute top-0 bg-black w-full px-6 py-4 z-10 opacity-70">
      <div className="flex justify-between items-center px-6">
        <motion.span
          initial={{ width: 0, overflow: "hidden" }}
          animate={{ width: "auto" }}
          transition={{ delay: 1, duration: 1 }}
          className="text-3xl font-semibold"
        >
          JL
        </motion.span>
        <div className=" flex itemcenter justify-center gap-6 text-3xl">
          <motion.a
            whileHover={{ scale: 1.2, color: "#FFC107" }}
            href="https://www.linkedin.com/in/joseph-lin-7908a7254/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillLinkedin />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.2, color: "#FFC107" }}
            href="https://github.com/BoxofLies86"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub />
          </motion.a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
