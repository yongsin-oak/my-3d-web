"use client";
import React from "react";
import { useBackgroundColor } from "../store/zustand";
import { ComputerModel } from "@/assets/model/Computer";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Text from "@/Components/Text";

const Home = () => {
  const { backgroundColor } = useBackgroundColor();
  return (
    <div
      style={{ backgroundColor: backgroundColor }}
      className=" min-h-screen w-screen flex items-center justify-center flex-col text-white"
    >
      <div className="h-screen w-screen flex flex-col items-center justify-center">
        <Text h1 center color="#F87171">
          สวัสดี
        </Text>
        <div className="w-full h-auto flex items-center justify-center">
          <Canvas
            camera={{ position: [0, 0, 1], fov: 50 }}
            style={{ width: "100%", height: "auto" }}
          >
            <OrbitControls
              enableZoom={false}
              minPolarAngle={Math.PI / 2}
              maxPolarAngle={Math.PI / 2}
            />
            <ambientLight intensity={1} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <ComputerModel scale={1} position={[0, -0.5, 0]} />
          </Canvas>
        </div>
      </div>
    </div>
  );
};

export default Home;
