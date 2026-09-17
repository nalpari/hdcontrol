// 화면에 직접 쓰는 문구. 제품·연혁·인증 데이터는 src/data 아래에 있다.

import { l, u } from "@/i18n/types";

export const UI = {
  // 헤더 · 푸터
  skip: l("본문으로 건너뛰기", "Skip to content"),
  logoHome: l("현대콘트롤전기 홈", "Hyundai Control Electric home"),
  logoAlt: l("현대콘트롤전기", "Hyundai Control Electric"),
  mainMenu: l("주 메뉴", "Main menu"),
  openMenu: l("메뉴 열기", "Open menu"),
  closeMenu: l("메뉴 닫기", "Close menu"),
  sectionMenu: l("하위 메뉴", "Section menu"),
  siteMap: l("사이트 맵", "Site map"),
  allMenus: l("전체 메뉴", "All menus"),
  contact: u("Contact"),
  home: u("Home"),
  licenseLabel: l("전기공사업 등록", "Electrical construction licence"),
  // 언어 전환: 각 버튼은 "이 언어로 바꾼다"를 뜻한다
  toKorean: u("한국어"),
  toEnglish: u("ENGLISH"),
  langSwitchLabel: l("Switch to English", "한국어로 전환"),

  // 메가메뉴 · 푸터 열 제목
  colIntro: l("회사소개", "About"),
  colProducts: l("제품소개", "Products"),
  colProductsMore: l("제품소개 (계속)", "Products (cont.)"),
  colQuick: l("바로가기", "Quick links"),
  colSupport: l("고객센터", "Support"),
  colMaterials: l("전기자재현황", "Electrical materials"),

  // 연락처 표
  fCompany: l("상호", "Company"),
  fNameEn: l("영문 상호", "English name"),
  fCeo: l("대표이사", "CEO"),
  fFounded: l("회사설립", "Established"),
  fStaff: l("고용현황", "Employees"),
  fItems: l("주요제품", "Main products"),
  fHq: l("본사", "Head office"),
  fLab: l("기술연구소", "R&D center"),
  fTel: l("전화", "Phone"),
  fFax: l("팩스", "Fax"),
  fTelFax: l("전화 / 팩스", "Phone / Fax"),
  fMail: l("이메일", "Email"),
  fAddress: l("주소", "Address"),

  // 홈
  heroAlt: l("배전반이 늘어선 수전실", "A substation room lined with switchgear"),
  heroMark: l("1990년부터 순천에서", "In Suncheon since 1990"),
  heroLine1: l("수배전반을 만드는 일은", "Building switchgear is"),
  // 영문은 두 줄에 맞춘다. .hero h1의 max-width가 21ch다.
  heroLine2: l("전기를 멈추지 않게 하는 일입니다", "keeping the power on"),
  heroLede: l(
    "설계, 판금, 도장, 세척, 조립, 현장 설치를 한 라인에서 끝냅니다.",
    "Design, sheet metal, painting, cleaning, assembly and on-site installation all finish on one line.",
  ),
  viewProducts: l("제품 보기", "View products"),
  downloadCatalogue: l("카탈로그 내려받기", "Download catalogue"),
  catalogue: l("카탈로그", "Catalogue"),
  rosterHeading: l("주요 등록처", "Registered with"),
  aboutLine1: l("강판이 들어와", "Steel plate goes in,"),
  aboutLine2: l("배전반이 나갑니다", "switchgear comes out"),
  fabAlt: l("판금 가공 공장 전경", "The sheet metal shop floor"),
  videoTitle: l("현대콘트롤전기 소개 영상", "Hyundai Control Electric introduction video"),
  seeProcess: l("작업공정 보기", "See the work process"),
  leadHeading: l("대표 제품", "Flagship products"),
  seismicAlt: l("면진형 수배전반의 면진 베이스", "The isolation base of a seismic-isolated switchgear"),
  seismicStamp: l("조달우수제품 2020238", "Excellent Procurement Product 2020238"),
  seismicBody: l(
    "수평 내진력과 수직 내진력을 함께 제공하는 내진시스템과 내진장치를 적용했습니다.",
    "It applies a seismic system and device that deliver horizontal and vertical seismic resistance together.",
  ),
  seismicPatent: l("특허 제10-2230259호", "Patent No. 10-2230259"),
  busbarAlt: l("배전반 내부의 부스바와 단자대", "Busbars and terminal blocks inside a switchgear panel"),
  usafetyStamp: l("특허 8건", "8 patents"),
  usafetyBody: l(
    "비접촉 적외선온도센서와 불꽃감지센서를 병행해 화재 전 이상 징후를 실시간으로 감시합니다.",
    "Non-contact infrared temperature sensors and flame sensors watch together, in real time, for the signs that come before a fire.",
  ),
  seeAllMaterials: l("전체 자재 보기", "See all materials"),
  ctaHeading: l("규격이 정해졌다면 도면을 보내주세요", "Send us the drawing once the spec is set"),
  ctaLede: l(
    "발주처 사양에 맞춰 설계부터 현장 설치까지 일괄로 진행합니다. 카탈로그가 먼저 " +
      "필요하시면 아래에서 내려받으실 수 있습니다.",
    "We take it from design through to on-site installation, to your specification. If you " +
      "need the catalogue first, you can download it below.",
  ),
  emailUs: l("이메일 문의", "Email us"),

  // 인사말씀
  greetingsThanks: l(
    "끊임없는 지원과 관심에 감사드립니다.",
    "Thank you for your continued support and interest.",
  ),
  staffAlt: l("현대콘트롤전기 임직원", "The people of Hyundai Control Electric"),
  signature: l(
    "주식회사 현대콘트롤전기 대표이사 김민성",
    "Kim Min-seong, CEO, Hyundai Control Electric Co., Ltd.",
  ),

  // 회사개요
  overviewCaption: l("회사 일반 현황", "Company at a glance"),
  plantAlt: l("공장 전경", "The plant"),
  wiringAlt: l("배전반 내부 결선", "Wiring inside a switchgear panel"),
  sheetMetalAlt: l("판금 가공", "Sheet metal work"),

  // 인증 현황
  certLede: l(
    "현대콘트롤전기는 그동안 획득한 각종 인증서와 수상 실적으로 제품의 우수성과 " +
      "회사의 위상, 기술력을 인정받고 있습니다.",
    "The certificates and awards we have earned speak for the quality of our products and " +
      "for the standing and engineering of the company.",
  ),
  certTotalBefore: l("총 ", ""),
  certTotalAfter: l("건", " in total"),
  certEmpty: l(
    "해당 분류에 표시할 항목이 없습니다. 다른 분류를 선택해 주세요.",
    "Nothing to show in this category. Try another one.",
  ),

  // 오시는 길
  viewOnMap: l("지도에서 보기", "View on map"),
  inquiryHeading: l("문의", "Get in touch"),
  inquiryBody: l(
    "규격과 수량이 정해졌다면 도면과 함께 연락 주세요. 검토 후 회신드립니다.",
    "Once the specification and quantity are set, send us the drawing. We will review it and come back to you.",
  ),

  // 문의 폼
  fmName: l("담당자 성함", "Contact name"),
  fmNameShort: l("성함", "Your name"),
  fmNamePlaceholder: l("홍길동", "Jane Doe"),
  fmOrg: l("회사명", "Company"),
  fmOrgPlaceholder: l("OO엔지니어링", "Acme Engineering"),
  fmEmail: l("이메일", "Email"),
  fmEmailReply: l("답변받을 이메일", "Email for our reply"),
  fmEmailPlaceholder: u("hong@company.co.kr"),
  fmSubject: l("제목", "Subject"),
  fmSubjectPlaceholder: l("MCC 판넬 납기 문의", "Lead time for an MCC panel"),
  fmBody: l("문의 내용", "Your enquiry"),
  fmBodyShort: l("내용", "Message"),
  fmBodyPlaceholder: l(
    "필요한 제품, 규격, 수량, 납기를 적어주세요.",
    "Tell us the product, specification, quantity and lead time you need.",
  ),
  fmNote: l(
    "도면 파일은 회신 메일에 첨부해 보내주시면 됩니다.",
    "Attach the drawing file to your reply email.",
  ),
  fmSend: l("문의 보내기", "Send enquiry"),
  fmPost: l("질문 등록", "Post question"),
  fmErrName: l("성함을 적어주세요.", "Please enter your name."),
  fmErrEmail: l(
    "이메일 주소를 다시 확인해 주세요. 예: hong@company.co.kr",
    "Please check the email address. Example: jane@company.com",
  ),
  fmErrBody: l("문의 내용을 적어주세요.", "Please write your enquiry."),
  fmSentBefore: l("메일 앱이 열립니다. 열리지 않으면 ", "Your mail app will open. If it does not, write to "),
  fmSentAfter: l(" 로 바로 보내주세요.", " directly."),

  // 고객센터
  noticeEmptyTitle: l("등록된 공지가 없습니다", "No notices yet"),
  noticeEmptyBody: l(
    "새 소식이 올라오면 이곳에 표시됩니다. 급한 문의는 전화로 연락 주세요.",
    "New announcements will appear here. For anything urgent, please call us.",
  ),
  qnaEmptyTitle: l("등록된 질문이 없습니다", "No questions yet"),
  qnaEmptyBody: l(
    "첫 질문을 남겨주세요. 영업일 기준 1일 이내에 답변드립니다.",
    "Be the first to ask. We reply within one business day.",
  ),
  qnaFormHeading: l("질문 남기기", "Ask a question"),

  // 작업공정
  processTitle: l("생산 및 설치", "Production and installation"),
  processAlt: l("공정", "process"),

  // 제품 페이지
  productCtaHeading: l("이 제품이 필요하신가요", "Need this product?"),
  productCtaBody: l(
    "규격과 수량을 알려주시면 검토 후 회신드립니다.",
    "Tell us the specification and quantity and we will review it and come back to you.",
  ),
  productCtaLink: l("문의 남기기", "Send an enquiry"),
  drawings: u("Drawings"),
  drawingAlt: l("도면", "Drawing"),

  // 404
  notFoundTitle: l("페이지를 찾을 수 없습니다", "Page not found"),
  notFoundBody: l(
    "주소가 바뀌었거나 삭제된 페이지입니다. 제품소개에서 다시 찾아보세요.",
    "This address has changed or the page was removed. Try the product list.",
  ),
};

