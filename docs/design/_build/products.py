# -*- coding: utf-8 -*-
"""제품 페이지 본문. 현행 사이트 원문 그대로.

블록 타입
  ("p",     "문단")
  ("h",     "소제목")              변형(variant) 안의 구분
  ("ul",    ["항목", ...])
  ("img",   "경로", "대체텍스트")
  ("scan",  "경로", "대체텍스트")   흰 배경 카탈로그 스캔
  ("figs",  [("경로", "캡션"), ...])
  ("spec",  "표 제목", [머리행], [[행], ...])
  ("draw",  ["경로", ...])          도면
"""

P = {}

P["switchgear"] = {
    "lede": "",
    "variants": [
        ("VCB Panel (고압)", "", [
            ("img", "products/img/vcb_panel.jpg", "VCB Panel"),
            ("h", "Description"),
            ("p", "다년간 축적된 기술과 경험을 바탕으로 고압폐쇄배전반의 기능을 향상시켰고, "
                  "이에 따라 전력 공급의 안전성이 향상되었으며 제품의 우수성이 널리 "
                  "인정되었습니다. 수배전설비, 각종 PLANT, 빌딩 및 공공시설 등의 전력설비에 "
                  "최적화된 시스템을 공급합니다."),
            ("h", "Feature"),
            ("ul", ["Vacuum Circuit Breaker Panel",
                    "High Voltage Vacuum Contactor Panel",
                    "Load Break Switch Panel"]),
            ("spec", "VCB, ACB Panel Specification", ["CODE", "SIZE (WxHxD)mm"],
             [["HCE-General type-5", "W1200xH2550xD2500"]]),
            ("draw", ["products/img/vcb_panel_drawing_1.jpg",
                      "products/img/vcb_panel_drawing_2.jpg"]),
        ]),
        ("ACB Panel (저압)", "", [
            ("img", "products/img/acb_panel.jpg", "ACB Panel"),
            ("h", "Description"),
            ("p", "조명전원 공급을 위한 회로와 저압배전 계통의 용량에 적합한 동력을 위한 "
                  "회로구성. (용량 및 현장 상태에 따라 달라질 수 있습니다.)"),
            ("h", "Feature"),
            ("ul", ["Air Circuit Breaker Panel",
                    "Automatic Transfer Switch With Air Circuit Breaker Panel",
                    "Inverter Panel", "Soft Start Panel", "Power Panel",
                    "Transformer Panel"]),
            ("draw", ["products/img/acb_panel_drawing_1.jpg",
                      "products/img/acb_panel_drawing_2.jpg"]),
        ]),
    ],
}

P["motor-control-center"] = {
    "lede": "",
    "variants": [
        ("전동기제어반", "HCE-MCC-5", [
            ("img", "products/img/motor_control_center.jpg", "전동기제어반"),
            ("h", "Description"),
            ("p", "기술과 환경을 고려한 전동기제어반은 컴팩트하고 안전하며 유지보수가 "
                  "편리하고 고급산업 설비로 전체 주문 및 제작 생산합니다."),
            ("h", "Feature"),
            ("p", "높은 신뢰성과 고효율을 필요로 하는 고품질의 산업시설에서부터 일반 공정에 "
                  "사용되는 저압모터의 제어와 보호에 이르기까지 최적의 성능을 발휘합니다. "
                  "이 제품은 조립 및 인출형으로 제작되므로 고객의 변경 요구에 신속하게 "
                  "대응할 수 있습니다."),
            ("spec", "MCC Panel Specification", ["CODE", "SIZE (WxHxD)mm"],
             [["HCE-MCC-5", "W600xH2350xD600"]]),
            ("draw", ["products/img/motor_control_center_drawing1.jpg",
                      "products/img/motor_control_center_drawing2.jpg"]),
        ]),
    ],
}

