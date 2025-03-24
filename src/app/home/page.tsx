"use client";
import React from "react";
import { useBackgroundColor } from "../store/zustand";
import { ComputerModel } from "@/assets/model/Computer";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const Home = () => {
  const { backgroundColor } = useBackgroundColor();
  console.log(backgroundColor);
  return (
    <div
      style={{ backgroundColor: backgroundColor }}
      className=" min-h-screen w-screen flex items-center justify-center flex-col text-white"
    >
      <Canvas camera={{ position: [0, 2, 5] }}>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={1} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <ComputerModel scale={0.5} />
      </Canvas>
    </div>
  );
};

export default Home;
