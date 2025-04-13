import * as satellite from "satellite.js";

export const fetchISSTLE = async (): Promise<[string, string]> => {
  const response = await fetch(
    "https://celestrak.org/NORAD/elements/stations.txt"
  );
  const text = await response.text();
  const lines = text.split("\n");
  const index = lines.findIndex((line) => line.startsWith("ISS (ZARYA)"));
  if (index === -1) throw new Error("ISS TLE not found");
  return [lines[index + 1].trim(), lines[index + 2].trim()];
};

export const getISSPosition = (
  tle1: string,
  tle2: string
): { lat: number; lng: number } => {
  const satrec = satellite.twoline2satrec(tle1, tle2);
  const now = new Date();
  const posVel = satellite.propagate(satrec, now);
  const gmst = satellite.gstime(now);
  const geo = satellite.eciToGeodetic(posVel?.position!, gmst);
  return {
    lat: satellite.degreesLat(geo.latitude),
    lng: satellite.degreesLong(geo.longitude),
  };
};

export const getLocationName = async (
  lat: number,
  lng: number
): Promise<string> => {
  const apiKey = "YOUR_OPENCAGE_API_KEY";
  const res = await fetch(
    `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lng}&key=${apiKey}`
  );
  const data = await res.json();
  if (data?.results?.[0]?.formatted) {
    return data.results[0].formatted;
  }
  return "Unknown location";
};
