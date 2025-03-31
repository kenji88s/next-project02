import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.css";

import { poppins } from "../../_tool/font";

export default function Service() {
    return (
        <section className={styles.top_service}>
            <div className={styles.top_service_inner}>
                <h1 className={styles.top_service_title}><span className={`${styles.eng} ${poppins.className}`}>Service</span><span className="jpn">サービス</span></h1>
                <div className={styles.top_service_contents}>
                    <ul className={styles.top_service_btns}>
                        <li><Link href="/contents1#jump01">
                            <div className={styles.image}>
                                <Image
                                    src="/top_service_image01.jpg"
                                    alt=""
                                    width={480}
                                    height={300}
                                />
                            </div>
                            <div className={styles.title}><span className={styles.eng}>Precedent</span><span className={styles.jpn}>デザイン事例</span></div>
                            <div className={styles.more}><span className={styles.text}>more</span><span className={styles.arrow}></span></div>
                        </Link></li>
                        <li><Link href="/contents1#jump02">
                            <div className={styles.image}>
                                <Image
                                    src="/top_service_image02.jpg"
                                    alt=""
                                    width={480}
                                    height={300}
                                />
                            </div>
                            <div className={styles.title}><span className={styles.eng}>Technique</span><span className={styles.jpn}>私たちの技術</span></div>
                            <div className={styles.more}><span className={styles.text}>more</span><span className={styles.arrow}></span></div>
                        </Link></li>
                    </ul>
                </div>
            </div>
        </section >
    );
}