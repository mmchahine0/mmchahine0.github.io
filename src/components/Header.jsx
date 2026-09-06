import React, { useRef, useState } from "react";
import { ArrowDown } from "lucide-react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import pfpimg from "../assets/images/profile.png";

const AnimatedCube = ({ isButtonHovered }) => {
  const groupRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    groupRef.current.rotation.x = Math.cos(t / 4) / 2;
    groupRef.current.rotation.y = Math.sin(t / 3) / 2;
    groupRef.current.position.y = Math.sin(t / 1.5) / 10;
  });

  const fragments = Array(8)
    .fill()
    .map((_, index) => {
      const x = ((index % 2) * 2 - 1) * (isButtonHovered ? 1.5 : 1);
      const y =
        ((Math.floor(index / 2) % 2) * 2 - 1) * (isButtonHovered ? 1.5 : 1);
      const z =
        ((Math.floor(index / 4) % 2) * 2 - 1) * (isButtonHovered ? 1.5 : 1);

      return (
        <mesh key={index} position={[x, y, z]}>
          <boxGeometry args={[0.5, 0.5, 0.5]} />
          <meshStandardMaterial color={isButtonHovered ? "yellow" : "white"} />
        </mesh>
      );
    });

  return <group ref={groupRef}>{fragments}</group>;
};

const Header = () => {
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  return (
    <header
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900 to-blue-900 opacity-70"></div>
        <Canvas camera={{ position: [0, 0, 10], fov: 20 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <OrbitControls enableZoom={false} />
          <AnimatedCube isButtonHovered={isButtonHovered} />
        </Canvas>
      </div>
      <div className="container mx-auto px-4 z-10 relative">
        <div className="flex flex-col items-center justify-center gap-10 md:flex-row md:items-center md:justify-center md:gap-8 lg:gap-10">
          <div className="w-full max-w-xl text-center md:w-[46%] md:text-left md:mr-2 lg:mr-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
              Hi, I'm <span className="text-yellow-400">Mohammad</span>
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl mb-6">
              I'm a{" "}
              <span className="text-purple-400">Full Stack Developer</span>
            </h2>
            <p className="text-lg sm:text-xl mb-8 max-w-lg mx-auto md:mx-0">
              I create amazing web experiences with a passion for clean code and
              user-centric design.
            </p>
            <a
              href="#contact"
              onMouseEnter={() => setIsButtonHovered(true)}
              onMouseLeave={() => setIsButtonHovered(false)}
              className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold py-3 px-8 rounded-full inline-block transition-colors"
            >
              Get In Touch
            </a>
          </div>
          <div className="w-full flex justify-center md:w-[38%] md:justify-center">
            <img
              src={pfpimg}
              alt="Mohammad"
              className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full border-4 border-yellow-400 shadow-lg relative z-10"
            />
          </div>
        </div>
      </div>
      <a
        href="#about"
        className="hidden sm:block absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ArrowDown size={32} className="text-yellow-400" />
      </a>
    </header>
  );
};

export default Header;
