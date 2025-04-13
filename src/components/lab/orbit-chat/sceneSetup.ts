import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as constants from "./utils/constants";
import { createTextLabel } from "./utils/threeHelpers";

export interface SceneElements {
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  renderer: THREE.WebGLRenderer;
  controls: OrbitControls;
  sunMesh: THREE.Mesh;
  sunLight: THREE.PointLight;
  directionalLight: THREE.DirectionalLight;
  sunGlow: THREE.Mesh;
  outerGlow: THREE.Mesh;
  globe: THREE.Mesh;
  atmosphere: THREE.Mesh;
  starField: THREE.Points;
}

/**
 * Initializes the main Three.js scene, camera, and renderer.
 */
export const initializeScene = (
  container: HTMLDivElement
): {
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  renderer: THREE.WebGLRenderer;
} => {
  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(
    constants.CAMERA_FOV,
    container.clientWidth / container.clientHeight,
    constants.CAMERA_NEAR,
    constants.CAMERA_FAR
  );
  camera.position.z = constants.CAMERA_INITIAL_Z;

  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
  });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  container.appendChild(renderer.domElement);

  return { scene, camera, renderer };
};

/**
 * Adds stars to the scene background.
 */
export const addStars = (scene: THREE.Scene): THREE.Points => {
  const starsGeometry = new THREE.BufferGeometry();
  const starsMaterial = new THREE.PointsMaterial({
    color: constants.STAR_COLOR,
    size: 0.7,
    transparent: true,
  });

  const starsVertices = [];
  for (let i = 0; i < constants.STAR_COUNT; i++) {
    const x = (Math.random() - 0.5) * constants.STAR_RADIUS * 2;
    const y = (Math.random() - 0.5) * constants.STAR_RADIUS * 2;
    const z = (Math.random() - 0.5) * constants.STAR_RADIUS * 2;
    starsVertices.push(x, y, z);
  }

  starsGeometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(starsVertices, 3)
  );
  const starField = new THREE.Points(starsGeometry, starsMaterial);
  scene.add(starField);
  return starField;
};

/**
 * Adds lighting (ambient, directional, point light for sun).
 */
export const addLighting = (
  scene: THREE.Scene
): {
  ambientLight: THREE.AmbientLight;
  directionalLight: THREE.DirectionalLight;
  sunLight: THREE.PointLight;
} => {
  const ambientLight = new THREE.AmbientLight(
    constants.AMBIENT_LIGHT_COLOR,
    1.2
  );
  scene.add(ambientLight);

  const directionalLight = new THREE.DirectionalLight(
    constants.SUN_LIGHT_COLOR,
    1.5
  );
  directionalLight.position.set(constants.SUN_DISTANCE, 0, 0);
  scene.add(directionalLight);

  const sunLight = new THREE.PointLight(
    constants.SUN_LIGHT_COLOR,
    2,
    constants.CAMERA_FAR, // decay distance
    1 // decay factor
  );
  sunLight.position.set(constants.SUN_DISTANCE, 0, 0);
  scene.add(sunLight);

  return { ambientLight, directionalLight, sunLight };
};

/**
 * Creates the Sun mesh and its glow effects.
 */
export const createSun = (
  scene: THREE.Scene
): { sunMesh: THREE.Mesh; sunGlow: THREE.Mesh; outerGlow: THREE.Mesh } => {
  const sunGeometry = new THREE.SphereGeometry(30, 32, 32);
  const sunMaterial = new THREE.MeshBasicMaterial({
    color: constants.SUN_COLOR,
  });
  const sunMesh = new THREE.Mesh(sunGeometry, sunMaterial);
  sunMesh.position.set(constants.SUN_DISTANCE, 0, 0);
  scene.add(sunMesh);

  // Sun glow
  const sunGlowGeometry = new THREE.SphereGeometry(50, 32, 32);
  const sunGlowMaterial = new THREE.MeshBasicMaterial({
    color: constants.SUN_GLOW_COLOR,
    transparent: true,
    opacity: 0.2,
  });
  const sunGlow = new THREE.Mesh(sunGlowGeometry, sunGlowMaterial);
  sunGlow.position.set(constants.SUN_DISTANCE, 0, 0);
  scene.add(sunGlow);

  // Outer glow
  const outerGlowGeometry = new THREE.SphereGeometry(70, 32, 32);
  const outerGlowMaterial = new THREE.MeshBasicMaterial({
    color: constants.SUN_OUTER_GLOW_COLOR,
    transparent: true,
    opacity: 0.1,
  });
  const outerGlow = new THREE.Mesh(outerGlowGeometry, outerGlowMaterial);
  outerGlow.position.set(constants.SUN_DISTANCE, 0, 0);
  scene.add(outerGlow);

  return { sunMesh, sunGlow, outerGlow };
};

