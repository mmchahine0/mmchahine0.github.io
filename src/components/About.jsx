import React from "react";
import NeonText from "./NeonText";
import Section from "./Section";
import cv from "../assets/pdf/CV_Mohammad_Chahine.pdf";

const About = () => (
  <Section title="About Me" id="about">
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <div>
        <p className="text-lg mb-6">
          Full Stack Developer specializing in the MERN stack (MongoDB, Express,
          React.js, Node.js) with expertise in building dynamic, scalable web
          applications. Proficient in Object-Oriented Programming (OOP) with
          JavaScript, Java, and C#. Passionate about efficient code,
          problem-solving, and adopting new technologies.
        </p>
        <a
          href={cv}
          download
          className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold py-3 px-8 rounded-full inline-flex items-center transition-colors"
        >
          Download Resume
        </a>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-800 p-4 rounded-lg text-center">
          <h3 className="text-xl font-bold mb-2">1</h3>
          <NeonText>Year Experience</NeonText>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg text-center">
          <h3 className="text-xl font-bold mb-2">4+</h3>
          <NeonText>Projects Completed</NeonText>
        </div>
      </div>
    </div>
  </Section>
);

export default About;
