"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import PagesInfo from "../../_data/info-pages";

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
    document.body.classList.remove("open");
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
    document.body.classList.add("open");
  };

  return (
    <nav id="gnavi" className={isMobile ? "mobile-nav" : "desktop-nav"}>
      <ul>
        {pages.map((btn, index) => (
            <li key={index}><Link href={btn.href}>{btn.title}</Link></li>
        ))}
      </ul>
      {isMobile && (
        <>
          <button id="gnavi_open" onClick={openGnavi}>Menu</button>
          <div id="close" onClick={closeGnavi}>CLOSE</div>
        </>
      )}
    </nav>
  );
}