P["panel-board"] = {
    "lede": "",
    "variants": [
        ("분전반", "HCE-DIST-S", [
            ("img", "products/img/panel_board_1.jpg", "분전반"),
            ("h", "Description"),
            ("p", "분전반은 과전류 보호기를 집합하여 설치되었습니다. 분전반은 폐쇄기, "
                  "보안기 및 모선을 갖추어 사용처에 적정한 규격의 전류로 분배하는 "
                  "장비입니다. 더 나은 제품과 서비스로 제공하겠습니다."),
            ("h", "Feature"),
            ("ul", ["비상 콘센트반: 표준화된 부품을 사용하여 고객의 요구에 맞게 제작하고 제공합니다.",
                    "가설 분전반: 공사현장 건설에 사용하기 위한 임시 패널 보드. 표준화를 통해 신속하게 생산하고 공급하겠습니다.",
                    "분전반: 설치와 보수를 간편하게 하기 위하여 각종 규격에 의거 표준화된 부품을 사용합니다.",
                    "주문형 분전반: 주문 사양에 따른 모든 종류의 분전반을 제작할 수 있습니다."]),
            ("spec", "분전반 Specification", ["CODE", "SIZE (WxHxD)mm"],
             [["HCE-DIST-S", "W700xH1000xD170"]]),
            ("figs", [("products/img/panel_board_2.jpg", ""),
                      ("products/img/panel_board_3.jpg", "")]),
            ("draw", ["products/img/panel_board_drawing1.jpg",
                      "products/img/panel_board_drawing2.jpg"]),
        ]),
    ],
}

P["repair-box"] = {
    "lede": "",
    "variants": [
        ("REPAIR PANEL", "SHD-REP-SUS-02", [
            ("img", "products/img/repair_panel.jpg", "REPAIR PANEL"),
            ("h", "Description"),
            ("p", "분전반은 과전류 보호기를 집합하여 설치되었습니다. 분전반은 폐쇄기, "
                  "보안기 및 모선을 갖추어 사용처에 적정한 규격의 전류로 분배하는 "
                  "장비입니다. 더 나은 제품과 서비스로 제공하겠습니다."),
            ("spec", "기타 분전반 Specification", ["CODE", "SIZE (WxHxD)mm"],
             [["SHD-REP-SUS-02", "W550xH1150xD300"]]),
            ("draw", ["products/img/repair_panel_drawing.jpg"]),
        ]),
        ("F.R.P REPAIR PANEL", "SHD-REP-FRP-600", [
            ("img", "products/img/frp_repair_panel.jpg", "F.R.P REPAIR PANEL"),
            ("h", "Description"),
            ("p", "기존 REPAIR PANEL은 부식이 심한 장소에 설치하면 수명이 단축됩니다. "
                  "이러한 자재의 손실을 줄이기 위하여 FRP 소재로 제작됩니다. "
                  "FRP 소재는 부식 및 열, 염산 변형이 없습니다."),
            ("spec", "F.R.P 기타 분전반 Specification", ["CODE", "SIZE (WxHxD)mm"],
             [["SHD-REP-FRP-600", "W600xH900xD300"]]),
            ("draw", ["products/img/frp_repair_panel_drawing.jpg"]),
        ]),
        ("AIR SERVICE UNIT", "HD-AS001-05", [
            ("img", "products/img/air_service_unit.jpg", "AIR SERVICE UNIT"),
            ("draw", ["products/img/air_service_unit_drawing.jpg"]),
        ]),
        ("F.R.P TRANSMITTER PANEL", "SHD-TRM-FRP-500, 800", [
            ("figs", [("products/img/transmitter_panel.jpg", ""),
                      ("products/img/transmitter_panel2.jpg", "SHD-TRM-FRP-500"),
                      ("products/img/transmitter_panel3.jpg", "SHD-TRM-FRP-800")]),
            ("spec", "F.R.P Transmitter Panel Specification", ["CODE", "SIZE (WxHxD)mm"],
             [["SHD-TRM-FRP-500", "W500xH800xD400"],
              ["SHD-TRM-FRP-800", "W800xH800xD400"]]),
        ]),
    ],
}

