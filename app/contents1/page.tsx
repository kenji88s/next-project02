import React from "react";
import Common from "../_components/Common";
import Introduction from "../_components/Introduction";
import Precedent from "../_components/List-precedent";
import Technique from "../_components/List-technique";
import Gallery from "../_components/List-gallery";
import PagesInfo from "../_data/info-pages";

export const metadata = {
  title: PagesInfo.contents["service"]["title"]
};

export default function Page() {
  return (
    <>
      <Common title={PagesInfo.contents["service"]["title"]} subtitle={PagesInfo.contents["service"]["ja"]}/>

      <Introduction eng="Service" jpn={PagesInfo.contents["service"]["ja"]} lead="舞台の世界観に深く入り込める<span>照明デザインを。</span>">
        <p className="txt_c">バイナリールート株式会社が舞台照明を考えるうえで大切にしていることは、<span>「観ている方が舞台の世界観により深く入り込める空間演出を叶える」ということです。</span>クライアントの意向を丁寧に汲み取り、確かな技術力でお応えしてまいります。</p>
      </Introduction>
      <Precedent />
      <Technique />
      <Gallery />
    </>
  );
}