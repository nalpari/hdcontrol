// hdcontrol.co.kr 현행 사이트(2026-09-16 수집) 원문. 한국어 문구를 고쳐 쓰지 않는다.
// 영문은 번역이다. 인증명·특허번호·치수는 번호를 그대로 두고 명칭만 옮겼다.

import { l, u, type L } from "@/i18n/types";

export const COMPANY = {
  name: l("주식회사 현대콘트롤전기", "HYUNDAI CONTROL ELECTRIC CO., LTD."),
  nameEn: u("HYUNDAI CONTROL ELECTRIC CO., LTD."),
  ceo: l("김민성", "Kim Min-seong"),
  founded: l(
    "2001년 8월 7일 (최초설립: 1990년 12월)",
    "7 August 2001 (first established December 1990)",
  ),
  staff: l("22명 (2019년 12월 현재)", "22 employees (as of December 2019)"),
  items: l(
    "수배전반, 계장 PANEL, PLC, INVERTER, BATTERY CHARGER PANEL, CNC 가공, 전기공사",
    "Switchgear, instrumentation panels, PLC, inverter, battery charger panel, CNC machining, electrical construction",
  ),
  hq: l(
    "전라남도 순천시 해룡면 율촌산단4로 106",
    "106 Yulchonsandan 4-ro, Haeryong-myeon, Suncheon-si, Jeollanam-do, Republic of Korea",
  ),
  lab: l(
    "전라남도 순천시 해룡면 대가길 12",
    "12 Daega-gil, Haeryong-myeon, Suncheon-si, Jeollanam-do, Republic of Korea",
  ),
  tel: "061-724-2226",
  telHref: "tel:+82617242226",
  fax: "061-724-7614",
  mail: "hdcontrol@hanmail.net",
  license: l("제 전남-01118호", "No. Jeonnam-01118"),
} as const;

export const CREED: L[] = [
  l("모두가 한마음", "All of one mind"),
  l("열려있는 사고", "Open thinking"),
  l("최고의 기술력", "The best engineering"),
  l("최상의 서비스", "The best service"),
];

export const INTRO_BODY = l(
  "현대콘트롤전기는 최신의 설비와 십수년간 축적된 기술력으로 완벽한 제품의 생산에 " +
    "최선을 다하고 있습니다. 우리는 호남지역 동종업계 중 최고의 업체로 발돋움하고 " +
    "있습니다. 설계부터 판금, 도장, 세척, 설치공사까지 일괄적인 생산라인과 전반적인 " +
    "시스템을 갖추고 있습니다. 품질 개선, 납품 조건 충족, 고객 만족을 위해 최선을 " +
    "다하겠습니다.",
  "Hyundai Control Electric builds faultless products with the latest equipment and " +
    "engineering built up over more than a decade. We are growing into the leading " +
    "company in our field in the Honam region. One integrated production line and system " +
    "covers design, sheet metal work, painting, cleaning and on-site installation. We will " +
    "keep improving quality, meeting delivery terms and satisfying our customers.",
);

export const PROCESS_LEDE = l(
  "설계, 제조 및 배송 프로세스 전반에 걸쳐 고품질의 제조 기술과 합리적인 가격의 " +
    "생산 관리를 구현합니다. 최선을 향한 열정으로 보답하겠습니다.",
  "Across design, manufacturing and delivery we bring high-quality manufacturing " +
    "technology and production management at a fair price. We will repay you with our " +
    "drive to do our best.",
);

export const DELIVERY_LEDE = l(
  "오랜 경험과 생산능력, 품질 및 납기에 대한 자신감을 가지고 전 제품을 자신 있게 " +
    "납품할 것입니다.",
  "With long experience, production capacity and confidence in our quality and lead " +
    "times, we deliver every product with confidence.",
);

// 연혁에서 확인되는 등록처. 지어낸 이름 없음.
export const ROSTER: L[] = [
  u("POSCO"),
  l("포스코건설", "POSCO E&C"),
  l("포스코ICT", "POSCO ICT"),
  l("포스코켐텍", "POSCO Chemtech"),
  l("포스코플랜텍", "POSCO Plantec"),
  l("포스코엔지니어링", "POSCO Engineering"),
  l("포스코 A&C", "POSCO A&C"),
  l("한국전력", "KEPCO"),
  l("한국남동발전", "Korea South-East Power"),
  l("한국남부발전", "Korea Southern Power"),
  l("조달청", "Public Procurement Service"),
  l("현대하이스코", "Hyundai Hysco"),
  l("대림산업", "Daelim Industrial"),
  l("한진중공업", "Hanjin Heavy Industries"),
  l("효성중공업", "Hyosung Heavy Industries"),
  l("금호석유화학", "Kumho Petrochemical"),
  l("휴비스", "Huvis"),
  l("KC코트렐", "KC Cottrell"),
  l("LIG건설", "LIG E&C"),
  l("엔투비", "entob"),
  l("이지테크", "EZ Tech"),
  l("포철기연", "Pocheol Giyeon"),
];

