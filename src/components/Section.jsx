import React from "react";

const Section = ({ id, title, children, className = "" }) => {
  return (
    <section id={id} className={`py-20 ${className}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-yellow-400">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
};

export default Section;
