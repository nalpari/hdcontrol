"use client";

import { useId, useState } from "react";

import { Icon } from "@/components/icon";
import { useT } from "@/i18n/locale";
import type { L } from "@/i18n/types";

export function Accordion({ items }: { items: { q: L; a: L }[] }) {
  // 첫 항목만 열린 채로 시작한다. 나머지는 각자 토글된다.
  const [open, setOpen] = useState<ReadonlySet<number>>(() => new Set([0]));
  const base = useId();
  const t = useT();

  const toggle = (i: number) =>
    setOpen((prev) => {
      const next = new Set(prev);
      if (!next.delete(i)) next.add(i);
      return next;
    });

  return (
    <ul className="acc">
      {items.map((it, i) => {
        const expanded = open.has(i);
        return (
          <li key={it.q.ko}>
            <button
              className="acc__q"
              type="button"
              aria-expanded={expanded}
              aria-controls={`${base}-${i}`}
              onClick={() => toggle(i)}
            >
              {t(it.q)} <Icon name="plus" />
            </button>
            {/* 닫힘은 grid-template-rows 0fr로 그린다. display:none이면 전환이 죽는다.
                그래서 hidden 대신 inert로 접근성 트리에서만 뺀다. */}
            <div className="acc__a" id={`${base}-${i}`} inert={!expanded}>
              <div>
                <p>{t(it.a)}</p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
