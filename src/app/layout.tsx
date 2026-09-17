import type { Metadata } from "next";

import "wanted-sans/fonts/webfonts/variable/split/WantedSansVariable.css";
import "@fontsource-variable/jetbrains-mono";
import "./hd.css";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { COMPANY } from "@/data/company";
import { HtmlLang } from "@/i18n/locale";

export const metadata: Metadata = {
  title: {
    default: "현대콘트롤전기 | 수배전반 설계·제작·설치",
    template: "%s | 현대콘트롤전기",
  },
  description:
    "1990년부터 순천에서 수배전반과 산업용 제어 패널을 설계·제작·설치합니다. " +
    "면진형 수배전반 조달우수제품 지정.",
  applicationName: COMPANY.name.ko,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  // 서버는 늘 한국어로 그린다. HtmlLang이 방문자가 고른 언어로 <html lang>을 맞춘다.
  return (
    <html lang="ko" suppressHydrationWarning>
      <body>
        <HtmlLang />
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
