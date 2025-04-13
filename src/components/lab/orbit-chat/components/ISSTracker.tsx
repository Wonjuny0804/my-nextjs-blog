import React, { FC, useRef, useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { fetchISSTLE, getISSPosition } from "../utils/issTracker";
import { latLngToSphereCoords } from "../utils/threeHelpers";
import { Html, useGLTF } from "@react-three/drei";
import * as constants from "../utils/constants";
import { PositionPoint } from "./IssTrail";
import IssTrail from "./IssTrail";

const MAX_TRAIL_POINTS = 1800;

interface Props {
  trailRef: React.MutableRefObject<PositionPoint[]>;
}

const ISSTracker: FC<Props> = ({ trailRef }) => {
  const [issPosition, setIssPosition] = useState({ lat: 30.25, lng: -90.1 });
  const [hovered, setHovered] = useState(false);
  const issMarker = useRef<THREE.Mesh>(null);
  const targetPos = useRef<THREE.Vector3 | null>(null);
  const { scene } = useGLTF("/models/iss.glb");

  useEffect(() => {
    let tleData: [string, string] | null = null;

    // Fetch TLE data
    fetchISSTLE().then((tle) => {
      tleData = tle;
    });

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
  }, []);

  useEffect(() => {
    console.log("Trail length:", trailRef.current.length);
  }, [issPosition]);

  useFrame(() => {
    if (issMarker.current && targetPos.current) {
      issMarker.current.position.lerp(targetPos.current, 0.1);
      issMarker.current.lookAt(0, 0, 0); // Keep ISS facing the earth
    }
  });

  return (
    <group ref={issMarker}>
      <primitive object={scene} scale={0.1} />
      <mesh
        onPointerOver={() => {
          console.log("Hovered");
          setHovered(true);
        }}
        onPointerOut={() => {
          console.log("Not Hovered");
          setHovered(false);
        }}
        visible={false}
        scale={3}
      >
        <sphereGeometry args={[2, 16, 16]} />
        <meshBasicMaterial transparent opacity={0} />
      </mesh>
      {hovered && (
        <Html position={[0, 2.5, 0]} center distanceFactor={8}>
          <div
            style={{
              background: "white",
              color: "black",
              padding: "6px 10px",
              borderRadius: "6px",
              fontSize: "1rem",
              whiteSpace: "nowrap",
              pointerEvents: "none",
            }}
          >
            Lat: {issPosition.lat.toFixed(2)}°<br />
            Lng: {issPosition.lng.toFixed(2)}°
          </div>
        </Html>
      )}
    </group>
  );
};

export default ISSTracker;
