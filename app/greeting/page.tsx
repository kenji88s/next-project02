import React from "react";
import Link from "next/link";
import styles from "./page.module.css";
import Common from "../_components/Common";
import Section from "../_components/Section";
import PagesInfo from "../_data/info-pages";
import CompanyInfo from "../_data/info-company";

export const metadata = {
  title: PagesInfo.contents["company"]["title"]
};

export default function Page() {  
  return (
    <>
      <Common title={PagesInfo.contents["company"]["title"]} subtitle={PagesInfo.contents["company"]["ja"]}/>
      <Section>
      <div className={styles.table_base}>
          <table>
            <tr>
              <th>会社名</th>
              <td>{CompanyInfo.contents["会社名"]}</td>
            </tr>
            <tr>
              <th>所在地</th>
              <td className={styles.adress}>{CompanyInfo.contents["郵便番号"]}<br />
              {CompanyInfo.contents["所在地"]}　{CompanyInfo.contents["建物名"]}<span className={styles.map_jump}><Link href="/access">map</Link></span></td>
            </tr>
            <tr>
              <th>設立</th>
              <td>{CompanyInfo.contents["設立"]}</td>
            </tr>
            <tr>
              <th>資本金</th>
              <td>{CompanyInfo.contents["資本金"]}</td>
            </tr>
            <tr>
              <th>代表者</th>
              <td>{CompanyInfo.contents["代表者"]}</td>
            </tr>
            <tr>
              <th>従業員数</th>
              <td>{CompanyInfo.contents["従業員数"]}</td>
            </tr>
            <tr>
              <th>事業内容</th>
              <td>{CompanyInfo.contents["事業内容"]}</td>
            </tr>
            <tr>
              <th>対応エリア</th>
              <td>{CompanyInfo.contents["対応エリア"]}</td>
            </tr>
            <tr>
              <th>営業時間</th>
              <td>{CompanyInfo.contents["営業時間"]}</td>
            </tr>
            <tr>
              <th>休業日</th>
              <td>{CompanyInfo.contents["休業日"]}</td>
            </tr>
            <tr>
              <th>TEL・FAX</th>
              <td className="tel"><Link href={`tel:${CompanyInfo.contents["電話番号"]}`}>{CompanyInfo.contents["電話番号"]}</Link></td>
            </tr>
          </table>
        </div>
      </Section>
    </>
  );
}