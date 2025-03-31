import React from "react";
import Image from "next/image";

import Section from "../Section";
import styles from "./index.module.css";

import { contPrecedent } from "../../_data/info-service";

export default function Precedent() {
    return (
        <Section id="jump01" eng="Precedent" jpn="デザイン事例" wrap={true} msg="観客へどのようなメッセージを伝えたいか・どのような空間や時間を創りたいのかなど、「想い」を共有しながら舞台照明デザインに落とし込んでいきます。">
            <ul className={styles.precedent_list}>
                {contPrecedent.contents.map((photo, index) => (
                    <li key={index}>
                        <div className={styles.image}><Image src={photo.src} width={480} height={320} alt="" /></div>
                        <div className={styles.title}>{photo.caption}</div>
                    </li>
                ))}
            </ul>
        </Section>
    );
}