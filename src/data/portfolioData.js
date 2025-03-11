import twoOfUs from "../assets/images/twoOfUs.png";
import techlarious from "../assets/images/techlarious.png";
import eTech from "../assets/images/eTech.png";
import docconnect from "../assets/images/docConnect.png"
import healinghorizon from "../assets/images/healingHorizon.png"
import pos from "../assets/images/pos.png"
import uniProjects from "../assets/images/uniProjects.webp"
import todo from "../assets/images/todo.png"

export const skills = [
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    color: "lightBlue",
    projectsMade: ["Healing horizon", "DocConnect", "POS system", "To-do app", "This portfolio ;)"]
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    color: "green",
    projectsMade: ["Healing horizon", "DocConnect", "To-do app"]
  },
  {
    name: "Express",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
    color: "black",
    projectsMade: ["Healing horizon", "DocConnect", "To-do app"]

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
    projectsMade: ["To-do app", "University projects", "General knowledge"]

  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    color: "yellow",
    projectsMade: ["Healing horizon", "DocConnect", "POS system", "To-do app", "University projects"]

  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    color: "lightBlue",
    projectsMade: ["To-do app", "General knowledge"]

  },
  {
    name: "CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    color: "lightBlue",
    projectsMade: ["Healing horizon", "DocConnect", "POS system", "To-do app", "University projects"]

  },
  {
    name: "HTML",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    color: "orange",
    projectsMade: ["Healing horizon", "DocConnect", "POS system", "To-do app", "University projects"]

  },
  {
    name: "Tailwind",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    color: "lightBlue",
    projectsMade: ["To-do app", "This portfolio ;)"]

  },
  {
    name: "Redis",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-plain.svg",
    color: "red",
    projectsMade: ["To-do app", "General knowledge"]

  },
  {
    name: "Redux",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
    color: "purple",
    projectsMade: ["To-do app", "General knowledge"]

  },
  {
    name: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain.svg",
    color: "lightBlue",
    projectsMade: ["To-do app", "General knowledge"]

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
  { icon: twoOfUs, company: "Two Of Us L.L.C", link: "https://www.linkedin.com/company/two-of-us-cooperation", role: "Front-end Developer", responsibility: "Engaged in a four-months intensive internship completed multiple projects in React.js developing dynamic web applications", period: "April 2024 - August 2024" },
  { icon: eTech, company: "3E Tech", link: "https://www.linkedin.com/company/tech-3e", role: "Full Stack Developer", responsibility: "Implemented various features in the company's main project with a team using React.js, Node.js, Express.js, and TypeScript.", period: "January 2025 - March 2025" }
];

export const projects = [
  { image: todo, name: "To-do App", description: "This advanced to-do application is a full-stack project utilizing Node.js, Express, and Prisma with PostgreSQL for the back-end, enhanced by Redis caching for performance. Secure authentication is implemented with JWT, including refresh tokens via HTTP cookies and role-based access control. Google API integration facilitates email services, including OTP verification and password resets, while WebSocket functionality enables real-time collaboration and notifications. Robust security measures include rate limiting and comprehensive data validation. The React front-end, built with TypeScript and styled with Tailwind CSS and Shadcn components, leverages Redux with persist and encryption for state management, and React Query for efficient data handling. Performance optimization is achieved through code splitting, Vite, and SEO best practices validated by Lighthouse. Containerized with Docker, the front-end is deployed on Vercel, and the back-end and database on Render. Adhering to SOLID principles and clean code practices, this project showcases a comprehensive approach to modern web development.", presentation: "https://youtu.be/xRO09qOOtL4", codeLink: "https://github.com/mmchahine0/Todo-app-front" },
  { image: pos, name: "POS system", description: "This web-based POS system, built using the MERN stack, streamlines order management by providing an intuitive menu interface to add items to orders and generate bills. It offers comprehensive CRUD operations for managing users, products, and orders, ensuring efficient and flexible control over all aspects of the system.", presentation: "https://youtu.be/BgDX6yPIeQU", codeLink: "https://github.com/mmchahine0/POS" },
  { image: healinghorizon, name: "Healing horizon", description: "Healing Horizons streamlines healthcare with simplified appointments, enhanced doctor-patient communication, transparent pricing, and online medicine purchases. Users enjoy easy scheduling, doctor profiles, centralized records, and room reservations. Doctors benefit from streamlined appointment management and profile updates. The platform facilitates efficient communication through email.", presentation: "https://youtu.be/P0R8T8gCTRI", codeLink: "https://github.com/mmchahine0/Healing-horizons" },
  { image: docconnect, name: "DocConnect", description: "The application addresses the challenge of finding and connecting with healthcare professionals by offering comprehensive doctor listings with specialties and office hours, easy appointment scheduling, secure doctor-patient email communication, and digital medical record management and sharing. This solution simplifies the healthcare journey, making it more accessible and efficient for patients while streamlining processes for healthcare providers.", presentation: "https://youtu.be/WR5eAJl41JA", codeLink: "https://github.com/mmchahine0/docConnect" },
  { image: uniProjects, name: "Personal & University Projects", description: "A collection of small personal & university projects: Minecraft plugins (Java), a library system (C#, JavaScript), animations using Tkinter (Python), a calculator (Python), a vaccine terminal (Java), AWT animations (Java) and others.", presentation: "", codeLink: "" }];

export const education = [
  { degree: "BS Computer Science", school: "Arab Open University", link: "https://web.aou.edu.lb/", year: "2024" },
];
