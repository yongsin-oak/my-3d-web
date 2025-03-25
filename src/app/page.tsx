"use client";
import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { EarthModel } from "@/assets/model/Earth";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { responsiveCallback } from "@/utils/responsive";
import Flex from "@/Components/Flex";
export default function App() {
  const router = useRouter();
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [changePageColor, setChangePageColor] = useState<string>(
    "oklch(0.623 0.214 259.815)"
  );
  const [earthScale, setEarthScale] = useState<number>(1.5);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateScale = () => {
      responsiveCallback({
        ssm: () => setEarthScale(1),
        sm: () => setEarthScale(1.2),
        md: () => setEarthScale(1.4),
        lg: () => setEarthScale(1.6),
        xl: () => setEarthScale(1.8),
        xxl: () => setEarthScale(2),
      });
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  const handleClick = (event: React.MouseEvent) => {
    setMousePos({ x: event.clientX, y: event.clientY });
    setIsClicked(true);
    setTimeout(() => {
      router.push("/home");
    }, 2000);
  };

  return (
    <Flex className="relative h-screen bg-gray-900 text-white overflow-hidden">
      <Canvas camera={{ position: [0, 2, 5] }}>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={1} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <EarthModel
          scale={earthScale}
          onClick={handleClick}
          setChangePageColor={setChangePageColor}
        />
      </Canvas>
      {isClicked && (
        <motion.div
          className="absolute rounded-full transform -translate-1/2"
          initial={{
            width: "0",
            height: "0",
            top: mousePos.y,
            left: mousePos.x,
          }}
          animate={{
            width: "200vw",
            height: "200vw",
            top: mousePos.y,
            left: mousePos.x,
          }}
          transition={{ duration: 2, ease: "easeOut" }}
          style={{ backgroundColor: changePageColor }}
        />
      )}
    </Flex>
  );
}
