"use client";
import React from "react";
import { ComputerModel } from "@/assets/model/Computer";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Text from "@/Components/Text";
import Section from "@/Components/Section";
import Flex from "@/Components/Flex";

const Home = () => {
  return (
    <Flex
      direction="col"
      className="overflow-x-hidden min-h-screen w-screen text-white bg-green-500"
    >
      <Section>
        <Flex className="w-full h-full flex-1" align="end">
          <Text h1 center size="64px">
            สวัสดีครับ ผมโอ๊กนะครับ
          </Text>
        </Flex>
        <Flex className="w-full h-auto flex-2">
          <Canvas
            camera={{ position: [0, 0, 1], fov: 50 }}
            style={{
              width: "100%",
              height: "400px",
            }}
          >
            <OrbitControls
              enableZoom={false}
              minPolarAngle={Math.PI / 2}
              maxPolarAngle={Math.PI / 2}
            />
            <ambientLight intensity={1} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <ComputerModel scale={1} position={[0, -0.3, 0]} />
          </Canvas>
        </Flex>
      </Section>
      <Section>
        <div>text</div>
      </Section>
    </Flex>
  );
};

export default Home;
