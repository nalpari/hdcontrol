import type { Metadata } from "next";

import { Icon } from "@/components/icon";
import { PageHead, SubNav } from "@/components/page-head";
import { COMPANY } from "@/data/company";
import { NAV_SUPPORT } from "@/data/nav";
import { T } from "@/i18n/locale";
import { UI } from "@/i18n/ui";

export const metadata: Metadata = {
  title: "공지사항",
  description: "현대콘트롤전기 공지사항.",
};

export default function Notice() {
  return (
    <>
      <PageHead trail={[{ label: UI.colSupport }]} title={NAV_SUPPORT[0].label} />
      <section className="band">
        <div className="wrap">
          <SubNav items={NAV_SUPPORT} current="/support/notice" />
          <div className="plate empty">
            <span className="lamp" />
            <h3 className="engraved">
              <T s={UI.noticeEmptyTitle} />
            </h3>
            <p>
              <T s={UI.noticeEmptyBody} />
            </p>
            <a className="btn btn--ghost btn--sm" href={COMPANY.telHref}>
              <Icon name="phone" /> {COMPANY.tel}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
