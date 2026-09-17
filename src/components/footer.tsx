"use client";

import Link from "next/link";

import { COMPANY, INTRO_BODY } from "@/data/company";
import { NAV_INTRO, NAV_SINGLES, NAV_SUPPORT, PRODUCT_LINKS, type NavLink } from "@/data/nav";
import { useT } from "@/i18n/locale";
import { UI } from "@/i18n/ui";

function Col({ items }: { items: NavLink[] }) {
  const t = useT();
  return (
    <ul>
      {items.map((it) => (
        <li key={it.href}>
          <Link href={it.href}>{t(it.label)}</Link>
        </li>
      ))}
    </ul>
  );
}

export function Footer() {
  const t = useT();
  return (
    <footer className="ftr">
      <div className="wrap">
        <h2 className="u-sr">{t(UI.siteMap)}</h2>
        <nav className="ftr__nav" aria-label={t(UI.allMenus)}>
          <div>
            <h3>{t(UI.colIntro)}</h3>
            <Col items={NAV_INTRO} />
          </div>
          <div>
            <h3>{t(UI.colProducts)}</h3>
            <Col items={PRODUCT_LINKS.slice(0, 8)} />
          </div>
          <div>
            <h3 aria-hidden="true">&nbsp;</h3>
            <Col items={PRODUCT_LINKS.slice(8)} />
          </div>
          <div>
            <h3>{t(UI.colQuick)}</h3>
            <Col items={NAV_SINGLES} />
            <h3>{t(UI.colSupport)}</h3>
            <Col items={NAV_SUPPORT} />
          </div>
        </nav>

        <div className="ftr__co">
          <div>
            <img
              src="/assets/img/logo/white_logo.png"
              alt={t(UI.logoAlt)}
              width={102}
              height={60}
            />
            <p>{t(INTRO_BODY)}</p>
          </div>
          <div>
            <h3>{t(UI.contact)}</h3>
            <dl>
              <dt>{t(UI.fCompany)}</dt>
              <dd>{t(COMPANY.name)}</dd>
              <dt>{t(UI.fTel)}</dt>
              <dd>
                <a className="mono" href={COMPANY.telHref}>
                  {COMPANY.tel}
                </a>
              </dd>
              <dt>{t(UI.fFax)}</dt>
              <dd className="mono">{COMPANY.fax}</dd>
              <dt>{t(UI.fMail)}</dt>
              <dd>
                <a href={`mailto:${COMPANY.mail}`}>{COMPANY.mail}</a>
              </dd>
              <dt>{t(UI.fHq)}</dt>
              <dd>{t(COMPANY.hq)}</dd>
              <dt>{t(UI.fLab)}</dt>
              <dd>{t(COMPANY.lab)}</dd>
            </dl>
          </div>
        </div>

        <div className="ftr__btm">
          {/* 연말에 서버와 클라이언트의 해가 갈릴 수 있다 */}
          <span suppressHydrationWarning>
            © {new Date().getFullYear()} {COMPANY.nameEn.ko}
          </span>
          <span>
            {t(UI.licenseLabel)} <span className="mono">{t(COMPANY.license)}</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