P["distribution-box"] = {
    "lede": "수배전함은 다양한 크기로 제작될 수 있으며, 강철, 스테인리스강 및 알루미늄 "
            "판으로 제작될 수 있습니다.",
    "variants": [
        ("수배전함", "", [
            ("figs", [("products/img/distributionbox_1.jpg", "Earth Panel"),
                      ("products/img/distributionbox_2.jpg", "Pull Box"),
                      ("products/img/distributionbox_3.jpg", "Local Panel"),
                      ("products/img/distributionbox_4.jpg", "Terminal Block Panel"),
                      ("products/img/distributionbox_5.jpg", "PLC Panel"),
                      ("products/img/distributionbox_6.jpg", "Inverter Panel & Soft Start Panel"),
                      ("products/img/distributionbox_7.jpg", "Control Panel"),
                      ("products/img/distributionbox_8.jpg", "Lighting Panel")]),
            ("draw", ["products/img/distributionbox_drawing.jpg"]),
        ]),
    ],
}

P["insulation-box"] = {
    "lede": "사용자 안전사고 예방을 위한 안전절연키트와 통전확인용 표시램프를 사용하였습니다.",
    "variants": [
        ("INSULATION BOLT", "SHD-REP-BOLT-R, S, T", [
            ("figs", [("products/img/insulation_bolt.jpg", ""),
                      ("products/img/insulation_bolt2.jpg", "")]),
            ("h", "Feature"),
            ("ul", ["작업자 감전예방",
                    "통전확인표시 LED LAMP (RED, WHITE, BLUE)",
                    "사용전류 최대 300A"]),
            ("spec", "Specification", ["CODE", "SIZE (WxHxD)mm"],
             [["SHD-REP-BOLT", "W31xH55xD140(170)"]]),
            ("draw", ["products/img/insulation_bolt_drawing.jpg"]),
        ]),
        ("INSULATION COVER", "", [
            ("img", "products/img/insulation_cover.jpg", "INSULATION COVER"),
            ("draw", ["products/img/insulation_cover_drawing.jpg"]),
            ("p", "Layout Diagram for Insulation Bolt Cover"),
        ]),
    ],
}

P["transmitter-panel"] = {
    "lede": "",
    "variants": [
        ("F.R.P Transmitter Panel", "SHD-TRM-FRP-500, 800", [
            ("figs", [("products/img/transmitter_panel.jpg", ""),
                      ("products/img/transmitter_panel2.jpg", "SHD-TRM-FRP-500"),
                      ("products/img/transmitter_panel3.jpg", "SHD-TRM-FRP-800")]),
            ("h", "Description"),
            ("p", "기존 TRANSMITTER PANEL(STEEL, SUS)은 부식이 심하여 수명이 단축되고 "
                  "자재 손실이 발생합니다. 이를 줄이기 위하여 FRP 소재로 제작합니다. "
                  "FRP 소재는 부식 및 열, 염산 변형이 없습니다. (한국화학연구원 시험필)"),
            ("spec", "F.R.P Transmitter Panel Specification", ["CODE", "SIZE (WxHxD)mm"],
             [["SHD-TRM-FRP-500", "W500xH800xD400"],
              ["SHD-TRM-FRP-800", "W800xH800xD400"]]),
        ]),
    ],
}

P["air-service-unit"] = {
    "lede": "설계부터 판금, 도장, 세척, 설치공사까지 일괄적인 생산라인과 전반적인 시스템을 "
            "갖추고 있습니다. 품질 개선, 납품 조건 충족, 고객 만족을 위해 최선을 "
            "다하겠습니다.",
    "variants": [
        ("Air Service Unit", "HD-AS001-05", [
            ("img", "products/img/air_service_unit.jpg", "Air Service Unit"),
            ("draw", ["products/img/air_service_unit_drawing.jpg"]),
        ]),
    ],
}

