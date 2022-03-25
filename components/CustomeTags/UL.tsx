import React, { FC } from "react";
import styles from "./customStyle.module.css";

interface Props {
  children: React.ReactNode | string;
}

const UL: FC<Props> = ({ children }) => {
  return <ul className={styles.ul}>{children}</ul>;
};

export default UL;
