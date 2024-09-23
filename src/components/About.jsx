import React from "react";
import NeonText from "./NeonText";
import Section from "./Section";
import cv from "../assets/pdf/cv_Mohammad Chahine.pdf";

const About = () => (
  <Section title="About Me" id="about">
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <div>
        <p className="text-lg mb-6">
          As a passionate Junior Full Stack Developer, I specialize in MERN
          stack, with a particular focus on React.js. My expertise encompasses
          building dynamic and interactive web applications using MongoDB,
          Express, React, and Node.js. I have a robust foundation in web
          development principles and a strong commitment to problem-solving
          using Object-Oriented Programming with Javascript, Java, C#, I am also
          a quick learner, adept at mastering new technologies to enhance web
          functionalities and user experience.
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
          <h3 className="text-xl font-bold mb-2">3+</h3>
          <NeonText>Projects Completed</NeonText>
        </div>
      </div>
    </div>
  </Section>
);

export default About;
