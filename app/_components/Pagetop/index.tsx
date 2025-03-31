"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./index.module.css";

export default function PageTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // イベントリスナーを登録
    window.addEventListener("scroll", handleScroll);

    // 初回実行
    handleScroll();

    // クリーンアップ処理
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.return} id="pagetop" data-state={isVisible ? "visible" : undefined}>
      <Link href="#page">
          <picture>
              <source srcSet="/pagetop-sp.png" media="(max-width: 480px)" />
              <img src="/pagetop-pc.png" alt="PAGE TOP" width={60} height={60} />
          </picture>
      </Link>
    </div>
  );
}
