import React, { useRef, useMemo } from "react";
import * as THREE from "three";
import { BufferAttribute } from "three";

const Star = (props: JSX.IntrinsicElements["mesh"]) => {
  const mesh = useRef<THREE.Mesh>(null!);
  let sprite = new THREE.TextureLoader().load("/lab/space-warp/star.png");

  const points = useMemo(() => {
    const p = new Array(6000).fill(0).map((v) => (0.5 - Math.random()) * 7.5);
    return new BufferAttribute(new Float32Array(p), 3);
  }, []);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach={"attributes-position"} {...points} />
      </bufferGeometry>
      <pointsMaterial
        color={"0xaaaaaa"}
        size={0.7}
        map={sprite}
        sizeAttenuation={true}
      />
    </points>
  );
};

export default Star;
