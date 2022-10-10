import React from "react";
import { Canvas } from "@react-three/fiber";
import Blob from "../../../components/lab/shader/Blob";

const MainScene = () => {
  return (
    <Canvas className="bg-transparent w-[40vw]">
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Blob />
    </Canvas>
  );
};

export default MainScene;
