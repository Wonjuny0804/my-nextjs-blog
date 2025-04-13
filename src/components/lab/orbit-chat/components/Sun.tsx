import React, { FC, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import * as constants from "../utils/constants";

const Sun: FC = () => {
  const sunRef = useRef<THREE.Mesh>(null);
  const sunGlowRef = useRef<THREE.Mesh>(null);
  const outerGlowRef = useRef<THREE.Mesh>(null);

  // Positioning
  const sunDistance = constants.SUN_DISTANCE;
  const sunRadius = 15; // Hard-coded sun radius since it's not in constants
  const initialPosition = new THREE.Vector3(sunDistance, 0, 0);

  useFrame(() => {
    const date = new Date();
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    const seconds = date.getUTCSeconds();
    const timeRotation =
      ((hours + minutes / 60 + seconds / 3600) / 24) * Math.PI * 2;

    // Update Sun position based on time
    const newPosition = new THREE.Vector3(
      sunDistance * Math.cos(timeRotation),
      0,
      sunDistance * Math.sin(timeRotation)
    );

    if (sunRef.current) {
      sunRef.current.position.copy(newPosition);
    }
    if (sunGlowRef.current) {
      sunGlowRef.current.position.copy(newPosition);
      sunGlowRef.current.rotation.y += constants.SUN_GLOW_ROTATION_SPEED;
      sunGlowRef.current.rotation.z += constants.SUN_GLOW_ROTATION_SPEED;
    }
    if (outerGlowRef.current) {
      outerGlowRef.current.position.copy(newPosition);
      outerGlowRef.current.rotation.y -=
        constants.SUN_OUTER_GLOW_ROTATION_SPEED;
      outerGlowRef.current.rotation.z -=
        constants.SUN_OUTER_GLOW_ROTATION_SPEED;
    }
  });

  return (
    <>
      <mesh ref={sunRef} position={initialPosition}>
        <sphereGeometry args={[sunRadius, 32, 32]} />
        <meshBasicMaterial color={constants.SUN_COLOR} />
      </mesh>
      <mesh ref={sunGlowRef} position={initialPosition}>
        <sphereGeometry args={[sunRadius + 0.5, 32, 32]} />
        <meshBasicMaterial
          color={constants.SUN_GLOW_COLOR}
          transparent={true}
          opacity={0.3}
          side={THREE.BackSide}
        />
      </mesh>
      <mesh ref={outerGlowRef} position={initialPosition}>
        <sphereGeometry args={[sunRadius + 1.5, 32, 32]} />
        <meshBasicMaterial
          color={constants.SUN_OUTER_GLOW_COLOR}
          transparent={true}
          opacity={0.1}
          side={THREE.BackSide}
        />
      </mesh>
      <directionalLight
        position={initialPosition}
        intensity={1.5}
        color={constants.SUN_LIGHT_COLOR}
      />
      <pointLight
        position={initialPosition}
        intensity={2}
        distance={300}
        color={0xffee66}
      />
    </>
  );
};

export default Sun;