export const WORK_PROCESS = {
  lede: l(
    "당사의 설계팀은 최신 프로그램과 풍부한 노하우를 가지고 있습니다. " +
      "그러므로 설계팀은 발주처의 요구에 맞게 아이템 또는 샘플에 대하여 " +
      "일괄적이고 효율적으로 도면 설계를 합니다. 아울러 우리는 제품에 대한 " +
      "샘플에서 양산 작업까지 관리하고 도면을 보관합니다.",
    "Our design team works with the latest software and deep practical know-how. It takes " +
      "the client's requirements for an item or a sample and draws the whole set " +
      "efficiently in one pass. We also manage each product from sample through volume " +
      "production, and archive the drawings.",
  ),
  stages: [
    {
      name: l("설계", "Design"),
      images: ["/assets/products/img/p_01.jpg", "/assets/products/img/p_02.jpg"],
    },
    {
      name: l("생산", "Production"),
      images: [
        "/assets/products/img/p_03.jpg",
        "/assets/products/img/p_04.jpg",
        "/assets/products/img/p_05.jpg",
        "/assets/products/img/p_06.jpg",
      ],
    },
    {
      name: l("현장설치", "On-site installation"),
      images: ["/assets/products/img/p_07.jpg", "/assets/products/img/p_08.jpg"],
    },
  ],
};

// 취급 브랜드 사진과 품목. 품목명은 원문이 영문이라 두 언어가 같다.
export const RESOURCES: { img: string; text: L }[] = [
  { img: "/assets/products/img/company_01.jpg", text: u("PLC, Relay, Proximity s/w, Photo sensor, Power supply, Timer") },
  { img: "/assets/products/img/company_02.jpg", text: u("PLC, INVERTER, MCCB, ACB, VCB, Relay, Meters") },
  { img: "/assets/products/img/company_03.jpg", text: u("PLC, INVERTER, AC SERVO & MOTION CONTROLLER") },
  { img: "/assets/products/img/company_04.jpg", text: u("Proximity s/w, COUNTER, Photo Electric sensor, Panel meter, Timer, Temperature Controller") },
  { img: "/assets/products/img/company_05.jpg", text: u("Special high-voltage condenser, Low-voltage condenser, Phase-advance condenser, Reactor, Discharge coil, SURGE Absorption Condenser, High frequency filter") },
  { img: "/assets/products/img/company_06.jpg", text: u("Temperature controller TPR/SSR, Panel meter, Proximity s/w, Counter, LIMIT s/w, Push Button s/w, Timer") },
  { img: "/assets/products/img/company_07.jpg", text: u("LIMIT s/w, CAM s/w, Push button s/w, Relay, CONTROL s/w, LAMPS, TERMINAL BLOCKS, FLOATLESS") },
  { img: "/assets/products/img/company_08.jpg", text: u("Power supply, NOISE FILTER, SSR, FAN MOTOR, MODULE, DC-DC CONVERTER") },
  { img: "/assets/products/img/company_09.jpg", text: u("Mold transformer, Inflow transformer, Digital Protection Relay, Vacuum breaker") },
  { img: "/assets/products/img/company_10.jpg", text: l(
    "VCB, VC, VCS POWER FUSE, ACB, ATS, VSS, S/A, L/A, LBS, ASS, LBS용 POWER FUSE, MCCB, ELCB, MS, STH, SOCR",
    "VCB, VC, VCS POWER FUSE, ACB, ATS, VSS, S/A, L/A, LBS, ASS, POWER FUSE for LBS, MCCB, ELCB, MS, STH, SOCR",
  ) },
  { img: "/assets/products/img/company_11.jpg", text: u("MOF, PT, CT, A/SS, ASS, COS, PF, LA") },
  { img: "/assets/products/img/company_12.jpg", text: u("MCCB, ELCB, CP, MS, MC, TOR, ECPR") },
];
