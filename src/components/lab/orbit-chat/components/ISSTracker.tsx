import React, { FC, useRef, useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { fetchISSTLE, getISSPosition } from "../utils/issTracker";
import { latLngToSphereCoords } from "../utils/threeHelpers";
import { useGLTF } from "@react-three/drei";
import * as constants from "../utils/constants";
import { PositionPoint } from "./IssTrail";
import IssTrail from "./IssTrail";

const MAX_TRAIL_POINTS = 1800;

interface Props {
  trailRef: React.MutableRefObject<PositionPoint[]>;
  tleData: [string, string] | null;
}

const ISSTracker: FC<Props> = ({ trailRef, tleData }) => {
  const [issPosition, setIssPosition] = useState({ lat: 30.25, lng: -90.1 });
  const issMarker = useRef<THREE.Mesh>(null);
  const targetPos = useRef<THREE.Vector3 | null>(null);
  const { scene } = useGLTF("/models/iss.glb");

  useEffect(() => {
    const interval = setInterval(() => {
      if (tleData) {
        const position = getISSPosition(...tleData);
        setIssPosition(position);

        // Push current position to the trail
        trailRef.current.push(position);
        if (trailRef.current.length > MAX_TRAIL_POINTS) {
          trailRef.current.shift(); // remove oldest point
        }

        targetPos.current = latLngToSphereCoords(
          position.lat,
          position.lng,
          constants.ISS_ALTITUDE
        );
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [tleData]);

  useFrame(() => {
    if (issMarker.current && targetPos.current) {
      issMarker.current.position.lerp(targetPos.current, 0.1);
      issMarker.current.lookAt(0, 0, 0); // Keep ISS facing the earth
    }
  });

  return (
    <group ref={issMarker}>
      <primitive object={scene} scale={0.1} />
      <mesh visible={false} scale={3}>
        <sphereGeometry args={[2, 16, 16]} />
        <meshBasicMaterial transparent opacity={0} />
      </mesh>
    </group>
  );
};

export default ISSTracker;
