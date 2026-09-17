"use client";

import { useState } from "react";

import { CERTS, CERT_FILTERS, type CertKind } from "@/data/certs";
import { useT } from "@/i18n/locale";
import { UI } from "@/i18n/ui";

export function CertWall() {
  const [kind, setKind] = useState<CertKind | "all">("all");
  const t = useT();
  const shown = kind === "all" ? CERTS : CERTS.filter((c) => c.kind === kind);

  return (
    <>
      <div className="subnav subnav--filter">
        {CERT_FILTERS.map((f) => (
          <button
            key={f.kind}
            type="button"
            aria-pressed={f.kind === kind}
            onClick={() => setKind(f.kind)}
          >
            {t(f.label)}
          </button>
        ))}
      </div>

      <p className="dim" style={{ marginBottom: 24 }}>
        {t(UI.certTotalBefore)}
        <span className="mono">{shown.length}</span>
        {t(UI.certTotalAfter)}
      </p>

      {shown.length > 0 ? (
        <div className="certs">
          {shown.map((c) => (
            <figure key={c.img} className="plate cert">
              <div className="cert__img">
                <img src={c.img} alt={t(c.name)} loading="lazy" />
              </div>
              <figcaption>{t(c.name)}</figcaption>
            </figure>
          ))}
        </div>
      ) : (
        <div className="empty">
          <p>{t(UI.certEmpty)}</p>
        </div>
      )}
    </>
  );
}
