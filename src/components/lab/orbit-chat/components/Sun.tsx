import React, { FC, useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import * as constants from "../utils/constants";

const Sun: FC = () => {
  const sunRef = useRef<THREE.Mesh>(null);
  const sunGlowRef = useRef<THREE.Mesh>(null);
  const outerGlowRef = useRef<THREE.Mesh>(null);
  const timeRef = useRef<number>(0);

  const sunDistance = constants.SUN_DISTANCE;
  const sunRadius = 15;
  const initialPosition = new THREE.Vector3(sunDistance, 0, 0);

  // Initialize with current time position
  useEffect(() => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    // Calculate initial rotation based on current time (one full rotation per day)
    timeRef.current =
      ((hours + minutes / 60 + seconds / 3600) / 24) * Math.PI * 2;
  }, []);

  useFrame((state, delta) => {
    // Update time - add a small amount based on real seconds passing
    // 1 day = 2π radians, so we need to calculate how much of 2π to add per frame
    // For a day to complete in 2 minutes (120 seconds), we'd use:
    const dayLengthInSeconds = 120; // Complete a day in 2 minutes for visualization
    const rotationPerFrame = (delta / dayLengthInSeconds) * Math.PI * 2;

    timeRef.current += rotationPerFrame;

    // Calculate new position based on time-based rotation
    const newPosition = new THREE.Vector3(
      sunDistance * Math.cos(timeRef.current),
      0,
      sunDistance * Math.sin(timeRef.current)
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

    // Update directional light position
    state.scene.children.forEach((child) => {
      if (child.type === "DirectionalLight" || child.type === "PointLight") {
        child.position.copy(newPosition);
      }
    });
  });

  return (
    <>
      {/* Core Sun Sphere */}
      <mesh ref={sunRef} position={initialPosition}>
        <sphereGeometry args={[sunRadius, 32, 32]} />
        <meshBasicMaterial color={constants.SUN_COLOR} />
      </mesh>

      {/* Inner Glow */}
      <mesh ref={sunGlowRef} position={initialPosition}>
        <sphereGeometry args={[sunRadius + 3, 64, 64]} />
        <meshBasicMaterial
          color={constants.SUN_GLOW_COLOR}
          transparent
          opacity={0.3}
          blending={THREE.AdditiveBlending}
          side={THREE.FrontSide}
          depthWrite={false}
        />
      </mesh>

      {/* Outer Glow */}
      <mesh ref={outerGlowRef} position={initialPosition}>
        <sphereGeometry args={[sunRadius + 6, 64, 64]} />
        <meshBasicMaterial
          color={constants.SUN_OUTER_GLOW_COLOR}
          transparent
          opacity={0.15}
          blending={THREE.AdditiveBlending}
          side={THREE.FrontSide}
          depthWrite={false}
        />
      </mesh>

      {/* Lighting */}
      <directionalLight
        position={initialPosition.toArray()}
        intensity={1.5}
        color={constants.SUN_LIGHT_COLOR}
      />
      <pointLight
        position={initialPosition.toArray()}
        intensity={2}
        distance={300}
        color={0xffee66}
      />
    </>
  );
};

export default Sun;
