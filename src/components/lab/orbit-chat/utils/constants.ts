import * as THREE from "three";

// Sizes and Distances
export const EARTH_RADIUS = 100;
export const SUN_DISTANCE = 500;
export const STAR_COUNT = 5000;
export const STAR_RADIUS = 1000; // Radius of the sphere containing stars
export const ISS_ALTITUDE = EARTH_RADIUS + 8;

// Colors
export const STAR_COLOR = 0xffffff;
export const AMBIENT_LIGHT_COLOR = 0x404040;
export const SUN_LIGHT_COLOR = 0xffffff;
export const SUN_COLOR = 0xffff00;
export const SUN_GLOW_COLOR = 0xffff44;
export const SUN_OUTER_GLOW_COLOR = 0xffff99;
export const ATMOSPHERE_COLOR = 0x3a228a;
export const GRID_COLOR = 0x3366cc;
export const EQUATOR_COLOR = 0x00ccff;

// Materials Opacity & Shininess
export const ATMOSPHERE_OPACITY = 0.3;
export const GRID_OPACITY = 0.3;
export const EQUATOR_OPACITY = 0.5;
export const LABEL_OPACITY = 0.9;
export const EARTH_SHININESS = 15;
export const EARTH_BUMP_SCALE = 1.2;

// Textures
export const EARTH_MAP_TEXTURE_PATH = "/images/earth_texture.jpg";
export const EARTH_BUMP_MAP_TEXTURE_PATH = "/images/earth-topology.png";

// Camera
export const CAMERA_FOV = 75;
export const CAMERA_NEAR = 0.1;
export const CAMERA_FAR = 2000;
export const CAMERA_INITIAL_Z = 200;

// Controls
export const CONTROLS_DAMPING_FACTOR = 0.05;
export const CONTROLS_ROTATE_SPEED = 0.5;
export const CONTROLS_MIN_DISTANCE = 120;
export const CONTROLS_MAX_DISTANCE = 500;

// Animation
export const STAR_ROTATION_SPEED = 0.0001;
export const SUN_GLOW_ROTATION_SPEED = 0.001;
export const SUN_OUTER_GLOW_ROTATION_SPEED = 0.0005;