P["plc-panel"] = {
    "lede": "생산설비의 자동제어 판넬로 주문형 생산품입니다.",
    "variants": [
        ("PLC Panel", "", [
            ("img", "products/img/plc_panel.jpg", "PLC Panel"),
            ("h", "Feature"),
            ("ul", ["비상콘센트반: 각종 규격에 의거 표준화된 부품 사용으로 표준화시켜 소비자의 요구에 맞도록 제작하여 공급",
                    "가설분전반: 공사현장에서의 임시 전력반 용도로 신속하게 공급하고자 표준화하여 제작 공급",
                    "분전반(Panel Board): 각종 규격에 의거 표준화된 부품 사용으로 설치 보수가 간편하게 제작",
                    "주문형 분전반: 주문사양에 의해서 모든 종류의 분전반 제작이 가능"]),
        ]),
    ],
}

P["safety-footrest"] = {
    "lede": "",
    "variants": [
        ("2단 안전발판", "", [
            ("img", "products/img/p10_01.jpg", "2단 안전발판"),
            ("draw", ["products/img/safety_footrest_2_drawing.jpg"]),
        ]),
        ("3단 안전발판", "", [
            ("img", "products/img/p10_03.jpg", "3단 안전발판"),
            ("draw", ["products/img/safety_footrest_3_drawing.jpg"]),
        ]),
    ],
}

P["u-safety"] = {
    "lede": "본 시스템은 방재구역(화재에 취약한 구역, 일반기계설비, 전기설비, 수·배전반 등)에 "
            "화재 이상 징후를 신속히 발견하기 위해 비접촉 적외선온도센서(64포인트 또는 "
            "768포인트)와 불꽃감지센서(자외선)를 병행하여 최적의 화재 전 이상 징후를 "
            "신속히 판단하고 실시간 감시하여 화재 사고를 미연에 방지합니다.",
    "variants": [
        ("산업안전 통합 감시 시스템", "", [
            ("scan", "products/img/u-safety_03.jpg", "시스템 구성"),
            ("scan", "products/img/u-safety_04.jpg", "시스템 구성"),
            ("scan", "products/img/u-safety_05.jpg", "시스템 구성"),
            ("scan", "products/img/u-safety_06.jpg", "시스템 구성"),
            ("scan", "products/img/u-safety_07.jpg", "시스템 구성"),
            ("scan", "products/img/u-safety_08.jpg", "시스템 구성"),
            ("scan", "products/img/u-safety_10.jpg", "시스템 구성"),
            ("scan", "products/img/u-safety_11.jpg", "시스템 구성"),
            ("scan", "products/img/u-safety_12.jpg", "시스템 구성"),
        ]),
    ],
}

P["cctv-cooling"] = {
    "lede": "외부의 기후, 먼지, 충격으로부터 렌즈와 카메라를 보호하고 온도의 변화로부터 "
            "안전하며 내식성, 내구성이 우수한 CCTV 하우징 시리즈입니다.",
    "variants": [
        ("MS-100HAW (공수냉식)", "MS-100HAW", [
            ("img", "products/img/cctv_1.jpg", "MS-100HAW"),
            ("h", "Description"),
            ("p", "MS-100HAW는 공기 순환 및 물 순환 시스템으로 4계절의 온도를 설정하여 "
                  "설치할 수 있습니다."),
            ("spec", "Specification", [],
             [["Model No.", "MS-100HAW"],
              ["Material", "SUS304 (Stainless Steel)"],
              ["Product Size (mm)", "194Wx182Hx435D"],
              ["Inside Size", "Ø135x330mmL (Viewing Window Ø80)"],
              ["Bracket Size (mm)", "195x110x150 (좌우 회전각 ±42.5˚, 상하 회전각 ±55˚)"]]),
            ("draw", ["products/img/cctv_4.jpg"]),
        ]),
        ("MS-100HA (공냉식)", "MS-100HA", [
            ("img", "products/img/cctv_2.jpg", "MS-100HA"),
            ("h", "Description"),
            ("p", "공기순환방식으로 사계절 온도를 조절할 수 있습니다."),
            ("spec", "Specification", [],
             [["Model No.", "MS-100HA"],
              ["Material", "SUS304 (Stainless Steel)"],
              ["Product Size (mm)", "194Wx182Hx435D"],
              ["Inside Size", "Ø135x330mmL (Viewing Window Ø80)"],
              ["Bracket Size (mm)", "195x110x150 (좌우 회전각 ±42.5˚, 상하 회전각 ±55˚)"]]),
            ("draw", ["products/img/cctv_5.jpg"]),
        ]),
        ("MS-100H (일반형)", "MS-100H", [
            ("img", "products/img/cctv_3.jpg", "MS-100H"),
            ("h", "Description"),
            ("p", "일반형 CCTV 카메라하우징입니다."),
            ("spec", "Specification", [],
             [["Model No.", "MS-100H"],
              ["Material", "SUS304 (Stainless Steel)"],
              ["Product Size (mm)", "169Wx157Hx425D"],
              ["Inside Size", "Ø135x330mmL (Viewing Window Ø80)"],
              ["Bracket Size (mm)", "195x110x150 (좌우 회전각 ±42.5˚, 상하 회전각 ±55˚)"]]),
            ("draw", ["products/img/cctv_6.jpg"]),
        ]),
    ],
}

