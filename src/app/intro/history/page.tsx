import type { Metadata } from "next";

import { PageHead, SubNav } from "@/components/page-head";
import { PROCESS_LEDE } from "@/data/company";
import { HISTORY } from "@/data/history";
import { NAV_INTRO } from "@/data/nav";
import { T } from "@/i18n/locale";
import { UI } from "@/i18n/ui";

export const metadata: Metadata = {
  title: "연혁",
  description: "1990년 설립부터 현재까지의 등록, 인증, 특허 기록.",
};

export default function History() {
  return (
    <>
      <PageHead
        trail={[{ href: "/intro/greetings", label: UI.colIntro }, { label: NAV_INTRO[2].label }]}
        title={NAV_INTRO[2].label}
        lede={PROCESS_LEDE}
      />
      <section className="band">
        <div className="wrap">
          <SubNav items={NAV_INTRO} current="/intro/history" />
          {HISTORY.map((era) => (
            <div key={era.era.ko} className="era">
              <div className="era__label">
                <h2 className="engraved">
                  <T s={era.era} />
                </h2>
              </div>
              <ul className="log">
                {era.entries.map((e) => (
                  <li key={`${e.date}-${e.fact.ko}`}>
                    <time className="mono">{e.date}</time>
                    <div>
                      <b>
                        <T s={e.fact} />
                      </b>
                      {/* mono는 측정값에만. 번호만 적힌 참조가 그 경우다. */}
                      {e.ref ? (
                        <small className={e.ref.ko === e.ref.en ? "mono" : undefined}>
                          <T s={e.ref} />
                        </small>
                      ) : null}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
