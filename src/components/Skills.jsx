import React, { useState } from "react";
import Section from "./Section";
import NeonText from "./NeonText";
import { skills } from "../data/portfolioData";

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <Section title="Skills" id="skills">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-800 p-4 rounded-lg text-center transform hover:scale-105 transition-transform relative"
            onMouseEnter={() => setHoveredSkill(index)}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-16 h-16 mx-auto mb-4"
            />
            <NeonText color={hoveredSkill === index ? "yellow" : skill.color}>
              {skill.name}
            </NeonText>

            <div
              className={`absolute inset-0 bg-yellow-400 bg-opacity-90 flex items-center justify-center rounded-lg p-2 overflow-y-auto cursor-default
              transition-opacity duration-500 ease-in-out transform ${
                hoveredSkill === index
                  ? "opacity-100 pointer-events-auto scale-100"
                  : "opacity-0 pointer-events-none scale-95"
              }`}
            >
              <div className="text-gray-900 text-sm">
                <h4 className="font-bold mb-2">Projects:</h4>
                <ul className="list-disc list-inside">
                  {skill.projectsMade &&
                    skill.projectsMade.map((project, idx) => (
                      <li key={idx}>{project}</li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
