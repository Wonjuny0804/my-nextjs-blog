import React, { FC, useEffect, ReactNode, Suspense } from "react";
import { useLoader, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as constants from "../utils/constants";
import * as THREE from "three";
interface SceneSetupProps {
  children: ReactNode;
}

const Background = () => {
  const texture = useLoader(THREE.TextureLoader, "/images/background.jpg");

  return (
    <mesh scale={[-500, 500, 500]}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshBasicMaterial map={texture} side={THREE.BackSide} />
    </mesh>
  );
};

const SceneSetup: FC<SceneSetupProps> = ({ children }) => {
  const { camera } = useThree();

  useEffect(() => {
    camera.position.set(0, 20, 100);
  }, [camera]);

  return (
    <>
      <Suspense fallback={null}>
        <Background />
      </Suspense>
      <ambientLight intensity={0.1} />
      <OrbitControls
        enablePan={false}
        minDistance={constants.EARTH_RADIUS * 1.1}
        maxDistance={300}
      />
      {children}
    </>
  );
};

export default SceneSetup;
