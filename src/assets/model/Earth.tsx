/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: JasperTobias (https://sketchfab.com/JasperTobias)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/lowpoly-earth-ce0cce9b528b47c7984bf0b2b600d705
Title: LowPoly Earth
*/

import * as THREE from "three";
import React, { JSX } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

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

export function Earth(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(
    "/earthModel/scene.gltf"
  ) as unknown as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0.052]} scale={1}>
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
