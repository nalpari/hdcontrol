import type { Metadata } from "next";

import { PageHead, SubNav } from "@/components/page-head";
import { COMPANY, DELIVERY_LEDE } from "@/data/company";
import { NAV_INTRO } from "@/data/nav";
import { Img, T } from "@/i18n/locale";
import { u, type L } from "@/i18n/types";
import { UI } from "@/i18n/ui";

export const metadata: Metadata = {
  title: "회사개요",
  description: "주식회사 현대콘트롤전기 회사 일반 현황.",
};

const ROWS: [L, L][] = [
  [UI.fCompany, COMPANY.name],
  [UI.fNameEn, COMPANY.nameEn],
  [UI.fCeo, COMPANY.ceo],
  [UI.fFounded, COMPANY.founded],
  [UI.fStaff, COMPANY.staff],
  [UI.fItems, COMPANY.items],
  [UI.fHq, COMPANY.hq],
  [UI.fLab, COMPANY.lab],
  [UI.fTelFax, u(`${COMPANY.tel} / ${COMPANY.fax}`)],
  [UI.fMail, u(COMPANY.mail)],
];

const SHOTS: { src: string; alt: L }[] = [
  { src: "/assets/gen/plant-dusk.webp", alt: UI.plantAlt },
  { src: "/assets/gen/fab-floor.webp", alt: UI.sheetMetalAlt },
  { src: "/assets/gen/busbar-macro.webp", alt: UI.wiringAlt },
];

export default function Overview() {
  return (
    <>
      <PageHead
        trail={[{ href: "/intro/greetings", label: UI.colIntro }, { label: NAV_INTRO[1].label }]}
        title={NAV_INTRO[1].label}
        lede={DELIVERY_LEDE}
        img="/assets/gen/plant-dusk.webp"
      />
      <section className="band">
        <div className="wrap">
          <SubNav items={NAV_INTRO} current="/intro/overview" />
          <div className="plate riveted u-pad">
            <div className="data--wrap">
              <table className="data">
                <caption>
                  <T s={UI.overviewCaption} />
                </caption>
                <tbody>
                  {ROWS.map(([k, v]) => (
                    <tr key={k.ko}>
                      <th scope="row">
                        <T s={k} />
                      </th>
                      <td>
                        <T s={v} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="grid3 u-mt7">
            {SHOTS.map((s) => (
              <figure key={s.src} className="shot">
                <Img src={s.src} alt={s.alt} loading="lazy" />
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
