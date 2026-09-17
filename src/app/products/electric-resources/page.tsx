import type { Metadata } from "next";

import { PageHead, SubNav } from "@/components/page-head";
import { PROCESS_LEDE, RESOURCES } from "@/data/company";
import { NAV_SINGLES, PRODUCT_TABS } from "@/data/nav";
import { T } from "@/i18n/locale";

export const metadata: Metadata = {
  title: "전기자재현황",
  description: "현대콘트롤전기가 취급하는 전기자재 현황.",
};

export default function ElectricResources() {
  return (
    <>
      <PageHead
        trail={[{ label: NAV_SINGLES[1].label }]}
        title={NAV_SINGLES[1].label}
        lede={PROCESS_LEDE}
      />
      <section className="band">
        <div className="wrap">
          <SubNav items={PRODUCT_TABS} current="/products/electric-resources" />
          <div className="grid3">
            {RESOURCES.map((r) => (
              <figure key={r.img} className="plate u-pad">
                <img src={r.img} alt="" loading="lazy" style={{ borderRadius: 2 }} />
                <figcaption
                  className="dim"
                  style={{ marginTop: 14, fontSize: ".8125rem", lineHeight: 1.65 }}
                >
                  <T s={r.text} />
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
