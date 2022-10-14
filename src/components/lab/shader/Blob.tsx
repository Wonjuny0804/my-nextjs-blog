import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { MathUtils } from "three";

import vertexShader from "./vertexShader";
import fragmentShader from "./fragmentShader";

const Blob = () => {
  // This reference will give us direct access to the mesh
  const mesh = useRef<any>(); //FIXME: Will need to fix this
  const hover = useRef(false);

  const uniforms = useMemo(
    () => ({
      u_intensity: {
        value: 0.3,
      },
      u_time: {
        value: 0.0,
      },
    }),
    []
  );

  useFrame((state) => {
    const { clock } = state;
    if (!mesh.current) return;

    mesh.current.material.uniforms.u_time.value = 0.3 * clock.getElapsedTime();

    mesh.current.material.uniforms.u_intensity.value = MathUtils.lerp(
      mesh.current.material.uniforms.u_intensity.value,
      hover.current ? 0.85 : 0.35,
      0.05
    );
  });

  return (
    <mesh
      ref={mesh}
      position={[0, 0, 0]}
      scale={1}
      onPointerOver={() => (hover.current = true)}
      onPointerOut={() => (hover.current = false)}
    >
      <icosahedronGeometry args={[2, 20]} />
      <shaderMaterial
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={uniforms}
        wireframe={false}
      />
    </mesh>
  );
};

export default Blob;
