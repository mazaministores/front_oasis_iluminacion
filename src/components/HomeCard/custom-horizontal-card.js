import React from "react";
import { useLocation } from "wouter";
import styles from "./customHorizontal.module.scss";

export default function CustomHorizontalCard({
    bgColor,
    title,
    desc,
    image,
    href,
    onC,
    ...props
}) {
    const [, navigate] = useLocation()
    if (!desc) {
        return (
            <div
                className={styles.horizontalCard}
                style={{ backgroundColor: bgColor || "" }}
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
            style={{ backgroundColor: bgColor || "" }}
            onClick={onC ? () => window.open(onC) : () => navigate(href)}
        >
            <div className={styles.textContainer}>
                <h3 style={{ textAlign: 'center' }}>{title}</h3>
                <span className={styles.description}>{desc}</span>
            </div>
            {image && (
                <div className={styles.imageContainer}>
                    <img className={styles.image} src={image} />
                </div>
            )}
        </div>
    )
}
