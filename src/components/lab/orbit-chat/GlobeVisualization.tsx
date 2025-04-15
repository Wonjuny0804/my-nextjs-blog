import React, { FC, useRef, useState, useEffect } from "react";
import { Canvas, extend } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Earth from "./components/Earth";
import Sun from "./components/Sun";
import ISSTracker from "./components/ISSTracker";
import SceneSetup from "./components/SceneSetup";
import IssTrail from "./components/IssTrail";
import { PositionPoint } from "./components/IssTrail";
import { fetchISSTLE } from "./utils/issTracker";
import ISSFunFacts from "./components/ISSFunFacts";

// Extend OrbitControls to be used within the Canvas
extend({ OrbitControls });

interface GlobeVisualizationProps {}

const GlobeVisualization: FC<GlobeVisualizationProps> = () => {
  const trailRef = useRef<PositionPoint[]>([]);

  const [tleData, setTleData] = useState<[string, string] | null>(null);

  useEffect(() => {
    fetchISSTLE().then((tle) => {
      setTleData(tle);
    });
  }, []);

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
          <Earth />
          <Sun />
          {tleData && <IssTrail tle={tleData} />}
          {tleData && <ISSTracker trailRef={trailRef} tleData={tleData} />}
        </SceneSetup>
      </Canvas>
      <ISSFunFacts />
    </div>
  );
};

export default GlobeVisualization;
