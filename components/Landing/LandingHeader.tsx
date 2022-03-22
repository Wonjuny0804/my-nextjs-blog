import React from "react";
// import NavBar from "../NavBar/NavBar";
import styles from "./LandingHeader.module.css";
import Image from "next/image";

const LandingHeader = () => {
  return (
    <div className={styles.headerWrapper}>
      {/* <NavBar /> */}

      <div className={styles.headerContent}>
        <h1 className={styles.headerTitle}>개념 없는 개발 블로그</h1>
        <div className={styles.headerLine}></div>
      </div>

      <section className={styles.selfIntroduce}>
        <div className={styles.profileImage}>
          <Image
            src={"/assets/wonjun-1.png"}
            layout="fill"
            alt="profile image"
          />
        </div>
        <div className={styles.selfContent}>
          <h2>Hallo, my name is Wonjun</h2>
          <p>A frontend Dev, who needed a writing space</p>
        </div>
      </section>
    </div>
  );
};

export default LandingHeader;
