import React from "react";
import Section from "../Section";
import styles from "./index.module.css";

import { contTechnique } from "../../_data/info-service";

export default function Technique() {
    return (
        <Section id="jump02" eng="Technique" jpn="私たちの技術" wrap={true}>
            <ul className={styles.technique_list}>
                {contTechnique.contents.map((detail, index) => (
                    <li key={index}>
                        <div className={styles.title}><span className={styles.kanji}>{detail.kanji}</span></div>
                        <div className={styles.msg}>{detail.msg}</div>
                    </li>
                ))}
            </ul>
        </Section>
    );
}