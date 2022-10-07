/* eslint-disable @next/next/no-sync-scripts */
import React, { useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import Box from "../../components/lab/space-warp/Box";
import Donut from "components/lab/space-warp/Donut";
import CameraController from "../../components/lab/space-warp/CameraControls";
import Blob from "../../components/lab/shader/Blob";

const SpaceWarpPage = () => {
  const donutRef = useRef<THREE.SphereGeometry>(null!);

  return (
    <>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Donut position={[0, 0, 0]} />
        {/* <Box position={[1.2, 0, 0]} /> */}
        <Blob />
        <CameraController />
      </Canvas>
    </>
  );
};

export default SpaceWarpPage;
