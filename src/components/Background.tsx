import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import * as THREE from 'three';
import { useEffect, useRef } from 'react';


export type BackgroundSphereHandle = {
  applyScale: (scale: number) => void;
  applyRotation: (delta: { x: number; y: number }) => void;
  applyFlick: (velocity: { x: number; y: number }) => void;
  applyColorIntensity: (intensity: number) => void;
};

interface Props {
  sphereRef: React.RefObject<THREE.Mesh | null>;
  controlRef: React.RefObject<BackgroundSphereHandle | null>;
  materialRef: React.RefObject<THREE.MeshStandardMaterial | null>;
  cameraOn: boolean;
}

const AnimatedSphere = ({sphereRef, controlRef, materialRef, cameraOn }: Props) => {
  const angularVelocity = useRef({ x: 0, y: 0 });
  const currentScale = useRef(1);
  const targetScale = useRef(1);

  useEffect(() => {
    controlRef.current = {
      applyScale: (value: number) => {
        targetScale.current = value;
      },
      applyRotation: (delta) => {
        if (sphereRef.current) {
          sphereRef.current.rotation.x += delta.x;
          sphereRef.current.rotation.y += delta.y;
        }
      },
      applyFlick: (velocity) => {
        angularVelocity.current.x += velocity.x;
        angularVelocity.current.y += velocity.y;
      },
      applyColorIntensity: (intensity: number) => {
        if (materialRef.current) {
          const baseColor = new THREE.Color('#4B0082');
          const targetColor = new THREE.Color('#00FFC8'); // or whatever
          baseColor.lerp(targetColor, intensity);
          materialRef.current.color.copy(baseColor);
          materialRef.current.emissive.copy(baseColor);
        }
      }
    };
  }, [controlRef, materialRef]);

  useFrame((state, delta) => {
    if (!sphereRef.current) return;

    if (!cameraOn) {
      sphereRef.current.rotation.y += 0.001;
    }
    
    // Apply velocity-based rotation
    sphereRef.current.rotation.x += angularVelocity.current.x;
    sphereRef.current.rotation.y += angularVelocity.current.y;

    // Apply gradual friction
    angularVelocity.current.x *= 0.95;
    angularVelocity.current.y *= 0.95;

    // Apply gradual scale change
    currentScale.current = THREE.MathUtils.lerp(currentScale.current, targetScale.current, 0.1);
    sphereRef.current.scale.setScalar(currentScale.current);
  });

  return (
    <Sphere ref={sphereRef} args={[3, 64, 64]}>
      <meshStandardMaterial
        ref={materialRef}
        color="#4B0082"
        wireframe
        transparent
        opacity={1}
        emissive="#4B0082"
        emissiveIntensity={1}
        toneMapped={false}
      />
    </Sphere>
  );
};


const Background = ({sphereRef, controlRef, materialRef, cameraOn }: Props) => {
  return (
    <div className="fixed inset-0 z-10 w-screen h-screen overflow-hidden">
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 8], fov: 75 }}>
        <color attach="background" args={['#1d2628']} />
        <fog attach="fog" args={['#1d2628', 0, 40]} />
        <ambientLight intensity={1} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <AnimatedSphere sphereRef={sphereRef} controlRef={controlRef} materialRef={materialRef} cameraOn={cameraOn} />
      </Canvas>
    </div>
  );
};

export default Background;
