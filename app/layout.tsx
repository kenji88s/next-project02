import type { Metadata } from "next";

import CompanyInfo from "./_data/info-company";


import "./reset.css";
import "./globals.css";

import Header from "./_components/Header";
import Footer from "./_components/Footer";
import Body from "./_components/Body";
import Pagetop from "./_components/Pagetop";








import { notoSansJP } from "./_tool/font";

import ViewportUpdater from "./_script/viewportUpdater";


export const metadata: Metadata = {
  title: {
    template:`%s | ${CompanyInfo.contents["サイト説明文２"]}`,
    default: CompanyInfo.contents["サイト説明文１"],
  },
  description: CompanyInfo.contents["ページ説明文"],
  keywords: CompanyInfo.contents["キーワード"],
  openGraph: {
    title: CompanyInfo.contents["サイト説明文１"],
    description: CompanyInfo.contents["ページ説明文"],
    url: CompanyInfo.contents["URL"],
    type: "website",
  },
  alternates: {
    canonical: CompanyInfo.contents["URL"],
  },
  other: {
    "format-detection": "telephone=no",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  userScalable: "no",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSansJP.className}`}>
      <Body>
        <ViewportUpdater />
        <div id="page">
          <Header />
          <main id="contents">
          {children}
          </main>
          <Pagetop />
          <Footer />
        </div>
      </Body>
    </html>
  );
}
