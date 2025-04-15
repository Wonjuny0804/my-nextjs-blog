import React, { FC } from "react";
import dynamic from "next/dynamic";
import styles from "./OrbitChat.module.css";
import ISSFunFacts from "./components/ISSFunFacts";

const GlobeVisualization = dynamic(() => import("./GlobeVisualization"), {
  ssr: false,
}) as any;

const OrbitChat: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.globeContainer}>
        <GlobeVisualization />
        <ISSFunFacts />
      </div>
    </div>
  );
};

export default OrbitChat;
