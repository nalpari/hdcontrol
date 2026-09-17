"use client";

import Link from "next/link";
import { Fragment } from "react";

import { Icon } from "@/components/icon";
import type { NavLink } from "@/data/nav";
import { useT } from "@/i18n/locale";
import type { L } from "@/i18n/types";
import { UI } from "@/i18n/ui";

export type Crumb = { href?: string; label: L };

// 섹션별 머리 배경. 전부 생성 이미지라 실사로 교체해야 한다(gen/PROVENANCE.md).
const HEAD_IMG: Record<string, string> = {
  회사소개: "/assets/gen/plant-dusk.webp",
  제품소개: "/assets/gen/busbar-macro.webp",
  작업공정: "/assets/gen/fab-floor.webp",
  전기자재현황: "/assets/gen/fab-floor.webp",
  고객센터: "/assets/gen/hero-room.webp",
};

function Crumbs({ trail }: { trail: Crumb[] }) {
  const t = useT();
  return (
    <ol className="crumbs">
      <li>
        <Link href="/">{t(UI.home)}</Link>
      </li>
      {trail.map((c, i) => {
        const last = i === trail.length - 1;
        return (
          <Fragment key={c.label.ko}>
            <li aria-hidden="true">
              <Icon name="chevronRight" size={12} />
            </li>
            {last || !c.href ? (
              <li aria-current="page">{t(c.label)}</li>
            ) : (
              <li>
                <Link href={c.href}>{t(c.label)}</Link>
              </li>
            )}
          </Fragment>
        );
      })}
    </ol>
  );
}

export function PageHead({
  trail,
  title,
  lede,
  img,
}: {
  trail: Crumb[];
  title: L;
  lede?: L | null;
  img?: string;
}) {
  const t = useT();
  const bg = img ?? HEAD_IMG[trail[0].label.ko];
  return (
    <section className="phead">
      {bg ? <img className="phead__img" src={bg} alt="" aria-hidden="true" /> : null}
      <div className="wrap phead__in">
        <Crumbs trail={trail} />
        <h1 className="engraved">{t(title)}</h1>
        {lede ? <p className="lede">{t(lede)}</p> : null}
      </div>
    </section>
  );
}

export function SubNav({ items, current }: { items: NavLink[]; current: string }) {
  const t = useT();
  return (
    <nav className="subnav" aria-label={t(UI.sectionMenu)}>
      {items.map((it) => (
        <Link key={it.href} href={it.href} aria-current={it.href === current ? "page" : undefined}>
          {t(it.label)}
        </Link>
      ))}
    </nav>
  );
}
