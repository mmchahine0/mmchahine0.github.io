import React from "react";

const NeonText = ({ children, color }) => (
  <span
    style={{ color: color }}
    className="font-bold text-lg md:text-xl lg:text-2xl 
                 drop-shadow-[0_0_10px_rgba(59,130,246,0.8)] 
                 animate-pulse"
  >
    {children}
  </span>
);

export default NeonText;
