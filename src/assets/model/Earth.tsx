import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useFrame } from "@react-three/fiber";
import { useBackgroundColor } from "@/app/store/zustand";
 
type GLTFResult = GLTF & {
  nodes: {
    ["URF-Height_watr_0"]: THREE.Mesh;
    ["URF-Height_Lampd_0"]: THREE.Mesh;
    ["URF-Height_Lampd_Ice_0"]: THREE.Mesh;
  };
  materials: {
    watr: THREE.MeshStandardMaterial;
    Lampd: THREE.MeshStandardMaterial;
    Lampd_Ice: THREE.MeshStandardMaterial;
  };
};

interface EarthProps extends React.ComponentPropsWithoutRef<"group"> {
  setChangePageColor: React.Dispatch<React.SetStateAction<string>>;
}

export function EarthModel(props: EarthProps) {
  const { nodes, materials } = useGLTF(
    "/earthModel/scene.gltf"
  ) as unknown as GLTFResult;
  const earthRef = useRef<THREE.Group>(null);
  const { setBackgroundColor } = useBackgroundColor();
  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.002;
    }
  });

  // Helper function: แปลง THREE.Color → CSS Color
  const getMaterialColor = (
    material: THREE.Material | THREE.MeshStandardMaterial
  ) => {
    if (material instanceof THREE.MeshStandardMaterial) {
      const { r, g, b } = material.color;
      return `rgb(${Math.round(r * 255)}, ${Math.round(g * 255)}, ${Math.round(
        b * 255
      )})`;
    }
    return "rgb(255, 255, 255)";
  };

  return (
    <group {...props} dispose={null} ref={earthRef}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={1}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["URF-Height_watr_0"].geometry}
          material={materials.watr}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["URF-Height_Lampd_0"].geometry}
          material={materials.Lampd}
          onClick={() => {
            const color = getMaterialColor(materials.Lampd);
            props.setChangePageColor(color);
            setBackgroundColor(color);
          }}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["URF-Height_Lampd_Ice_0"].geometry}
          material={materials.Lampd_Ice}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/earthModel/scene.gltf");
