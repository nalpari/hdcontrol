import type { Metadata } from "next";

import { CertWall } from "@/components/cert-wall";
import { PageHead, SubNav } from "@/components/page-head";
import { NAV_INTRO } from "@/data/nav";
import { UI } from "@/i18n/ui";

export const metadata: Metadata = {
  title: "인증 현황",
  description: "ISO 9001, ISO 14001, KOSHA-MS, 조달우수제품 지정 및 특허 등록 현황.",
};

export default function Certification() {
  return (
    <>
      <PageHead
        trail={[{ href: "/intro/greetings", label: UI.colIntro }, { label: NAV_INTRO[3].label }]}
        title={NAV_INTRO[3].label}
        lede={UI.certLede}
      />
      <section className="band">
        <div className="wrap">
          <SubNav items={NAV_INTRO} current="/intro/certification" />
          <CertWall />
        </div>
      </section>
    </>
  );
}
