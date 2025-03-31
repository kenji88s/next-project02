import React from "react";
import Image from "next/image";
import Link from "next/link";
import PagesInfo from "../../_data/info-pages";
import styles from "./index.module.css";
import CompanyInfo from "../../_data/info-company";

/* 該当するボタンのみ取得 */
const pages: { href: string; title: string }[] = [];
Object.values(PagesInfo.contents).forEach((item) => {
  if (item.setup.includes("footer")) {
    pages.push({
      href: item.href,
      title: item.title,
    });
  }
});

export default function footer() {
    return (
        <footer id="footer" className={styles.footer}>
            <div className={styles.footer_inner}>
                <div className={styles.footer_logo}>
                    <Image
                        src="/footer-logo.png"
                        alt={CompanyInfo.contents["会社名"]}
                        width={656}
                        height={108}
                    />
                </div>
                <div className={styles.footer_text}>舞台照明デザインのバイナリールート【全国対応】</div>
                <div className={styles.footer_navi}>
                    <ul>
                        {pages.map((btn, index) => (
                            <li key={index}><Link href={btn.href}>{btn.title}</Link></li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className={styles.copy}>
                <p>
                    <Link href="/">
                        Copyright {CompanyInfo.contents["会社名"]} All Rights Reserved.
                        <Image
                            src="/site-img.gif"
                            alt=""
                            width={86}
                            height={13}
                        />
                    </Link>
                </p>
            </div>
        </footer>
    );
}
