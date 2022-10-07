import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { useFrame, useThree } from "@react-three/fiber";
import useImportScripts from "../../../hooks/importScripts";
import loadPerlin from "./perlin";

declare const noise: any;

const Donut = (props: JSX.IntrinsicElements["mesh"]) => {
  const mesh = useRef<THREE.Mesh>(null!);
  const meshRef = useRef<THREE.MeshNormalMaterial>(null!);

  const [loaded, setLoaderd] = useState<boolean>(false);
  const [vectors, setVectors] = useState<THREE.Vector3>();
  const [rotationXAngle, setRotationXAngle] = useState<number>(0);

  useEffect(() => {
    loadPerlin(window);
    if (noise) {
      console.log("loaded==findme");
      setLoaderd(true);
    }
  }, []);

  useFrame((state, delta) => {
    const positionAttribute = mesh.current?.geometry.getAttribute("position");
    const vector = new THREE.Vector3();

    const k = 3;
    for (let i = 0; i < positionAttribute.count; i++) {
      vector.fromBufferAttribute(positionAttribute, i);
      vector
        .normalize()
        .multiplyScalar(
          1 + 0.3 * noise.perlin3(vector.x * k, vector.y * k, vector.z * k)
        );

      const newPosition = positionAttribute.setXYZ(
        i,
        vector.x,
        vector.y,
        vector.z
      );
      // mesh.current.geometry.computeVertexNormals();
    }
  });

  return (
    <mesh {...props} ref={mesh}>
      <sphereGeometry args={[1, 128, 128]} />
      <meshNormalMaterial ref={meshRef} />
    </mesh>
  );
};

export default Donut;
