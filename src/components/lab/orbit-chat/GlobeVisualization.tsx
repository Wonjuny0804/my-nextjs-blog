import React, { FC, useRef } from "react";
import { Canvas, extend } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Stars from "./components/Stars";
import Earth from "./components/Earth";
import Sun from "./components/Sun";
import ISSTracker from "./components/ISSTracker";
import SceneSetup from "./components/SceneSetup";
import IssTrail from "./components/IssTrail";
import { PositionPoint } from "./components/IssTrail";

// Extend OrbitControls to be used within the Canvas
extend({ OrbitControls });

interface GlobeVisualizationProps {}

const GlobeVisualization: FC<GlobeVisualizationProps> = () => {
  const trailRef = useRef<PositionPoint[]>([]);
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        cursor: "grab",
      }}
    >
      <Canvas>
        <SceneSetup>
          {/* <Stars /> */}
          <Earth />
          <Sun />
          <IssTrail trail={trailRef.current} />
          <ISSTracker trailRef={trailRef} />
        </SceneSetup>
      </Canvas>
    </div>
  );
};

export default GlobeVisualization;
