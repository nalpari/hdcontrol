# 현대콘트롤전기 디자인 개편 시안

hdcontrol.co.kr 한국어 사이트 26페이지의 디자인 시안. 정적 HTML이라 빌드 없이 바로
열린다.

## 보는 법

```
cd docs/design && python3 -m http.server 8899
# http://localhost:8899/index.html
```

`file://`로도 열리지만 서버로 봐야 상대경로가 온전하다.

## 무엇을 바꿨고 무엇을 지켰나

**지킨 것**

- 메뉴 라벨 그대로: 회사소개 / 제품소개 / 안전음성경보기 / 전기자재현황 / 작업공정 / 고객센터
- 페이지 26개 전부. 새로 만들거나 합치거나 없앤 페이지 없음
- 메가메뉴 구조 (데스크톱에서 4열 전폭)
- 본문, 인증명, 특허번호, 치수표, 주소, 연혁 날짜 원문 그대로
- 로고와 브랜드 레드 `#ED1B23`
- ENGLISH 전환 링크

**바꾼 것은 시각 언어뿐이다.** 방향은 "명판(engraved nameplate)". 자세한 내용은
저장소 루트의 `DESIGN.md`.

**새로 쓴 문구** (원문에 없던 것, 검토 필요)

- 히어로 헤드라인 "수배전반을 만드는 일은 전기를 멈추지 않게 하는 일입니다"
- 메인 섹션 제목 "강판이 들어와 배전반이 나갑니다", "규격이 정해졌다면 도면을 보내주세요"
- 제품 랙의 한 줄 설명 15개 (원문 사실에서 요약)
- 자주하는 질문 6문항 (전부 사이트에 있는 사실로만 답을 구성)
- 빈 상태와 폼 안내 문구

## 페이지

| 경로 | 원본 |
|---|---|
| `index.html` | `korean.php` |
| `intro/greetings.html` | `intro/greetings_k.php` |
| `intro/overview.html` | `intro/overview_k.php` |
| `intro/history.html` | `intro/history_k.php` |
| `intro/certification.html` | `intro/certification_k.php` |
| `intro/location.html` | `intro/location_k.php` |
| `products/switchgear.html` | `products/switchgear_k.php` |
| `products/motor-control-center.html` | `products/motor_control_center_k.php` |
| `products/panel-board.html` | `products/panel_board_k.php` |
| `products/repair-box.html` | `products/repair_box_k.php` |
| `products/distribution-box.html` | `products/distribution_box_k.php` |
| `products/insulation-box.html` | `products/insulation_box_k.php` |
| `products/transmitter-panel.html` | `products/transmitter_panel_k.php` |
| `products/air-service-unit.html` | `products/air_service_unit_k.php` |
| `products/plc-panel.html` | `products/plc_panel_k.php` |
| `products/safety-footrest.html` | `products/safety_footrest_k.php` |
| `products/u-safety.html` | `products/u-safety.php` |
| `products/cctv-cooling.html` | `products/cctv_cooling_k.php` |
| `products/seismic-switchgear.html` | `products/20210609.php` |
| `products/extinguisher.html` | `products/20211021.php` |
| `products/safety-warning.html` | `products/safety_warning_k.php` |
| `products/electric-resources.html` | `products/electric_resources_k.php` |
| `work-process.html` | `products/work_process_k.php` |
| `support/notice.html` | `subpage/notice_k.php` |
| `support/faq.html` | `subpage/faq_k.php` |
| `support/qna.html` | `subpage/qna_k.php` |

URL 구조를 바꿨다. 실제 적용 시 기존 `.php` 주소에서 301 리다이렉트를 걸어야
검색 유입이 유지된다. 기존 주소를 그대로 쓰기로 하면 파일명만 되돌리면 된다.

## 고칠 것 / 결정할 것

1. **생성 이미지 5장 교체** — `assets/gen/`은 Higgsfield 생성물이고 실제 공장이
   아니다. `assets/gen/PROVENANCE.md` 참조. 실제 촬영 사진이 필요하다.
2. **공지사항·질문과 답변이 비어 있다** — 현행 사이트에도 게시물이 없어 빈 상태를
   설계해 두었다. 게시판을 계속 둘지, 공지만 남길지 결정 필요.
3. **문의 폼은 동작하지 않는다** — 시안이라 제출이 막혀 있다. 오류 상태 표시를
   보여주려고 오시는 길 페이지의 이메일 칸에 잘못된 값을 넣어 두었다.
4. **지도가 정적이다** — 오시는 길에서 네이버 지도 검색 링크로만 연결한다.
   지도 SDK를 붙일지 결정 필요.
5. **없는 수치** — 2019년 이후 고용 인원, 생산 능력(연간 면수), 납품 실적 건수가
   현행 사이트에 없어 시안에 쓰지 않았다. 있으면 메인에 넣을 자리가 있다.
6. **회사 소개 영상** — 기존 유튜브 영상(`2bKja4I2dhs`)을 그대로 임베드했다.

## 다시 만들기

HTML은 생성물이다. 직접 고치지 말고 소스를 고친 뒤 다시 돌린다.

```
python3 docs/design/_build/build.py
```

| 파일 | 담당 |
|---|---|
| `_build/data.py` | 회사 정보, 네비게이션, 연혁, 인증, 자재 |
| `_build/products.py` | 제품 페이지 본문 |
| `_build/build.py` | 조판 |
| `assets/css/hd.css` | 디자인 시스템 전부 |
| `assets/js/hd.js` | 네비게이션, 인증 필터, 아코디언 |

## 검수 결과

- 데스크톱 1440, 모바일 390에서 확인
- 가로 스크롤 없음
- WCAG AA 대비 통과 (본문, 플레이스홀더, 버튼)
- `prefers-reduced-motion` 대응
- 키보드 포커스 표시, 본문 건너뛰기 링크
- 깨진 이미지 링크 없음 (178장 + 생성 5장)
