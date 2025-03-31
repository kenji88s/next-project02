import React from "react";
import Image from "next/image";
import Link from "next/link";
import PagesInfo from "../../_data/info-pages";
import styles from "./index.module.css";
import CompanyInfo from "../../_data/info-company";
import Gnavi from "../Gnavi";

/* 該当するボタンのみ取得 */
const pages: { href: string; title: string }[] = [];
Object.values(PagesInfo.contents).forEach((item) => {
  if (item.setup.includes("header")) {
    pages.push({
      href: item.href,
      title: item.title,
    });
  }
});

export default function Header() {
  return (
    <header id="header" className={styles.header}>
      <div className={styles.header_inner}>
        <div className={styles.header_logo}>
          <Link href="/">
            <Image
              src="/header-logo.png"
              alt={CompanyInfo.contents["会社名"]}
              width={268}
              height={50}
            />
          </Link>
        </div>
        <Gnavi />
      </div>
    </header>
  );
}
