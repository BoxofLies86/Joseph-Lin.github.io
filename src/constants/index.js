import openAI from "../assets/openai.png";
import truck from "../assets/truck.jpg"; // Placeholder for Mobile Food Drive project image
import plane from "../assets/airplane.jpg"; // Placeholder for Flight Registration project image
import processor from "../assets/processor.jpg"; // Placeholder for E20 Processor Simulator project image

export const PROJECTS = [
  {
    title: "Fitness Guru - AI Workout and Diet Fitness Application",
    image: openAI,
    description: `Developed an AI-driven fitness application using GPT-4, MySQL, and Streamlit to provide 
    personalized workout and diet plans with a user-friendly interface.`,
    technologies: ["Python", "OpenAI API", "MySQL", "Streamlit", "Git"],
  },
  {
    title: "Mobile Food Drive Platform",
    image: truck,
    description: `Created a responsive MERN stack web application to track and manage food donations, featuring 
    real-time mapping, proximity-based searches, and dietary filtering.`,
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Google Maps API",
      "Tailwind CSS",
    ],
  },
  {
    title: "Flight Registration System",
    image: plane,
    description: `Built a Flask-based web application for flight management, enabling flight searches, bookings, 
    and secure administrative operations with dynamic pricing and authentication.`,
    technologies: ["Python", "Flask", "HTML/CSS", "MySQL", "XAMPP"],
  },
  {
    title: "E20 Processor Simulator",
    image: processor,
    description: `Developed a C++ simulator for the E20 processor, including multi-level caching and custom 
    test cases, to accurately execute machine and assembly code.`,
    technologies: ["C++", "Assembly Language", "Memory Caching"],
  },
];
