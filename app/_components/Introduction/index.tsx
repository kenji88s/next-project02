import React from "react";
import styles from "./index.module.css";

import { poppins } from "../../_tool/font";

type Props = {
  eng?: string;
  jpn?: string;
  lead?: string;
  children?: React.ReactNode;
}

export default function Introduction({ eng, jpn, lead, children }: Props) {
  return (
    <section className={styles.introduction_section}>
      <div className={styles.introduction_section_inner}>
        <div className={styles.introduction_section_title}>
          <span className={`${styles.eng} ${poppins.className}`}>{eng}</span>
          <span className={styles.jpn}>{jpn}</span>
        </div>
        <div className={styles.introduction_section_contents}>
          {lead && <p className={styles.pick_text} dangerouslySetInnerHTML={{ __html: lead }} />}
          {children}
        </div>
      </div>
    </section>
  );
}