// 답은 사이트 전반의 사실에서만 만든다. 새 주장을 넣지 않는다.
export const FAQS = [
  {
    q: l("제품 규격과 치수를 어디서 확인하나요?", "Where can I find product specifications and dimensions?"),
    a: l(
      "제품소개의 각 제품 페이지에 Specification 표와 Drawings가 있습니다. 표에는 CODE와 SIZE (WxHxD)mm가 적혀 있습니다.",
      "Every product page carries a Specification table and Drawings. The table lists the CODE and SIZE (WxHxD) in mm.",
    ),
  },
  {
    q: l("주문 제작이 가능한가요?", "Can you build to order?"),
    a: l(
      "가능합니다. 분전반과 수배전함은 주문 사양에 따라 모든 종류를 제작할 수 있으며, 수배전함은 강철, 스테인리스강, 알루미늄 판으로 제작됩니다.",
      "Yes. Panel boards and distribution enclosures can be built in any type to the ordered specification, and enclosures are made in steel, stainless steel or aluminium plate.",
    ),
  },
  {
    q: l("설치 공사도 함께 진행하나요?", "Do you handle the installation work too?"),
    a: l(
      "설계부터 판금, 도장, 세척, 설치공사까지 일괄적인 생산라인과 전반적인 시스템을 갖추고 있습니다.",
      "We run one integrated production line and system covering design, sheet metal work, painting, cleaning and installation.",
    ),
  },
  {
    q: l("면진형 수배전반은 어떤 인증을 받았나요?", "What certification does the seismic-isolated switchgear hold?"),
    a: l(
      "조달우수제품(2020238)으로 지정되었습니다. 수평 내진력과 수직 내진력을 제공하는 내진시스템과 내진장치로 특허 제10-2230259호를 등록했습니다.",
      "It is designated an Excellent Procurement Product (2020238). The seismic system and device providing horizontal and vertical seismic resistance are covered by Patent No. 10-2230259.",
    ),
  },
  {
    q: l("어떤 품질 인증을 보유하고 있나요?", "Which quality certifications do you hold?"),
    a: l(
      "ISO 9001, ISO 14001, KOSHA-MS 인증과 중소벤처기업부 성능인증서, 한국기계전기전자시험연구원 품질인증(Q-Mark)을 보유하고 있습니다. 인증 현황 페이지에서 인증서를 확인하실 수 있습니다.",
      "ISO 9001, ISO 14001 and KOSHA-MS, plus a Performance Certificate from the Ministry of SMEs and Startups and the Q-Mark quality certification from Korea Testing Certification. The Certifications page shows each document.",
    ),
  },
  {
    q: l("조달청을 통해 구매할 수 있나요?", "Can we buy through the Public Procurement Service?"),
    a: l(
      "조달청 수배전반 공급업체로 등록되어 있으며 2016년 12월 제3자 단가계약(00163204500)을 체결했습니다.",
      "We are registered as a switchgear supplier with the Public Procurement Service and signed a third-party unit price contract (00163204500) in December 2016.",
    ),
  },
];
