import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";

const quotes = [
  "Nothing is as permanent as a temporary solution that works.",
  "A good programmer looks both ways before crossing a one way street.",
  "Months of testing and bug fixes can save you hours of planning.",
  "// TODO: insert funny quote",
  "AI won't replace humans, but humans using AI will.",
  "Debugging is like being a detective in a crime movie where you're also the murderer.",
];

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [randomQuote] = useState(
    () => quotes[Math.floor(Math.random() * quotes.length)]
  );

  useEffect(() => {
    let timer;
    let startTime;

    const simulateLoading = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min((elapsed / 3000) * 100, 100);
      setProgress(progress);

      if (progress < 100) {
        timer = requestAnimationFrame(simulateLoading);
      } else {
        setLoading(false);
      }
    };

    timer = requestAnimationFrame(simulateLoading);

    return () => {
      cancelAnimationFrame(timer);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.pageYOffset + window.innerHeight / 2;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(section.id);
        }
      });

      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 50
      ) {
        setActiveSection("contact");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 flex flex-col items-center justify-center bg-gray-900 z-50">
        <div className="w-full h-1 bg-gray-800 mb-4">
          <div
            className="h-full bg-yellow-400 transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-2xl font-bold text-yellow-400 mb-4 text-center px-4">
          {randomQuote}
        </p>
        <p className="text-xl text-white">Loading... {Math.round(progress)}%</p>
      </div>
    );
  }

  return (
    <div className="relative">
      <Navigation activeSection={activeSection} />
      <Header />
      <main className="container mx-auto px-4 py-8">
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />      </main>
      <footer className="text-center py-4 text-gray-400">
        <p>&copy; 2024 Mohammad mahdi Chahine. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Portfolio;
