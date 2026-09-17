import Link from "next/link";

import { Icon } from "@/components/icon";
import { COMPANY } from "@/data/company";
import { T } from "@/i18n/locale";
import { UI } from "@/i18n/ui";

export default function NotFound() {
  return (
    <section className="band">
      <div className="wrap">
        <div className="plate empty">
          <span className="lamp" />
          <h1 className="engraved">
            <T s={UI.notFoundTitle} />
          </h1>
          <p>
            <T s={UI.notFoundBody} />
          </p>
          <div className="hero__acts">
            <Link className="btn btn--primary" href="/products/switchgear">
              <T s={UI.colProducts} /> <Icon name="arrow" />
            </Link>
            <a className="btn btn--ghost" href={COMPANY.telHref}>
              <Icon name="phone" /> {COMPANY.tel}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