P["seismic-switchgear"] = {
    "lede": "조달우수제품으로 지정된 면진형 수배전반입니다. 수평 내진력과 수직 내진력을 "
            "함께 제공하는 내진시스템과 내진장치를 적용했습니다.",
    "catalog": True,
    "variants": [
        ("면진형 수배전반", "특허 제10-2230259호", [
            ("scan", "products/img/20210609-1.jpg", "면진형 수배전반"),
            ("scan", "products/img/20210609-2.jpg", "면진형 수배전반"),
            ("scan", "products/img/20210609-3.jpg", "면진형 수배전반"),
            ("scan", "products/img/20210609-4.jpg", "면진형 수배전반"),
        ]),
    ],
}

P["extinguisher"] = {
    "lede": "수배전반 내부 화재를 자동으로 감지하고 소화하는 가스자동소화장치입니다. "
            "한국소방산업기술원(KFI) 형식승인을 받았습니다.",
    "variants": [
        ("제품특징", "", [("scan", "products/img/20211021-1.jpg", "제품특징")]),
        ("화재감지 및 동작원리", "", [("scan", "products/img/20211021-2.jpg", "화재감지 및 동작원리")]),
        ("가스자동소화장치 (HFC-227ea)", "", [
            ("scan", "products/img/20211021-3.jpg", "HFC-227ea"),
            ("scan", "products/img/20211021-4.jpg", "HFC-227ea"),
            ("scan", "products/img/20211021-5.jpg", "HFC-227ea")]),
        ("가스자동소화장치 (HFC-125)", "", [
            ("scan", "products/img/20211021-6.jpg", "HFC-125"),
            ("scan", "products/img/20211021-7.jpg", "HFC-125"),
            ("scan", "products/img/20211021-8.jpg", "HFC-125"),
            ("scan", "products/img/20211021-9.jpg", "HFC-125")]),
        ("악세사리", "", [("scan", "products/img/20211021-10.jpg", "악세사리")]),
        ("제품계통도", "", [
            ("scan", "products/img/20211021-11.jpg", "제품계통도"),
            ("scan", "products/img/20211021-12.jpg", "제품계통도")]),
        ("한국소방산업기술원(KFI) 형식승인서 및 특허증", "", [
            ("scan", "products/img/20211021-13.jpg", "형식승인서"),
            ("scan", "products/img/20211021-14.jpg", "특허증")]),
        ("가스자동소화장치 작동사례", "", [
            ("scan", "products/img/20211021-15.jpg", "작동사례"),
            ("scan", "products/img/20211021-16.jpg", "작동사례"),
            ("scan", "products/img/20211021-17.jpg", "작동사례")]),
        ("설치장소", "", [("scan", "products/img/20211021-18.jpg", "설치장소")]),
        ("주요설치실적", "", [("scan", "products/img/20211021-19.jpg", "주요설치실적")]),
    ],
}

