import * as THREE from "three";
import React, { useRef, useEffect, useState } from "react";
import { latLngToSphereCoords } from "../utils/threeHelpers";
import * as constants from "../utils/constants";

export type PositionPoint = { lat: number; lng: number };

interface IssTrailProps {
  trail: PositionPoint[];
}

const IssTrail: React.FC<IssTrailProps> = ({ trail }) => {
  const lineRef = useRef<THREE.Line>(null);
  const [geometry, setGeometry] = useState<THREE.BufferGeometry>(
    new THREE.BufferGeometry()
  );

  useEffect(() => {
    const positions: number[] = [];

    for (let i = 0; i < trail.length; i++) {
      const pos = latLngToSphereCoords(
        trail[i].lat,
        trail[i].lng,
        constants.ISS_ALTITUDE
      );
      positions.push(pos.x, pos.y, pos.z);
    }

    const positionAttr = new THREE.Float32BufferAttribute(positions, 3);
    const newGeometry = new THREE.BufferGeometry();
    newGeometry.setAttribute("position", positionAttr);

    setGeometry(newGeometry);
  }, [trail.length]); // <- this ensures re-run as trail grows

  return (
    <primitive ref={lineRef} object={geometry}>
      <lineBasicMaterial color={0xffcc00} linewidth={2} />
    </primitive>
  );
};

export default IssTrail;
