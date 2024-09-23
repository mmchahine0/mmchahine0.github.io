import React from "react";
import Section from "./Section";
import { experiences } from "../data/portfolioData";

const Experience = () => (
  <Section title="Experience" id="experience">
    <div className="space-y-8">
      {experiences.map((exp, index) => (
        <div
          key={index}
          className="bg-gray-800 p-6 rounded-lg flex items-start"
        >
          <a href={exp.link} target="_blank" rel="noreferrer">
            <img
              src={exp.icon}
              alt={`${exp.company} logo`}
              className="w-16 h-16 mr-4"
            />
          </a>
          <div className="flex-1">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold">{exp.role}</h3>
                <a href={exp.link} target="_blank" rel="noreferrer">
                  <p className="text-yellow-400">{exp.company}</p>
                </a>
              </div>
              <span className="text-gray-400 text-2xl">{exp.period}</span>
            </div>
            <ul className="list-disc list-inside space-y-2">
              <li>{exp.responsibility}</li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  </Section>
);

export default Experience;
