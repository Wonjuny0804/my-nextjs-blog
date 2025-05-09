import React, { FC, useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import * as constants from "../utils/constants";

const Stars: FC = () => {
  const mesh = useRef<THREE.Points>(null);

  useEffect(() => {
    const particleCount = 2000;
    const particles = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      const radius = Math.random() * 300 + 150;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;

      particles[i3] = radius * Math.sin(phi) * Math.cos(theta);
      particles[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      particles[i3 + 2] = radius * Math.cos(phi);
    }

    if (mesh.current) {
      mesh.current.geometry.setAttribute(
        "position",
        new THREE.BufferAttribute(particles, 3)
      );
    }
  }, []);

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.y += constants.STAR_ROTATION_SPEED;
    }
  });

  return (
    <points ref={mesh}>
      <bufferGeometry />
      <pointsMaterial size={1.5} color={0xffffff} />
    </points>
  );
};

export default Stars;
