import React from "react";

import styles from "./index.module.css";
import { poppins } from "../../_tool/font";

type Props = {
    id?: string;
    eng?: string;
    jpn?: string;
    msg?: string;
    children?: React.ReactNode;
}

export default function Section({ id, eng, jpn, children, msg }: Props) {
    return (        
        <section className={styles.section} {...(id ? { id } : {})}>
            <div className={styles.section_inner}>
                {(eng && jpn) ? (
                    <h2 className={styles.section_title}>
                        <span className={`${styles.eng} ${poppins.className}`}>{eng}</span>
                        <span className={styles.jpn}>{jpn}</span>
                    </h2>
                ) : null}
                {msg && <div className={styles.section_msg}>{msg}</div>}
                <div className={styles.section_contents}>
                    {children}
                </div>
            </div>
        </section>
    );
}