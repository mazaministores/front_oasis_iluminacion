import React from "react";
import styles from "./products.module.scss";

export default function Products({ reverse, children, two }) {
  if (children.length > 4) return null;

  return (
    <div
      className={styles.container}
      style={{ direction: reverse ? "rtl" : "" }}
    >
      <div className={two ? styles.noMobile : ''}>{children[0]}</div>
      <div >{children[1]}</div>
      <div >{children[2]}</div>
      <div className={styles.mobile} >{children[3]}</div>
    </div>
  )
}
