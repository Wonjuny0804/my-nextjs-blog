import { Canvas } from "@react-three/fiber";
import React from "react";
import Box from "../../components/lab/space-warp/Box";
import LandingHeader from "../../components/Landing/LandingHeader";

const SpaceWarpPage = () => {
  return (
    <>
      <LandingHeader />
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
      </Canvas>
    </>
  );
};

export default SpaceWarpPage;
