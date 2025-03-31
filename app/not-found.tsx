import Common from "./_components/Common";
import Section from "./_components/Section";

export default function NotFound() {
  return (
    <>
    <Common title="NOT FOUND" subtitle="ページが見つかりません"/>
      <Section>
      <p className="txt_c">お探しのページは存在しないか、移動された可能性があります。</p>
    </Section>
    </>
  );
}