/**
 * Creates the Earth globe mesh with textures.
 */
export const createEarth = (scene: THREE.Scene): THREE.Mesh => {
  const textureLoader = new THREE.TextureLoader();
  const earthGeometry = new THREE.SphereGeometry(
    constants.EARTH_RADIUS,
    64,
    64
  );
  const earthMaterial = new THREE.MeshPhongMaterial({
    shininess: constants.EARTH_SHININESS,
    specular: 0x333333,
  });

  textureLoader.load(constants.EARTH_MAP_TEXTURE_PATH, (texture) => {
    earthMaterial.map = texture;
    earthMaterial.needsUpdate = true;
  });

  textureLoader.load(constants.EARTH_BUMP_MAP_TEXTURE_PATH, (texture) => {
    earthMaterial.bumpMap = texture;
    earthMaterial.bumpScale = constants.EARTH_BUMP_SCALE;
    earthMaterial.needsUpdate = true;
  });

  const earthMesh = new THREE.Mesh(earthGeometry, earthMaterial);
  // Initial rotation is handled in the animation loop based on time
  earthMesh.rotation.y = 0;
  scene.add(earthMesh);
  return earthMesh;
};

/**
 * Creates the atmosphere effect around the Earth.
 */
export const createAtmosphere = (scene: THREE.Scene): THREE.Mesh => {
  const atmosphereGeometry = new THREE.SphereGeometry(
    constants.EARTH_RADIUS + 2, // Slightly larger than Earth
    64,
    64
  );
  const atmosphereMaterial = new THREE.MeshPhongMaterial({
    color: constants.ATMOSPHERE_COLOR,
    transparent: true,
    opacity: constants.ATMOSPHERE_OPACITY,
    side: THREE.BackSide, // Render on the inside
  });
  const atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
  scene.add(atmosphere);
  return atmosphere;
};

/**
 * Adds OrbitControls to the camera and renderer.
 */
export const addControls = (
  camera: THREE.Camera,
  renderer: THREE.Renderer
): OrbitControls => {
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = constants.CONTROLS_DAMPING_FACTOR;
  controls.rotateSpeed = constants.CONTROLS_ROTATE_SPEED;
  controls.minDistance = constants.CONTROLS_MIN_DISTANCE;
  controls.maxDistance = constants.CONTROLS_MAX_DISTANCE;
  return controls;
};

/**
 * Updates the sun's position based on Earth's rotation (simulated time).
 */
export const updateSunPosition = (
  timeRotation: number,
  sunMesh: THREE.Mesh,
  sunLight: THREE.PointLight,
  directionalLight: THREE.DirectionalLight,
  sunGlow: THREE.Mesh,
  outerGlow: THREE.Mesh
) => {
  const sunX = constants.SUN_DISTANCE * Math.cos(timeRotation);
  const sunZ = constants.SUN_DISTANCE * Math.sin(timeRotation);

  sunMesh.position.set(sunX, 0, sunZ);
  sunLight.position.set(sunX, 0, sunZ);
  directionalLight.position.set(sunX, 0, sunZ); // Keep directional light aligned
  sunGlow.position.set(sunX, 0, sunZ);
  outerGlow.position.set(sunX, 0, sunZ);
};
