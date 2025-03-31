import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.css";
import CompanyInfo from "../../_data/info-company";

import { poppins } from "../../_tool/font";

export default function Aboutus() {
    return (
        <section className={styles.top_aboutus}>
            <div className={styles.top_aboutus_inner}>
                <h1 className={styles.top_aboutus_title}><span className={`eng ${poppins.className}`}>About Us</span><span className="jpn">バイナリールートについて</span></h1>
                <div className={styles.top_aboutus_map}>
                    <Image
                        src="/top_aboutus_map.png"
                        alt=""
                        width={467}
                        height={407}
                    />
                </div>
                <dl className={styles.top_aboutus_info}>
                    <dt>会社名</dt>
                    <dd>{CompanyInfo.contents["会社名"]}</dd>
                    <dt>所在地</dt>
                    <dd>{CompanyInfo.contents["所在地"]}　{CompanyInfo.contents["建物名"]}</dd>
                    <dt>TEL</dt>
                    <dd>{CompanyInfo.contents["電話番号"]}</dd>
                </dl>
                <ul className={styles.top_aboutus_btn}>
                    <li><Link href="/greeting"><span className={styles.eng}>COMPANY</span><span className={styles.arrow}></span></Link></li>
                    <li><Link href="/accesss"><span className={styles.eng}>ACCESS</span><span className={styles.arrow}></span></Link></li>
                </ul>
            </div>
        </section>
    );
}
