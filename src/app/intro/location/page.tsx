import type { Metadata } from "next";

import { ContactForm } from "@/components/contact-form";
import { Icon } from "@/components/icon";
import { PageHead, SubNav } from "@/components/page-head";
import { COMPANY, DELIVERY_LEDE } from "@/data/company";
import { NAV_INTRO } from "@/data/nav";
import { T } from "@/i18n/locale";
import { UI } from "@/i18n/ui";

export const metadata: Metadata = {
  title: "오시는 길",
  description: "본사 전라남도 순천시 해룡면 율촌산단4로 106. 기술연구소 해룡면 대가길 12.",
};

// 지도는 한국어 주소로 찾아야 정확하다.
const mapUrl = (address: string) =>
  `https://map.naver.com/p/search/${encodeURIComponent(address)}`;

export default function Location() {
  return (
    <>
      <PageHead
        trail={[{ href: "/intro/greetings", label: UI.colIntro }, { label: NAV_INTRO[4].label }]}
        title={NAV_INTRO[4].label}
        lede={DELIVERY_LEDE}
      />
      <section className="band">
        <div className="wrap">
          <SubNav items={NAV_INTRO} current="/intro/location" />

          <div className="grid2">
            <div className="plate riveted u-pad">
              <h3 className="engraved">
                <T s={UI.fHq} />
              </h3>
              <div className="data--wrap u-mt5">
                <table className="data">
                  <tbody>
                    <tr>
                      <th scope="row">
                        <T s={UI.fAddress} />
                      </th>
                      <td>
                        <T s={COMPANY.hq} />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <T s={UI.fTel} />
                      </th>
                      <td className="num">{COMPANY.tel}</td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <T s={UI.fFax} />
                      </th>
                      <td className="num">{COMPANY.fax}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <a
                className="btn btn--ghost btn--sm u-mt5"
                href={mapUrl(COMPANY.hq.ko)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <T s={UI.viewOnMap} /> <Icon name="arrow" />
              </a>
            </div>

            <div className="plate riveted u-pad">
              <h3 className="engraved">
                <T s={UI.fLab} />
              </h3>
              <div className="data--wrap u-mt5">
                <table className="data">
                  <tbody>
                    <tr>
                      <th scope="row">
                        <T s={UI.fAddress} />
                      </th>
                      <td>
                        <T s={COMPANY.lab} />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <T s={UI.fTel} />
                      </th>
                      <td className="num">{COMPANY.tel}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <a
                className="btn btn--ghost btn--sm u-mt5"
                href={mapUrl(COMPANY.lab.ko)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <T s={UI.viewOnMap} /> <Icon name="arrow" />
              </a>
            </div>
          </div>

          <div className="plate u-pad u-mt7">
            <h3 className="engraved">
              <T s={UI.inquiryHeading} />
            </h3>
            <p className="u-mt4">
              <T s={UI.inquiryBody} />
            </p>
            <ContactForm idPrefix="q" submitLabel={UI.fmSend} withOrg note={UI.fmNote} />
          </div>
        </div>
      </section>
    </>
  );
}
