"use client";

import Link from "next/link";

import { Icon } from "@/components/icon";
import {
  COMPANY,
  CREED,
  INTRO_BODY,
  PROCESS_LEDE,
  RESOURCES,
  ROSTER,
} from "@/data/company";
import { PRODUCTS } from "@/data/nav";
import { useT } from "@/i18n/locale";
import { UI } from "@/i18n/ui";

export default function Home() {
  const t = useT();

  return (
    <>
      <section className="hero">
        <img
          className="hero__img"
          src="/assets/gen/hero-room.webp"
          alt={t(UI.heroAlt)}
          fetchPriority="high"
          width={2000}
          height={1143}
        />
        <div className="hero__veil" />
        <div className="wrap hero__in">
          <p className="hero__mark">
            <span className="lamp" /> {t(UI.heroMark)}
          </p>
          <h1 className="engraved">
            {t(UI.heroLine1)}
            <br />
            {t(UI.heroLine2)}
          </h1>
          <p className="lede">{t(UI.heroLede)}</p>
          <div className="hero__acts">
            <Link className="btn btn--primary" href="/products/switchgear">
              {t(UI.viewProducts)} <Icon name="arrow" />
            </Link>
            <a className="btn btn--ghost" href="/assets/catalogue.pdf">
              {t(UI.downloadCatalogue)} <Icon name="doc" />
            </a>
          </div>
        </div>
      </section>

      <section className="band--tight" style={{ borderBottom: "1px solid var(--rule-soft)" }}>
        <div className="wrap">
          <h2 className="u-sr">{t(UI.rosterHeading)}</h2>
          <ul className="roster">
            {ROSTER.map((n) => (
              <li key={n.ko}>{t(n)}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="band">
        <div className="wrap split">
          <div>
            <h2 className="engraved">
              {t(UI.aboutLine1)}
              <br />
              {t(UI.aboutLine2)}
            </h2>
            <p className="u-mt6">{t(PROCESS_LEDE)}</p>
            <p>{t(INTRO_BODY)}</p>
            <ul className="creed u-mt7">
              {CREED.map((c) => (
                <li key={c.ko}>
                  <span className="lamp" />
                  {t(c)}
                </li>
              ))}
            </ul>
            <Link className="btn btn--ghost u-mt7" href="/work-process">
              {t(UI.seeProcess)} <Icon name="arrow" />
            </Link>
          </div>
          <div>
            <figure className="shot">
              <img src="/assets/gen/fab-floor.webp" alt={t(UI.fabAlt)} loading="lazy" />
            </figure>
            <div className="shot u-mt5" style={{ aspectRatio: "16 / 9" }}>
              <iframe
                style={{ width: "100%", height: "100%", border: 0, display: "block" }}
                src="https://www.youtube.com/embed/2bKja4I2dhs"
                title={t(UI.videoTitle)}
                loading="lazy"
                allow="accelerometer; clipboard-write; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      <section className="band band--deep">
        <div className="wrap">
          <h2 className="engraved">{t(UI.leadHeading)}</h2>

          <div className="plate plate--navy riveted lead u-mt7">
            <div className="lead__media">
              <img src="/assets/gen/seismic-base.webp" alt={t(UI.seismicAlt)} loading="lazy" />
            </div>
            <div className="lead__body">
              <span className="stamp">
                <span className="lamp" /> {t(UI.seismicStamp)}
              </span>
              <h3 className="engraved u-mt5">{t(PRODUCTS[12].label)}</h3>
              <p>
                {t(UI.seismicBody)} <span className="mono">{t(UI.seismicPatent)}</span>
              </p>
              <Link className="btn btn--primary" href="/products/seismic-switchgear">
                {t(UI.viewProducts)} <Icon name="arrow" />
              </Link>
            </div>
          </div>

          <div className="plate riveted lead u-mt5">
            <div className="lead__media">
              <img src="/assets/gen/busbar-macro.webp" alt={t(UI.busbarAlt)} loading="lazy" />
            </div>
            <div className="lead__body">
              <span className="stamp">{t(UI.usafetyStamp)}</span>
              <h3 className="engraved u-mt5">{t(PRODUCTS[10].label)}</h3>
              <p>{t(UI.usafetyBody)}</p>
              <Link className="btn btn--ghost" href="/products/u-safety">
                {t(UI.viewProducts)} <Icon name="arrow" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <h2 className="engraved">{t(UI.colProducts)}</h2>
          <div className="rack u-mt7">
            {PRODUCTS.map((p) => (
              <Link key={p.slug} className="plate rack__row" href={`/products/${p.slug}`}>
                <img className="rack__thumb" src={p.thumb} alt="" loading="lazy" />
                <span className="rack__name">
                  {t(p.label)}
                  <span className="rack__note">{t(p.note)}</span>
                </span>
                <span className="rack__go">
                  <Icon name="arrow" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="band band--navy">
        <div className="wrap">
          <h2 className="engraved">{t(UI.colMaterials)}</h2>
          <p className="lede u-mt5">{t(PROCESS_LEDE)}</p>
          <div className="grid3 u-mt7">
            {RESOURCES.slice(0, 6).map((r) => (
              <figure key={r.img} className="plate u-pad">
                <img src={r.img} alt="" loading="lazy" style={{ borderRadius: 2 }} />
                <figcaption
                  className="dim"
                  style={{ marginTop: 12, fontSize: ".8125rem", lineHeight: 1.6 }}
                >
                  {t(r.text)}
                </figcaption>
              </figure>
            ))}
          </div>
          <Link className="btn btn--ghost u-mt7" href="/products/electric-resources">
            {t(UI.seeAllMaterials)} <Icon name="arrow" />
          </Link>
        </div>
      </section>

      <section className="band band--deep">
        <div className="wrap">
          <div style={{ maxWidth: 720 }}>
            <h2 className="engraved">{t(UI.ctaHeading)}</h2>
            <p className="lede u-mt5">{t(UI.ctaLede)}</p>
            <div className="hero__acts">
              <a className="btn btn--primary" href={COMPANY.telHref}>
                <Icon name="phone" /> {COMPANY.tel}
              </a>
              <a className="btn btn--ghost" href={`mailto:${COMPANY.mail}`}>
                <Icon name="mail" /> {t(UI.emailUs)}
              </a>
              <a className="btn btn--ghost" href="/assets/catalogue.pdf">
                <Icon name="doc" /> {t(UI.catalogue)}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
