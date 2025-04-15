import * as THREE from "three";
import React, { useMemo, useEffect, useState } from "react";
import { Line } from "@react-three/drei";
import { latLngToSphereCoords } from "../utils/threeHelpers";
import * as constants from "../utils/constants";
import * as satellite from "satellite.js";

export type PositionPoint = { lat: number; lng: number };

interface IssTrailProps {
  tle?: [string, string]; // Add TLE as a prop
}

const IssTrail: React.FC<IssTrailProps> = ({ tle }) => {
  const [orbitPoints, setOrbitPoints] = useState<THREE.Vector3[]>([]);

  useEffect(() => {
    if (!tle) return;

    const points: THREE.Vector3[] = [];
    const satrec = satellite.twoline2satrec(tle[0], tle[1]);

    // Calculate positions for one complete orbit
    // ISS orbital period is ~92 minutes (5520 seconds)
    // Let's sample 180 points (one point every ~30 seconds)
    const startTime = new Date();
    const periodInMinutes = 92;
    const samples = 180;

    for (let i = 0; i < samples; i++) {
      const time = new Date(
        startTime.getTime() + (i * (periodInMinutes * 60 * 1000)) / samples
      );
      const positionAndVelocity = satellite.propagate(satrec, time);
      const gmst = satellite.gstime(time);
      const position = satellite.eciToGeodetic(
        positionAndVelocity!.position,
        gmst
      );

      const point = latLngToSphereCoords(
        satellite.degreesLat(position.latitude),
        satellite.degreesLong(position.longitude),
        constants.ISS_ALTITUDE
      );

      points.push(point);
    }

    // Add the first point again to close the loop
    if (points.length > 0) {
      points.push(points[0]);
    }

    setOrbitPoints(points);
  }, [tle]);

  return orbitPoints.length > 1 ? (
    <Line
      points={orbitPoints}
      color={0xffcc00}
      lineWidth={2}
      transparent={true}
      opacity={0.6}
    />
  ) : null;
};

export default IssTrail;
