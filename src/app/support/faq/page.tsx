import type { Metadata } from "next";

import { Accordion } from "@/components/accordion";
import { PageHead, SubNav } from "@/components/page-head";
import { NAV_SUPPORT } from "@/data/nav";
import { FAQS, UI } from "@/i18n/ui";

export const metadata: Metadata = {
  title: "자주하는 질문",
  description: "제품 규격, 주문 제작, 설치 공사, 인증에 관한 자주 묻는 질문.",
};

export default function Faq() {
  return (
    <>
      <PageHead trail={[{ label: UI.colSupport }]} title={NAV_SUPPORT[1].label} />
      <section className="band">
        <div className="wrap">
          <SubNav items={NAV_SUPPORT} current="/support/faq" />
          <Accordion items={FAQS} />
        </div>
      </section>
    </>
  );
}
