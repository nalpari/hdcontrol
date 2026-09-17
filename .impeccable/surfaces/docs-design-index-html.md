---
version: 1
slug: "docs-design-index-html"
primary_target: "docs/design/index.html"
related_targets: []
---

## Scope

hdcontrol.co.kr 한국어 사이트 전체 26페이지의 디자인 개편 시안. 정적 HTML로
`docs/design/` 아래 산출. 정보구조, 메뉴 라벨, 페이지 수, 사실 문구는 유지하고
시각 언어만 교체한다. Visitor mode: Persuade (제품·회사소개), 내부에 Read
(연혁·인증·고객센터) 구간 포함.

## Audience

발주처의 구매·설비·전기 담당자. POSCO 계열, 발전사, 플랜트·건설사, 조달청.
이들의 판단 기준은 자격과 규격이다. 등록업체인가, 인증이 유효한가, 치수가 맞는가.

## Direction contract

**THESIS.** 이 회사의 제품은 전부 강판에 명판이 리벳으로 박혀 나간다. 명판은
제조사가 자기 이름과 정격을 책임지고 각인하는 자리다. 사이트 전체를 그 명판의
문법으로 짠다. 각인된 글자, 눌린 홈, 자간이 좁은 산업 그로테스크, 규격은 표가
아니라 명판의 데이터 블록. 거부하는 카테고리 기본형: 파란 그라데이션 히어로 위에
아이콘+제목+설명 카드 12개를 깐 제조사 템플릿, 그리고 그 예측 가능한 반대편인
블루프린트 모눈 위의 도면 감성.

**OWN-WORLD.** 지면은 도장된 강판 #101316. 그 위에 두 종류의 명판이 올라간다.
제품은 아노다이즈드 그레이 #171B1F, 회사·자격은 딥 네이비 #16283C. 각인은 본 화이트
#E9EDF0이고 홈 그림자 1px가 위쪽에 붙는다. 표시등 레드 #ED1B23은 로고에서 그대로
가져와 1차 액션과 활성 상태에만 쓴다. 면적을 차지하지 않고 점으로만 존재한다.
Wanted Sans가 각인과 본문을 모두 맡고, 치수·모델코드·특허번호만 JetBrains Mono로
간다. 모노는 장식이 아니라 측정값에만 붙는다. 모서리는 4px 하나로 고정한다.
명판은 얇은 판이지 카드가 아니다.

**STORY.** 방문자는 첫 화면에서 이 회사가 강판부터 현장 설치까지 직접 한다는 것을
본다. 아래로 내려가며 면진형 수배전반이 조달우수제품이라는 것, 화재와 감전을 막는
제품군이 특허로 뒷받침된다는 것, 그리고 등록처 명단과 인증서 벽을 확인한다.
확인이 끝나면 카탈로그를 받거나 전화를 건다.

**FIRST VIEWPORT.** 상단 64px 고정 헤더, 로고 좌측, 메가메뉴 우측 한 줄.
그 아래 뷰포트 높이의 히어로. 배경은 배전반 열이 늘어선 실사 사진이 우측 60%를
채우고 좌측으로 갈수록 강판 지면으로 녹는다. 좌측 하단에서 1/3 지점에 각인 헤드라인
2줄, 그 아래 한 줄 설명, 그 아래 좌측부터 레드 1차 버튼과 아웃라인 2차 버튼.
헤드라인 왼쪽 끝에 표시등 하나가 켜진다.

**FORM.** 명판(engraved nameplate). 내가 공명도 순으로 세운 7개 후보 중 4번.
seed key abe9b3cc. 1위는 제작 도면이었으나 이 카테고리가 늘 도달하는 자리이고,
사용자가 사전 확인에서 블루프린트 안을 이미 내려놓았다.

**FINISH.** unreviewed and undocumented is unfinished; this build ends with the
finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Challenger verdicts

- forging / scale-shower: competitive. 측정값을 DOM에 남기는 규율을 가져온다.
  치수와 특허번호는 항상 실데이터로 렌더한다.
- riley moire gallery: declined. 회색을 늘리지 않고 선 밀도로 대비를 만드는
  규율만 가져온다. 구분선과 여백이 위계를 지고, 회색 단계를 늘리지 않는다.
- cutting bench select rail: declined. 상태는 색이 아니라 표식이라는 규율을
  가져온다. 조달우수·특허·인증은 컬러 알약이 아니라 각인된 표식으로 읽힌다.
- ocean mesophotic / desert neon / hand-drawn zine: declined. B2B 조달
  독자에게 근거가 없다.

## Constraints

- 로고, 브랜드 컬러, 메뉴 라벨, 인증명, 특허번호, 치수표, 주소, 연혁 날짜 불변
- ENGLISH 전환 링크 유지
- 생성 이미지는 provenance 표기 필요 (Higgsfield, 2026-09-16)

## Unresolved

2019년 이후 고용 인원, 생산 능력, 납품 실적 수치 없음. 시안에 수치로 쓰지 않았다.
