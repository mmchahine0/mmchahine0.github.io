import React from "react";
import Section from "./Section";
import { projects } from "../data/portfolioData";

const Projects = () => (
  <Section title="Projects" id="projects">
    <div className="grid md:grid-cols-2 gap-8">
      {projects.map((project, index) => (
        <div
          key={index}
          className="bg-gray-800 rounded-lg overflow-hidden flex flex-col"
        >
          <div className="max-h-96 overflow-hidden">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="p-6 flex-grow flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
            </div>
            <div className="flex space-x-4">
              <a
                href={project.presentation}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 px-4 py-2 rounded-full font-bold transition-colors"
              >
                Presentation
              </a>
              <a
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-full font-bold transition-colors"
              >
                View Code
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </Section>
);

export default Projects;
