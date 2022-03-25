import React, { FC } from "react";
import styles from "./customStyle.module.css";

interface Props {
  children: React.ReactNode | string;
}

const OL: FC<Props> = ({ children }) => {
  return <ol className={styles.ol}>{children}</ol>;
};

export default OL;
