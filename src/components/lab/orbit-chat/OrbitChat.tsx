import React, { FC } from "react";
import dynamic from "next/dynamic";
import styles from "./OrbitChat.module.css";

const GlobeVisualization = dynamic(() => import("./GlobeVisualization"), {
  ssr: false,
}) as any;

const OrbitChat: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.globeContainer}>
        <GlobeVisualization />
        <div className={styles.titleOverlay}>
          <h1>Earth Visualization</h1>
        </div>
      </div>
      <div className={styles.chatContainer}>
        <h2>Earth Visualization</h2>

        <h3>About This Visualization</h3>
        <p>
          This 3D model displays Earth rotating according to the current time,
          with the sun positioned correctly to show day and night.
        </p>
        <p>
          The visualization includes stars, accurate Earth rotation, and
          real-time lighting from the sun.
        </p>
      </div>
    </div>
  );
};

export default OrbitChat;
