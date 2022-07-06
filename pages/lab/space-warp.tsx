import React from "react";
import { Canvas } from "@react-three/fiber";
import LandingHeader from "../../components/Landing/LandingHeader";
import Star from "../../components/lab/space-warp/Star";
import * as THREE from "three";
import Box from "../../components/lab/space-warp/Box";

const SpaceWarpPage = () => {
  // const stars = new Array(6000).map((element, index) => (
  //   <Star
  //     key={`star-${index}`}
  //     position={[
  //       Math.random() * 600 - 300,
  //       Math.random() * 600 - 300,
  //       Math.random() * 600 - 300,
  //     ]}
  //   />
  // ));

  return (
    <>
      <LandingHeader />
      <Canvas
        camera={{
          fov: 30,
          near: 1,
          far: 1000,
          position: [-40, 30, 1],
        }}
      >
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Star position={[5, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
      </Canvas>
    </>
  );
};

export default SpaceWarpPage;
