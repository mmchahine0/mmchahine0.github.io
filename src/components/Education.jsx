import React from "react";
import Section from "./Section";
import grad from "../assets/images/grad.jpg";
import { education } from "../data/portfolioData";

const Education = () => (
  <Section title="Education & Certifications" id="education">
    <div className="flex flex-col items-center max-w-2xl mx-auto">
      <div className="w-full max-w-md mb-8">
        <img
          src={grad}
          alt="Me at graduation"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
      <div className="w-full space-y-6 max-w-80">
        {education.map((edu, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg text-center">
            <h3 className="text-2xl font-bold text-yellow-400 mb-2">
              {edu.degree || edu.title || edu.certification}
            </h3>
            {edu.title && !edu.degree && (
              <p className="text-gray-300 mb-2">{edu.title}</p>
            )}
            <a href={edu.link} target="_blank" rel="noreferrer">
              <p className="text-xl text-white mb-2">
                {edu.school}
                {edu.certification ? ` • ${edu.certification}` : ""}
              </p>
            </a>
            <p className="text-gray-300">{edu.year}</p>
          </div>
        ))}
      </div>
    </div>
  </Section>
);

export default Education;
