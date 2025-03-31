import React from "react";

import Link from "next/link";
import styles from "./index.module.css";

type Props = {
  title: string;
  subtitle: string;
}

export default function Common({title, subtitle}: Props) {
  return (
    <>
      <div className={styles.contents_header}>
        <div className={styles.head_inner}>
          <h1 className={styles.title}>
            <span className={styles.eng}>{title}</span>
            <span className={styles.jpn}>{subtitle}</span>
          </h1>
        </div>
      </div>
      <div className={styles.breadcrumbs}>
        <ul>
          <li><Link href="/">ホーム</Link> &gt; </li>
          <li>{subtitle}</li>
        </ul>
      </div>
    </>
  );
}