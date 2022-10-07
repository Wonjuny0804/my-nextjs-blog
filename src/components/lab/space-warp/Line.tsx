import React, { useRef, useLayoutEffect } from "react";
import * as THREE from "three";

const Line = (props: JSX.IntrinsicElements["mesh"]) => {
  const mesh = useRef<THREE.Mesh>(null!);
  const bufferRef = useRef<THREE.BufferGeometry>(null!);

  const points: THREE.Vector3[] = [];
  points.push(new THREE.Vector3(-10, 0, 0));
  points.push(new THREE.Vector3(0, 10, 0));
  points.push(new THREE.Vector3(10, 0, 0));

  useLayoutEffect(() => {
    if (bufferRef.current) {
      bufferRef.current.setFromPoints(points);
    }
  }, []);

  return (
    <mesh {...props} ref={mesh}>
      <bufferGeometry attach="geometry" ref={bufferRef} />
      <lineBasicMaterial color={"blue"} />
    </mesh>
  );
};

export default Line;
