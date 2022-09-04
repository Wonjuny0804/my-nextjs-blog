import React, { FC } from "react";
import styles from "./customStyle.module.css";

interface Props {
  children: React.ReactNode | string;
}

const LI: FC<Props> = ({ children }) => {
  return <li className={styles.li}>{children}</li>;
};

export default LI;
