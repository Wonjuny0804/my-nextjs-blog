import React, { FC, useEffect, ReactNode, Suspense } from "react";
import { useLoader, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as constants from "../utils/constants";
import * as THREE from "three";

interface SceneSetupProps {
  children: ReactNode;
  controlsRef: React.MutableRefObject<any>;
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

const SceneSetup: FC<SceneSetupProps> = ({ children, controlsRef }) => {
  const { camera, set } = useThree();

  useEffect(() => {
    camera.position.set(200, 100, 200);
  }, [camera]);

  useEffect(() => {
    if (controlsRef.current) {
      set({ controls: controlsRef.current });
    }
  }, []);

  return (
    <>
      <Suspense fallback={null}>
        <Background />
      </Suspense>
      <ambientLight intensity={0.01} />
      <OrbitControls
        enablePan={false}
        minDistance={constants.EARTH_RADIUS * 1.1}
        maxDistance={300}
        ref={controlsRef}
        dampingFactor={0.1}
      />
      {children}
    </>
  );
};

export default SceneSetup;