P["safety-warning"] = {
    "lede": "안전음성경보기는 각종 PANEL에 설치할 수 있습니다. 이 장치는 필요한 음성과 "
            "기본 녹음된 음성을 노트북 컴퓨터로 녹음합니다. 이렇게 하여 작업자의 "
            "안전사고를 사전에 예방합니다.",
    "variants": [
        ("SHD VO TPT 2 / SHD VO TPT 3", "AC power type / Battery type", [
            ("img", "products/img/safety_warning0-1.jpg", "안전음성경보기"),
            ("scan", "products/img/safety_warning0-2.jpg", "제품 구성"),
            ("h", "제품설명"),
            ("scan", "products/img/safety_warning0-3.jpg", "제품설명"),
            ("h", "설정방법"),
            ("scan", "products/img/safety_warning0-4.jpg", "설정방법"),
        ]),
        ("SHD-VO-TPT-1", "SHD-VO-TPT-1", [
            ("img", "products/img/safety_warning1.jpg", "SHD-VO-TPT-1"),
            ("h", "Feature"),
            ("ul", ["작업자의 전기감전사고 예방 가능",
                    "작업 전 작업자의 안전교육 가능",
                    "PANEL 내부의 온도, 습도, 통전전압을 DISPLAY에 표시함으로써 확인 가능",
                    "사용용도에 따른 음성멘트 9가지 지정 가능",
                    "통전전압 (220, 380, 440, 3300, 6600, 22900V) 표시 가능",
                    "온도설정에 의한 자동제어(FAN, HEATER, 각종 기기 제어) 가능",
                    "외부 display 장착으로 외부에서도 확인 가능 (option)",
                    "각종 panel에 설치할 수 있고 기본 녹음된 음성과 필요한 음성을 노트북컴퓨터로 녹음하여 작업자의 안전사고를 사전에 예방합니다."]),
            ("spec", "Specification", ["CODE", "Power", "SIZE (WxHxD)mm"],
             [["SHD-VO-TPT-1", "110V, 220V", "W120xH100xD85"]]),
            ("h", "외부장치구성"),
            ("scan", "products/img/safety_warning2.jpg", "외부장치구성"),
            ("h", "통전전압 내용 설정"),
            ("scan", "products/img/safety_warning3.jpg", "통전전압 설정"),
            ("scan", "products/img/safety_warning4.jpg", "통전전압 설정"),
            ("scan", "products/img/safety_warning5.jpg", "통전전압 설정"),
        ]),
        ("사용용도에 따른 분류", "", [
            ("ul", ["고저압 panel (후면에 부착), lighting panel, 분전함",
                    "고/저압 panel (전면에 부착)",
                    "Repair panel, 가설동력 panel, 용접 panel",
                    "특고압 수전반",
                    "PLC Panel, 통신시스템 panel",
                    "유해가스지역 안전경보",
                    "고/저압 panel 안전경보",
                    "특·저압 panel 안전경보",
                    "수리용 전원함 안전경보"]),
            ("h", "제품 음성안내 내용 설정"),
            ("scan", "products/img/safety_warning6-1.jpg", "음성안내 설정"),
            ("scan", "products/img/safety_warning6-2.jpg", "음성안내 설정"),
            ("scan", "products/img/safety_warning6-3.jpg", "음성안내 설정"),
            ("scan", "products/img/safety_warning6-4.jpg", "음성안내 설정"),
            ("scan", "products/img/safety_warning6-5.jpg", "음성안내 설정"),
            ("scan", "products/img/safety_warning6-6.jpg", "음성안내 설정"),
            ("scan", "products/img/safety_warning6-7.jpg", "음성안내 설정"),
            ("scan", "products/img/safety_warning6-8.jpg", "음성안내 설정"),
            ("scan", "products/img/safety_warning6-9.jpg", "음성안내 설정"),
        ]),
    ],
}
