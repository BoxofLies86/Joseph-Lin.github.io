import React from "react";
import { motion } from "framer-motion";
import ZoomImage from "../components/design/Zoom";
import profile from "../assets/profile.jpg";

const About = () => {
  return (
    <div className="min-h-screen border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="py-10 my-2 text-center text-4xl font-medium"
      >
        About <span className="text-blue-400">Me</span>
      </motion.h1>

      <div className="flex flex-col items-center justify-center lg:flex-row lg:items-start lg:space-x-8">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="lg:w-1/2 flex justify-center items-center"
        >
          <ZoomImage
            src={profile}
            alt="Profile Picture"
            style={{ width: "450px", height: "500px" }}
          />
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="lg:w-1/2 px-6 text-md leading-relaxed"
        >
          <div className="flex justify-center lg:justify-start">
            <div className="my-2 max-w-xl py-6">
              <p className="relative top-3 max-w-xl mb-6">
                I'm Joseph Lin, a Computer Science major at NYU Tandon School of
                Engineering, with minors in Business Studies and Math. My
                academic journey has equipped me with a strong foundation in
                areas like Data Structures, Computer Networking, and Software
                Engineering. As part of my passion for innovation, I've
                developed a GPT-4-powered fitness application with Streamlit,
                designed databases with MySQL, and implemented secure web
                frameworks like Flask. I've also delved into low-level
                programming by simulating processor architectures in C++,
                showcasing both my technical skills and analytical mindset.
              </p>
              <p>
                Beyond academics, I thrive in collaborative and creative
                environments. I've taken on leadership roles in music ensembles,
                volunteered at science museums, and balanced part-time work—all
                of which have sharpened my teamwork and communication skills.
                When I'm not coding, I enjoy exploring new technologies, staying
                active, and engaging with the community. Whether it's building
                intuitive applications or tackling complex problems, I'm driven
                by curiosity, adaptability, and a relentless commitment to
                growth.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
