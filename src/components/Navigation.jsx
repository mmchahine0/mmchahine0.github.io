import React from "react";
import { Github } from "lucide-react";

const Navigation = ({ activeSection }) => {
  const navItems = [
    "about",
    "skills",
    "experience",
    "projects",
    "education",
    "contact",
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-900 bg-opacity-80 backdrop-blur-md z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-yellow-400">
          Portfolio
        </a>
        <ul className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className={`capitalize transition-colors duration-500 ease-in-out ${
                  activeSection === item ? "text-yellow-400" : "text-white"
                } hover:text-yellow-300`}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="https://github.com/mmchahine0"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-full flex items-center transition-colors duration-500 ease-in-out"
        >
          <Github size={18} className="mr-2" />
          GitHub Profile
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
