import React from "react";
import styles from "./page.module.css";
import Common from "../_components/Common";
import Section from "../_components/Section";
import PagesInfo from "../_data/info-pages";
import CompanyInfo from "../_data/info-company";
import Map from "../_tool/gMap";

export const metadata = {
  title: PagesInfo.contents["access"]["title"]
};

export default function Page() { 
  return (
    <>
     <Common title={PagesInfo.contents["access"]["title"]} subtitle={PagesInfo.contents["access"]["ja"]}/>
      <Section>
      <div className={styles.access_map}>
          <div className={styles.address_text}>
            <span className={styles.num}>{CompanyInfo.contents["郵便番号"]}</span>{CompanyInfo.contents["所在地"]}　<span>{CompanyInfo.contents["建物名"]}</span>
          </div>
          <div className={styles.map_set}>
            <Map />
          </div>
        </div>
      </Section>
    </>
  );
}
