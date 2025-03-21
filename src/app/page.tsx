"use client";
import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Earth } from "@/assets/model/Earth";

interface PinProps {
  lat: number;
  lon: number;
  radius: number;
  onClick: () => void;
}
function Pin({ lat, lon, radius, onClick }: PinProps) {
  const toRadians = (deg: number) => (deg * Math.PI) / 180;

  // แปลงค่าพิกัดให้ตรงกับพื้นผิวทรงกลม
  const theta = toRadians(lon);
  const phi = toRadians(lat);
  const x = radius * Math.cos(theta) * Math.cos(phi);
  const y = radius * Math.sin(phi);
  const z = radius * Math.sin(theta) * Math.cos(phi);

  return (
    <mesh position={[x, y, z]} onClick={onClick}>
      <sphereGeometry args={[0.2, 16, 16]} />
      <meshStandardMaterial color="red" emissive="red" emissiveIntensity={2} />
    </mesh>
  );
}
export default function App() {
  const [info, setInfo] = useState("Click a pin to see details");

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-gray-900 text-white">
      <Canvas camera={{ position: [0, 2, 5] }}>
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />

        {/* 🌍 Earth Model */}
        <Earth scale={2} />

        {/* 📍 Pins on Earth */}
        <Pin
          lat={30}
          lon={10}
          radius={2}
          onClick={() => setInfo("About Me: I'm a Full-Stack Dev!")}
        />
        <Pin
          lat={-25}
          lon={-60}
          radius={2}
          onClick={() => setInfo("Skills: React, Next.js, R3F")}
        />
        <Pin
          lat={50}
          lon={120}
          radius={2}
          onClick={() => setInfo("Projects: NatureX Admin, ERP App")}
        />
      </Canvas>

      {/* ℹ️ Info Display */}
      <div className="mt-4 p-4 bg-gray-800 rounded-lg shadow-lg">{info}</div>
    </div>
  );
}
