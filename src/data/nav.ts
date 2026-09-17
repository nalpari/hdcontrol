// 현행 사이트의 메뉴 구성 그대로. 한국어 라벨을 바꾸지 않는다.

import { l, u, type L } from "@/i18n/types";

export type NavLink = { href: string; label: L };

export const PRODUCTS: {
  slug: string;
  label: L;
  thumb: string;
  note: L;
}[] = [
  {
    slug: "switchgear",
    label: l("폐쇄형 배전반(고압/저압)", "Enclosed Switchgear (HV / LV)"),
    thumb: "/assets/img/main/main_product_01.jpg",
    note: l(
      "VCB 고압반과 ACB 저압반. 플랜트·빌딩·공공시설 전력설비용",
      "VCB high-voltage and ACB low-voltage panels, for plant, building and public facility power systems",
    ),
  },
  {
    slug: "motor-control-center",
    label: l("전동기제어반", "Motor Control Center"),
    thumb: "/assets/img/main/main_product_02.jpg",
    note: l(
      "저압모터 제어·보호. 조립 및 인출형",
      "Low-voltage motor control and protection. Fixed and withdrawable types",
    ),
  },
  {
    slug: "panel-board",
    label: l("분전반", "Panel Board"),
    thumb: "/assets/img/main/main_product_03.jpg",
    note: l(
      "비상콘센트반, 가설분전반, 주문형까지",
      "Emergency outlet panels, temporary site panels and made-to-order boards",
    ),
  },
  {
    slug: "repair-box",
    label: l("기타 분전반", "Other Distribution Panels"),
    thumb: "/assets/img/main/main_product_04.jpg",
    note: l("REPAIR PANEL, F.R.P 사양 포함", "Including REPAIR PANEL and F.R.P versions"),
  },
  {
    slug: "distribution-box",
    label: l("수배전함", "Distribution Enclosures"),
    thumb: "/assets/img/main/main_product_05.jpg",
    note: l(
      "강판·스테인리스강·알루미늄, 크기 주문 제작",
      "Steel, stainless steel or aluminium, built to any size",
    ),
  },
  {
    slug: "insulation-box",
    label: l("절연볼트", "Insulation Bolt"),
    thumb: "/assets/img/main/main_product_06.jpg",
    note: l(
      "작업자 감전예방. 통전확인 LED 램프",
      "Prevents operator shock. LED lamp confirms a live circuit",
    ),
  },
  {
    slug: "transmitter-panel",
    label: u("Transmitter Panel"),
    thumb: "/assets/img/main/main_product_07.jpg",
    note: l(
      "F.R.P 소재. 부식·열·염산 변형 없음",
      "F.R.P body. No deformation from corrosion, heat or hydrochloric acid",
    ),
  },
  {
    slug: "air-service-unit",
    label: u("Air Service Unit"),
    thumb: "/assets/img/main/main_product_08.jpg",
    note: u("HD-AS001-05"),
  },
  {
    slug: "plc-panel",
    label: u("PLC Panel"),
    thumb: "/assets/img/main/main_product_09.jpg",
    note: l(
      "생산설비 자동제어반. 주문형 생산품",
      "Automatic control panel for production equipment. Made to order",
    ),
  },
  {
    slug: "safety-footrest",
    label: l("점검용 안전발판", "Inspection Safety Footrest"),
    thumb: "/assets/img/main/main_product_10.jpg",
    note: l("2단·3단 사양", "Two-step and three-step versions"),
  },
  {
    slug: "u-safety",
    label: l("산업안전 통합 감시 시스템", "Integrated Industrial Safety Monitoring System"),
    thumb: "/assets/img/main/main_product_11.jpg",
    note: l(
      "비접촉 적외선온도센서와 불꽃감지센서 병행 감시",
      "Non-contact infrared temperature sensors and flame sensors watching together",
    ),
  },
  {
    slug: "cctv-cooling",
    label: l("CCTV 카메라하우징", "CCTV Camera Housing"),
    thumb: "/assets/img/main/main_product_12.jpg",
    note: l(
      "SUS304. 공수냉식·공냉식·일반형",
      "SUS304. Air-water cooled, air cooled and standard types",
    ),
  },
  {
    slug: "seismic-switchgear",
    label: l("면진형 수배전반", "Seismic-Isolated Switchgear"),
    thumb: "/assets/products/img/20210609-5.jpg",
    note: l(
      "조달우수제품 지정. 수평·수직 내진력",
      "Designated an Excellent Procurement Product. Horizontal and vertical seismic resistance",
    ),
  },
  {
    slug: "extinguisher",
    label: l("수배전반용 소화기", "Switchgear Fire Extinguisher"),
    thumb: "/assets/products/img/20211021-1.jpg",
    note: l(
      "가스자동소화장치. KFI 형식승인",
      "Automatic gas extinguishing unit. KFI type-approved",
    ),
  },
  {
    slug: "safety-warning",
    label: l("안전음성경보기", "Safety Voice Alarm"),
    thumb: "/assets/img/main/main_product_s1_20211025.jpg",
    note: l(
      "PANEL 내부 온·습도와 통전전압 표시, 음성 경보",
      "Shows panel temperature, humidity and live voltage, and speaks a warning",
    ),
  },
];

export const PRODUCT_LINKS: NavLink[] = PRODUCTS.map((p) => ({
  href: `/products/${p.slug}`,
  label: p.label,
}));

export const NAV_INTRO: NavLink[] = [
  { href: "/intro/greetings", label: l("인사말씀", "Greeting") },
  { href: "/intro/overview", label: l("회사개요", "Company Profile") },
  { href: "/intro/history", label: l("연혁", "History") },
  { href: "/intro/certification", label: l("인증 현황", "Certifications") },
  { href: "/intro/location", label: l("오시는 길", "Location") },
];

export const NAV_SUPPORT: NavLink[] = [
  { href: "/support/notice", label: l("공지사항", "Notices") },
  { href: "/support/faq", label: l("자주하는 질문", "FAQ") },
  { href: "/support/qna", label: l("질문과 답변", "Q&A") },
];

export const NAV_SINGLES: NavLink[] = [
  { href: "/products/safety-warning", label: l("안전음성경보기", "Safety Voice Alarm") },
  { href: "/products/electric-resources", label: l("전기자재현황", "Electrical Materials") },
  { href: "/work-process", label: l("작업공정", "Work Process") },
];

// 제품 페이지 안의 형제 탭
export const PRODUCT_TABS: NavLink[] = [
  ...PRODUCT_LINKS,
  { href: "/products/electric-resources", label: l("전기자재현황", "Electrical Materials") },
];

export type NavSection = "intro" | "products" | "warning" | "resources" | "process" | "support";

export const TOP_NAV: {
  key: NavSection;
  href: string;
  label: L;
  mega: boolean;
}[] = [
  { key: "intro", href: "/intro/greetings", label: l("회사소개", "About"), mega: true },
  { key: "products", href: "/products/switchgear", label: l("제품소개", "Products"), mega: true },
  {
    key: "warning",
    href: "/products/safety-warning",
    label: l("안전음성경보기", "Safety Voice Alarm"),
    mega: false,
  },
  {
    key: "resources",
    href: "/products/electric-resources",
    label: l("전기자재현황", "Electrical Materials"),
    mega: false,
  },
  { key: "process", href: "/work-process", label: l("작업공정", "Work Process"), mega: false },
  { key: "support", href: "/support/notice", label: l("고객센터", "Support"), mega: true },
];
