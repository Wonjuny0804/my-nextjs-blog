import React, { FC, useRef } from "react";
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
  const nightTexture = useRef(
    new THREE.TextureLoader().load(constants.NIGHT_MAP_TEXTURE_PATH)
  );
  console.log(nightTexture.current);

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
          emissive={new THREE.Color(0xffffff)}
          emissiveMap={nightTexture.current}
          emissiveIntensity={0.5}
        />
      </mesh>

      {/* Atmosphere */}
      <mesh ref={atmosphereRef} rotation={[0, Math.PI / 2, 0]}>
        <sphereGeometry args={[constants.EARTH_RADIUS + 2, 64, 64]} />
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
