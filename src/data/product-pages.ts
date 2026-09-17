// 제품 페이지 본문. 한국어는 현행 사이트 원문 그대로.
// 모델코드, 치수, 규격 표는 번역 대상이 아니라 두 언어가 같다.

import { l, u, type L } from "@/i18n/types";

export type Block =
  | { t: "p"; text: L }
  | { t: "h"; text: L }
  | { t: "ul"; items: L[] }
  | { t: "img"; src: string; alt: L }
  | { t: "scan"; src: string; alt: L }
  | { t: "figs"; figures: { src: string; caption: L }[] }
  | { t: "spec"; title: L; head: L[]; rows: L[][] }
  | { t: "draw"; images: string[] };

export type Variant = { name: L; code: L | null; blocks: Block[] };

export type ProductPage = { lede: L | null; catalog?: boolean; variants: Variant[] };

// ---- 블록 생성기: 데이터를 짧게 유지한다 ----------------------------------
const p = (ko: string, en: string): Block => ({ t: "p", text: l(ko, en) });
const pu = (s: string): Block => ({ t: "p", text: u(s) });
const h = (s: string): Block => ({ t: "h", text: u(s) });
const hl = (ko: string, en: string): Block => ({ t: "h", text: l(ko, en) });
const ul = (...items: L[]): Block => ({ t: "ul", items });
const img = (src: string, alt: L): Block => ({ t: "img", src, alt });
const scan = (src: string, alt: L): Block => ({ t: "scan", src, alt });
const figs = (...figures: [string, L][]): Block => ({
  t: "figs",
  figures: figures.map(([src, caption]) => ({ src, caption })),
});
const draw = (...images: string[]): Block => ({ t: "draw", images });
const spec = (title: L, head: string[], rows: (string | L)[][]): Block => ({
  t: "spec",
  title,
  head: head.map(u),
  rows: rows.map((r) => r.map((c) => (typeof c === "string" ? u(c) : c))),
});

const A = "/assets/products/img";
const NONE = u("");

// 회전각 표기에만 한국어가 섞여 있다.
const bracket = l(
  "195x110x150 (좌우 회전각 ±42.5˚, 상하 회전각 ±55˚)",
  "195x110x150 (pan ±42.5°, tilt ±55°)",
);

// 분전반과 REPAIR PANEL이 같은 설명을 공유한다.
const PANEL_BOARD_DESC = p(
  "분전반은 과전류 보호기를 집합하여 설치되었습니다. 분전반은 폐쇄기, " +
    "보안기 및 모선을 갖추어 사용처에 적정한 규격의 전류로 분배하는 " +
    "장비입니다. 더 나은 제품과 서비스로 제공하겠습니다.",
  "A panel board gathers overcurrent protection devices into one enclosure. With its " +
    "enclosure, protective devices and busbars it distributes current at the rating each " +
    "point of use needs. We will keep offering better products and better service.",
);

