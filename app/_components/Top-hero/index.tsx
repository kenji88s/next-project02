import React from "react";
import styles from "./index.module.css";

export default function Hero() {
    return (
        <div id="visual" className={styles.visual}>
            <div className={styles.visual_image}>
                <picture>
                    <source srcSet="/visual_image-sp.jpg" media="(max-width: 480px)" />
                    <img src="/visual_image-pc.jpg" alt="" width={1920} height={960} />
                </picture>
            </div>
            <div className={styles.visual_text}>
                <picture>
                    <source srcSet="/visual_text-sp.png" media="(max-width: 480px)" />
                    <img src="/visual_text-pc.png" alt="CREATING IMPRESSION with LIGHTING" width={1020} height={300} />
                </picture>
            </div>
        </div>
    );
}