import React from "react";
import Image from "next/image";
import styles from "./index.module.css";

import { poppins } from "../../_tool/font";

export default function Promise() {
    return (
        <section className={styles.top_promise}>
            <div className={styles.top_promise_inner}>
                <div className={styles.top_promise_contents}>
                    <h1 className={styles.top_promise_title}><span className={`${styles.eng} ${poppins.className}`}>Promise</span></h1>
                    <p className={styles.top_promise_pick}>舞台の世界観に惹きこむ表現力<span>照明デザインで感動の空間演出を</span></p>
                    <div className={styles.top_promise_msg}>
                        <p>バイナリールート株式会社は、舞台照明のデザイン会社です。<br />柔軟な対応と確かな表現力で、観客を惹きこみ心を動かす感動の空間を演出いたします。<br />演劇やコンサート、バレエなど、様々な舞台の照明デザインに対応しています。</p>
                    </div>
                </div>
                <span className={styles.shadow}></span>
                <div className={styles.top_promise_image}>
                    <Image
                        src="/top_promise_image.jpg"
                        alt=""
                        width={1060}
                        height={660}
                    />
                </div>
                <span className={styles.shadow}></span>
            </div>
        </section>
    );
}