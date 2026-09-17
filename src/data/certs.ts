// 인증서·특허증 이미지. 현행 사이트 순서 그대로. 번호는 바꾸지 않는다.

import { l, u, type L } from "@/i18n/types";

export type CertKind = "company" | "supplier" | "cert" | "patent";
export type Cert = { kind: CertKind; img: string; name: L };

const patent = (no: string): L => l(`제${no}호`, `No. ${no}`);

export const CERTS: Cert[] = [
  { kind: "company", img: "/assets/intro/img/cert_01.jpg", name: l("사업자등록증", "Business Registration Certificate") },
  { kind: "company", img: "/assets/intro/img/cert_02.jpg", name: l("공장등록증명서 01", "Factory Registration Certificate 01") },
  { kind: "company", img: "/assets/intro/img/cert_03.jpg", name: l("공장등록증명서 02", "Factory Registration Certificate 02") },
  { kind: "company", img: "/assets/intro/img/cert_04.jpg", name: l("전기공사업등록증", "Electrical Construction Business Licence") },
  { kind: "supplier", img: "/assets/intro/img/2019_POSCOICT.jpg", name: l("포스코 ICT 2019년 우수공급사 인증", "POSCO ICT 2019 Outstanding Supplier certificate") },
  { kind: "supplier", img: "/assets/intro/img/2022_n2b.jpg", name: l("엔투비 2022년 우수 공급사 선정", "entob 2022 Outstanding Supplier selection") },
  { kind: "supplier", img: "/assets/intro/img/cert_05.jpg", name: l("포스코 협력회사 등록확인서", "POSCO partner company registration confirmation") },
  { kind: "supplier", img: "/assets/intro/img/cert_06.jpg", name: l("포스코 소싱그룹 등록증", "POSCO sourcing group registration certificate") },
  { kind: "cert", img: "/assets/intro/img/cert_07_new.jpg", name: l("유망중소기업 지정서", "Promising SME designation") },
  { kind: "cert", img: "/assets/intro/img/cert_08.jpg", name: l("기술혁신형 중소기업 확인서", "Technology Innovation SME (INNO-BIZ) certificate") },
  { kind: "cert", img: "/assets/intro/img/cert_09.jpg", name: l("경영혁신형 중소기업 확인서", "Management Innovation SME (MAIN-BIZ) certificate") },
  { kind: "company", img: "/assets/intro/img/cert_10_new.jpg", name: l("벤처기업 확인서", "Venture Business certificate") },
  { kind: "company", img: "/assets/intro/img/cert_11_new.jpg", name: l("기업부설연구소 인정서", "Corporate R&D Center recognition") },
  { kind: "cert", img: "/assets/intro/img/iso-2.jpg", name: u("ISO 9001") },
  { kind: "cert", img: "/assets/intro/img/iso-1.jpg", name: u("ISO 14001") },
  { kind: "cert", img: "/assets/intro/img/ohsas.jpg", name: u("KOSHA-MS") },
  { kind: "cert", img: "/assets/intro/img/19-ABZ0512.jpg", name: l("중소벤처기업부 성능인증서", "Performance Certificate, Ministry of SMEs and Startups") },
  { kind: "cert", img: "/assets/intro/img/2020238.jpg", name: l("조달우수제품(2020238) 지정서", "Excellent Procurement Product designation (2020238)") },

  { kind: "patent", img: "/assets/intro/img/1857484.jpg", name: patent("10-1857484") },
  { kind: "patent", img: "/assets/intro/img/1765535.jpg", name: patent("10-1765535") },
  { kind: "patent", img: "/assets/intro/img/1765489.jpg", name: patent("10-1765489") },
  { kind: "patent", img: "/assets/intro/img/1734155.jpg", name: patent("10-1734155") },
  { kind: "patent", img: "/assets/intro/img/1715079.jpg", name: patent("10-1715079") },
  { kind: "patent", img: "/assets/intro/img/1693308.jpg", name: patent("10-1693308") },
  { kind: "patent", img: "/assets/intro/img/1682470.jpg", name: patent("10-1682470") },
  { kind: "patent", img: "/assets/intro/img/1682469.jpg", name: patent("10-1682469") },
  { kind: "patent", img: "/assets/intro/img/1676697.jpg", name: patent("10-1676697") },
  { kind: "patent", img: "/assets/intro/img/1676694.jpg", name: patent("10-1676694") },
  { kind: "patent", img: "/assets/intro/img/1676692.jpg", name: patent("10-1676692") },
  { kind: "patent", img: "/assets/intro/img/1646225.jpg", name: patent("10-1646225") },
  { kind: "patent", img: "/assets/intro/img/101863.jpg", name: patent("10-1018863") },
  { kind: "patent", img: "/assets/intro/img/1018865.jpg", name: patent("10-1018865") },
  { kind: "patent", img: "/assets/intro/img/0437698.jpg", name: patent("10-0437698") },
  { kind: "patent", img: "/assets/intro/img/0386954.jpg", name: l("실용신안 제0386954호", "Utility Model No. 0386954") },
  { kind: "patent", img: "/assets/intro/img/0383217.jpg", name: l("실용신안 제0383217호", "Utility Model No. 0383217") },
  { kind: "patent", img: "/assets/intro/img/0399337.jpg", name: l("실용신안 제0399337호", "Utility Model No. 0399337") },
  { kind: "patent", img: "/assets/intro/img/0384041.jpg", name: l("실용신안 제0384041호", "Utility Model No. 0384041") },
  { kind: "patent", img: "/assets/intro/img/0731539.jpg", name: l("디자인등록 제30-0731539호", "Design Registration No. 30-0731539") },
];

export const CERT_FILTERS: { kind: CertKind | "all"; label: L }[] = [
  { kind: "all", label: l("전체", "All") },
  { kind: "company", label: l("회사", "Company") },
  { kind: "supplier", label: l("공급", "Supplier") },
  { kind: "cert", label: l("인증", "Certification") },
  { kind: "patent", label: l("특허", "Patent") },
];
