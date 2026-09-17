"use client";

import { Fragment } from "react";

import type { Block, Variant } from "@/data/product-pages";
import { useT } from "@/i18n/locale";
import type { L } from "@/i18n/types";
import { UI } from "@/i18n/ui";

function SpecTable({ title, head, rows }: { title: L; head: L[]; rows: L[][] }) {
  const t = useT();
  return (
    <div className="plate u-pad u-mt6">
      <div className="data--wrap">
        <table className="data">
          <caption>{t(title)}</caption>
          {head.length > 0 ? (
            <thead>
              <tr>
                {head.map((c) => (
                  <th key={c.ko} scope="col">
                    {t(c)}
                  </th>
                ))}
              </tr>
            </thead>
          ) : null}
          <tbody>
            {head.length > 0
              ? rows.map((r) => (
                  <tr key={r.map((c) => c.ko).join("|")}>
                    {r.map((c, j) => (
                      <td key={j} className={j ? "num" : undefined}>
                        {t(c)}
                      </td>
                    ))}
                  </tr>
                ))
              : rows.map((r) => (
                  <tr key={r.map((c) => c.ko).join("|")}>
                    <th scope="row">{t(r[0])}</th>
                    <td className="num">{t(r[1])}</td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function BlockView({ block }: { block: Block }) {
  const t = useT();
  switch (block.t) {
    case "p":
      return <p>{t(block.text)}</p>;
    case "h":
      return <h3>{t(block.text)}</h3>;
    case "ul":
      return (
        <ul>
          {block.items.map((x) => (
            <li key={x.ko}>{t(x)}</li>
          ))}
        </ul>
      );
    case "img":
      return (
        <figure className="scan u-mt6">
          <img src={block.src} alt={t(block.alt)} loading="lazy" />
        </figure>
      );
    case "scan":
      return (
        <figure className="scan scan--wide u-mt5">
          <img src={block.src} alt={t(block.alt)} loading="lazy" />
        </figure>
      );
    case "figs":
      return (
        <div className="grid2 u-mt6">
          {block.figures.map((f) => (
            <figure key={f.src} className="scan">
              <img src={f.src} alt={t(f.caption)} loading="lazy" />
              {f.caption.ko ? <figcaption>{t(f.caption)}</figcaption> : null}
            </figure>
          ))}
        </div>
      );
    case "spec":
      return <SpecTable title={block.title} head={block.head} rows={block.rows} />;
    case "draw":
      return (
        <>
          <h3 className="u-mt7">{t(UI.drawings)}</h3>
          <div className={`${block.images.length > 1 ? "grid2" : "scan--wide"} u-mt5`}>
            {block.images.map((src) => (
              <figure key={src} className="scan">
                <img src={src} alt={t(UI.drawingAlt)} loading="lazy" />
              </figure>
            ))}
          </div>
        </>
      );
  }
}

function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((b, i) => (
        <Fragment key={i}>
          <BlockView block={b} />
        </Fragment>
      ))}
    </>
  );
}

/** 제품 사진은 흰 배경이다. 전폭으로 깔면 지면에 흰 판이 박힌다.
 *  사진은 왼쪽 열에, 설명과 규격은 오른쪽 열에 세운다. */
export function VariantView({ variant }: { variant: Variant }) {
  const t = useT();

  let media: Extract<Block, { t: "img" }> | null = null;
  const body: Block[] = [];
  const tail: Block[] = [];

  for (const b of variant.blocks) {
    if (b.t === "img" && media === null) media = b;
    else if (b.t === "figs" || b.t === "draw" || b.t === "scan") tail.push(b);
    else body.push(b);
  }

  return (
    <article className="variant">
      <div className="variant__head">
        <h2 className="engraved">{t(variant.name)}</h2>
        {variant.code ? <span className="variant__code mono">{t(variant.code)}</span> : null}
      </div>

      {media === null ? (
        <div className="prose">
          <Blocks blocks={body} />
          <Blocks blocks={tail} />
        </div>
      ) : body.length === 0 ? (
        <div className="prose">
          <figure className="scan scan--wide">
            <img src={media.src} alt={t(media.alt)} loading="lazy" />
          </figure>
          <Blocks blocks={tail} />
        </div>
      ) : (
        <>
          <div className="pcols">
            <figure className="scan">
              <img src={media.src} alt={t(media.alt)} loading="lazy" />
            </figure>
            <div className="prose">
              <Blocks blocks={body} />
            </div>
          </div>
          <div className="prose u-mt8">
            <Blocks blocks={tail} />
          </div>
        </>
      )}
    </article>
  );
}
