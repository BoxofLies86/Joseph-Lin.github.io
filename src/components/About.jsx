import React from "react";
import { motion } from "framer-motion";
import ZoomImage from "../components/design/Zoom";
import profile from "../assets/profile.jpg";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl font-medium">
        About <span className="text-blue-400">Me</span>
      </h1>

      <div className="flex flex-wrap item-center">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="lg:w-1/2 flex justify-center items-center"
        >
          <ZoomImage
            src={profile}
            alt="Profile Picture"
            style={{ width: "500px", height: "550px" }}
          />
        </motion.div>

        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="lg:w-1/2 px-6 text-lg leading-relaxed"
        >
          <div className="flex justify-center lg:justify-start">
            <div className="my-2 max-w-xl py-6">
              Hi, I'm Joseph Lin, a Computer Science major at NYU's Tandon
              School of Engineering, with minors in Business Studies and Math.
              My academic journey encompasses courses like Data Structures,
              Design of Algorithms, Computer Networking, and Software
              Engineering, fueling my passion for building innovative solutions.
              In my projects, I've developed a fitness application using GPT-4
              and Streamlit, designed databases with MySQL, and implemented
              secure web frameworks like Flask. I've also simulated processor
              architectures in C++, showcasing my software development expertise
              and analytical skills. Beyond academics, I bring hands-on
              experience from leadership roles in music ensembles, volunteering
              at science museums, and part-time work that honed my teamwork and
              communication. Whether it's coding, creating intuitive
              applications, or engaging with the community, I approach
              challenges with curiosity, adaptability, and a commitment to
              growth.
            </div>
          </div>
        </motion.p>
      </div>
    </div>
  );
};

export default About;