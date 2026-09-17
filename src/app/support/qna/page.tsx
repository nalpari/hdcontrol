import type { Metadata } from "next";

import { ContactForm } from "@/components/contact-form";
import { PageHead, SubNav } from "@/components/page-head";
import { NAV_SUPPORT } from "@/data/nav";
import { T } from "@/i18n/locale";
import { UI } from "@/i18n/ui";

export const metadata: Metadata = {
  title: "질문과 답변",
  description: "제품과 납기에 관한 질문을 남겨주세요.",
};

export default function Qna() {
  return (
    <>
      <PageHead trail={[{ label: UI.colSupport }]} title={NAV_SUPPORT[2].label} />
      <section className="band">
        <div className="wrap">
          <SubNav items={NAV_SUPPORT} current="/support/qna" />
          <div className="plate empty">
            <h3 className="engraved">
              <T s={UI.qnaEmptyTitle} />
            </h3>
            <p>
              <T s={UI.qnaEmptyBody} />
            </p>
          </div>
          <div className="plate u-pad u-mt6">
            <h3 className="engraved">
              <T s={UI.qnaFormHeading} />
            </h3>
            <ContactForm idPrefix="a" submitLabel={UI.fmPost} withSubject />
          </div>
        </div>
      </section>
    </>
  );
}
