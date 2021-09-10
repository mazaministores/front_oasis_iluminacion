import React from "react";
import { useLocation } from "wouter";
import styles from "./horizontal.module.scss";

export default function HorizontalCard({
  bgColor,
  title,
  desc,
  image,
  href,
  onC,
  bgImage,
  direction,
  w,
  ...props
}) {
  const [, navigate] = useLocation()

  if (bgImage) {
    return (
      <div
        className={styles.horizontalCard}
        style={{ backgroundImage: `url(${bgImage})`, direction: direction || "rtl" }}
        onClick={onC ? () => window.open(onC) : () => navigate(href)}
      >
        <div className={styles.textContainer}>
          <h2 style={{ textAlign: 'center', color: 'green' }}>{title}</h2>
          {/* <span className={styles.description}>{desc}</span> */}
        </div>

      </div>

    )
  }


  if (!desc) {
    return (
      <div
        className={styles.horizontalCard}
        style={{ backgroundColor: bgColor || "", direction: direction || "rtl" }}
        onClick={onC ? () => window.open(onC) : () => navigate(href)}
      >
        <div
          className={styles.textContainer}
          style={{ padding: 0, marginRight: 0 }}
        >
          <h3 style={{ marginBottom: 0, fontSize: 35 }}>{title}</h3>
        </div>
        <img className={styles.bgImage} src={image} />
      </div>

    )
  }
  return (
    <div
      className={styles.horizontalCard}
      style={{ direction: direction || "initial", }}
      onClick={onC ? () => window.open(onC) : () => navigate(href)}
    >
      <div className={styles.textContainer}>
        <h3 style={{ textAlign: 'center' }}>{title}</h3>
        <span className={styles.description}>{desc}</span>
      </div>
      {image && (
        <div className={styles.imageContainer}>
          <img className={styles.image + ' ' + `${w ? styles.imageTwo : ''}`} src={image} />
        </div>
      )}
    </div>
  )
}
