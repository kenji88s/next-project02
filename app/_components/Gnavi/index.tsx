"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import PagesInfo from "../../_data/info-pages";
import styles from "./index.module.css";

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

const replacespWidth = 768; // SP・PCの切り替え幅

export default function HeaderNav() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  
  useEffect(() => {
    // 画面サイズを判定し、ナビゲーションの位置を変更
    const handleResize = () => {
      setIsMobile(window.innerWidth < replacespWidth);
    };

    handleResize(); // 初回実行
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // ナビゲーションを閉じる処理
  const closeGnavi = () => {
    document.getElementById("gnavi")?.removeAttribute("data-state");
    const drawerUnderlay = document.getElementById("drawer_underlay");
    drawerUnderlay?.remove();
  };

  // メニュー開閉の処理
  const openGnavi = () => {
    if (!document.getElementById("drawer_underlay")) {
      const underlay = document.createElement("div");
      underlay.id = "drawer_underlay";
      document.body.appendChild(underlay);
      underlay.addEventListener("click", closeGnavi);
    }
    document.getElementById("gnavi")?.setAttribute("data-state", "open");
  };

  return (
    <>
      <nav id="gnavi" className={isMobile ? styles.mobileNav : styles.desktopNav}>
        <ul>
          {pages.map((btn, index) => (
              <li key={index}><Link href={btn.href}>{btn.title}</Link></li>
          ))}
        </ul>
        {isMobile && (
          <div id="close" onClick={closeGnavi}>CLOSE<span>×</span></div>
        )}
      </nav>
      <ul id="sp_navi">
        <li onClick={openGnavi}>
          <Image
            src="/open-navi.png"
            alt=""
            width={60}
            height={60}
          />
        </li>
      </ul>
    </>
  );
}
