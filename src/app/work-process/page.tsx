import type { Metadata } from "next";

import { PageHead } from "@/components/page-head";
import { WORK_PROCESS } from "@/data/company";
import { NAV_SINGLES } from "@/data/nav";
import { Img, T } from "@/i18n/locale";
import { joinL } from "@/i18n/types";
import { UI } from "@/i18n/ui";

export const metadata: Metadata = {
  title: "작업공정",
  description: "설계, 생산, 현장설치까지의 작업공정.",
};

export default function WorkProcess() {
  return (
    <>
      <PageHead
        trail={[{ label: NAV_SINGLES[2].label }]}
        title={UI.processTitle}
        lede={WORK_PROCESS.lede}
        img="/assets/gen/fab-floor.webp"
      />
      <section className="band">
        <div className="wrap">
          {WORK_PROCESS.stages.map((stage) => (
            <div key={stage.name.ko} className="era">
              <div className="era__label">
                <h2 className="engraved">
                  <T s={stage.name} />
                </h2>
              </div>
              <div className="grid2">
                {stage.images.map((src) => (
                  <figure key={src} className="shot">
                    <Img src={src} alt={joinL([stage.name, UI.processAlt], " ")} loading="lazy" />
                  </figure>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
