import React from "react";

import styles from "./vertical.module.scss";
import { useLocation } from "wouter";

export default function VerticalCard({
  bgColor,
  brand,
  name,
  price,
  sale_price,
  image,
  border,
  href,
  desc,
  onC,
  ...props
}) {
  const [, navigate] = useLocation()

  return (
    <div
      className={styles.verticalCard}
      style={{
        backgroundColor: bgColor || "",
        border: border && "2px solid #eee",
      }}
      onClick={onC ? () => window.open(onC) : () => navigate(href)}

    >
      {sale_price && price && (
        <button className={styles.favContainer}>
          {(((price - sale_price) / price) * 100) | 0}%
        </button>
      )}
      <div className={styles.imageContainer}>
        {image && <img className={styles.image} src={image} loading="lazy" />}
      </div>
      <div className={styles.textContainer}>
        <h4 className={styles.brandText}>{brand}</h4>
        <h4>{name}</h4>
        {sale_price ? (
          <div className={styles.priceContainer}>
            <div className={styles.prices}>
              <span className={styles.priceText}></span>
              <span className={styles.salePriceText}></span>
            </div>
          </div>
        ) : (
          <span className={styles.salePriceText}>{desc}</span>
        )}
      </div>
    </div>
  );
}
