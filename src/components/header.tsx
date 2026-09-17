"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { Icon } from "@/components/icon";
import { COMPANY } from "@/data/company";
import {
  NAV_INTRO,
  NAV_SINGLES,
  NAV_SUPPORT,
  PRODUCT_LINKS,
  TOP_NAV,
  type NavLink,
  type NavSection,
} from "@/data/nav";
import { useLocale, useSetLocale, useT } from "@/i18n/locale";
import type { L } from "@/i18n/types";
import { UI } from "@/i18n/ui";

const DRAWER_QUERY = "(max-width: 1100px)";

function sectionOf(pathname: string): NavSection | null {
  if (pathname === "/products/safety-warning") return "warning";
  if (pathname === "/products/electric-resources") return "resources";
  if (pathname.startsWith("/intro/")) return "intro";
  if (pathname.startsWith("/products/")) return "products";
  if (pathname.startsWith("/support/")) return "support";
  if (pathname === "/work-process") return "process";
  return null;
}

function MegaColumn({ title, items, current }: { title: L; items: NavLink[]; current: string }) {
  const t = useT();
  return (
    <>
      <p className="mega__label">{t(title)}</p>
      <ul>
        {items.map((it) => (
          <li key={it.href}>
            <Link href={it.href} aria-current={it.href === current ? "page" : undefined}>
              {t(it.label)}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

// 세 개의 메가메뉴는 같은 4열을 공유한다. 모바일에서는 CSS가 해당 열만 남긴다.
function Mega({ current }: { current: string }) {
  return (
    <div className="mega">
      <div className="wrap">
        <div className="mega__in">
          <div data-sec="intro">
            <MegaColumn title={UI.colIntro} items={NAV_INTRO} current={current} />
          </div>
          <div data-sec="products">
            <MegaColumn title={UI.colProducts} items={PRODUCT_LINKS.slice(0, 8)} current={current} />
          </div>
          <div data-sec="products">
            <MegaColumn
              title={UI.colProductsMore}
              items={PRODUCT_LINKS.slice(8)}
              current={current}
            />
          </div>
          <div data-sec="support">
            <MegaColumn title={UI.colQuick} items={NAV_SINGLES} current={current} />
            <MegaColumn title={UI.colSupport} items={NAV_SUPPORT} current={current} />
          </div>
        </div>
      </div>
    </div>
  );
}

export function Header() {
  const pathname = usePathname();
  const active = sectionOf(pathname);
  const t = useT();
  const locale = useLocale();
  const setLocale = useSetLocale();

  const [openMega, setOpenMega] = useState<NavSection | null>(null);
  const [drawer, setDrawer] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // 경로가 바뀌면 열린 것을 모두 닫는다. 렌더 중 조정이라 추가 렌더가 없다.
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setOpenMega(null);
    setDrawer(false);
  }

  useEffect(() => {
    if (!drawer) return;
    const root = document.documentElement;
    const prev = root.style.overflow;
    root.style.overflow = "hidden";
    return () => {
      root.style.overflow = prev;
    };
  }, [drawer]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setOpenMega(null);
      setDrawer(false);
    };
    document.addEventListener("keydown", onKey);

    const mq = window.matchMedia(DRAWER_QUERY);
    const onChange = () => {
      setOpenMega(null);
      setDrawer(false);
    };
    mq.addEventListener("change", onChange);

    return () => {
      document.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onChange);
    };
  }, []);

  useEffect(() => () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }, []);

  const isDrawerWidth = () =>
    typeof window !== "undefined" && window.matchMedia(DRAWER_QUERY).matches;

  return (
    <>
      <a className="skip" href="#main">
        {t(UI.skip)}
      </a>
      <header className="hdr">
        <div className="wrap hdr__in">
          <Link className="brand" href="/">
            <img
              src="/assets/img/logo/white_logo.png"
              alt={t(UI.logoHome)}
              width={102}
              height={60}
            />
          </Link>

          <nav className="nav" aria-label={t(UI.mainMenu)} data-open={String(drawer)}>
            <ul className="nav__list">
              {TOP_NAV.map((top) => {
                const on = active === top.key;
                if (!top.mega) {
                  return (
                    <li key={top.key} className={`nav__item${on ? " nav__item--on" : ""}`}>
                      <Link
                        className="nav__link"
                        href={top.href}
                        aria-current={pathname === top.href ? "page" : undefined}
                      >
                        {t(top.label)}
                      </Link>
                    </li>
                  );
                }
                const isOpen = openMega === top.key;
                return (
                  <li
                    key={top.key}
                    className={`nav__item${on ? " nav__item--on" : ""}`}
                    data-mega
                    data-sec={top.key}
                    data-open={String(isOpen)}
                    onMouseEnter={() => {
                      if (isDrawerWidth()) return;
                      if (closeTimer.current) clearTimeout(closeTimer.current);
                      setOpenMega(top.key);
                    }}
                    onMouseLeave={() => {
                      if (isDrawerWidth()) return;
                      closeTimer.current = setTimeout(() => setOpenMega(null), 160);
                    }}
                    onFocus={() => {
                      if (!isDrawerWidth()) setOpenMega(top.key);
                    }}
                    onBlur={(e) => {
                      if (isDrawerWidth()) return;
                      if (!e.currentTarget.contains(e.relatedTarget)) setOpenMega(null);
                    }}
                  >
                    <Link
                      className="nav__link"
                      href={top.href}
                      aria-expanded={isOpen}
                      onClick={(e) => {
                        // 데스크톱: 링크가 목적지로 동작. 모바일: 펼침 토글.
                        if (!isDrawerWidth()) return;
                        e.preventDefault();
                        setOpenMega(isOpen ? null : top.key);
                      }}
                    >
                      {t(top.label)} <Icon name="chevron" size={14} />
                    </Link>
                    <Mega current={pathname} />
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="hdr__util">
            <a className="hdr__tel" href={COMPANY.telHref}>
              <Icon name="phone" size={14} /> <span className="mono">{COMPANY.tel}</span>
            </a>
            <button
              className="hdr__lang"
              type="button"
              lang={locale === "ko" ? "en" : "ko"}
              aria-label={t(UI.langSwitchLabel)}
              onClick={() => setLocale(locale === "ko" ? "en" : "ko")}
            >
              {locale === "ko" ? UI.toEnglish.en : UI.toKorean.ko}
            </button>
            <button
              className="burger"
              type="button"
              aria-expanded={drawer}
              aria-label={t(drawer ? UI.closeMenu : UI.openMenu)}
              onClick={() => setDrawer((v) => !v)}
            >
              <Icon name={drawer ? "close" : "menu"} size={18} />
            </button>
          </div>
        </div>
      </header>
      <div className="scrim" data-open={String(drawer)} onClick={() => setDrawer(false)} />
    </>
  );
}
