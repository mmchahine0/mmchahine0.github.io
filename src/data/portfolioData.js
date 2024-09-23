import twoOfUs from "../assets/images/twoOfUs.png";
import techlarious from "../assets/images/techlarious.png";
import docconnect from "../assets/images/docConnect.png"
import healinghorizon from "../assets/images/healingHorizon.png"
import pos from "../assets/images/pos.png"
import uniProjects from "../assets/images/uniProjects.webp"


export const skills = [
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    color: "lightBlue",
    projectsMade: ["Healing horizon", "DocConnect", "POS system", "This portfolio ;)"]
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    color: "green",
    projectsMade: ["Healing horizon", "DocConnect"]
  },
  {
    name: "Express",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
    color: "black",
    projectsMade: ["Healing horizon", "DocConnect"]

  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
    color: "green",
    projectsMade: ["Healing horizon", "DocConnect", "University projects"]

  },
  {
    name: "SQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
    color: "lightBlue",
    projectsMade: ["University projects", "General knowledge"]

  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    color: "yellow",
    projectsMade: ["Healing horizon", "DocConnect", "POS system", "University projects"]

  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    color: "lightBlue",
    projectsMade: ["General knowledge"]

  },
  {
    name: "CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    color: "lightBlue",
    projectsMade: ["Healing horizon", "DocConnect", "POS system", "University projects"]

  },
  {
    name: "HTML",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    color: "orange",
    projectsMade: ["Healing horizon", "DocConnect", "POS system", "University projects"]

  },
  {
    name: "Java",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
    color: "lightBlue",
    projectsMade: ["Minecraft plugins", "University projects"]

  },
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    color: "yellow",
    projectsMade: ["University projects"]

  },
  {
    name: "C#",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg",
    color: "lightPurple",
    projectsMade: ["University projects"]

  },
];


export const experiences = [
  { icon: techlarious, company: "TECHlarious", link: "https://www.linkedin.com/school/techlarious", role: "Full Stack Developer", responsibility: "Intensive training bootcamp champion in Full Stack using MERN Stack, MongoDB, Express, React, Node.", period: "July 2023 - October 2023" },
  { icon: twoOfUs, company: "Two Of Us L.L.C", link: "https://www.linkedin.com/company/two-of-us-cooperation", role: "Front-end Developer", responsibility: "Engaged in a four-months intensive internship completed multiple projects in React.js developing dynamic web applications", period: "April 2024 - August 2024" }
];

export const projects = [
  { image: pos, name: "POS system", description: "This web-based POS system, built using the MERN stack, streamlines order management by providing an intuitive menu interface to add items to orders and generate bills. It offers comprehensive CRUD operations for managing users, products, and orders, ensuring efficient and flexible control over all aspects of the system.", presentation: "https://youtu.be/BgDX6yPIeQU", codeLink: "https://github.com/mmchahine0/POS" },
  { image: healinghorizon, name: "Healing horizon", description: "Healing Horizons streamlines healthcare with simplified appointments, enhanced doctor-patient communication, transparent pricing, and online medicine purchases. Users enjoy easy scheduling, doctor profiles, centralized records, and room reservations. Doctors benefit from streamlined appointment management and profile updates. The platform facilitates efficient communication through email.", presentation: "https://youtu.be/P0R8T8gCTRI", codeLink: "https://github.com/mmchahine0/Healing-horizons" },
  { image: docconnect, name: "DocConnect", description: "The application addresses the challenge of finding and connecting with healthcare professionals by offering comprehensive doctor listings with specialties and office hours, easy appointment scheduling, secure doctor-patient email communication, and digital medical record management and sharing. This solution simplifies the healthcare journey, making it more accessible and efficient for patients while streamlining processes for healthcare providers.", presentation: "https://youtu.be/WR5eAJl41JA", codeLink: "https://github.com/mmchahine0/docConnect" },
  { image: uniProjects, name: "Personal & University Projects", description: "A collection of small personal & university projects: Minecraft plugins (Java), a library system (C#, JavaScript), animations using Tkinter (Python), a calculator (Python), a vaccine terminal (Java), AWT animations (Java) and others.", presentation: "", codeLink: "" }];

export const education = [
  { degree: "BS Computer Science", school: "Arab Open University", link: "https://web.aou.edu.lb/", year: "2024" },
];
