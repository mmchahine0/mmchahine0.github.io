import React from "react";
import NeonText from "./NeonText";
import Section from "./Section";
import cv from "../assets/pdf/CV_Mohammad_Chahine.pdf";

const About = () => (
  <Section title="About Me" id="about">
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <div>
        <p className="text-lg mb-6">
          Full-Stack Web Developer experienced in building modern, scalable web
          applications using React, TypeScript, and Node.js. Brings additional
          enterprise software development experience with Microsoft Dynamics 365
          and Power Platform, including data modeling, business logic,
          integrations, and system design. Currently contributing to a
          large-scale enterprise project for a government client, applying
          software engineering principles to real-world business solutions.
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
          <h3 className="text-xl font-bold mb-2">2</h3>
          <NeonText>Years Experience</NeonText>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg text-center">
          <h3 className="text-xl font-bold mb-2">8+</h3>
          <NeonText>Projects Completed</NeonText>
        </div>
      </div>
    </div>
  </Section>
);

export default About;
