import React, { FC, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import * as constants from "../utils/constants";

const Earth: FC = () => {
  const earthRef = useRef<THREE.Mesh>(null);
  const atmosphereRef = useRef<THREE.Mesh>(null);

  // Add texture loading with proper paths from constants
  const earthTexture = useRef(
    new THREE.TextureLoader().load(constants.EARTH_MAP_TEXTURE_PATH)
  );
  const bumpMap = useRef(
    new THREE.TextureLoader().load(constants.EARTH_BUMP_MAP_TEXTURE_PATH)
  );

  // useFrame(() => {
  // const date = new Date();
  // const hours = date.getUTCHours();
  // const minutes = date.getUTCMinutes();
  // const seconds = date.getUTCSeconds();
  // const timeRotation =
  //   ((hours + minutes / 60 + seconds / 3600) / 24) * Math.PI * 2;
  // if (earthRef.current) {
  //   earthRef.current.rotation.y = timeRotation;
  // }
  // if (atmosphereRef.current) {
  //   atmosphereRef.current.rotation.y = timeRotation;
  // }
  // });

  return (
    <group>
      <mesh ref={earthRef} rotation={[0, 0, 0]}>
        <sphereGeometry args={[constants.EARTH_RADIUS, 64, 64]} />
        <meshPhongMaterial
          map={earthTexture.current}
          bumpMap={bumpMap.current}
          bumpScale={constants.EARTH_BUMP_SCALE}
          specular={new THREE.Color(0x111111)}
          shininess={5}
        />
      </mesh>
      <mesh ref={atmosphereRef} rotation={[0, Math.PI / 2, 0]}>
        <sphereGeometry args={[constants.EARTH_RADIUS + 0.2, 64, 64]} />
        <meshPhongMaterial
          color={constants.ATMOSPHERE_COLOR}
          transparent={true}
          opacity={constants.ATMOSPHERE_OPACITY}
          side={THREE.BackSide}
        />
      </mesh>
    </group>
  );
};

export default Earth;
