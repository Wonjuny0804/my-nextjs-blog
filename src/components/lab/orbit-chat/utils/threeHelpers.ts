import * as THREE from "three";
import * as constants from "./constants";
/**
 * Converts latitude and longitude to spherical coordinates for Three.js.
 * @param lat Latitude in degrees.
 * @param lng Longitude in degrees.
 * @param radius Radius of the sphere.
 * @returns THREE.Vector3 position.
 */
export const latLngToSphereCoords = (
  lat: number,
  lng: number,
  radius = constants.EARTH_RADIUS + 1
) => {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta)
  );
};

/**
 * Creates a Three.js texture from text rendered on a canvas.
 * @param text The text to render.
 * @param size Font size.
 * @param width Canvas width.
 * @param height Canvas height.
 * @returns THREE.CanvasTexture
 */
export const createTextLabel = (
  text: string,
  size = 24,
  width = 256,
  height = 128
): THREE.CanvasTexture => {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  canvas.width = width;
  canvas.height = height;

  if (context) {
    context.fillStyle = "rgba(0, 0, 0, 0)"; // Transparent background
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.font = `${size}px Arial`;
    context.fillStyle = "#ffffff"; // White text
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillText(text, canvas.width / 2, canvas.height / 2);
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true; // Ensure texture updates
  return texture;
};
