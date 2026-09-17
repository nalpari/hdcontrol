import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Icon } from "@/components/icon";
import { PageHead, SubNav } from "@/components/page-head";
import { VariantView } from "@/components/product-blocks";
import { COMPANY } from "@/data/company";
import { PRODUCTS, PRODUCT_TABS } from "@/data/nav";
import { PRODUCT_PAGES } from "@/data/product-pages";
import { T } from "@/i18n/locale";
import { UI } from "@/i18n/ui";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/products/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);
  if (!product) return {};
  const page = PRODUCT_PAGES[slug];
  return {
    title: product.label.ko,
    description: (page.lede?.ko || product.note.ko).slice(0, 150),
  };
}

export default async function ProductPage({ params }: PageProps<"/products/[slug]">) {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);
  const page = product ? PRODUCT_PAGES[slug] : undefined;
  if (!product || !page) notFound();

  const current = `/products/${slug}`;

  return (
    <>
      <PageHead
        trail={[{ href: "/products/switchgear", label: UI.colProducts }, { label: product.label }]}
        title={product.label}
        lede={page.lede}
      />
      <section className="band">
        <div className="wrap">
          <SubNav items={PRODUCT_TABS} current={current} />

          {page.catalog ? (
            <a className="btn btn--primary u-mt6" href="/assets/catalogue.pdf">
              <T s={UI.downloadCatalogue} /> <Icon name="doc" />
            </a>
          ) : null}

          {page.variants.map((v) => (
            <VariantView key={v.name.ko} variant={v} />
          ))}

          <div className="plate plate--navy u-pad" style={{ marginTop: 96 }}>
            <h3 className="engraved">
              <T s={UI.productCtaHeading} />
            </h3>
            <p className="u-mt4">
              <T s={UI.productCtaBody} />
            </p>
            <div className="hero__acts" style={{ marginTop: 24 }}>
              <a className="btn btn--primary" href={COMPANY.telHref}>
                <Icon name="phone" /> {COMPANY.tel}
              </a>
              <Link className="btn btn--ghost" href="/intro/location">
                <T s={UI.productCtaLink} /> <Icon name="arrow" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
