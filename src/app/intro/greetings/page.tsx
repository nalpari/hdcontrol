import type { Metadata } from "next";

import { PageHead, SubNav } from "@/components/page-head";
import { CREED, INTRO_BODY, PROCESS_LEDE } from "@/data/company";
import { NAV_INTRO } from "@/data/nav";
import { Img, T } from "@/i18n/locale";
import { joinL } from "@/i18n/types";
import { UI } from "@/i18n/ui";

export const metadata: Metadata = {
  title: "인사말씀",
  description: "설계부터 현장 설치까지, 최선을 향한 열정으로 보답하겠습니다.",
};

export default function Greetings() {
  return (
    <>
      <PageHead
        trail={[{ href: "/intro/greetings", label: UI.colIntro }, { label: NAV_INTRO[0].label }]}
        title={NAV_INTRO[0].label}
        img="/assets/gen/plant-dusk.webp"
      />
      <section className="band">
        <div className="wrap">
          <SubNav items={NAV_INTRO} current="/intro/greetings" />
          <div className="split">
            <div className="prose">
              <h2 className="engraved">
                <T s={joinL(CREED)} />
              </h2>
              <p className="lede u-mt6">
                <T s={PROCESS_LEDE} />
              </p>
              <p className="u-mt6">
                <T s={INTRO_BODY} />
              </p>
              <p>
                <T s={UI.greetingsThanks} />
              </p>
              <p className="dim u-mt6">
                <T s={UI.signature} />
              </p>
            </div>
            <div>
              <figure className="shot">
                <Img src="/assets/intro/img/greetings.jpg" alt={UI.staffAlt} loading="lazy" />
              </figure>
              <ul className="creed u-mt6">
                {CREED.map((c) => (
                  <li key={c.ko}>
                    <span className="lamp" />
                    <T s={c} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