export const PRODUCT_PAGES: Record<string, ProductPage> = {
  switchgear: {
    lede: null,
    variants: [
      {
        name: l("VCB Panel (고압)", "VCB Panel (High Voltage)"),
        code: null,
        blocks: [
          img(`${A}/vcb_panel.jpg`, u("VCB Panel")),
          h("Description"),
          p(
            "다년간 축적된 기술과 경험을 바탕으로 고압폐쇄배전반의 기능을 향상시켰고, " +
              "이에 따라 전력 공급의 안전성이 향상되었으며 제품의 우수성이 널리 " +
              "인정되었습니다. 수배전설비, 각종 PLANT, 빌딩 및 공공시설 등의 전력설비에 " +
              "최적화된 시스템을 공급합니다.",
            "Years of accumulated technology and experience have improved the performance of " +
              "high-voltage enclosed switchgear. Power supply safety improved with it, and the " +
              "quality of the product is widely recognised. We supply systems optimised for " +
              "switchgear installations, plants of every kind, buildings and public facilities.",
          ),
          h("Feature"),
          ul(
            u("Vacuum Circuit Breaker Panel"),
            u("High Voltage Vacuum Contactor Panel"),
            u("Load Break Switch Panel"),
          ),
          spec(u("VCB, ACB Panel Specification"), ["CODE", "SIZE (WxHxD)mm"], [
            ["HCE-General type-5", "W1200xH2550xD2500"],
          ]),
          draw(`${A}/vcb_panel_drawing_1.jpg`, `${A}/vcb_panel_drawing_2.jpg`),
        ],
      },
      {
        name: l("ACB Panel (저압)", "ACB Panel (Low Voltage)"),
        code: null,
        blocks: [
          img(`${A}/acb_panel.jpg`, u("ACB Panel")),
          h("Description"),
          p(
            "조명전원 공급을 위한 회로와 저압배전 계통의 용량에 적합한 동력을 위한 " +
              "회로구성. (용량 및 현장 상태에 따라 달라질 수 있습니다.)",
            "Circuits for lighting power supply, and power circuits matched to the capacity of " +
              "the low-voltage distribution system. (May vary with capacity and site conditions.)",
          ),
          h("Feature"),
          ul(
            u("Air Circuit Breaker Panel"),
            u("Automatic Transfer Switch With Air Circuit Breaker Panel"),
            u("Inverter Panel"),
            u("Soft Start Panel"),
            u("Power Panel"),
            u("Transformer Panel"),
          ),
          draw(`${A}/acb_panel_drawing_1.jpg`, `${A}/acb_panel_drawing_2.jpg`),
        ],
      },
    ],
  },

  "motor-control-center": {
    lede: null,
    variants: [
      {
        name: l("전동기제어반", "Motor Control Center"),
        code: u("HCE-MCC-5"),
        blocks: [
          img(`${A}/motor_control_center.jpg`, l("전동기제어반", "Motor control center")),
          h("Description"),
          p(
            "기술과 환경을 고려한 전동기제어반은 컴팩트하고 안전하며 유지보수가 " +
              "편리하고 고급산업 설비로 전체 주문 및 제작 생산합니다.",
            "Designed around both technology and environment, the motor control center is " +
              "compact, safe and easy to maintain. It is a high-grade industrial assembly, " +
              "built entirely to order.",
          ),
          h("Feature"),
          p(
            "높은 신뢰성과 고효율을 필요로 하는 고품질의 산업시설에서부터 일반 공정에 " +
              "사용되는 저압모터의 제어와 보호에 이르기까지 최적의 성능을 발휘합니다. " +
              "이 제품은 조립 및 인출형으로 제작되므로 고객의 변경 요구에 신속하게 " +
              "대응할 수 있습니다.",
            "It performs at its best from high-quality industrial facilities that demand high " +
              "reliability and efficiency through to the control and protection of low-voltage " +
              "motors in ordinary processes. Built in fixed and withdrawable types, it answers " +
              "a customer's change requests quickly.",
          ),
          spec(u("MCC Panel Specification"), ["CODE", "SIZE (WxHxD)mm"], [
            ["HCE-MCC-5", "W600xH2350xD600"],
          ]),
          draw(`${A}/motor_control_center_drawing1.jpg`, `${A}/motor_control_center_drawing2.jpg`),
        ],
      },
    ],
  },

  "panel-board": {
    lede: null,
    variants: [
      {
        name: l("분전반", "Panel Board"),
        code: u("HCE-DIST-S"),
        blocks: [
          img(`${A}/panel_board_1.jpg`, l("분전반", "Panel board")),
          h("Description"),
          PANEL_BOARD_DESC,
          h("Feature"),
          ul(
            l(
              "비상 콘센트반: 표준화된 부품을 사용하여 고객의 요구에 맞게 제작하고 제공합니다.",
              "Emergency outlet panel: built and supplied to the customer's requirements using standardised parts.",
            ),
            l(
              "가설 분전반: 공사현장 건설에 사용하기 위한 임시 패널 보드. 표준화를 통해 신속하게 생산하고 공급하겠습니다.",
              "Temporary site panel: a temporary panel board for construction sites. Standardisation lets us produce and supply it quickly.",
            ),
            l(
              "분전반: 설치와 보수를 간편하게 하기 위하여 각종 규격에 의거 표준화된 부품을 사용합니다.",
              "Panel board: uses parts standardised to the relevant codes so installation and maintenance stay simple.",
            ),
            l(
              "주문형 분전반: 주문 사양에 따른 모든 종류의 분전반을 제작할 수 있습니다.",
              "Made-to-order panel board: any type of panel board can be built to the ordered specification.",
            ),
          ),
          spec(l("분전반 Specification", "Panel Board Specification"), ["CODE", "SIZE (WxHxD)mm"], [
            ["HCE-DIST-S", "W700xH1000xD170"],
          ]),
          figs([`${A}/panel_board_2.jpg`, NONE], [`${A}/panel_board_3.jpg`, NONE]),
          draw(`${A}/panel_board_drawing1.jpg`, `${A}/panel_board_drawing2.jpg`),
        ],
      },
    ],
  },

  "repair-box": {
    lede: null,
    variants: [
      {
        name: u("REPAIR PANEL"),
        code: u("SHD-REP-SUS-02"),
        blocks: [
          img(`${A}/repair_panel.jpg`, u("REPAIR PANEL")),
          h("Description"),
          PANEL_BOARD_DESC,
          spec(
            l("기타 분전반 Specification", "Other Distribution Panel Specification"),
            ["CODE", "SIZE (WxHxD)mm"],
            [["SHD-REP-SUS-02", "W550xH1150xD300"]],
          ),
          draw(`${A}/repair_panel_drawing.jpg`),
        ],
      },
      {
        name: u("F.R.P REPAIR PANEL"),
        code: u("SHD-REP-FRP-600"),
        blocks: [
          img(`${A}/frp_repair_panel.jpg`, u("F.R.P REPAIR PANEL")),
          h("Description"),
          p(
            "기존 REPAIR PANEL은 부식이 심한 장소에 설치하면 수명이 단축됩니다. " +
              "이러한 자재의 손실을 줄이기 위하여 FRP 소재로 제작됩니다. " +
              "FRP 소재는 부식 및 열, 염산 변형이 없습니다.",
            "A conventional REPAIR PANEL has a shorter life where corrosion is severe. To cut " +
              "that loss of material, this one is built in FRP. FRP does not deform from " +
              "corrosion, heat or hydrochloric acid.",
          ),
          spec(
            l("F.R.P 기타 분전반 Specification", "F.R.P Other Distribution Panel Specification"),
            ["CODE", "SIZE (WxHxD)mm"],
            [["SHD-REP-FRP-600", "W600xH900xD300"]],
          ),
          draw(`${A}/frp_repair_panel_drawing.jpg`),
        ],
      },
      {
        name: u("AIR SERVICE UNIT"),
        code: u("HD-AS001-05"),
        blocks: [
          img(`${A}/air_service_unit.jpg`, u("AIR SERVICE UNIT")),
          draw(`${A}/air_service_unit_drawing.jpg`),
        ],
      },
      {
        name: u("F.R.P TRANSMITTER PANEL"),
        code: u("SHD-TRM-FRP-500, 800"),
        blocks: [
          figs(
            [`${A}/transmitter_panel.jpg`, NONE],
            [`${A}/transmitter_panel2.jpg`, u("SHD-TRM-FRP-500")],
            [`${A}/transmitter_panel3.jpg`, u("SHD-TRM-FRP-800")],
          ),
          spec(u("F.R.P Transmitter Panel Specification"), ["CODE", "SIZE (WxHxD)mm"], [
            ["SHD-TRM-FRP-500", "W500xH800xD400"],
            ["SHD-TRM-FRP-800", "W800xH800xD400"],
          ]),
        ],
      },
    ],
  },

  "distribution-box": {
    lede: l(
      "수배전함은 다양한 크기로 제작될 수 있으며, 강철, 스테인리스강 및 알루미늄 " +
        "판으로 제작될 수 있습니다.",
      "Distribution enclosures can be built in a wide range of sizes, in steel, stainless " +
        "steel or aluminium plate.",
    ),
    variants: [
      {
        name: l("수배전함", "Distribution Enclosures"),
        code: null,
        blocks: [
          figs(
            [`${A}/distributionbox_1.jpg`, u("Earth Panel")],
            [`${A}/distributionbox_2.jpg`, u("Pull Box")],
            [`${A}/distributionbox_3.jpg`, u("Local Panel")],
            [`${A}/distributionbox_4.jpg`, u("Terminal Block Panel")],
            [`${A}/distributionbox_5.jpg`, u("PLC Panel")],
            [`${A}/distributionbox_6.jpg`, u("Inverter Panel & Soft Start Panel")],
            [`${A}/distributionbox_7.jpg`, u("Control Panel")],
            [`${A}/distributionbox_8.jpg`, u("Lighting Panel")],
          ),
          draw(`${A}/distributionbox_drawing.jpg`),
        ],
      },
    ],
  },

  "insulation-box": {
    lede: l(
      "사용자 안전사고 예방을 위한 안전절연키트와 통전확인용 표시램프를 사용하였습니다.",
      "A safety insulation kit and an indicator lamp that confirms a live circuit, to keep " +
        "the user out of harm's way.",
    ),
    variants: [
      {
        name: u("INSULATION BOLT"),
        code: u("SHD-REP-BOLT-R, S, T"),
        blocks: [
          figs([`${A}/insulation_bolt.jpg`, NONE], [`${A}/insulation_bolt2.jpg`, NONE]),
          h("Feature"),
          ul(
            l("작업자 감전예방", "Prevents electric shock to the operator"),
            l(
              "통전확인표시 LED LAMP (RED, WHITE, BLUE)",
              "Live-circuit indicator LED LAMP (RED, WHITE, BLUE)",
            ),
            l("사용전류 최대 300A", "Operating current up to 300 A"),
          ),
          spec(u("Specification"), ["CODE", "SIZE (WxHxD)mm"], [
            ["SHD-REP-BOLT", "W31xH55xD140(170)"],
          ]),
          draw(`${A}/insulation_bolt_drawing.jpg`),
        ],
      },
      {
        name: u("INSULATION COVER"),
        code: null,
        blocks: [
          img(`${A}/insulation_cover.jpg`, u("INSULATION COVER")),
          draw(`${A}/insulation_cover_drawing.jpg`),
          pu("Layout Diagram for Insulation Bolt Cover"),
        ],
      },
    ],
  },

  "transmitter-panel": {
    lede: null,
    variants: [
      {
        name: u("F.R.P Transmitter Panel"),
        code: u("SHD-TRM-FRP-500, 800"),
        blocks: [
          figs(
            [`${A}/transmitter_panel.jpg`, NONE],
            [`${A}/transmitter_panel2.jpg`, u("SHD-TRM-FRP-500")],
            [`${A}/transmitter_panel3.jpg`, u("SHD-TRM-FRP-800")],
          ),
          h("Description"),
          p(
            "기존 TRANSMITTER PANEL(STEEL, SUS)은 부식이 심하여 수명이 단축되고 " +
              "자재 손실이 발생합니다. 이를 줄이기 위하여 FRP 소재로 제작합니다. " +
              "FRP 소재는 부식 및 열, 염산 변형이 없습니다. (한국화학연구원 시험필)",
            "A conventional TRANSMITTER PANEL (STEEL, SUS) corrodes badly, which shortens its " +
              "life and wastes material. To reduce that, this one is built in FRP. FRP does not " +
              "deform from corrosion, heat or hydrochloric acid. (Tested by the Korea Research " +
              "Institute of Chemical Technology.)",
          ),
          spec(u("F.R.P Transmitter Panel Specification"), ["CODE", "SIZE (WxHxD)mm"], [
            ["SHD-TRM-FRP-500", "W500xH800xD400"],
            ["SHD-TRM-FRP-800", "W800xH800xD400"],
          ]),
        ],
      },
    ],
  },

  "air-service-unit": {
    lede: l(
      "설계부터 판금, 도장, 세척, 설치공사까지 일괄적인 생산라인과 전반적인 시스템을 " +
        "갖추고 있습니다. 품질 개선, 납품 조건 충족, 고객 만족을 위해 최선을 " +
        "다하겠습니다.",
      "One integrated production line and system covers design, sheet metal work, painting, " +
        "cleaning and installation. We will do our best to improve quality, meet delivery " +
        "terms and satisfy our customers.",
    ),
    variants: [
      {
        name: u("Air Service Unit"),
        code: u("HD-AS001-05"),
        blocks: [
          img(`${A}/air_service_unit.jpg`, u("Air Service Unit")),
          draw(`${A}/air_service_unit_drawing.jpg`),
        ],
      },
    ],
  },

  "plc-panel": {
    lede: l(
      "생산설비의 자동제어 판넬로 주문형 생산품입니다.",
      "An automatic control panel for production equipment, made to order.",
    ),
    variants: [
      {
        name: u("PLC Panel"),
        code: null,
        blocks: [
          img(`${A}/plc_panel.jpg`, u("PLC Panel")),
          h("Feature"),
          ul(
            l(
              "비상콘센트반: 각종 규격에 의거 표준화된 부품 사용으로 표준화시켜 소비자의 요구에 맞도록 제작하여 공급",
              "Emergency outlet panel: standardised with parts built to the relevant codes, then made and supplied to the customer's requirements",
            ),
            l(
              "가설분전반: 공사현장에서의 임시 전력반 용도로 신속하게 공급하고자 표준화하여 제작 공급",
              "Temporary site panel: standardised so it can be produced and supplied quickly as a temporary power panel on construction sites",
            ),
            l(
              "분전반(Panel Board): 각종 규격에 의거 표준화된 부품 사용으로 설치 보수가 간편하게 제작",
              "Panel Board: built with parts standardised to the relevant codes so installation and maintenance stay simple",
            ),
            l(
              "주문형 분전반: 주문사양에 의해서 모든 종류의 분전반 제작이 가능",
              "Made-to-order panel board: any type of panel board can be built to the ordered specification",
            ),
          ),
        ],
      },
    ],
  },

  "safety-footrest": {
    lede: null,
    variants: [
      {
        name: l("2단 안전발판", "Two-step safety footrest"),
        code: null,
        blocks: [
          img(`${A}/p10_01.jpg`, l("2단 안전발판", "Two-step safety footrest")),
          draw(`${A}/safety_footrest_2_drawing.jpg`),
        ],
      },
      {
        name: l("3단 안전발판", "Three-step safety footrest"),
        code: null,
        blocks: [
          img(`${A}/p10_03.jpg`, l("3단 안전발판", "Three-step safety footrest")),
          draw(`${A}/safety_footrest_3_drawing.jpg`),
        ],
      },
    ],
  },

  "u-safety": {
    lede: l(
      "본 시스템은 방재구역(화재에 취약한 구역, 일반기계설비, 전기설비, 수·배전반 등)에 " +
        "화재 이상 징후를 신속히 발견하기 위해 비접촉 적외선온도센서(64포인트 또는 " +
        "768포인트)와 불꽃감지센서(자외선)를 병행하여 최적의 화재 전 이상 징후를 " +
        "신속히 판단하고 실시간 감시하여 화재 사고를 미연에 방지합니다.",
      "In fire-protection zones (areas vulnerable to fire, general machinery, electrical " +
        "equipment, switchgear and the like) this system pairs non-contact infrared " +
        "temperature sensors (64 or 768 points) with ultraviolet flame sensors to catch the " +
        "warning signs that come before a fire. It reads those signs quickly, watches in real " +
        "time, and stops the fire before it starts.",
    ),
    variants: [
      {
        name: l("산업안전 통합 감시 시스템", "Integrated Industrial Safety Monitoring System"),
        code: null,
        blocks: (
          ["03", "04", "05", "06", "07", "08", "10", "11", "12"] as const
        ).map((n) => scan(`${A}/u-safety_${n}.jpg`, l("시스템 구성", "System configuration"))),
      },
    ],
  },

  "cctv-cooling": {
    lede: l(
      "외부의 기후, 먼지, 충격으로부터 렌즈와 카메라를 보호하고 온도의 변화로부터 " +
        "안전하며 내식성, 내구성이 우수한 CCTV 하우징 시리즈입니다.",
      "A CCTV housing series that protects the lens and camera from weather, dust and " +
        "impact, keeps them safe through temperature swings, and stands up to corrosion " +
        "and wear.",
    ),
    variants: [
      {
        name: l("MS-100HAW (공수냉식)", "MS-100HAW (air-water cooled)"),
        code: u("MS-100HAW"),
        blocks: [
          img(`${A}/cctv_1.jpg`, u("MS-100HAW")),
          h("Description"),
          p(
            "MS-100HAW는 공기 순환 및 물 순환 시스템으로 4계절의 온도를 설정하여 " +
              "설치할 수 있습니다.",
            "The MS-100HAW circulates both air and water, so it can be set up for temperatures " +
              "across all four seasons.",
          ),
          spec(u("Specification"), [], [
            ["Model No.", "MS-100HAW"],
            ["Material", "SUS304 (Stainless Steel)"],
            ["Product Size (mm)", "194Wx182Hx435D"],
            ["Inside Size", "Ø135x330mmL (Viewing Window Ø80)"],
            ["Bracket Size (mm)", bracket],
          ]),
          draw(`${A}/cctv_4.jpg`),
        ],
      },
      {
        name: l("MS-100HA (공냉식)", "MS-100HA (air cooled)"),
        code: u("MS-100HA"),
        blocks: [
          img(`${A}/cctv_2.jpg`, u("MS-100HA")),
          h("Description"),
          p(
            "공기순환방식으로 사계절 온도를 조절할 수 있습니다.",
            "Air circulation holds the temperature through all four seasons.",
          ),
          spec(u("Specification"), [], [
            ["Model No.", "MS-100HA"],
            ["Material", "SUS304 (Stainless Steel)"],
            ["Product Size (mm)", "194Wx182Hx435D"],
            ["Inside Size", "Ø135x330mmL (Viewing Window Ø80)"],
            ["Bracket Size (mm)", bracket],
          ]),
          draw(`${A}/cctv_5.jpg`),
        ],
      },
      {
        name: l("MS-100H (일반형)", "MS-100H (standard)"),
        code: u("MS-100H"),
        blocks: [
          img(`${A}/cctv_3.jpg`, u("MS-100H")),
          h("Description"),
          p("일반형 CCTV 카메라하우징입니다.", "The standard CCTV camera housing."),
          spec(u("Specification"), [], [
            ["Model No.", "MS-100H"],
            ["Material", "SUS304 (Stainless Steel)"],
            ["Product Size (mm)", "169Wx157Hx425D"],
            ["Inside Size", "Ø135x330mmL (Viewing Window Ø80)"],
            ["Bracket Size (mm)", bracket],
          ]),
          draw(`${A}/cctv_6.jpg`),
        ],
      },
    ],
  },

  "seismic-switchgear": {
    lede: l(
      "조달우수제품으로 지정된 면진형 수배전반입니다. 수평 내진력과 수직 내진력을 " +
        "함께 제공하는 내진시스템과 내진장치를 적용했습니다.",
      "A seismic-isolated switchgear designated an Excellent Procurement Product. It applies " +
        "a seismic system and device that deliver horizontal and vertical seismic resistance " +
        "together.",
    ),
    catalog: true,
    variants: [
      {
        name: l("면진형 수배전반", "Seismic-Isolated Switchgear"),
        code: l("특허 제10-2230259호", "Patent No. 10-2230259"),
        blocks: (["1", "2", "3", "4"] as const).map((n) =>
          scan(`${A}/20210609-${n}.jpg`, l("면진형 수배전반", "Seismic-isolated switchgear")),
        ),
      },
    ],
  },

  extinguisher: {
    lede: l(
      "수배전반 내부 화재를 자동으로 감지하고 소화하는 가스자동소화장치입니다. " +
        "한국소방산업기술원(KFI) 형식승인을 받았습니다.",
      "An automatic gas extinguishing unit that detects and puts out a fire inside " +
        "switchgear. Type-approved by the Korea Fire Institute (KFI).",
    ),
    variants: [
      {
        name: l("제품특징", "Product features"),
        code: null,
        blocks: [scan(`${A}/20211021-1.jpg`, l("제품특징", "Product features"))],
      },
      {
        name: l("화재감지 및 동작원리", "Fire detection and operating principle"),
        code: null,
        blocks: [
          scan(
            `${A}/20211021-2.jpg`,
            l("화재감지 및 동작원리", "Fire detection and operating principle"),
          ),
        ],
      },
      {
        name: l("가스자동소화장치 (HFC-227ea)", "Automatic gas extinguishing unit (HFC-227ea)"),
        code: null,
        blocks: (["3", "4", "5"] as const).map((n) =>
          scan(`${A}/20211021-${n}.jpg`, u("HFC-227ea")),
        ),
      },
      {
        name: l("가스자동소화장치 (HFC-125)", "Automatic gas extinguishing unit (HFC-125)"),
        code: null,
        blocks: (["6", "7", "8", "9"] as const).map((n) =>
          scan(`${A}/20211021-${n}.jpg`, u("HFC-125")),
        ),
      },
      {
        name: l("악세사리", "Accessories"),
        code: null,
        blocks: [scan(`${A}/20211021-10.jpg`, l("악세사리", "Accessories"))],
      },
      {
        name: l("제품계통도", "System diagram"),
        code: null,
        blocks: (["11", "12"] as const).map((n) =>
          scan(`${A}/20211021-${n}.jpg`, l("제품계통도", "System diagram")),
        ),
      },
      {
        name: l(
          "한국소방산업기술원(KFI) 형식승인서 및 특허증",
          "KFI type approval and patent certificates",
        ),
        code: null,
        blocks: [
          scan(`${A}/20211021-13.jpg`, l("형식승인서", "Type approval certificate")),
          scan(`${A}/20211021-14.jpg`, l("특허증", "Patent certificate")),
        ],
      },
      {
        name: l("가스자동소화장치 작동사례", "The unit in action"),
        code: null,
        blocks: (["15", "16", "17"] as const).map((n) =>
          scan(`${A}/20211021-${n}.jpg`, l("작동사례", "Example of operation")),
        ),
      },
      {
        name: l("설치장소", "Where it is installed"),
        code: null,
        blocks: [scan(`${A}/20211021-18.jpg`, l("설치장소", "Installation locations"))],
      },
      {
        name: l("주요설치실적", "Key installations"),
        code: null,
        blocks: [scan(`${A}/20211021-19.jpg`, l("주요설치실적", "Key installations"))],
      },
    ],
  },

  "safety-warning": {
    lede: l(
      "안전음성경보기는 각종 PANEL에 설치할 수 있습니다. 이 장치는 필요한 음성과 " +
        "기본 녹음된 음성을 노트북 컴퓨터로 녹음합니다. 이렇게 하여 작업자의 " +
        "안전사고를 사전에 예방합니다.",
      "The safety voice alarm can be installed in any panel. Both the built-in messages and " +
        "any message you need are recorded from a laptop. That is how it heads off accidents " +
        "to the operator before they happen.",
    ),
    variants: [
      {
        name: u("SHD VO TPT 2 / SHD VO TPT 3"),
        code: u("AC power type / Battery type"),
        blocks: [
          img(`${A}/safety_warning0-1.jpg`, l("안전음성경보기", "Safety voice alarm")),
          scan(`${A}/safety_warning0-2.jpg`, l("제품 구성", "Product configuration")),
          hl("제품설명", "Product description"),
          scan(`${A}/safety_warning0-3.jpg`, l("제품설명", "Product description")),
          hl("설정방법", "How to set it up"),
          scan(`${A}/safety_warning0-4.jpg`, l("설정방법", "How to set it up")),
        ],
      },
      {
        name: u("SHD-VO-TPT-1"),
        code: u("SHD-VO-TPT-1"),
        blocks: [
          img(`${A}/safety_warning1.jpg`, u("SHD-VO-TPT-1")),
          h("Feature"),
          ul(
            l("작업자의 전기감전사고 예방 가능", "Prevents electric shock accidents to operators"),
            l(
              "작업 전 작업자의 안전교육 가능",
              "Briefs the operator on safety before work starts",
            ),
            l(
              "PANEL 내부의 온도, 습도, 통전전압을 DISPLAY에 표시함으로써 확인 가능",
              "Shows the panel's temperature, humidity and live voltage on the DISPLAY",
            ),
            l(
              "사용용도에 따른 음성멘트 9가지 지정 가능",
              "Nine voice messages can be assigned to suit the application",
            ),
            l(
              "통전전압 (220, 380, 440, 3300, 6600, 22900V) 표시 가능",
              "Displays live voltage (220, 380, 440, 3300, 6600, 22900 V)",
            ),
            l(
              "온도설정에 의한 자동제어(FAN, HEATER, 각종 기기 제어) 가능",
              "Automatic control from a temperature setting (FAN, HEATER and other devices)",
            ),
            l(
              "외부 display 장착으로 외부에서도 확인 가능 (option)",
              "An external display can be fitted so readings are visible from outside (option)",
            ),
            l(
              "각종 panel에 설치할 수 있고 기본 녹음된 음성과 필요한 음성을 노트북컴퓨터로 녹음하여 작업자의 안전사고를 사전에 예방합니다.",
              "It fits any panel, and the built-in messages plus any you need are recorded from a laptop, heading off accidents to the operator before they happen.",
            ),
          ),
          spec(u("Specification"), ["CODE", "Power", "SIZE (WxHxD)mm"], [
            ["SHD-VO-TPT-1", "110V, 220V", "W120xH100xD85"],
          ]),
          hl("외부장치구성", "External device configuration"),
          scan(
            `${A}/safety_warning2.jpg`,
            l("외부장치구성", "External device configuration"),
          ),
          hl("통전전압 내용 설정", "Setting the live voltage"),
          ...(["3", "4", "5"] as const).map((n) =>
            scan(`${A}/safety_warning${n}.jpg`, l("통전전압 설정", "Live voltage setting")),
          ),
        ],
      },
      {
        name: l("사용용도에 따른 분류", "Classified by application"),
        code: null,
        blocks: [
          ul(
            l(
              "고저압 panel (후면에 부착), lighting panel, 분전함",
              "HV/LV panel (rear-mounted), lighting panel, distribution box",
            ),
            l("고/저압 panel (전면에 부착)", "HV/LV panel (front-mounted)"),
            l(
              "Repair panel, 가설동력 panel, 용접 panel",
              "Repair panel, temporary power panel, welding panel",
            ),
            l("특고압 수전반", "Extra-high-voltage incoming panel"),
            l("PLC Panel, 통신시스템 panel", "PLC Panel, communication system panel"),
            l("유해가스지역 안전경보", "Safety alarm for hazardous gas areas"),
            l("고/저압 panel 안전경보", "Safety alarm for HV/LV panels"),
            l("특·저압 panel 안전경보", "Safety alarm for extra-high and low-voltage panels"),
            l("수리용 전원함 안전경보", "Safety alarm for repair power boxes"),
          ),
          hl("제품 음성안내 내용 설정", "Setting the voice messages"),
          ...(
            ["6-1", "6-2", "6-3", "6-4", "6-5", "6-6", "6-7", "6-8", "6-9"] as const
          ).map((n) =>
            scan(`${A}/safety_warning${n}.jpg`, l("음성안내 설정", "Voice message setup")),
          ),
        ],
      },
    ],
  },
};
