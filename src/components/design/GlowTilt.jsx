import React from "react";
import Tilt from "react-parallax-tilt";

const GlowTilt = ({
  icon: Icon,
  bgColor = "bg-blue-500",
  size = "text-5xl",
}) => {
  return (
    <Tilt
      tiltMaxAngleX={20}
      tiltMaxAngleY={20}
      glareEnable={true}
      glareColor="lightblue"
      glarePosition="all"
      glareBorderRadius="0.75rem"
      scale={1.1}
      transitionSpeed={400}
    >
      <div
        className={`p-6 ${bgColor} rounded-lg shadow-lg 
        transition-transform duration-300 hover:scale-110 
        hover:brightness-150 flex justify-center items-center`}
      >
        <Icon className={`${size} text-white`} />
      </div>
    </Tilt>
  );
};

export default GlowTilt;
